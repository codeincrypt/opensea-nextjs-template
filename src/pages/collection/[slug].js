"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "../../app/import.css";
import Header from "@/app/(primary)/component/header";
import Footer from "@/app/(primary)/component/footer";
import { getCollectionData, getCollectionNft, getCollectionView } from "@/request/request";

export default function Collection() {

  const router = useRouter()
  const [show404, show404Page] = useState(false);
  const [datalist, setDatalist] = useState([]);
  const [collection, setCollection] = useState();
  const [details, setDetails] = useState();
  const [collectionData, setCollectionData] = useState({
    fee:0
  });

  const fetchData = async (slug) => setDatalist(await getCollectionNft(slug));

  const fetchCollectionDetails = async (slug) => {
    const data = await getCollectionView(slug)
    if(data.errors){
      show404Page(true)
    }
    setCollection(data);
    let obj = {
      fee : data.fees[0].fee
    }
    setCollectionData(obj)
  };

  const fetchCollectionData = async (slug) => setDetails(await getCollectionData(slug))

  useEffect(() => {
		if (!router.isReady) return;
		let slug = router.query.slug
    fetchCollectionDetails(slug);
		fetchData(slug)
    fetchCollectionData(slug)
	}, [router.isReady]);

  return (
    <>
    <Header />
    {show404 === true ? (
        <h1>This page is lost.</h1>
    ) : (
      <>
      <div className="background-collection" style={{ backgroundImage: `url(${collection?.banner_image_url === "" ? process.env.NEXT_PUBLIC_DEFAULT_IMAGE : collection?.banner_image_url}), linear-gradient(#ffffff, black)` }}></div>
      <div className="container-max" style={{marginTop:-80}}>
        <div className="col-lg-12 mt-3">
          <div className="row">
          <div className="col-lg-7">
            <div className="collection-img">
            <img src={collection?.image_url === "" ? process.env.NEXT_PUBLIC_DEFAULT_NFT : collection?.image_url + "?auto=format"} alt={collection?.name} />
            </div>
            <h4 className="text-white text-shadow mt-3">{collection?.name}</h4>
          </div>
            <div className="col-lg-5">
            <div className="flex">
            <div className="text-white">
              <h5 className="text-shadow">{details?.total?.volume.toFixed(2)} {details?.total?.floor_price_symbol} </h5>
              <p className="text-shadow">Total volume</p>
            </div>
            <div className="text-white">
              <h5 className="text-shadow">{details?.total?.floor_price}</h5>
              <p className="text-shadow">Floor Price</p>
            </div>
            <div className="text-white">
              <h5 className="text-shadow">--</h5>
              <p className="text-shadow">Best Offer</p>
            </div>
            <div className="text-white">
              <h5 className="text-shadow">--</h5>
              <p className="text-shadow">Listed</p>
            </div>
            <div className="text-white">
              <h5 className="text-shadow">{details?.total?.sales}</h5>
              <p className="text-shadow">Owners</p>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <p className="font-weight-bold mt-4 mb-1"></p>
          <p>
            <span className="text-muted mr-2">Items <b>{collection?.total_supply}</b> </span> ·
            <span className="text-muted mx-2">Created <b>{collection?.created_date}</b> </span> ·
            <span className="text-muted mx-2">Creator earnings <b>{collectionData.fee}</b> </span> ·
            <span className="text-muted mx-2">Chain <b>{collection?.contracts[0].chain}</b> </span>
          </p>
        </div>

        <div className="flex" id="nft-list">
          {datalist?.map((item, index) => (
            <Link className="col5 card mb-4" href={`/assets/${collection?.contracts[0].chain}/${item.contract}/${item.identifier}`} key={item.name}>
              <div style={{backgroundImage:`url(${item?.image_url === null ? process.env.NEXT_PUBLIC_DEFAULT_NFT : item?.image_url?.replace('ikzttp.mypinata.cloud', 'ipfs.io')})`, width: '100%',backgroundSize: 'cover',height: 220}}></div>
              <span className="p-3">
                <h6>{item.name === null ? "Unnamed" : item.name} - #{item.identifier}</h6>
                {/* <h5 className="mt-3 font-weight-bold"></h5> */}
              </span>
            </Link>
          ))}
        </div>
      </div>
      </>
    )}
    <Footer />
    </>
  )
}
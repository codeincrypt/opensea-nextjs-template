"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "../../app/import.css";

export default function Collection() {

  const router = useRouter()
  const [slug, setSlug] = useState();
  const [datalist, setDatalist] = useState([]);
  const [collection, setCollection] = useState();

  const fetchData = async (slug) => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    let url = `${BASE_URL}/api/v2/collection/${slug}/nfts`
    const response = await fetch(url);
    const data = await response.json();
    setDatalist(data.nfts);
  };

  const fetchCollectionDetails = async (slug) => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    let url = `${BASE_URL}/api/v2/collections/${slug}`
    const response = await fetch(url);
    const data = await response.json();
    setCollection(data);
  };

  useEffect(() => {
		if (!router.isReady) return;
		let slug = router.query.slug
		setSlug(slug)
		fetchData(slug)
    fetchCollectionDetails(slug);
	}, [router.isReady]);

  return (
    <>
      <div className="background-collection"></div>
      <div className="container-max">
        <div className="col-lg-12">
          <p className="font-weight-bold mt-4 mb-1"></p>
          <p>
            <span className="text-muted mr-2">Items <b>{collection?.total_supply}</b> </span> ·
            <span className="text-muted mx-2">Created <b>{collection?.created_date}</b> </span> ·
            <span className="text-muted mx-2">Creator earnings <b>{collection?.fees[0].fee}</b> </span> ·
            <span className="text-muted mx-2">Chain <b>{collection?.contracts[0].chain}</b> </span>
          </p>
        </div>

        <div className="flex" id="nft-list">
          {datalist.map((item, index) => (
            <a className="col5 card mb-4" href={`/assets/${collection?.contracts[0].chain}/${item.contract}/${item.identifier}`} key={index}>
              <div style={{backgroundImage:`url(${item?.image_url?.replace('ikzttp.mypinata.cloud', 'ipfs.io')})`, width: '100%',backgroundSize: 'cover',height: 220}}></div>
              <span className="p-3">
                <h6>{item.name}</h6>
                <h5 className="mt-3 font-weight-bold">0.007 ETH</h5>
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
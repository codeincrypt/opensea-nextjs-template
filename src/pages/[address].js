"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../app/import.css";
import ProfileComp from "@/app/(primary)/component/profile";
import Header from "@/app/(primary)/component/header";
import Footer from "@/app/(primary)/component/footer";
import Link from "next/link";
import { getNftByAddress, getNftByAddressChain } from "@/request/request";

export default function Address() {
  const router = useRouter();
  const [slug, setSlug] = useState();
  const [profile, setProfile] = useState();
  const [datalist, setDatalist] = useState([]);
  
  const fetchData = async (chain, address) => {
    let data = await getNftByAddressChain(chain, address);
    setDatalist(data.nfts);
  };

  const fetchDetails = async (slug) => {
    let data = await getNftByAddress(slug)
    fetchData("sepolia", data.address);
    setProfile(data);
  };

  useEffect(() => {
    if (!router.isReady) return;
    let slug = router.query.address;
    setSlug(slug);
    fetchDetails(slug);
  }, [router.isReady]);

  return (
    <>
      <Header />
			{profile ? (
				<ProfileComp details={profile} address={slug} />
			): null}
      <div className="col-lg-12 mt-">
        <div className="container-max" style={{marginTop:20}}>
          <div className="row" id="nft-list">
            {datalist?.map((item, index) => (
              <Link className="col5 card mb-4" href={`/assets/${"sepolia"}/${item.contract}/${item.identifier}`} key={item.identifier}>
                <div
                  style={{
                    backgroundImage: `url(${
                      item?.image_url === null
                        ? process.env.NEXT_PUBLIC_DEFAULT_NFT
                        : item?.image_url?.replace("ikzttp.mypinata.cloud", "ipfs.io")
                    })`,
                    width: "100%",
                    backgroundSize: "cover",
                    height: 220,
                  }}
                ></div>
                <span className="p-3">
                  <h6>
                    {item.name === null ? "Unnamed" : item.name} - #
                    {item.identifier}
                  </h6>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

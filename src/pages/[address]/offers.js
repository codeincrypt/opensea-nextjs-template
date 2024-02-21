"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/import.css";
import Header from "@/app/(primary)/component/header";
import ProfileComp from "@/app/(primary)/component/profile";

export default function Created() {
  const router = useRouter();
  const [slug, setSlug] = useState();
  const [profile, setProfile] = useState();
  const [datalist, setDatalist] = useState([]);

  const fetchData = async (chain, address) => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    let url = `${BASE_URL}/api/v2/chain/${chain}/account/${address}/nfts`;
    const options = { method: "GET", headers: { accept: "application/json" } };
    const response = await fetch(url, options);
    const data = await response.json();
    setDatalist(data.nfts);
  };

  const fetchDetails = async (slug) => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const options = { method: "GET", headers: { accept: "application/json" } };
    let url = `${BASE_URL}/api/v2/accounts/${slug}`;
    const response = await fetch(url, options);
    const data = await response.json();
    // fetchData("sepolia", data.address);
    setProfile(data);
  };

  useEffect(() => {
    if (!router.isReady) return;
    let slug = router.query.address;
    setSlug(slug);
    fetchDetails(slug);
  }, [fetchDetails, router.isReady]);

  return (
    <>
      <Header />
			{profile ? (
				<ProfileComp details={profile} address={slug} />
			): null}
      <div className="col-lg-12 mt-">
        <div className="container-max" style={{marginTop:20}}>
          <h1>OFFERS</h1>
        </div>
      </div>
    </>
  );
}

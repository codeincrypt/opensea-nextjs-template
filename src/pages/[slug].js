"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import "../app/import.css";
import Profile from "@/app/(primary)/component/profile";
import Header from "@/app/(primary)/component/header";

export default function Created() {
	const router = useRouter()
	const [address, setAddress] = useState();
	const [slug, setSlug] = useState();
	const [datalist, setDatalist] = useState([]);

	const fetchData = async (chain, address) => {
		let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
		let url = `${BASE_URL}/api/v2/chain/${chain}/account/${address}/nfts`
		// let url = `${BASE_URL}/api/v2/collections?chain=sepolia&creator_username=${slug}`
		const options = { method: 'GET', headers: { accept: 'application/json' } };
		const response = await fetch(url, options);
		const data = await response.json();
		setDatalist(data.collections);
	};

	const fetchDetails = async (slug) => {
		let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

		let url1 = `${BASE_URL}/api/v2/collections?creator_username=${slug}`
		const options = { method: 'GET', headers: { accept: 'application/json' } };
		const response1 = await fetch(url1, options);
		const data1 = await response1.json();
		let address = data1.collections[0].owner
		setAddress(address);

		let url = `${BASE_URL}/api/v2/accounts/${address}`
		const response = await fetch(url, options);
		fetchData("sepolia", address)
		const data = await response.json();
		setDatalist(data.collections);
	}

	useEffect(() => {
		if (!router.isReady) return;
		let slug = router.query.slug
		setSlug(slug)
		fetchDetails(slug)
	}, [router.isReady]);

	return (
		<>
		<Header />
			<Profile id={address} />
			<div className="col-lg-12 mt-4">
			<div className="flex" id="nft-list">
				{datalist?.map((item, index) => (
            <a className="col5 card mb-4" href={`/assets/${collection?.contracts[0].chain}/${item.contract}/${item.identifier}`} key={index}>
              <div style={{backgroundImage:`url(${item?.image_url === null ? process.env.NEXT_PUBLIC_DEFAULT_NFT : item?.image_url?.replace('ikzttp.mypinata.cloud', 'ipfs.io')})`, width: '100%',backgroundSize: 'cover',height: 220}}></div>
              <span className="p-3">
                <h6>{item.name === null ? "Unnamed" : item.name} - #{item.identifier}</h6>
                <h5 className="mt-3 font-weight-bold"></h5>
              </span>
            </a>
          ))}
				</div>
			</div>
		</>
	);
}
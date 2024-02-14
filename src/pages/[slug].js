"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import "../app/import.css";
import Profile from "@/app/(primary)/component/profile";

export default function Created() {
	const router = useRouter()
	const [slug, setSlug] = useState();
	const [datalist, setDatalist] = useState([]);

	const fetchData = async (slug) => {
		let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
		let url = `${BASE_URL}/api/v2/collections?chain=sepolia&creator_username=${slug}`
		const options = { method: 'GET', headers: { accept: 'application/json' } };
		const response = await fetch(url, options);
		const data = await response.json();
		setDatalist(data.collections);
	};

	const fetchDetails = async (slug) => {
		let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
		let url = `${BASE_URL}/api/v2/accounts/${slug}`
		const options = { method: 'GET', headers: { accept: 'application/json' } };
		const response = await fetch(url, options);
		const data = await response.json();
		setDatalist(data.collections);
	}

	useEffect(() => {
		if (!router.isReady) return;
		let slug = router.query.slug
		setSlug(slug)
		fetchDetails(slug)
		// fetchCollectionDetails(slug);
	}, [router.isReady]);

	return (
		<>
			<Profile id={slug} />
			<div className="col-lg-12 mt-4">
				<div className="row">
					{/* {datalist?.map((item, index) => (
					<Link className="col4 card" href={`/collection/${item.collection}`}>
						<img src="https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=136&h=136&fr=1" alt="" />
						<span className="p-3">
							<h5 className="font-weight-bold h6">{item.name}</h5>
							<div className="flex">
								<div className="col2">
									<p className="mb-1 text-muted small">Floor</p>
									<h5 className="font-weight-bold h6">--</h5>
								</div>
								<div className="col2">
									<p className="mb-1 text-muted small">Total Volume</p>
									<h5 className="font-weight-bold h6">5 ETH</h5>
								</div>
							</div>
						</span>
					</Link>
					))} */}
				</div>
			</div>
		</>
	);
}
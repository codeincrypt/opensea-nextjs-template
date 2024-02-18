"use client";
import { useState, useEffect } from "react";
import "../../../app/import.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function Profile() {
	const router = useRouter()
	const [address, setAddress] = useState();
	useEffect(() => {
		if (!router.isReady) return;
		let slug = router.query.slug
		setAddress(slug)
		fetchDetails(slug)
	}, [router.isReady]);

	const [details, setDetails] = useState([]);

	const fetchDetails = async (id) => {
		let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
		let url = `${BASE_URL}/api/v2/accounts/${id}`
		const options = { method: 'GET', headers: { accept: 'application/json' } };
		const response = await fetch(url, options);
		const data = await response.json();
		setDetails(data);
	}

	return (
		<>
			<div className="background-cover" style={{ marginTop: 100, backgroundImage: `url(${details?.banner_image_url === "" ? process.env.NEXT_PUBLIC_DEFAULT_IMAGE : details?.banner_image_url})` }}></div>
			<div className="container-max" style={{ marginTop: 15 }}>
				<div className="col-lg-12">
					<div className="profile-card">
						<Image src={details?.profile_image_url} alt={details?.username} height={200} width={200} />
					</div>
					<h2 className="username">{details?.username === "" ? "Unnamed" : details?.username}</h2>
					<p>
						{/* <img className="img-icon" src={details?.profile_image_url} /> */}
						{details?.address?.slice(0, 6)}...{details?.address?.substr(-4, 4)} <span className="text-muted ml-3">Joined {details?.joined_date} </span> </p>
				</div>
				<div className="col-lg-12 mt-5">
					<Link href="/account/collected" className="btn main-btn px-4">Collected 7</Link>
					<Link href="/" className="btn main-btn px-4">Offer made</Link>
					<Link href="/" className="btn main-btn px-4">Deals</Link>
					<Link href="/account/created" className="btn main-btn px-4">Created</Link>
					<Link href="/" className="btn main-btn px-4">Favourite</Link>
					<Link href="/" className="btn main-btn px-4">Activity</Link>
				</div>
			</div>
		</>
	);
}
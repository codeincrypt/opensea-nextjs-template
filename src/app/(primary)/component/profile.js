"use client";
import { useState } from "react";
import "../../../app/import.css";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function Profile(props) {
	// const router = useRouter()
	// const [address, setAddress] = useState();
	const [details, setDetails] = useState(props?.details);
	const [address, setAddress] = useState(props?.address);

	// const fetchDetails = async (id) => {
	// 	let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
	// 	let url = `${BASE_URL}/api/v2/accounts/${id}`
	// 	const options = { method: 'GET', headers: { accept: 'application/json' } };
	// 	const response = await fetch(url, options);
	// 	const data = await response.json();
	// 	console.log("data", data);
	// 	setDetails(data);
	// }

	// useEffect(() => {
	// 	if (!router.isReady) return;
	// 	let slug = router.query.slug
	// 	console.log("slug", slug);
	// 	setAddress(slug)
	// 	fetchDetails(slug)
	// }, [router.isReady]);

	console.log("details", props);

	return (
		<>
			<div className="background-cover" style={{ marginTop: 100, backgroundImage: `url(${details?.banner_image_url === "" ? process.env.NEXT_PUBLIC_DEFAULT_IMAGE : details?.banner_image_url})` }}></div>
			<div className="container-max" style={{ marginTop: 15 }}>
				<div className="col-lg-12">
					<div className="profile-card">
						<img src={details?.profile_image_url} alt={details?.username} height={200} width={200} />
					</div>
					<h2 className="username">{details?.username === "" ? "Unnamed" : details?.username}</h2>
					<p>
						{/* <img className="img-icon" src={details?.profile_image_url} /> */}
						{details?.address?.slice(0, 6)}...{details?.address?.substr(-4, 4)} <span className="text-muted ml-3">Joined {details?.joined_date} </span> </p>
				</div>
				<div className="col-lg-12 mt-5">
					<Link href={`/${address}/collected`} className="btn main-btn px-4">Collected 7</Link>
					<Link href={`/${address}/offers`} className="btn main-btn px-4">Offer made</Link>
					<Link href={`/${address}/deals`} className="btn main-btn px-4">Deals</Link>
					<Link href={`/${address}/created`} className="btn main-btn px-4">Created</Link>
					<Link href={`/${address}/favourite`} className="btn main-btn px-4">Favourite</Link>
					<Link href={`/${address}/activity`} className="btn main-btn px-4">Activity</Link>
				</div>
			</div>
		</>
	);
}
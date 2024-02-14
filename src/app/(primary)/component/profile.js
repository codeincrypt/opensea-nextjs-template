"use client";
import { useState, useEffect } from "react";
import "../../../app/import.css";

export default function Profile({ id }) {

	const [details, setDetails] = useState([]);

	const fetchDetails = async (id) => {
		let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
		let url = `${BASE_URL}/api/v2/accounts/${id}`
		const options = { method: 'GET', headers: { accept: 'application/json' } };
		const response = await fetch(url, options);
		const data = await response.json();
		setDetails(data);
	}

	useEffect(() => {
		fetchDetails(id)
	}, [id]);

	return (
		<>
			<div className="background-cover" style={{ marginTop: 100, backgroundImage: `url(${details?.banner_image_url === "" ? process.env.NEXT_PUBLIC_DEFAULT_IMAGE : details?.banner_image_url})` }}></div>
			<div className="container-max" style={{ marginTop: 15 }}>
				<div className="col-lg-12">
					<div className="profile-card">
						<img src={details?.profile_image_url} alt={details?.username} />
					</div>
					<h2 className="username">{details?.username === "" ? "Unnamed" : details?.username}</h2>
					<p>
						{/* <img className="img-icon" src={details?.profile_image_url} /> */}
						{details?.address?.slice(0, 6)}...{details?.address?.substr(-4, 4)} <span className="text-muted ml-3">Joined {details?.joined_date} </span> </p>
				</div>
			</div>
		</>
	);
}
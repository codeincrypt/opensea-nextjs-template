"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllCollections } from "@/request/request";

export default function Home() {
	const [datalist, setDatalist] = useState([]);

  const fetchDetails = async () => setDatalist(await getAllCollections());

	useEffect(() => {
		fetchDetails()
	}, []);
  return (
    <>
      <div className="mb-4"></div>
      <div className="container-max">
        <div className="col-lg-12 mb-5">
          <h3 className="mb-3 font-weight-bold">Top NFTs</h3>
          <div className="row">
          {datalist?.map((item, index) => (
              <Link className="col4 card nftcard" href={`/collection/${item.collection}`} key={item.name}>
                <img src={`${item.image_url === "" ? process.env.NEXT_PUBLIC_DEFAULT_NFT : item.image_url}`} alt="" />
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
            ))}
          </div>
        </div>

        <div className="col-lg-12 mb-5">
          <h3 className="mb-3 font-weight-bold">NFT 101</h3>
          <div className="row">
            <Link className="col6 card" href="/">
              <img src="https://testnets.opensea.io/static/images/learn-center//what-is-nft.png" alt="" />
              <span className="p-3">
                <h6>What is an NFTs</h6>
              </span>
            </Link>
            <Link className="col6 card" href="/">
              <img src="https://testnets.opensea.io/static/images/learn-center//how-to-buy-nft.png" alt="" />
              <span className="p-3">
                <h6>How to buy an NFT</h6>
              </span>
            </Link>
            <Link className="col6 card" href="/">
              <img src="https://testnets.opensea.io/static/images/learn-center//what-is-minting.png" alt="" />
              <span className="p-3">
                <h6>What is minting ?</h6>
              </span>
            </Link>
            <Link className="col6 card" href="/">
              <img src="https://testnets.opensea.io/static/images/learn-center//stay-protected-web3.png" alt="" />
              <span className="p-3">
                <h6>How to stay protected...</h6>
              </span>
            </Link>
            <Link className="col6 card" href="/">
              <img src="https://testnets.opensea.io/static/images/learn-center//how-to-create-nft.png" alt="" />
              <span className="p-3">
                <h6>PFPs</h6>
              </span>
            </Link>
            <Link className="col6 card" href="/">
              <img src="https://testnets.opensea.io/static/images/learn-center//how-to-sell-nft.png" alt="" />
              <span className="p-3">
                <h6>How to sell an NFT</h6>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-lg-12 mb-5">
          <h3 className="mb-3 font-weight-bold">Explore Categories</h3>
          <div className="row">
            <Link className="col5 card" href="/category/art">
              <img src="https://opensea.io/static/images/categories/maverick-art.png" alt="" />
              <span className="p-3">
                <h6>Art</h6>
              </span>
            </Link>
            <Link className="col5 card" href="/category/gaming">
              <img src="https://opensea.io/static/images/categories/maverick-gaming.png" alt="" />
              <span className="p-3">
                <h6>Gaming</h6>
              </span>
            </Link>
            <Link className="col5 card" href="/category/memberships">
              <img src="https://opensea.io/static/images/categories/maverick-membership.png" alt="" />
              <span className="p-3">
                <h6>Memberships</h6>
              </span>
            </Link>
            <Link className="col5 card" href="/category/music">
              <img src="https://opensea.io/static/images/categories/maverick-music.png" alt="" />
              <span className="p-3">
                <h6>Music</h6>
              </span>
            </Link>
            <Link className="col5 card" href="/category/ppfs">
              <img src="https://opensea.io/static/images/categories/maverick-pfps.png" alt="" />
              <span className="p-3">
                <h6>PFPs</h6>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

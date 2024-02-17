"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
// import Profile from "../(primary)/component/profile";

export default function Created() {
  const [datalist, setDatalist] = useState([]);
  const fetchData = async () => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    let url = `${BASE_URL}/api/v2/chain/${chain}/account/${address}/nfts`
    console.log("url", url);
    const response = await fetch(url);
    const data = await response.json();
    setDatalist(data.collections);
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <>
      <div className="mb-4"></div>
      <h1>Offer</h1>
      {/* <Profile /> */}
      <div className="container-max" style={{marginTop:0}}>
        <div className="col-lg-12 mt-4">
          <div className="row">
            {/* {datalist.map((item, index) => (
              <a className="col4 card" href={`/collection/${item.collection}`}>
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
              </a>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
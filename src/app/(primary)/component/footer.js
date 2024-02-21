"use client";
import { useState, useEffect } from "react";
export default function Footer() {

  return (
    <div className="container-max footer">
      <div className="col-lg-12 pt-5">
        <div className="row">
          <div className="col-lg-5">
            <h5>Stay in the loop</h5>
            <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Join the community</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-12 py-5">
        <div className="row">
          <div className="col-lg-5">
            <h5 className="font-weight-bold">OpenSea</h5>
            <p>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5></h5>
          </div>
        </div>
      </div>
    </div>
  );
}
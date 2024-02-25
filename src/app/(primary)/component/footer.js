"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";

import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="container-max footer">
      <div className="col-lg-12 pt-5">
        <div className="row">
          <div className="col-lg-5">
            <h5>Stay in the loop</h5>
            <p>Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Join the community</h5>
            <Link
              className="btn btn-primary rounded-os p-3 mr-3"
              href="/account/created"
            >
              <FaTwitter className="h5 mb-0" />
            </Link>
            <Link
              className="btn btn-primary rounded-os p-3 mr-3"
              href="/account/created"
            >
              <FaFacebook className="h5 mb-0" />
            </Link>
            <Link
              className="btn btn-primary rounded-os p-3 mr-3"
              href="/account/created"
            >
              <FaInstagram className="h5 mb-0" />
            </Link>
            <Link
              className="btn btn-primary rounded-os p-3 mr-3"
              href="/account/created"
            >
              <FaDiscord className="h5 mb-0" />
            </Link>
            <Link
              className="btn btn-primary rounded-os p-3 mr-3"
              href="/account/created"
            >
              <FaYoutube  className="h5 mb-0" />
            </Link>
            <Link
              className="btn btn-primary rounded-os p-3 mr-3"
              href="/account/created"
            >
              <FaDiscord className="h5 mb-0" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-12 py-5">
        <div className="row">
          <div className="col-lg-5">
            <h5 className="font-weight-bold">OpenSea</h5>
            <p>
              The world&apos;s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items
            </p>
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

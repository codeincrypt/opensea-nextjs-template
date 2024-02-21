"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProfileComp from "../../component/profile";

export default function Created() {
  const [datalist, setDatalist] = useState([]);
  const fetchData = async () => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    let url = `${BASE_URL}/api/v2/collections?chain=sepolia&creator_username=karthikswarnkartestnet`
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
     
    </>
  );
}
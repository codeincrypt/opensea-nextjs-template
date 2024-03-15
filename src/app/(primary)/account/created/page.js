"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProfileComp from "../../component/profile";

export default function Created() {
  const [datalist, setDatalist] = useState([]);

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <>
      <div className="mb-4"></div>
     
    </>
  );
}
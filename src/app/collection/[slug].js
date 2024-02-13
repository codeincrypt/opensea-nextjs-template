import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return (
    <>
       <div className="background-collection"></div>
       <div className="container-max">
         <div className="col-lg-12">
           <p className="font-weight-bold mt-4 mb-1">{router.query.slug}</p>
           <p>
             <span className="text-muted mr-2">Items 5,557 </span> ·
             <span className="text-muted mx-2">Created Dec 2023 </span> ·
             <span className="text-muted mx-2">Creator earnings 7.5% </span> ·
             <span className="text-muted mx-2">Chain Polygon</span>
           </p>
         </div>

         <div className="col-lg-12 mt-4">
           <button className="btn main-btn px-4">Item</button>
           <button className="btn main-btn px-4">Offers</button>
           <button className="btn main-btn px-4">Analytics</button>
           <button className="btn main-btn px-4">Activity</button>
         </div>

         <hr />

         <div className="col-lg-12 mt-4">
           <div className="">
             <div className="flex" id="nft-list"></div>
           </div>
         </div>
       </div>
     </>
  )
}

// "use client";
// import { useState, useEffect } from "react";
// export default function Collection() {

//   return (
//     <>
//       <div className="background-collection"></div>
//       <div className="container-max">
//         <div className="col-lg-12">
//           <p className="font-weight-bold mt-4 mb-1">Make NFTs fun again</p>
//           <p>
//             <span className="text-muted mr-2">Items 5,557 </span> ·
//             <span className="text-muted mx-2">Created Dec 2023 </span> ·
//             <span className="text-muted mx-2">Creator earnings 7.5% </span> ·
//             <span className="text-muted mx-2">Chain Polygon</span>
//           </p>
//         </div>

//         <div className="col-lg-12 mt-4">
//           <button className="btn main-btn px-4">Item</button>
//           <button className="btn main-btn px-4">Offers</button>
//           <button className="btn main-btn px-4">Analytics</button>
//           <button className="btn main-btn px-4">Activity</button>
//         </div>

//         <hr />

//         <div className="col-lg-12 mt-4">
//           <div className="">
//             <div className="flex" id="nft-list"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "../../app/import.css";
import Header from "@/app/(primary)/component/header";
// import dynamic from "next/dynamic";
// import Loading from "../../app/component/Loader";

export default function Page() {
  const router = useRouter();
  const [slug, setSlug] = useState();
  const [viewdata, setViewData] = useState();
  const [image_url, setImageUrl] = useState();
  const [collection, setCollection] = useState();
	
  const [priceAvailable, setPriceAvailable] = useState(false);
  const [offer, setOffer] = useState();
  const [ethprice, setEthPrice] = useState();
  const [usdprice, setUSDPrice] = useState();

  const fetchNftDetails = async (slug) => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    let url = `${BASE_URL}/api/v2/chain/${slug[0]}/contract/${slug[1]}/nfts/${slug[2]}`;
    const response = await fetch(url);
    const data = await response.json();
    setViewData(data.nft);
    let replacedImg = data.nft.image_url
      ? data.nft.image_url.replace("ikzttp.mypinata.cloud", "ipfs.io")
      : process.env.NEXT_PUBLIC_DEFAULT_NFT;
    setImageUrl(replacedImg);
    fetchCollection(data.nft.collection)
    fetchBestOffer(data.nft.collection, slug[2]);
  };

  const convertToUSD = async (currency, price) => {
    let url = `https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD`;
    const response = await fetch(url);
    const data = await response.json();
		let usd = parseFloat(data.USD)*parseFloat(price)
    setUSDPrice(usd.toFixed(2)); // data.USD;
  };

  const fetchBestOffer = async (slug, identifier) => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    let url = `${BASE_URL}/api/v2/listings/collection/${slug}/nfts/${identifier}/best`;
    const response = await fetch(url);
    const data = await response.json();
    if (Object.keys(data).length === 0 && data.constructor === Object) {
			console.log('No Offer')
    } else {
      setOffer(data);
			let price = convert(data.price.current.value, data.price.current.decimals)
			convertToUSD(data.price.current.currency, price)
			setEthPrice(price);
      setPriceAvailable(true);
    }
  };

  const fetchCollection = async (collection) => {
    console.log("collection", collection)
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    let url = `${BASE_URL}/api/v2/collections/${collection}`;
    const response = await fetch(url);
    const data = await response.json();
    setCollection(data);
  };


  useEffect(() => {
    if (!router.isReady) return;
    let slug = router.query.slug;
    setSlug(slug);
    fetchNftDetails(slug);
  }, [router.isReady]);

  const convert = (v, d) => parseFloat(v) / parseFloat(10 ** d);

  return (
    <>
      <Header />
      <div className="container-max">
        <div className="row">
          <div className="col-lg-5 item-wrapper">
            <div className="item-summary">
              <section>
                <header className="flex font-medium">
                  <div className="mr-auto item-summary-header-icon">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png" />
                  </div>
                  <div className="navbar-text ml-auto">
                    <i className="px-2 fa fa-share"></i>
                    <i className="px-2 fa fa-heart-o"></i>
                  </div>
                </header>

                <div className="item-summary-img">
                  <img src={image_url} />
                </div>
              </section>
              <div className="border-card mb-4 mt-4">
                <div className="card-header">
                  <i className="fa fa-server mr-2"></i> Description
                </div>
                <div className="card-body">
                  <p>{viewdata?.description}</p>
                </div>
              </div>
              <div className="border-card mb-4 mt-4">
                <div className="card-header">
                  <i className="fa fa-server mr-2"></i> Traits
                </div>
                <div className="card-body">
                  <div className="row">
                    {viewdata?.traits ? (
                      <>
                        {viewdata?.traits.map((item, index) => (
                          <div className="col-4 mb-3" key={index}>
                            <div className="bg-muted">
                              <p className="mb-1 small">{item.trait_type}</p>
                              <p className="mb-1 small font-weight-bold">
                                {item.value}
                              </p>
                              <p className="mb-1 small">
                                Floor : ----- {item.max_value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="border-card mb-4 mt-4">
                <div className="card-header">
                  <i className="fa fa-server mr-2"></i> About {collection?.name}
                </div>
                <div className="card-body">
                  <p>
                    {collection?.description === "" ? "No description available" : collection?.description}
                  </p>
                </div>
              </div>

              <div className="border-card mb-4 mt-4">
                <div className="card-header">
                  <i className="fa fa-server mr-2"></i> Details
                </div>
                <div className="card-body">
                  <div className="flex">
                    <div className="col2">
                      <p>Contract Address :</p>
                    </div>
                    <div className="col2 text-right">
                      <p>
                        {viewdata?.contract.slice(0, 6)}...
                        {viewdata?.contract.substr(-4, 4)}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="col2">
                      <p>Token ID :</p>
                    </div>
                    <div className="col2 text-right">
                      <p>{viewdata?.identifier}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="col2">
                      <p>Token Standard :</p>
                    </div>
                    <div className="col2 text-right">
                      <p>{viewdata?.token_standard.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="col2">
                      <p>Chain :</p>
                    </div>
                    <div className="col2 text-right">
                      <p>{collection?.contracts[0].chain.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="col2">
                      <p>Last Updated :</p>
                    </div>
                    <div className="col2 text-right">
                      <p>{viewdata?.updated_at}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="col2">
                      <p>Creator Earnings :</p>
                    </div>
                    <div className="col2 text-right">
                      <p>{collection?.fees[0]?.fee} %</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 item-main">
            <p className="mb-3">
              <a
                className="a-text"
                href={`/collection/${viewdata?.collection}`}
              >
                {collection?.name}
              </a>
            </p>
            <h3 className="font-weight-bold">{viewdata?.name}</h3>
            <p>
              Owned by{" "}
              <span>
                <a className="a-text" href={`/${viewdata?.creator}`}>
                  {viewdata?.creator.slice(2, 8)}
                </a>
              </span>{" "}
            </p>

            <div className="mt-4 mb-4">
              <p>2.9K views | 107 favorites</p>
            </div>
            <div className="border-card mb-4">
              {/* <div className="card-header transparent">
                <p>Sale ends 11 February 2024 at 7:55 am </p>
                <div className="row ">
                  <div className="col-lg-6 m-0 p-0">
                    <div className="flex">
                      <div className="col-3">
                        <h3>01</h3>
                        <p>Days</p>
                      </div>
                      <div className="col-3">
                        <h3>13</h3>
                        <p>Hours</p>
                      </div>
                      <div className="col-3">
                        <h3>17</h3>
                        <p>Minutes</p>
                      </div>
                      <div className="col-3">
                        <h3>45</h3>
                        <p>Seconds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {priceAvailable ? (
                <div className="card-body">
                  <p className="text-muted mb-2">Current price</p>
                  <h2 className="font-weight-bold">
                    {ethprice}{" "}{offer?.price?.current?.currency}
                    <span className="h6 text-muted ml-3">
                      ${usdprice}
                    </span>
                  </h2>

                  <div className="row mt-3">
                    <div className="col-6">
                      <button className="btn btns btn-block btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <div className="col-6">
                      <button className="btn btns btn-block btn-secondary">
                        Make an offer
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="border-card">
              <div className="card-header">
                <i className="fa fa-server mr-2"></i> Price History
              </div>
              <div className="card-body p-5 text-center">
                <img src="https://testnets.opensea.io/static/images/empty-bids.svg" />
              </div>
            </div>
            <div className="border-card mt-4">
              <div className="card-header">
                <i className="fa fa-server mr-2"></i> Listings
              </div>
              <div className="card-body p-5 text-center">
                <img src="https://testnets.opensea.io/static/images/empty-bids.svg" />
              </div>
              <div className="card-body p-0 m-0">
                {/* <table className="table"> */}
                {/* <tr className="text-muted">
                    <td>Price</td>
                    <td>USD Price</td>
                    <td>Quantity</td>
                    <td>Expiration</td>
                    <td>From</td>
                    <td></td>
                  </tr>
									<tr className="text-muted">
                    <td>Price</td>
                    <td>USD Price</td>
                    <td>Quantity</td>
                    <td>Expiration</td>
                    <td>From</td>
                    <td></td>
                  </tr> */}
                {/* {offer?.protocol_data?.parameters?.offer?.map((item, index) => (
                  <tr>
                    <td className="h5 font-weight-bold"> ETH</td>
                    <td>$11,244.08</td>
                    <td>1</td>
                    <td>in 2 days</td>
                    <td>WeZPeople</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Buy</button>
                    </td>
                  </tr>
									))} */}
                {/* </table> */}
              </div>
            </div>
            <div className="border-card mt-4">
              <div className="card-header">
                <i className="fa fa-server mr-2"></i> Offers
              </div>
              <div className="card-body p-5 text-center">
                <img src="https://testnets.opensea.io/static/images/empty-bids.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mb-4"></div>
      <div className="container-max">
        <div className="col-lg-12 mb-5">
          <h3 className="mb-3 font-weight-bold">Top NFTs</h3>
          <div className="row">
            <a className="col4 card" href={`/collection/jerry`}>
              <img src="https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=136&h=136&fr=1" alt="" />
              <span className="p-3">
                <h5 className="font-weight-bold h6">Art NFT by AK</h5>
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
          </div>
        </div>

        <div className="col-lg-12 mb-5">
          <h3 className="mb-3 font-weight-bold">Featured 12</h3>
          <div className="row">
            <a className="col4 card" href="/collection">
              <img src="https://i.seadn.io/gcs/files/e9a5cd741c4a018223e551019c345ed6.png" alt="" />
              <span className="p-3">
                <h5 className="font-weight-bold h6">Art NFT by AK</h5>
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
            <a className="col4 card" href="/collection">
              <img src="https://i.seadn.io/gcs/files/4ae945fc0ce81d1cacbb2d607cdc5761.png" alt="" />
              <span className="p-3">
                <h5 className="font-weight-bold h6">ABC Gaming</h5>
                <div className="flex">
                  <div className="col2">
                    <p className="mb-1 text-muted small">Floor</p>
                    <h5 className="font-weight-bold h6">--</h5>
                  </div>
                  <div className="col2">
                    <p className="mb-1 text-muted small">Total Volume</p>
                    <h5 className="font-weight-bold h6">14 ETH</h5>
                  </div>
                </div>
              </span>
            </a>
            <a className="col4 card" href="/collection">
              <img src="https://i.seadn.io/gcs/files/4d08083b85770cf7fed31fe5fb5566f6.png" alt="" />
              <span className="p-3">
                <h5 className="font-weight-bold h6">Altroz NFT</h5>
                <div className="flex">
                  <div className="col2">
                    <p className="mb-1 text-muted small">Floor</p>
                    <h5 className="font-weight-bold h6">--</h5>
                  </div>
                  <div className="col2">
                    <p className="mb-1 text-muted small">Total Volume</p>
                    <h5 className="font-weight-bold h6">0.78 ETH</h5>
                  </div>
                </div>
              </span>
            </a>
            <a className="col4 card" href="/collection">
              <img src="https://i.seadn.io/gcs/files/4d08083b85770cf7fed31fe5fb5566f6.png" alt="" />
              <span className="p-3">
                <h5 className="font-weight-bold h6">Box Off</h5>
                <div className="flex">
                  <div className="col2">
                    <p className="mb-1 text-muted small">Floor</p>
                    <h5 className="font-weight-bold h6">--</h5>
                  </div>
                  <div className="col2">
                    <p className="mb-1 text-muted small">Total Volume</p>
                    <h5 className="font-weight-bold h6">8 ETH</h5>
                  </div>
                </div>
              </span>
            </a>
          </div>
        </div>

        <div className="col-lg-12 mb-5">
          <h3 className="mb-3 font-weight-bold">NFT 101</h3>
          <div className="row">
            <a className="col6 card" href="/category">
              <img src="https://testnets.opensea.io/static/images/learn-center//what-is-nft.png" alt="" />
              <span className="p-3">
                <h6>What is an NFTs</h6>
              </span>
            </a>
            <a className="col6 card" href="/category">
              <img src="https://testnets.opensea.io/static/images/learn-center//how-to-buy-nft.png" alt="" />
              <span className="p-3">
                <h6>How to buy an NFT</h6>
              </span>
            </a>
            <a className="col6 card" href="/category">
              <img src="https://testnets.opensea.io/static/images/learn-center//what-is-minting.png" alt="" />
              <span className="p-3">
                <h6>What is minting ?</h6>
              </span>
            </a>
            <a className="col6 card" href="/category">
              <img src="https://testnets.opensea.io/static/images/learn-center//stay-protected-web3.png" alt="" />
              <span className="p-3">
                <h6>How to stay protected...</h6>
              </span>
            </a>
            <a className="col6 card" href="/category">
              <img src="https://testnets.opensea.io/static/images/learn-center//how-to-create-nft.png" alt="" />
              <span className="p-3">
                <h6>PFPs</h6>
              </span>
            </a>
            <a className="col6 card" href="/category">
              <img src="https://testnets.opensea.io/static/images/learn-center//how-to-sell-nft.png" alt="" />
              <span className="p-3">
                <h6>How to sell an NFT</h6>
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-12 mb-5">
          <h3 className="mb-3 font-weight-bold">Explore Categories</h3>
          <div className="row">
            <a className="col5 card" href="/category">
              <img src="https://opensea.io/static/images/categories/maverick-art.png" alt="" />
              <span className="p-3">
                <h6>Art</h6>
              </span>
            </a>
            <a className="col5 card" href="/category">
              <img src="https://opensea.io/static/images/categories/maverick-gaming.png" alt="" />
              <span className="p-3">
                <h6>Gaming</h6>
              </span>
            </a>
            <a className="col5 card" href="/category">
              <img src="https://opensea.io/static/images/categories/maverick-membership.png" alt="" />
              <span className="p-3">
                <h6>Memberships</h6>
              </span>
            </a>
            <a className="col5 card" href="/category">
              <img src="https://opensea.io/static/images/categories/maverick-music.png" alt="" />
              <span className="p-3">
                <h6>Music</h6>
              </span>
            </a>
            <a className="col5 card" href="/category">
              <img src="https://opensea.io/static/images/categories/maverick-pfps.png" alt="" />
              <span className="p-3">
                <h6>PFPs</h6>
              </span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

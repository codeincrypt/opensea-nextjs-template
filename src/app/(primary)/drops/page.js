import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="mb-4"></div>
      <div className="container-max">
        <div className="col-lg-12 mb-5">
          <h3 className="mb-3 font-weight-bold">Drops</h3>
          <div className="row">
            <Link className="col4 card" href={`/collection/jerry`}>
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
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

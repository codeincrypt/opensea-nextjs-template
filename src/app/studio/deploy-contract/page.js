import Link from "next/link";

export default function Deploycontract() {
  return (
    <>
      <div className="mb-4"></div>
      <div className="container-max">
        <div className="col-lg-12 my-5">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h3 className="font-weight-bold">
                First, you&apos;ll need to deploy a contract
              </h3>
              <p>
                You&apos;ll need to deploy an ERC-721 contract onto the
                blockchain before you can create a drop. What is a contract?.
              </p>
              <div className="form-group mt-4">
                <h6 className="font-weight-bold">Logo Image *</h6>
                <input type="file" className="form-control" />
              </div>

              <div className="form-group mt-4">
                <h6 className="font-weight-bold">Contract name *</h6>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-4">
                <h6 className="font-weight-bold">Token Symbol *</h6>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-4">
                <h6 className="font-weight-bold">Blockchain *</h6>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3 mutedcard">
              <h6 className="font-weight-bold">
                After you deploy your contract you'll be able to:
              </h6>
              <div className="ml-4 mt-4">
                <p className="font-weight-bold mb-0">
                  Manage collection settings
                </p>
                <p className="text-muted">
                  Edit collection details, earnings, and links.
                </p>
              </div>
              <div className="ml-4 mt-4">
                <p className="font-weight-bold mb-0">Set up your drop</p>
                <p className="text-muted">
                  Set up your mint schedule and presale stages.
                </p>
              </div>
              <div className="ml-4 mt-4">
                <p className="font-weight-bold mb-0">Prepare designs</p>
                <p className="text-muted">
                  Customize your pages and upload all assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

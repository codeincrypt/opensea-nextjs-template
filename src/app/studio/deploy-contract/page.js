import Link from 'next/link'
 
export default function Deploycontract() {
  return (
    <>
       <div class="mb-4"></div>
    <div class="container-max">
        <div class="col-lg-12 my-5">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <h3 class="font-weight-bold">First, you’ll need to deploy a contract</h3>
                    <p>You’ll need to deploy an ERC-721 contract onto the blockchain before you can create a drop. What
                        is a contract?.</p>
                    <div class="form-group mt-4">
                        <h6 class="font-weight-bold">Logo Image *</h6>
                        <input type="file" class="form-control" />
                    </div>

                    <div class="form-group mt-4">
                        <h6 class="font-weight-bold">Contract name *</h6>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group mt-4">
                        <h6 class="font-weight-bold">Token Symbol *</h6>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group mt-4">
                        <h6 class="font-weight-bold">Blockchain *</h6>

                    </div>
                </div>
                <div class="col-lg-1">
                </div>
                <div class="col-lg-3 mutedcard">
                    <h6 class="font-weight-bold">After you deploy your contract you'll be able to:</h6>
                    <div class="ml-4 mt-4">
                        <p class="font-weight-bold mb-0">Manage collection settings</p>
                        <p class="text-muted">Edit collection details, earnings, and links.</p>
                    </div>
                    <div class="ml-4 mt-4">
                        <p class="font-weight-bold mb-0">Set up your drop</p>
                        <p class="text-muted">Set up your mint schedule and presale stages.</p>
                    </div>
                    <div class="ml-4 mt-4">
                        <p class="font-weight-bold mb-0">Prepare designs</p>
                        <p class="text-muted">Customize your pages and upload all assets.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
  )
}

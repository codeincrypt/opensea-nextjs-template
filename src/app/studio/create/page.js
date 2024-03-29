import Link from "next/link";
import { BiImageAlt } from "react-icons/bi";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";

export default function Home() {
	return (
		<>
			<div className="contain">
				<div className="flex">
					<div className="col-lg-6 v-center px-5">
						<div className="mt-4">
							<Link href="/" className="icons"><FiArrowLeft className="h5 mb-0" /></Link>
						</div>
						<Link href="/" className="fa-stack fa-lg pointer mb-5">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-arrow-left fa-stack-1x fa-inverse"></i>
						</Link>

						<h1 className="font-weight-bold"><i className="px-2 fa fa-pencil-square-o"></i>Create</h1>
						<Link className="card2" href="/studio/deploy-contract">
							<h5 className="font-weight-bold"> <RiCheckboxMultipleBlankLine /> Drop a collection</h5>
							<p className="mb-0">Launch your NFT collection for others to mint.</p>
						</Link>

						<Link className="card2" href="/studio/mint">
							<h5 className="font-weight-bold"><BiImageAlt /> Mint an NFT</h5>
							<p className="mb-0">Create a collection and mint NFTs directly to your wallet.</p>
						</Link>

						<p><Link href="/">Learn more</Link> about each option.</p>
					</div>
					<div className="col-lg-6 col-sm-12 col-md-12 create-bg"></div>
				</div>
			</div>
		</>
	);
}

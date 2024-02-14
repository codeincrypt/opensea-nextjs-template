import Image from "next/image";
import Profile from "../../component/profile";

export default function Propage() {
  return (
    <>
      <div className="mb-4"></div>
      <Profile />
      <div className="container-max">
        <div className="col-lg-12 mb-5">
          <h3 className="mb-3 font-weight-bold">PROFILE</h3>
        </div>
      </div>
    </>
  );
}

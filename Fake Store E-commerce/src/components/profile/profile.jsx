import { useState } from "react";
import Myprofile from "./sub-profile/myprofile";
import Mywishlist from "./sub-profile/mywishlist";

function Profile() {
  const [select, setSelect] = useState(true);
  return (
    <>
      <div className="bg-60sencondary h-screen">
        <div className="mx-auto flex h-screen w-full max-w-screen-xl gap-4 p-4 py-6 lg:py-8">
          <div className="bg-primary flex w-3xs flex-col items-center gap-2 rounded-3xl p-10">
            <div className="h-20 w-20 rounded-full bg-white"></div>
            <span className="text-3xl text-white">Name</span>
            <button
              className={`w-full cursor-pointer rounded-4xl p-2 text-white ${select && "bg-bgprimary"}`}
              onClick={() => setSelect(true)}
            >
              My profile
            </button>
            <button
              className={`w-full cursor-pointer rounded-4xl p-2 text-white ${select || "bg-bgprimary"}`}
              onClick={() => setSelect(false)}
            >
              Wishlist
            </button>
          </div>
          {select ? <Myprofile /> : <Mywishlist />}
        </div>
      </div>
    </>
  );
}

export default Profile;

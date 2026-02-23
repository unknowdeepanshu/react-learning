import { IconGardenCart, IconUser } from "@tabler/icons-react";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <div className="bg-primary flex items-center justify-center">
        <div className="m-2 mx-10 flex h-10 justify-between py-4">
          <div className="flex flex-1 gap-8">
            <div className="bg-30blue flex items-center rounded-md">
              <img src="/logo.png" width="100rem" />
            </div>
            <input
              type="text"
              className="bg-search h-8 w-md self-center rounded-4xl p-4 text-white"
              placeholder="search"
            />
          </div>
          <div className="flex flex-1 items-center justify-end gap-8">
            <div className="flex">
              <Link
                to="/"
                className="hover:text-10blue mx-2 mr-8 text-[14px] text-white"
              >
                Home
              </Link>
              <div className="bg-navline w-px"></div>
              <Link
                to="/"
                className="hover:text-10blue mx-2 ml-8 text-[14px] text-white"
              >
                Shop
              </Link>
            </div>
            <Link
              to="/you-cart"
              className="hover:bg-bgprimary hover:text-10blue bg-bghover flex items-center gap-2 rounded-md p-2 px-10 text-[14px] text-white hover:cursor-pointer"
            >
              <IconGardenCart stroke={1.5} />
              Your cart
            </Link>
            <button className="hover:border-10blue flex h-8 w-8 cursor-pointer justify-center rounded-3xl bg-white p-1 hover:border-2">
              {" "}
              <IconUser stroke={1} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

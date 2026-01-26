import { IconGardenCart } from "@tabler/icons-react";
function Header() {
  return (
    <>
      <div className="bg-primary flex items-center justify-center">
        <div className="m-2 mx-10 flex h-20 w-[79rem] justify-between py-4">
          <div className="flex flex-1 gap-8">
            <div className="bg-30blue flex items-center rounded-md">
              <img src="/logo.png" width="100rem" />
            </div>
            <input
              type="text"
              className="bg-search w-md rounded-4xl p-4 text-white"
              placeholder="search"
            />
          </div>
          <div className="flex flex-1 items-center justify-end gap-8">
            <div className="flex">
              <a
                href="#"
                className="hover:text-10blue mx-2 mr-8 text-2xl text-white"
              >
                Home
              </a>
              <div className="bg-navline w-px"></div>
              <a
                href="#"
                className="hover:text-10blue mx-2 ml-8 text-2xl text-white"
              >
                Shop
              </a>
            </div>
            <button className="hover:bg-bgprimary hover:text-10blue bg-bghover flex items-center gap-2 rounded-md p-2 px-10 text-white hover:cursor-pointer">
              <IconGardenCart stroke={1.5} />
              Your cart
            </button>
            <div className="h-10 w-10 rounded-3xl bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

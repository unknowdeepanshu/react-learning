import { IconGardenCart, IconUser } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useSearchParams } from "react-router";

function Header() {
  const [query, setQuery] = useState("");
  const [params] = useSearchParams();
  const searchQuery = params.get("search") || "";
  const data = useSelector((state) => state.product);
  const goods = data.product.products;
  console.log("this from header", goods);
  const searchResults = goods.filter((good) =>
    good.title.toLowerCase().includes(query.toLowerCase()),
  );
  if (searchQuery) {
    const filtered = filtered.filter((good) =>
      good.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }
  return (
    <>
      <div className="bg-primary flex items-center justify-center">
        <div className="flex flex-1 gap-8">
          <div className="flex items-center rounded-md">
            <div className="ml-4">
              <img src="/logo.png" className="w-14" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-search h-8 w-3xs self-center rounded-4xl p-4 text-white"
              placeholder="Search products..."
            />
            {query && (
              <div className="absolute top-14 w-72 rounded-md bg-white text-black shadow-lg">
                {searchResults.slice(0, 5).map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.title}`}
                    className="block p-2 hover:bg-gray-200"
                    onClick={() => setQuery("")}
                  >
                    {item.title}
                  </Link>
                ))}
                {searchResults.length === 0 && (
                  <div className="p-2 text-gray-500">No products found</div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="m-2 mx-10 flex h-10 justify-between py-4">
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

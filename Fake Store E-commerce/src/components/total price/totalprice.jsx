import { useState } from "react";
import Cart from "./cart/Cart";
import Shipping from "./shiping/shiping";
import Payment from "./pyament/payment";

function Totalprice() {
  const [page, setPage] = useState("cart");

  return (
    <>
      <div className="bg-30blue">
        <div className="mx-auto flex w-full max-w-7xl gap-4 px-10">
          <div className="mx-10 flex w-full max-w-7xl justify-between px-4 pt-20">
            <button className="mb-4 flex-1 cursor-pointer text-center text-[1.2rem] text-neutral-50/60 md:text-3xl">
              1. Shopping Cart
              {page === "cart" && (
                <hr className="border-10blue top relative -bottom-[1rem] rounded-t-3xl border-4"></hr>
              )}
            </button>

            <button className="mb-4 flex-1 cursor-pointer text-center text-[1.2rem] text-neutral-50/60 md:text-3xl">
              2. Shipping Details
              {page === "shipping" && (
                <hr className="border-10blue top relative -bottom-[1rem] rounded-t-3xl border-4"></hr>
              )}
            </button>
            <button className="mb-4 flex-1 cursor-pointer text-center text-[1.2rem] text-neutral-50/60 md:text-3xl">
              3. Payment Options
              {page === "payment" && (
                <hr className="border-10blue top relative -bottom-[1rem] rounded-t-3xl border-4"></hr>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-60sencondary h-screen">
        <div className="mx-auto flex h-screen w-full max-w-7xl gap-4 px-10 py-6 lg:py-8">
          {page === "shipping" && <Shipping page={setPage} />}
          {page === "payment" && <Payment page={setPage} />}
          {page === "cart" && <Cart page={setPage} />}
        </div>
      </div>
    </>
  );
}

export default Totalprice;

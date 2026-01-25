import { useState } from "react";
import Cart from "./option/cart/Cart";

function Totalprice() {
  const [page, setPage] = useState("cart");
  return (
    <>
      <div className="bg-30blue">
        <div className="mx-auto flex w-full max-w-screen-xl gap-4 px-10">
          <div className="mx-10 flex w-full max-w-screen-xl justify-between px-4 pt-20">
            <a className="mb-4 flex-1 text-center text-3xl text-neutral-50/60">
              1. Shopping Cart
            </a>
            <a className="mb-4 flex-1 text-center text-3xl text-neutral-50/60">
              2. Shipping Details
            </a>
            <a className="mb-4 flex-1 text-center text-3xl text-neutral-50/60">
              3. Payment Options
            </a>
          </div>
        </div>
      </div>
      <div className="bg-60sencondary h-screen">
        <div className="mx-auto flex h-screen w-full max-w-screen-xl gap-4 px-10 py-6 lg:py-8">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Totalprice;

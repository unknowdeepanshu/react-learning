import Summary from "./sumarry";
import { useState } from "react";
function Shipping({ page }) {
  const [shippingMethod, setShippingMethod] = useState("");
  function handleShippingChange() {
    if (shippingMethod === "free" || shippingMethod === "nextDay") {
      page("payment");
    }
  }
  return (
    <>
      <div className="flex h-screen flex-1 flex-col gap-8">
        <h1 className="text-4xl text-white">Shopping Cart</h1>
        <form className="flex h-70 flex-col gap-4 overflow-auto pr-2">
          <div className="flex gap-4">
            <input
              type="text"
              className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
              value="Dipanshu"
              disabled={true}
            />

            <input
              type="text"
              className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
              value="vishwakarma"
              disabled={true}
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
              value="https://x.com/DipanshuVi6799"
              disabled={true}
            />
            <input
              type="text"
              value="https://github.com/unknowdeepanshu"
              className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
              placeholder="https://github.com/unknowdeepanshu"
              disabled={true}
            />
          </div>
          <div className="flex h-32 flex-1 gap-2">
            <div className="border-bghover focus:border-bghover bg-bghover/50 flex flex-1 items-center gap-4 rounded-md border-2 p-2 p-3 text-white transition-colors focus:outline-none">
              <input
                type="radio"
                name="shipping"
                className="accent-bghover h-6 w-8"
                value="free"
                checked={shippingMethod === "free"}
                onChange={() => setShippingMethod("free")}
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-[14px]">Free Shipping</h1>
                <h1 className="text-[14px] text-neutral-50/50">
                  Between 2 - 5 working days
                </h1>
              </div>
            </div>
            <div className="border-bghover focus:border-bghover bg-bghover/50 flex flex-1 items-center gap-4 rounded-md border-2 p-2 p-3 text-white transition-colors focus:outline-none">
              <input
                type="radio"
                name="shipping"
                className="accent-bghover h-6 w-8"
                value="nextDay"
                checked={shippingMethod === "nextDay"}
                onChange={() => setShippingMethod("nextDay")}
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-[14px]">Next Day Delivery - $20</h1>
                <h1 className="text-[14px] text-neutral-50/50">
                  24 hours from checkout
                </h1>
              </div>
            </div>
          </div>
        </form>
        <hr className="border-10blue"></hr>
        <div className="flex gap-3">
          <button
            onClick={() => page("cart")}
            className="bg-cardbtn w-40 cursor-pointer rounded-2xl p-2 text-2xl text-white"
          >
            back
          </button>
          <button
            onClick={handleShippingChange}
            className="bg-cardbtn w-40 cursor-pointer rounded-2xl p-2 text-2xl text-white"
          >
            Next
          </button>
        </div>
      </div>
      <Summary pages={page} />
    </>
  );
}

export default Shipping;

import Shipproduct from "./cart product/shipproduct";

function Shipping() {
  return (
    <>
      <div className="flex h-screen flex-1 flex-col gap-8">
        <h1 className="text-4xl text-white">Shopping Cart</h1>
        <form className="flex h-70 flex-col gap-4 overflow-auto pr-2">
          <div className="flex gap-4">
            <input
              type="text"
              className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
              placeholder="First Name"
            />

            <input
              type="text"
              className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
              placeholder="last Name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
              placeholder="Address"
            />
            <input
              type="text"
              className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
              placeholder="Address 2"
            />
          </div>
          <div className="flex h-32 flex-1 gap-2">
            <div className="border-bghover focus:border-bghover bg-bghover/50 flex flex-1 items-center gap-4 rounded-md border-2 p-2 p-3 text-white transition-colors focus:outline-none">
              <input type="radio" className="accent-bghover h-6 w-8" />
              <div className="flex flex-col gap-3">
                <h1 className="text-[14px]">Free Shipping</h1>
                <h1 className="text-[14px] text-neutral-50/50">
                  Between 2 - 5 working days
                </h1>
              </div>
            </div>
            <div className="border-bghover focus:border-bghover bg-bghover/50 flex flex-1 items-center gap-4 rounded-md border-2 p-2 p-3 text-white transition-colors focus:outline-none">
              <input type="radio" className="accent-bghover h-6 w-8" />
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
          <button className="bg-cardbtn w-40 cursor-pointer rounded-2xl p-2 text-2xl text-white">
            Next
          </button>
          <button className="bg-cardbtn w-40 cursor-pointer rounded-2xl p-2 text-2xl text-white">
            Cancel
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-4xl text-white">Summary</h1>
        <Shipproduct />
        <h2 className="text-[14px] text-neutral-50/25">enter coupon code</h2>
        <hr className="border-10blue"></hr>
        <div className="flex">
          <div className="flex flex-1 cursor-pointer flex-col gap-4 rounded-2xl p-2 text-2xl text-white">
            <h1 className="text-2xl">Subtotal</h1>
            <h1 className="text-2xl">Shipping</h1>
            <h1 className="text-2xl">Taxes</h1>
          </div>
          <div className="flex flex-1 cursor-pointer flex-col gap-4 rounded-2xl p-2 text-right text-2xl text-white">
            <h1 className="text-2xl">$600</h1>
            <h1 className="text-2xl">Free</h1>
            <h1 className="text-2xl">$20</h1>
          </div>
        </div>
        <hr className="border-10blue"></hr>
        <div className="flex gap-3">
          <div className="flex-1 cursor-pointer rounded-2xl p-2 text-2xl text-white">
            <h1 className="text-3xl">Total</h1>
          </div>
          <div className="flex-1 cursor-pointer rounded-2xl p-2 text-right text-2xl text-white">
            <h1 className="text-3xl">$620</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipping;

import Shipproduct from "./cart product/shipproduct";

function Summary() {
  return (
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
  );
}

export default Summary;

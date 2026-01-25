import Cartproduct from "./cart product/cartproduct";

function Cart() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-4xl text-white">Shopping Cart</h1>
        <div className="flex h-96 flex-col gap-4 overflow-auto pr-2">
          <Cartproduct />
          <Cartproduct />
          <Cartproduct />
          <Cartproduct />
        </div>
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
      <div className="flex-1">
        <h1 className="text-4xl text-white">Summary</h1>
      </div>
    </>
  );
}

export default Cart;

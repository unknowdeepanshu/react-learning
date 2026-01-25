function Totalprice() {
  return (
    <>
      <div className="bg-30blue">
        <div className="mx-auto flex w-full max-w-screen-xl gap-4 px-4 pt-10">
          <button className="mb-4 flex-1 text-3xl text-neutral-50/60">
            1. Shopping Cart
          </button>
          <button className="mb-4 flex-1 text-3xl text-neutral-50/60">
            2. Shipping Details
          </button>
          <button className="mb-4 flex-1 text-3xl text-neutral-50/60">
            3. Payment Options
          </button>
        </div>
      </div>
      <div className="bg-60sencondary h-screen">
        <div className="mx-auto flex h-screen w-full max-w-screen-xl gap-4 p-4 py-6 lg:py-8"></div>
      </div>
    </>
  );
}

export default Totalprice;

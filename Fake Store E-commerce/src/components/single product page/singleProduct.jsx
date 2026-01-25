import Card from "../product card/card";

function Singleproduct() {
  return (
    <>
      <div className="bg-60sencondary">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex gap-4">
            <img src="/logo.png" className="h-[30rem] w-[38rem] bg-amber-50" />
            <div className="flex flex-1 flex-col gap-10 text-white">
              <h1 className="text-5xl">product title</h1>
              <h3 className="pr-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                sit maiores porro consequuntur voluptates veritatis voluptatem
                provident ipsam, eligendi impedit nemo assumenda officiis
                corrupti alias optio, consequatur sed ad quas. Quisquam repellat
                blanditiis doloremque ducimus nostrum, dolorem ea eius quod
                nemo, rerum totam fuga consequuntur deleniti officia quaerat
                illum nam?
              </h3>
              <h2 className="text-3xl">$300</h2>
              <div className="flex w-48 flex-col gap-2">
                <button className="bg-30blue rounded-3xl p-2 hover:cursor-pointer">
                  Add To Cart
                </button>
                <button className="bg-30blue rounded-3xl p-2 hover:cursor-pointer">
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <hr className="border-10blue my-6 sm:mx-auto lg:my-8" />
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-5xl font-bold text-white">Similar Products</h1>
            <div className="flex gap-4">
              <Card />

              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singleproduct;

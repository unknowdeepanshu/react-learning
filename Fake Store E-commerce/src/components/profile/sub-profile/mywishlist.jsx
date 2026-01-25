import Card from "../../product card/card";

function Mywishlist() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-3">
        <h1 className="text-3xl text-white">My Wishlist</h1>
        <div className="bg-primary flex flex-1 flex-col justify-between rounded-3xl p-6">
          <div className="flex flex-1 flex-col gap-3 p-4">
            <div className="bg-60sencondary flex-1 rounded-md">
              <div className="flex flex-wrap gap-4 p-4">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          <button className="bg-cardbtn hover:bg-bgprimary w-44 cursor-pointer self-end rounded-md p-3 text-white">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
}

export default Mywishlist;

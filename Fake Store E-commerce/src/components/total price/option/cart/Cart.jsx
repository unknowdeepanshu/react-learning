import { Link, useSearchParams } from "react-router";
import Cartproduct from "./cart product/cartproduct";
import Summary from "../../shiping/sumarry";
import { useSelector } from "react-redux";

function Cart({ page }) {
  const user = useSelector((state) => state.product.user);
  console.log("this user", user);
  return (
    <>
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-4xl text-white">Shopping Cart</h1>
        <div className="flex h-fit flex-col gap-4 overflow-auto pr-2">
          <Cartproduct />
          {user.map((goods) => (
            <Cartproduct
              img={goods.images[0]}
              desc={goods.description}
              price={goods.price}
              numb={goods.number}
              title={goods.title}
            />
          ))}
        </div>
        <hr className="border-10blue"></hr>
        <div className="flex gap-3">
          <Link to="/">
            <button className="bg-cardbtn w-40 cursor-pointer rounded-2xl p-2 text-2xl text-white">
              back
            </button>
          </Link>
          <button
            onClick={() => page("shipping")}
            className="bg-cardbtn w-40 cursor-pointer rounded-2xl p-2 text-2xl text-white"
          >
            Next
          </button>
        </div>
      </div>
      <Summary />
    </>
  );
}

export default Cart;

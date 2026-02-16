import Card from "../product card/card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { useState } from "react";
import Filter from "./filter/filters";
import Paggination from "./paggination/pagginations";
import Products from "./products/produc";

function Allproduct() {
  const [stock, setStock] = useState("All");
  const data = useSelector((state) => state.product);
  // if (data.product.products) console.log(data.product.products);
  let goods = data.product.products;
  // in stock in goods
  if (stock === "All stock") {
    return goods;
  } else if (stock === "Low Stock") {
    goods = goods.filter((good) => {
      return good.availabilityStatus.includes(stock);
    });
  } else if (stock === "In Stock") {
    goods = goods.filter((good) => {
      return good.availabilityStatus.includes(stock);
    });
  }

  const tags = [...new Set(goods.flatMap((good) => good.tags))].map((tag) => ({
    name: tag,
  }));

  const number = [
    {
      num: "1",
    },
    {
      num: "2",
    },
  ];

  return (
    <>
      <div className="bg-60sencondary">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white">
              WHAT ARE YOU LOOKING FOR?
            </h1>
            <h1 className="text-5xl font-bold text-white">Today ?</h1>
          </div>
        </div>
        <hr className="border-10blue max-w-full border-2"></hr>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex">
            <div className="w-50 p-3 text-white">
              <Filter list={tags} stock={stock} onStockChange={setStock} />
            </div>
            <div className="border-10blue relative bottom-8 border-l-4"></div>
            <div className="flex flex-1 flex-col">
              <div className="flex-1 p-4">
                <div className="flex flex-wrap gap-2">
                  <Products product={goods} />
                </div>
              </div>
              <Paggination num={number} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allproduct;

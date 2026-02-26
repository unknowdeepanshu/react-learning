import { useDispatch, useSelector } from "react-redux";
import { useState, useCallback, useEffect } from "react";
import Filter from "./filter/filters.jsx";
import Paggination from "./paggination/pagginations.jsx";
import Products from "./products/produc.jsx";

function Allproduct() {
  const [stock, setStock] = useState("All");
  const [tag, setTag] = useState("All");
  const [tagArray, setTagArray] = useState([]);
  const data = useSelector((state) => state.product);
  // if (data.product.products) console.log(data.product.products);
  let goods = data.product.products;
  console.log("goods", goods);

  const tagsList = [...new Set(goods.flatMap((good) => good.tags))].map(
    (tag) => ({
      name: tag,
    }),
  );

  const number = [
    {
      num: "1",
    },
    {
      num: "2",
    },
  ];
  if (!goods) return;

  let filtered = goods;
  useEffect(() => {
    // filter by tag
    if (tag !== "All") {
      filtered = filtered.filter((good) => good.tags?.includes(tag));
      console.log("filtered tags", filtered);
    } else {
      filtered = goods.filter((good) => {
        return good.tags.find((t) => t === tag);
      });
    }

    // filter by stock
    if (stock == "All") {
      filtered = filtered.filter((good) =>
        good.availabilityStatus?.includes(stock),
      );
    } else if (stock === "Low Stock") {
      if (tag !== "All") {
        const tagArray = filtered.filter((good) => good.tags?.includes(tag));
        const stockArray = filtered.filter((good) => {
          return good.availabilityStatus.includes(stock);
        });
        filtered = [...tagArray, ...stockArray];
        console.log("this low stock", filtered);
      } else {
        filtered = goods.filter((good) => {
          return good.availabilityStatus.includes(stock);
        });
      }
    } else if (stock === "In Stock") {
      if (tag !== "All") {
        const tagArray = filtered.filter((good) => good.tags?.includes(tag));
        const stockArray = tagArray.filter((good) => {
          return good.availabilityStatus.includes(stock);
        });
        filtered = [...stockArray];
      } else {
        filtered = goods.filter((good) => {
          return good.availabilityStatus.includes(stock);
        });
      }
    }
    console.log(stock);
    setTagArray(filtered);
  }, [goods, tag, stock]);
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
              <Filter
                onTagChange={setTag}
                list={tagsList}
                stock={stock}
                onStockChange={setStock}
              />
            </div>
            <div className="border-10blue relative bottom-8 border-l-4"></div>
            <div className="flex flex-1 flex-col">
              <div className="flex-1 p-4">
                <div className="flex flex-wrap gap-2">
                  <Products product={goods} TagArray={tagArray} stock={stock} />
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

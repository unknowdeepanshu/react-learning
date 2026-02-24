import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { Link } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { increaseProduct, decreaseProduct } from "../../../../features/product";
import { useState } from "react";

function Cartproduct({ img, numb, title, price, id }) {
  const [add, setAdd] = useState(0);

  const dispatch = useDispatch();
  // console.log("this product number", add);
  function addProducts(id) {
    console.log("this working");
    dispatch(increaseProduct(id));
    setAdd(add + 1);
  }
  function subProduct(id) {
    console.log("this working");
    if (numb === 0) return;
    dispatch(decreaseProduct(id));
    setAdd(add - 1);
  }

  return (
    <>
      <div className="flex max-w-lg justify-between">
        <Link to={`/product/${title}`}>
          <div className="flex gap-2">
            <img src={img} className="h-48 w-32" />
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-3xl text-white">{title}</h1>
              <h1 className="w-5 text-[16px] text-white">${price}</h1>
            </div>
          </div>
        </Link>
        <div className="self-center">
          <div className="border-Cline flex rounded-md border-2">
            <h1 className="self-center p-1 text-[14px] text-white">
              {numb} Pcs
            </h1>
            <div className="flex flex-col">
              <button
                onClick={() => addProducts(id)}
                className="border-Cline flex h-5 cursor-pointer items-center border-2"
              >
                <IconChevronUp stroke={2} />
              </button>
              <button
                onClick={() => subProduct(id)}
                className="border-Cline flex h-5 cursor-pointer items-center border-2"
              >
                <IconChevronDown stroke={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartproduct;

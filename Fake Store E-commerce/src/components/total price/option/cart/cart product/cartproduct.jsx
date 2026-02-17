import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { Link } from "react-router";

function Cartproduct({ img, numb, title, price }) {
  return (
    <>
      <div className="flex max-w-lg justify-between">
        <Link to={`/product/${title}`}>
          <div className="flex gap-2">
            <img src={img} className="h-48 w-32" />
            <div className="flex flex-col gap-3">
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
              <button className="border-Cline flex h-5 cursor-pointer items-center border-2">
                <IconChevronUp stroke={2} />
              </button>
              <button className="border-Cline flex h-5 cursor-pointer items-center border-2">
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

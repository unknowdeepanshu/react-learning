import { useDispatch } from "react-redux";
import { removerProduct } from "../../../../features/product";

function Shipproduct({ img, title, price, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex max-w-lg justify-between">
        <div className="flex gap-2">
          <img src={img} className="h-24 w-24" />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl text-white">{title}</h1>
            <h1 className="w-5 text-[16px] text-white">${price}</h1>
          </div>
        </div>
        <div className="self-center">
          <button
            className="cursor-pointer"
            onClick={() => dispatch(removerProduct(id))}
          >
            <Iconx />
          </button>
        </div>
      </div>
    </>
  );
}

export default Shipproduct;

function Iconx() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#518b88"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function Card(props) {
  return (
    <>
      <div className="bg-bghover flex w-40 cursor-pointer flex-col gap-3 rounded-md p-4">
        <img src={props.src || "/logo.png"} className="bg-white" />
        <div className="h-15">
          <h1 className="text-[16px] text-white">
            {" "}
            {props.Title || "product title"}
          </h1>
        </div>
        <span className="text-white">{props.stock}</span>
        <div className="w-10">
          <button className="bg-cardbtn hover:bg-bgprimary cursor-pointer rounded-md p-1 text-white">
            ${props.dollar || "300"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

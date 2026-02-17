function Shipproduct({ img, title, price }) {
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
      </div>
    </>
  );
}

export default Shipproduct;

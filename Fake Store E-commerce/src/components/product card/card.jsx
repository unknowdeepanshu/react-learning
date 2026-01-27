function Card() {
  return (
    <>
      <div className="bg-bghover flex w-40 cursor-pointer flex-col gap-3 rounded-md p-4">
        <img src="/logo.png" className="bg-white" />
        <h1 className="text-[16px] text-white"> product title</h1>
        <div className="w-10">
          <button className="bg-cardbtn hover:bg-bgprimary cursor-pointer rounded-md p-1 text-white">
            $300
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

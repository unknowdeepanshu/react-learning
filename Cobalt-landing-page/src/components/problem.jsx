export function Problem() {
  return (
    <>
      <div className="h-screen w-full">
        <div className="flex gap-4 bg-black px-20 pt-50">
          <div className="flex-1">
            <h1 className="bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-[3.1rem] font-bold text-transparent">
              Who said finance has to be boring?
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="mt-2 max-w-[35rem] text-[18px] font-bold">
              <span className="text-neutral-500">
                With Cobalt, managing your business finances is effortless,
                empowering, and anything but boring. Our intuitive platform
                brings clarity to your cash flow, simplifies your financial
                decision-making, and puts the power of advanced financial
                management right at your fingertips.
              </span>{" "}
              Say no to spreadsheets and tools designed in the 80s.
            </h1>
          </div>
        </div>

        <div className="flex gap-4 bg-black px-20 pt-4 pb-8">
          <div className="mt-40 flex-1">
            <h1 className="bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-[3.1rem] font-bold text-transparent">
              Everything you need. Nothing you don’t
            </h1>
            <h1 className="mt-2 max-w-[35rem] text-[18px] font-bold text-neutral-500">
              Financial management and visibility in one place. Experience{" "}
              <span className="text-white">a flexible toolkit</span> that makes
              every task feel like a breeze.
            </h1>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </>
  );
}

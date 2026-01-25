import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
function Cartproduct() {
  return (
    <>
      <div className="flex max-w-lg justify-between">
        <div className="flex gap-2">
          <img src="/man.svg" className="h-48 w-32" />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl text-white">product title</h1>
            <h1 className="w-5 text-[16px] text-white">
              ai8dougjkbncaiuf chbaafujsduiabcf havch
            </h1>
            <h1 className="w-5 text-[16px] text-white">$300</h1>
          </div>
        </div>
        <div className="self-center">
          <div className="border-Cline flex rounded-md border-2">
            <h1 className="self-center p-1 text-[14px] text-white">1 Pcs</h1>
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

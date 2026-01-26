import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
function Shipproduct() {
  return (
    <>
      <div className="flex max-w-lg justify-between">
        <div className="flex gap-2">
          <img src="/man.svg" className="h-24 w-24" />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl text-white">product title</h1>
            <h1 className="w-5 text-[16px] text-white">$300</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipproduct;

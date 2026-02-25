import Pop from "../pop/selectInput";
import Summary from "../shiping/sumarry";
import { useState } from "react";
function Payment({ page }) {
  const [checkPay, setCheckPay] = useState("");
  const [open, setOpen] = useState(false);
  function handlePayment() {
    if (checkPay === "Pay pal" || checkPay === "Credit") {
      console.log("you buy it");
    } else {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 4000);
    }
  }
  return (
    <>
      <div className="flex h-screen flex-1 flex-col gap-8">
        <h1 className="text-4xl text-white">Payment method</h1>
        {open && <Pop open={setOpen} />}
        <form className="flex flex-col gap-4 pr-2">
          <div className="flex h-32 flex-1 flex-col gap-2">
            <div className="border-bghover focus:border-bghover bg-bghover/50 flex items-center gap-4 rounded-md border-2 p-3 text-white transition-colors focus:outline-none">
              <input
                type="radio"
                name="payment"
                className="accent-bghover ml-4 h-8 w-10"
                value="Pay pal"
                checked={checkPay === "Pay pal"}
                onChange={() => setCheckPay("Pay pal")}
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-[14px]">Pay pal</h1>
                <h1 className="text-[14px] text-neutral-50/50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </h1>
              </div>
              <img src="/man.svg" className="h-20 w-44" />
            </div>
            <div className="border-bghover focus:border-bghover bg-bghover/50 flex flex-col items-center gap-4 rounded-md border-2 p-3 text-white transition-colors focus:outline-none">
              <div className="border-bghover focus:border-bghover bg-bghover/50 flex flex-col items-center gap-4 rounded-md border-2 p-3 text-white transition-colors focus:outline-none">
                <div className="flex flex-1 items-center gap-4">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-bghover ml-4 h-8 w-10"
                    value="Credit"
                    checked={checkPay === "Credit"}
                    onChange={() => setCheckPay("Credit")}
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[14px]">Credit Card</h1>
                    <h1 className="text-[14px] text-neutral-50/50">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-1 flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-1 gap-4">
                    <input
                      type="text"
                      className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
                      placeholder="0000 0000 0000 0000"
                      disabled={true}
                    />
                    <div className="flex gap-4">
                      <input
                        type="text"
                        className="border-bghover focus:border-bghover bg-bghover/50 w-24 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
                        placeholder="MM/YY"
                        disabled={true}
                      />
                      <input
                        type="text"
                        className="border-bghover focus:border-bghover bg-bghover/50 w-20 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
                        placeholder="CVV"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="border-bghover focus:border-bghover bg-bghover/50 flex-1 rounded-md border-2 p-2 text-white transition-colors focus:outline-none"
                    placeholder="Address 2"
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <hr className="border-10blue"></hr>
        <div className="flex gap-3">
          <button
            onClick={() => page("shipping")}
            className="bg-cardbtn w-40 cursor-pointer rounded-2xl p-2 text-2xl text-white"
          >
            back
          </button>
          <button
            onClick={handlePayment}
            className="bg-cardbtn w-40 cursor-pointer rounded-2xl p-2 text-2xl text-white"
          >
            buy now
          </button>
        </div>
      </div>
      <Summary pages={page} />
    </>
  );
}

export default Payment;

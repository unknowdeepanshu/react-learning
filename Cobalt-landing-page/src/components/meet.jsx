import { Smart } from "../svg/smarForcasting";

export function Meet() {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="w-full py-10">
          <div className="flex gap-4 bg-black px-4 pt-4 pb-2 sm:px-8 md:px-12 lg:px-8">
            <div className="flex-1">
              <h1 className="max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-[3.1rem] font-bold text-transparent">
                Meet Genius
              </h1>
              <h1 className="mt-2 max-w-[35rem] text-[18px] font-bold text-neutral-500">
                Our AI-driven assistant is designed to decode complex financial
                figures and{" "}
                <span className="text-white">illuminate key trends</span> in
                your business.
              </h1>
            </div>
          </div>
          <div className="mt-20 w-full">
            <div className="relative flex w-full justify-between px-4 sm:px-8 md:px-12 lg:px-8">
              <div className="flex flex-1 flex-col gap-4 lg:flex-row">
                <div className="flex-1 rounded-3xl bg-neutral-800/35">
                  <div className="flex flex-col px-5 pt-8">
                    <Smart />
                    <h1 className="mt-8 text-[18px]">Smart forecasting</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      Harness the power of Cobalt's predictive analytics to map
                      out the financial future of your business.
                    </p>
                  </div>
                </div>
                <div className="flex-1 rounded-3xl bg-neutral-800/35">
                  <div className="flex flex-col px-5 pt-8">
                    <div className="relative flex h-[17rem] w-full flex-col items-center justify-center p-10">
                      <div className="rounded-xl bg-cyan-400/10 p-2">
                        <div className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-zinc-200 shadow-[inset_0px_1px_1px_theme(colors.white/30%),0px_1px_3px_theme(colors.cyan.500/35%),0px_0px_0px_1px_theme(colors.cyan.500)] select-none">
                          Hey! How can I help you?
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-4 flex justify-center px-4">
                        <div className="flex h-10 w-full max-w-md items-center justify-between gap-4 rounded-[0.5rem] bg-neutral-800 p-4">
                          ✨
                          <span>
                            <span className="inline">
                              What's our break-even point?
                            </span>
                            <div className="inline-block h-5 w-px translate-y-1 bg-zinc-500"></div>
                          </span>
                          <div className="text[12px] rounded-[0.7rem] bg-black p-2 text-[0.7rem] text-white">
                            Ask Genius
                          </div>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-8 text-[18px]">Chat with Genius</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      Just ask. With Genius by your side, navigating the
                      financial maze becomes intuitive and effortless.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

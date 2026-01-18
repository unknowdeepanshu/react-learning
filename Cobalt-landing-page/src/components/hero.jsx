export function Hero() {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="mt-[10rem] flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40">
          <h1 className="max-w-4xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-8xl tracking-tight text-transparent">
            <span> Unleash the power of intuitive finance</span>
          </h1>
          <p className="mt-8 max-w-xl text-center text-neutral-400 selection:bg-white">
            Say goodbye to the outdated financial tools. Every small business
            owner, regardless of the background, can now manage their business
            like a pro. Simple. Intuitive. And never boring.
          </p>
          <div className="flex justify-center">
            <button className="relative mt-4 cursor-pointer overflow-hidden rounded-4xl border-[1px] border-neutral-700 bg-black px-4 py-2 text-[0.9rem] text-neutral-400 hover:text-white hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
              Join the waitlist
            </button>
          </div>
          <p className="my-6 cursor-pointer text-[0.9rem] text-neutral-400 hover:text-white">
            Learn more
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-down text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-100"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

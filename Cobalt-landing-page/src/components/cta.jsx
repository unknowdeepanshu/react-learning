export function CTA() {
  return (
    <>
      <div className="flex flex-col items-center px-4 py-40 sm:px-8 md:px-12 lg:px-8">
        <h1 className="max-w-[36rem] bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent">
          <span> See where financial automation can take your business.</span>
        </h1>
        <p className="mt-8 max-w-xl text-center text-neutral-400 selection:bg-white">
          The first financial tool you'll love. And the last one you'll ever
          need.
        </p>
        <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40">
          <button className="relative mt-4 cursor-pointer overflow-hidden rounded-4xl border-[1px] border-neutral-700 bg-black px-4 py-2 text-[0.9rem] text-neutral-400 hover:text-white hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
            Join the waitlist
          </button>
        </div>
      </div>
    </>
  );
}

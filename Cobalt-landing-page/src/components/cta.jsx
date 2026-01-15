export function CTA(){
    return(
        <>
        <div
        className="flex flex-col items-center py-40"
        >
            <h1
            className="text-4xl max-w-[36rem] tracking-tight text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50  to-neutral-500 font-bold"
            >
            <span> See where financial automation can take your business.</span>
            </h1>
            <p
            className="text-neutral-400 mt-8 max-w-xl text-center selection:bg-white"
            >
                The first financial tool you'll love. And the last one you'll ever need.
            </p>
            <div
            className="flex justify-center"
            >
                
                <button
                className="relative mt-4 overflow-hidden rounded-4xl px-4 py-2 border-neutral-700 border-[1px] cursor-pointer text-neutral-400  bg-black
                    hover:text-white text-[0.9rem] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                >
                    <div
                    className="absolute bottom-0 inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-sky-600 to-transparent "
                    ></div>
                        Join the waitlist
                </button>  
            </div>
            </div>
            </>
    )
}

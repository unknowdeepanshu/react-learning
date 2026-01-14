export function Hero(){
    return(
        <>
        <div
        className="flex flex-col items-center mt-[10rem]"
        >
            <h1
            className="text-8xl max-w-4xl tracking-tight text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50  to-neutral-500"
            >
            <span> Unleash the power of intuitive finance</span>
            </h1>
            <p
            className="text-neutral-400 mt-8 max-w-xl text-center selection:bg-white"
            >
                Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their 
                business like a pro. Simple. Intuitive. And never boring.
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
            <p
            className="text-[0.9rem] text-neutral-400 my-6 hover:text-white cursor-pointer"
            >
                    Learn more
                <div
                className="flex justify-center "
                >
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" 
                    class="lucide lucide-arrow-down text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-100">
                        <path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path>
                    </svg>
                </div>
            </p>
            
        </div>
        </>
    ) 
}
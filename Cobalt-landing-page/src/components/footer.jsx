export function Footer(){
    return(
        <>
        <div
        className="w-full px-20 mb-10"
        >
            <div
            className="flex flex-col gap-4"

            ><div 
            className="h-px bg-blue-400 w-full"
            ></div>
                <div
                className="text-[1rem] text-neutral-400 flex gap-3 justify-between"
                >
                 <div
                 className="flex gap-2"
                 >
                       <span
                    className="hover:text-white"
                    >
                        © 2025 Cobalt Financial Technologies Inc.
                    </span>
                    <a
                    className="hover:text-white"
                    >
                        Privacy Policy
                    </a>
                    <a
                    className="hover:text-white"
                    >
                        Terms of Use
                    </a>
                 </div>
                 <div
                 className="flex gap-8"
                 >
                    <a>
                        <svg fill="currentColor" viewBox="0 0 16 16" aria-label="X" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 group-hover:hidden" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"></path></svg>
                    </a>
                    <a>
                        <svg fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn" class="h-5 w-5" aria-hidden="true"><path d="M21 1.5H3c-.83 0-1.5.68-1.5 1.51V21c0 .83.67 1.51 1.5 1.51h18c.82 0 1.5-.68 1.5-1.51V3c0-.83-.68-1.51-1.5-1.51Zm-13.15 18H4.73V9.48h3.12V19.5ZM6.29 8.1a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm13.22 11.4h-3.1v-4.88c0-1.16-.03-2.65-1.63-2.65-1.62 0-1.87 1.26-1.87 2.57v4.96h-3.1V9.48h2.98v1.37h.04a3.28 3.28 0 0 1 2.95-1.62c3.15 0 3.73 2.08 3.73 4.78v5.49Z"></path></svg>
                    </a>
                    <a>
                        <svg fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook" class="h-5 w-5" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                    </a>
                 </div>
                
                </div>
                <div
                className="text-[0.8rem] text-neutral-600 w-[45rem] flex flex-col"
                >
                    <span>
                        Cobalt is a trademark or registered trademark of Cobalt Financial Technologies Inc. Any other trademarks are the property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, sponsorship of, or affiliation with Cobalt.
                    </span>
                    <span>
                        Cobalt is a financial technology company, not a bank. Banking services are provided by Celtic Bank and Evolve Bank & Trust®, Members FDIC.
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}
import { IconMenu } from "@tabler/icons-react";
import { useState } from "react";
export function Nav() {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="relative mx-auto flex max-w-4xl items-center justify-between bg-neutral-300 px-2 py-2 md:mt-4 md:rounded-full md:shadow-xl/20">
        <span>Logo</span>
        <div className="hidden items-center gap-4 text-[0.8rem] md:flex">
          <a href="#" className="hover:text-neutral-50">
            Home
          </a>
          <a href="#" className="hover:text-neutral-50">
            About
          </a>
          <a href="#" className="hover:text-neutral-50">
            Contact
          </a>
          <a href="#" className="hover:text-neutral-50">
            Tool
          </a>
        </div>
        <button onClick={() => setopen(!open)} className="md:hidden">
          <IconMenu className="md:hidden" stroke={2} />
        </button>
        {open && (
          <div className="absolute inset-x-0 top-15 mx-auto flex max-w-[90%] flex-col gap-4 rounded-2xl bg-neutral-100 p-4 text-neutral-950 md:hidden">
            <a href="#" className="hover:text-neutral-50">
              Home
            </a>
            <a href="#" className="hover:text-neutral-50">
              About
            </a>
            <a href="#" className="hover:text-neutral-50">
              Contact
            </a>
            <a href="#" className="hover:text-neutral-50">
              Tool
            </a>
          </div>
        )}
      </div>
    </>
  );
}

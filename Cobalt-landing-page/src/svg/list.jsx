export function List() {
  return (
    <>
      <div class="mb-4 h-[20rem] w-full overflow-hidden [mask:linear-gradient(transparent,black,transparent)]">
        <ul role="list" className="space-y-4 pt-2 pr-4 pl-2">
          <li class="relative flex gap-x-2">
            <div class="absolute -top-10 -bottom-6 left-0 flex w-6 justify-center">
              <div class="w-px bg-zinc-800"></div>
            </div>
            <div class="relative flex h-6 w-6 flex-none items-center justify-center">
              <div class="h-2 w-2 rounded-full bg-zinc-950 ring-1 ring-zinc-800"></div>
            </div>
            <div class="flex-auto rounded-md bg-zinc-900 p-3 ring-1 ring-zinc-400/10 select-none ring-inset">
              <div class="flex items-center gap-2">
                <div class="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-400/10">
                  <svg
                    class="h-2.5 w-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                  >
                    <path
                      d="M6.41 5c0 .65-.5 1.18-1.12 1.18-.63 0-1.13-.53-1.13-1.18 0-.65.5-1.18 1.13-1.18.62 0 1.12.53 1.12 1.18Z"
                      fill="#006ADC"
                    ></path>
                    <path
                      d="M8.8 7.06a4 4 0 0 1-3.52 2.16A4.13 4.13 0 0 1 1.25 5c0-2.33 1.8-4.22 4.03-4.22a4 4 0 0 1 3.53 2.19l.69-.32A4.76 4.76 0 0 0 5.28 0 4.9 4.9 0 0 0 .5 5c0 2.76 2.14 5 4.78 5 1.82 0 3.4-1.06 4.2-2.62l-.68-.32Z"
                      fill="#A3A7B1"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.29 8.13c1.65 0 2.98-1.4 2.98-3.13A3.06 3.06 0 0 0 5.3 1.87 3.06 3.06 0 0 0 2.3 5a3.06 3.06 0 0 0 2.99 3.13Zm0-.72c1.27 0 2.3-1.08 2.3-2.41a2.36 2.36 0 0 0-2.3-2.41A2.36 2.36 0 0 0 2.99 5a2.36 2.36 0 0 0 2.3 2.41Z"
                      fill="#A3A7B1"
                    ></path>
                  </svg>
                </div>
                <div class="text-sm/5 text-zinc-500">
                  Cobalt • <span class="text-xs/5">2h ago</span>
                </div>
              </div>
              <div class="ml-7">
                <p class="mt-1.5 text-xs/5 text-zinc-500">
                  💳 Monica is requesting a new card
                </p>
                <p class="text-xs/5 text-zinc-500">Card type: Virtual</p>
                <p class="text-xs/5 text-zinc-500">Spend limit: $500 monthly</p>
                <div class="mt-2 flex gap-2.5">
                  <button class="flex items-center justify-center rounded bg-zinc-700 px-1.5 py-0.5 text-xs text-zinc-300 transition hover:bg-zinc-800">
                    Approve
                  </button>
                  <button class="flex items-center justify-center rounded bg-zinc-700 px-1.5 py-0.5 text-xs text-zinc-300 transition hover:bg-zinc-800">
                    Decline
                  </button>
                  <button class="flex items-center justify-center rounded bg-zinc-700 px-1.5 py-0.5 text-xs text-zinc-300 transition hover:bg-zinc-800">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li class="relative flex gap-x-2">
            <div class="absolute top-0 -bottom-6 left-0 flex w-6 justify-center">
              <div class="w-px bg-zinc-800"></div>
            </div>
            <div class="relative flex h-6 w-6 flex-none items-center justify-center">
              <div class="h-2 w-2 rounded-full bg-zinc-950 ring-1 ring-zinc-800"></div>
            </div>
            <div class="flex-auto rounded-md bg-zinc-900 p-3 ring-1 ring-zinc-400/10 select-none ring-inset">
              <div class="flex items-center gap-2">
                <div class="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-400/10">
                  <svg
                    class="h-2.5 w-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                  >
                    <path
                      d="M6.41 5c0 .65-.5 1.18-1.12 1.18-.63 0-1.13-.53-1.13-1.18 0-.65.5-1.18 1.13-1.18.62 0 1.12.53 1.12 1.18Z"
                      fill="#006ADC"
                    ></path>
                    <path
                      d="M8.8 7.06a4 4 0 0 1-3.52 2.16A4.13 4.13 0 0 1 1.25 5c0-2.33 1.8-4.22 4.03-4.22a4 4 0 0 1 3.53 2.19l.69-.32A4.76 4.76 0 0 0 5.28 0 4.9 4.9 0 0 0 .5 5c0 2.76 2.14 5 4.78 5 1.82 0 3.4-1.06 4.2-2.62l-.68-.32Z"
                      fill="#A3A7B1"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.29 8.13c1.65 0 2.98-1.4 2.98-3.13A3.06 3.06 0 0 0 5.3 1.87 3.06 3.06 0 0 0 2.3 5a3.06 3.06 0 0 0 2.99 3.13Zm0-.72c1.27 0 2.3-1.08 2.3-2.41a2.36 2.36 0 0 0-2.3-2.41A2.36 2.36 0 0 0 2.99 5a2.36 2.36 0 0 0 2.3 2.41Z"
                      fill="#A3A7B1"
                    ></path>
                  </svg>
                </div>
                <div class="text-sm/5 text-zinc-500">
                  Cobalt • <span class="text-xs/5">52m ago</span>
                </div>
              </div>
              <div class="ml-7">
                <p class="mt-1.5 text-xs/5 text-zinc-500">
                  📈 Revenue increase alert
                </p>
                <p class="text-xs/5 text-zinc-500">
                  27% increase in the last 7 days
                </p>
              </div>
            </div>
          </li>
          <li class="relative flex gap-x-2">
            <div class="absolute top-0 -bottom-6 left-0 flex w-6 justify-center">
              <div class="w-px bg-zinc-800"></div>
            </div>
            <div class="relative flex h-6 w-6 flex-none items-center justify-center">
              <div class="h-2 w-2 rounded-full bg-zinc-950 ring-1 ring-zinc-800"></div>
            </div>
            <div class="flex-auto rounded-md bg-zinc-900 p-3 ring-1 ring-zinc-400/10 select-none ring-inset">
              <div class="flex items-center gap-2">
                <div class="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-400/10">
                  <svg
                    class="h-2.5 w-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                  >
                    <path
                      d="M6.41 5c0 .65-.5 1.18-1.12 1.18-.63 0-1.13-.53-1.13-1.18 0-.65.5-1.18 1.13-1.18.62 0 1.12.53 1.12 1.18Z"
                      fill="#006ADC"
                    ></path>
                    <path
                      d="M8.8 7.06a4 4 0 0 1-3.52 2.16A4.13 4.13 0 0 1 1.25 5c0-2.33 1.8-4.22 4.03-4.22a4 4 0 0 1 3.53 2.19l.69-.32A4.76 4.76 0 0 0 5.28 0 4.9 4.9 0 0 0 .5 5c0 2.76 2.14 5 4.78 5 1.82 0 3.4-1.06 4.2-2.62l-.68-.32Z"
                      fill="#A3A7B1"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.29 8.13c1.65 0 2.98-1.4 2.98-3.13A3.06 3.06 0 0 0 5.3 1.87 3.06 3.06 0 0 0 2.3 5a3.06 3.06 0 0 0 2.99 3.13Zm0-.72c1.27 0 2.3-1.08 2.3-2.41a2.36 2.36 0 0 0-2.3-2.41A2.36 2.36 0 0 0 2.99 5a2.36 2.36 0 0 0 2.3 2.41Z"
                      fill="#A3A7B1"
                    ></path>
                  </svg>
                </div>
                <div class="text-sm/5 text-zinc-500">
                  Cobalt • <span class="text-xs/5">Just now</span>
                </div>
              </div>
              <div class="ml-7">
                <p class="mt-1.5 text-xs/5 text-zinc-500">
                  🚨 Large expense alert
                </p>
                <p class="text-xs/5 text-zinc-500">Amount: $2,487.92</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

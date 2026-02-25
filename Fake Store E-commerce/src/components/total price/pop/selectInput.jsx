function Pop({ open }) {
  return (
    <>
      <div>
        <div className="error-alert flex h-12 w-full cursor-default items-center justify-between rounded-lg bg-[#232531] px-[10px] sm:h-14">
          <div className="flex gap-2">
            <div className="rounded-lg bg-white/5 p-1 text-[#d65563] backdrop-blur-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-white">Please select one field</p>
            </div>
          </div>
          <button
            onClick={() => open(false)}
            className="rounded-md p-1 text-gray-600 transition-colors ease-linear hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pop;

import {
  IconChevronRight,
  IconChevronDown,
  IconChevronLeft,
} from "@tabler/icons-react";
import Card from "../product card/card";

function Allproduct() {
  const number = [
    {
      num: "1",
    },
    {
      num: "2",
    },
    {
      num: "3",
    },
    {
      num: "4",
    },
    {
      num: "5",
    },
  ];

  const tags = [
    {
      name: "1",
    },
    {
      name: "2",
    },
    {
      name: "3",
    },
    {
      name: "4",
    },
    {
      name: "5",
    },
  ];
  return (
    <>
      <div className="bg-60sencondary">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white">
              WHAT ARE YOU LOOKING FOR?
            </h1>
            <h1 className="text-5xl font-bold text-white">Today ?</h1>
          </div>
        </div>
        <hr className="border-10blue max-w-full border-2"></hr>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex">
            <div className="w-50 p-3 text-white">
              <ul class="mx-auto flex max-w-[280px] flex-col gap-1">
                <li>
                  <details class="group">
                    <summary class="flex flex-col items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                      <div className="flex w-full flex-1 justify-between">
                        <span class="flex gap-2">
                          <span>Price range</span>
                        </span>
                        <IconChevronDown />
                      </div>

                      <hr className="border-Cline relative bottom-2 w-full flex-1 border-2"></hr>
                    </summary>

                    <article class="pb-4">
                      <ul class="mt-2 flex flex-col gap-4 pl-2">
                        <li class="flex gap-2">
                          <div className="flex flex-1 flex-col">
                            <div className="flex justify-between">
                              <span className="ml-3">min</span>
                              <span className="mr-3">max</span>
                            </div>
                            <div className="flex justify-between">
                              <input
                                type="number"
                                className="w-18 border-2 border-solid border-[#2D403F] bg-[#2D403F] p-2 text-white transition-colors duration-100 outline-none focus:border-[#2D403F]"
                                placeholder="0"
                              />
                              <input
                                type="number"
                                className="w-18 border-2 border-solid border-[#2D403F] bg-[#2D403F] p-2 text-white transition-colors duration-100 outline-none focus:border-[#2D403F]"
                                placeholder="1000"
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </article>
                  </details>
                </li>
                <li>
                  <details class="group">
                    <summary class="flex flex-col items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                      <div className="flex w-full flex-1 justify-between">
                        <span class="flex gap-2">
                          <span>Stock status</span>
                        </span>
                        <IconChevronDown />
                      </div>
                      <hr className="border-Cline relative bottom-2 w-full flex-1 border-2"></hr>
                    </summary>

                    <article class="px-4 pb-4">
                      <ul class="mt-4 flex flex-col gap-4 pl-2">
                        <li class="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              className="accent-bghover h-4 w-4"
                            />
                            <label>In stock</label>
                          </div>
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              className="accent-bghover h-4 w-4"
                            />
                            <label>Out stock</label>
                          </div>
                        </li>
                      </ul>
                    </article>
                  </details>
                </li>
                <li>
                  <details class="group">
                    <summary class="flex flex-col items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                      <div className="flex w-full flex-1 justify-between">
                        <span class="flex gap-2">
                          <span>Category</span>
                        </span>
                        <IconChevronDown />
                      </div>

                      <hr className="border-Cline relative bottom-2 w-full flex-1 border-2"></hr>
                    </summary>

                    <article class="px-4 pb-4">
                      <ul class="mt-4 flex flex-col gap-4 pl-2">
                        <li class="flex flex-col gap-2">
                          {tags.map((tag) => (
                            <div className="flex items-center gap-3">
                              <input
                                type="radio"
                                className="accent-bghover h-4 w-4"
                              />
                              <label>{tag.name}</label>
                            </div>
                          ))}
                        </li>
                      </ul>
                    </article>
                  </details>
                </li>
              </ul>
            </div>
            <div className="border-10blue relative bottom-8 border-l-4"></div>
            <div className="flex flex-1 flex-col">
              <div className="flex-1 p-4">
                <div className="flex flex-wrap gap-2">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>

              <div className="self-end">
                <ol className="flex justify-center space-x-1 text-xs font-medium text-white">
                  <li>
                    <a
                      href="/?page=1"
                      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                    >
                      <IconChevronLeft stroke={2} />
                    </a>
                  </li>

                  {number.map((nums) => (
                    <li>
                      <a
                        href="/?page=1"
                        className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                      >
                        {nums.num}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/?page=3"
                      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                    >
                      <IconChevronRight stroke={2} />
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allproduct;

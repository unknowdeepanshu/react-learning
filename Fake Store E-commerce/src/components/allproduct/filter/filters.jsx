import {
  IconChevronRight,
  IconChevronDown,
  IconChevronLeft,
} from "@tabler/icons-react";
function Filter({ list, onStockChange, stock, onTagChange }) {
  return (
    <>
      <ul className="mx-auto flex max-w-[280px] flex-col gap-1">
        <li>
          <details className="group">
            <summary className="flex flex-col items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
              <div className="flex w-full flex-1 justify-between">
                <span className="flex gap-2">
                  <span>Price range</span>
                </span>
                <IconChevronDown />
              </div>

              <hr className="border-Cline relative bottom-2 w-full flex-1 border-2"></hr>
            </summary>

            <article className="pb-4">
              <ul className="mt-2 flex flex-col gap-4 pl-2">
                <li className="flex gap-2">
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
          <details className="group">
            <summary className="flex flex-col items-center justify-between gap-2 p-2 font-medium hover:cursor-pointer">
              <div className="flex w-full justify-between">
                <span>Stock status</span>
                <IconChevronDown />
              </div>
              <hr className="border-Cline w-full border-2" />
            </summary>

            <article className="px-4 pb-4">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="stockStatus"
                    value="In Stock"
                    checked={stock === "In Stock"}
                    onChange={(e) => onStockChange(e.target.value)}
                  />
                  In stock
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="stockStatus"
                    value="Low Stock"
                    checked={stock === "Low Stock"}
                    onChange={(e) => onStockChange(e.target.value)}
                  />
                  Low stock
                </label>
              </div>
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
                  <div className="flex items-center gap-3">
                    <input
                      name="tag"
                      type="radio"
                      value="All"
                      onChange={(e) => onTagChange(e.target.value)}
                      className="accent-bghover h-4 w-4"
                    />
                    <label>All</label>
                  </div>
                  {list.map((Tag) => (
                    <div className="flex items-center gap-3">
                      <input
                        name="tag"
                        type="radio"
                        value={Tag.name}
                        onChange={(e) => onTagChange(e.target.value)}
                        className="accent-bghover h-4 w-4"
                      />
                      <label>{Tag.name}</label>
                    </div>
                  ))}
                </li>
              </ul>
            </article>
          </details>
        </li>
      </ul>
    </>
  );
}

export default Filter;

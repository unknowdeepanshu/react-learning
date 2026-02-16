import {
  IconChevronRight,
  IconChevronDown,
  IconChevronLeft,
} from "@tabler/icons-react";
function Paggination({ num }) {
  return (
    <>
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

          {num.map((nums) => (
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
    </>
  );
}

export default Paggination;

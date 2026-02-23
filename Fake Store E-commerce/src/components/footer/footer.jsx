import { Link } from "react-router";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
export default function Footer() {
  return (
    <footer className="bg-30blue border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="/logo.png" className="mr-3 h-44 w-96" alt="Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="flex gap-4 font-medium text-gray-500">
                <li className="mb-4">
                  <Link
                    to="https://github.com/unknowdeepanshu"
                    className="hover:underline"
                  >
                    <IconBrandGithub stroke={2} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://x.com/DipanshuVi6799"
                    className="hover:underline"
                  >
                    <IconBrandX stroke={2} />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-10blue my-6 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2026
            <a href="https://x.com/DipanshuVi6799" className="hover:underline">
              Dipanshuvishwakarma
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
            <a href="https://x.com/DipanshuVi6799" className="text-gray-500">
              <IconBrandX stroke={2} />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com/unknowdeepanshu"
              className="text-gray-500"
            >
              <IconBrandGithub stroke={2} />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

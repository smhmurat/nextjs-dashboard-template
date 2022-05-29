import React from "react";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="mb-24 md:mb-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-20 shadow-lg">
        <div className="h-full flex items-center justify-center w-full md:w-1/5">
          <Link href="/">
            <a className="text-3xl text-primary-color">Dashboard</a>
          </Link>
        </div>
        <div className="h-full flex items-center justify-center w-full">
          <div>
            <button
              type="submit"
              className="flex items-center justify-center gap-1 bg-primary-color text-white font-medium rounded-tl-md rounded-bl-md px-4 py-2"
            >
              <ChevronUpIcon className="h-5 w-5" />
              <span>Planı Yükselt</span>
            </button>
          </div>
          <div>
            <input
              type="search"
              className="w-72 border-2 border-secondary-color py-2 outline-none"
              placeholder="Arama yap..."
            />
          </div>
        </div>
        <div className="h-full flex items-center justify-center w-full md:w-1/5">
          Right
        </div>
      </div>
    </div>
  );
};

export default Header;

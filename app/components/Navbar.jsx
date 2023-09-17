"use client";

import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <div className="nav">
      <>
        <div className="mx-auto px-4 sm:px-6 lg:px-12 lg:py-12">
          <div className="flex justify-between h-16">
            <div className="flex justify-between w-full">
              <div className="flex items-center">
                <Link href="/">
                  <h1 className="text-2xl font-medium">
                    Aaron <span className="text-teal-500"> Alexander</span>
                  </h1>
                </Link>
              </div>
              <div className="flex items-center">
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

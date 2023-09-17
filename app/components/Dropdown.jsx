"use client";

import { Menu, Transition } from "@headlessui/react";

export default function Dropdown() {
  const links = [
    { href: "/#about", label: "About Me" },
    { href: "/#education", label: "Education" },
    { href: "/#experience", label: "Experience" },
    { href: "/#resume", label: "Resume" },
  ];
  //   Goes in className="focus:outline-none absolute origin-top-left w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg"
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Links
        </Menu.Button>
        <Transition
          enter="transition duration-300 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ">
            <div className="px-1 py-1 ">
              {links.map((link) => (
                <Menu.Item as="a" key={link.href} href={link.href}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {link.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

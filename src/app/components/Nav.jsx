"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function nav() {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Services", href: "/Services", current: false },
    { name: "Resume", href: "/Resume", current: false },
    { name: "Projects", href: "/Work", current: false },
  ]);
  const handleClick = (clickedItem) => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === clickedItem.name,
    }));
    setNavigation(updatedNavigation);
  };
  return (
    <Disclosure as="nav" className=" pt-4 sticky top-0 bg-myBlack z-50">
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between px-10">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white   focus:outline-none  focus:ring-none ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden "
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block border-2 border-myGreen"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center sm:">
              <h1 className="uppercase text-white font-bold md:text-2xl text-base">
                <span className="text-myGreen">fares.</span>
                portfolio
              </h1>
            </div>
            <div className="hidden  sm:block ml-auto mr-0">
              <div className="flex space-x-4 ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => handleClick(item)}
                    className={classNames(
                      item.current
                        ? " text-myGreen font-bold underline underline-offset-8"
                        : "hover:text-myGreen text-white",
                      "block rounded-md px-3 py-2 text-md lg:text-2xl font-bold "
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden  absolute w-full bg-myBlack pl-6 group-data-[open]:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2  border-b border-myGreen">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              onClick={() => handleClick(item) }
              className={classNames(
                item.current ? " text-myGreen" : " text-white ",
                "block rounded-md px-3 py-2 text-md font-bold"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

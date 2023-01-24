import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MyPopover } from "../components/MyPopover";
import { NAVBAR } from "../constants";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#11081f] px-6 fixed left-0 right-0">
      {({ open }) => (
        <>
          {/* Menu */}
          <div className="mx-auto md:max-w-screen-lg w-full">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Left side */}
              <div className="flex flex-1 items-stretch justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      class="block h-6 w-auto lg:hidden"
                      src={NAVBAR.icon}
                      alt="Your Company"
                      href="/"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      class="hidden h-6 w-auto lg:block"
                      src={NAVBAR.icon}
                      alt="Your Company"
                      href="/"
                    />
                  </Link>
                </div>

                <div className="hidden md:ml-8 md:block">
                  <div className="flex">
                    {NAVBAR.menuItems.map((item) => {
                      return (
                        <MyPopover
                          title={item.title}
                          subItems={item.subItems}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="hidden md:flex md:items-center md:static md:inset-auto md:ml-6 md:pr-0">
                {/* Links */}
                <div className="flex gap-4">
                  {NAVBAR.links.map((item) => {
                    return (
                      <Button size="small" type={item.type}>
                        {item.text}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Panel */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

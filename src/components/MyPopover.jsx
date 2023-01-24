import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Fragment, useRef } from "react";
import { Link } from "react-router-dom";

export const MyPopover = ({ title, subItems }) => {
  const buttonRef = useRef(null);
  const timeoutDuration = 200;
  let timeout;

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };

  const onMouseLeave = (open) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };
  return (
    <div className="w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <div onMouseLeave={onMouseLeave.bind(null, open)}>
              <Popover.Button
                ref={buttonRef}
                className={`
                group inline-flex items-center rounded-md px-3 py-2 text-base text-white hover:bg-white hover:bg-opacity-10 border-none focus:outline-none`}
                onMouseEnter={onMouseEnter.bind(null, open)}
                onMouseLeave={onMouseLeave.bind(null, open)}
              >
                <span className="truncate text-sm font-normal">{title}</span>
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-10 z-10 mt-0 w-screen max-w-sm -translate-x-10 transform px-4 sm:px-0 py-2 md:max-w-xl">
                  <div
                    className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                    onMouseEnter={onMouseEnter.bind(null, open)}
                    onMouseLeave={onMouseLeave.bind(null, open)}
                  >
                    {/* Arrow popper */}
                    <div className="h-4 w-4 bg-white rounded-sm rotate-45 top-1 left-6 mx-auto absolute"></div>
                    {/* Within Popover */}
                    <div className="relative grid gap-5 bg-white p-10 lg:grid-cols-1">
                      {subItems.map((item) => (
                        <div key={item.name} className="grid gap-5">
                          <Link
                            to="/info"
                            className="flex flex-wrap items-center"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <img src={item.icon} />
                            </div>
                            <div className="ml-4">
                              <p className="text-lg font-bold leading-5 text-gray-700 hover:underline hover:text-[#452475]">
                                {item.name}
                              </p>
                              <p className="text-sm text-[#635e69]">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                          {item.links ? (
                            <div className="grid grid-cols-3 gap-2 w-full pl-16 text-gray-700">
                              {item.links.map((link) => (
                                <Link
                                  to="/info"
                                  key={link}
                                  className="flex gap-1 items-center hover:underline hover:cursor-pointer hover:text-[#452475]"
                                >
                                  <p className="text-sm">{link}</p>
                                  <ChevronRightIcon className="h3 w-3" />
                                </Link>
                              ))}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          </>
        )}
      </Popover>
    </div>
  );
};

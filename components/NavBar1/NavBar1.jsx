import Image from "next/image";
import Link from "next/link";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import ThemeToggler from "../ThemeToggler";
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Domestic', href: '/' },
  { name: 'Commercial', href: '/' },
  { name: 'Car Charging', href: '/' },
  { name: 'Making Good', href: '/' },
  { name: 'CCTV and Intruder Alarms', href: '/' },
]

export default function NavBar1() {
  return (
    <div 
      style={{
        backgroundColor:  "#ad1",
        borderRadius: "1px",
        border: "1px solid black",
        fontSize: "1.1rem",
        zIndex: 1030,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        marginTop: "3.1rem",
      }}
    >
      <div className="mx-auto max-w-7xl">

        <Popover>
          <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                <div className="flex w-full text-black items-center justify-between md:w-auto">
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className=" hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-black hover:text-gray-100">
                    {item.name}
                  </a>
                ))}

              </div>
<ThemeToggler/>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

      </div>
    </div>
  )
}
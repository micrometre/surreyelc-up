import Image from 'next/image'
import Link from 'next/link'
import CopyRight from '../Copyright'
import styles from "./Footer.module.css";




export  default function Footer() {
  return (
    <div className=" bg-gray-300 rounded-lg dark:bg-black">
      <div className="relative flex justify-start md:justify-center md:items-end ">
        <div className="flex pt-16 md:pt-32 lg:pt-4xl:pt-96   px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
          <div className="flex  flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
            <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
              <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6  text-gray-900 dark:text-white  ">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 ">Contact Us</h2>
                <button className="text-left text-base hover:text-gray-400 leading-none">
                  info@electricalsurrey.com
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none ">
                  07849 721448 Mobile
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none ">
                  07849 721460 Mobile
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none ">
                  01932 886593 Office
                </button>
              </div>
              <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5">Services</h2>
                <button className="text-left text-base hover:text-gray-400 leading-none ">
                  Car Cahrging
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none ">
                  CCTV and Intruder Alarms
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none">
                  Domestic
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none">
                  Commercial
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none ">
                  External
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none ">
                </button>
              </div>
              <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 ">About Us</h2>
                <button className="text-base text-left hover:text-gray-400 leading-none ">
                  Making Good
                </button>
                <button className="text-base text-left hover:text-gray-400 leading-none ">
                  Business Hours
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 flex  xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
            <CopyRight />
            <div className="mt-10 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
              <button className="text-base leading-none  hover:text-gray-300">
                <Link href="/privacy">
                  Privacy Policy
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}





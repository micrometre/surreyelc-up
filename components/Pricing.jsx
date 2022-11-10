import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-20 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <motion.div
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: .2
                }
              }}
            >
              <>
                  <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                      <div className="mx-2 w-72 lg:mb-0 mb-8">
                        <div>
                          <Image
                            src="/10.webp"
                            width={145}
                            height={165}
                            alt="Free Plan"
                          />
                        </div>
                        <div className="">
                          <div className="p-4">
                            <p className="text-xs text-black dark:text-white mt-0">
                              The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: .2
                }
              }}
            >
              <>
                  <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                      <div className="mx-2 w-72 lg:mb-0 mb-8">
                        <div>
                          <Image
                            src="/8.webp"
                            width={145}
                            height={165}
                            alt="Free Plan"
                          />
                        </div>
                        <div className="">
                          <div className="p-4">
                            <p className="text-xs  text-black dark:text-white mt-0 ">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: .2
                }
              }}
            >
              <>
                  <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                      <div className="mx-2 w-72 lg:mb-0 mb-8">
                        <div>
                          <Image
                            src="/16.webp"
                            width={145}
                            height={165}
                            alt="Free Plan"
                          />
                        </div>
                        <div className="">
                          <div className="p-4">
                            <p className="text-xs  text-black dark:text-white mt-0">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

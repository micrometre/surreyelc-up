import Image from 'next/image'

import {  motion,  useTransform, useMotionValue} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "./Moto.module.css";

export default function Moto() {

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  return (
    <div className=
    {styles.externalContainer}>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      >
   <div className="relative overflow-hidden bg-white   dark:bg-gray-800 "  id="promo">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight  text-gray-800 dark:text-gray-200 sm:text-6xl">
            Surrey electrical and car charging offer a full electrical service for all domestic and commercial properties.
            </h1>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="rounded-lg sm:opacity-0 lg:opacity-100">
                      <Image
                                src="/9.webp"
                                alt="About picture"
                                width={500}
                                height={300}
                            />
                      </div>
                      <div className="rounded-lg">
                      <Image
                                src="/13.webp"
                                alt="About picture"
                                width={500}
                                height={300}
                            />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="rounded-lg">
                      </div>
                      <div className="rounded-lg">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>



      </motion.div>
    </div>
  );
}
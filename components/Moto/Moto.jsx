import Image from 'next/image'

import { motion, useTransform, useMotionValue } from 'framer-motion';
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
        <div className="relative overflow-hidden" id="promo">
          <h1 className="font text-4xl font-bold tracking-tight  text-gray-100 dark:text-gray-100 sm:text-6xl">
            Full electrical service for all domestic and commercial properties.
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
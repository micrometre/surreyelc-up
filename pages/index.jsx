import { motion } from "framer-motion";
import Layout from '../components/layout'
import Heading from '../components/Heading'
import Moto from "../components/Moto/Moto";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import SeoHead from "../components/SeoHead";
import Header from "../components/Layout/Header";
import { Link as LinkScroll } from "react-scroll";
const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Layout>
          <motion.section
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={content}
              animate="animate"
              initial="initial"
            >
              <motion.div
                variants={title}
              >
                <Heading />
                <Moto />
                <Hero />
              </motion.div>
            </motion.div>
          </motion.section>
        </Layout>
      </div>
      <style jsx>{`
`}</style>

      <style jsx global>{`
body{
}
`}</style>



    </div>

  )
}
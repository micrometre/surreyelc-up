import Head from "next/head";
import NavBar1 from '../components/NavBar1'
import NavBar2 from '../components/NavBar2'

import Footer from "../components/Footer";

export const siteTitle = "Electrical specialists serving surrey and surrounding areas.";

export default function Layout({ children }) {
  return (
    <div className="section">
      <Head>

      <link rel="icon" href="/images/logo.webp" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Electrical specialists serving surrey and surrounding areas.."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="Electricalsurrey  Ltd"
          content={siteTitle}
        />


        <title>{siteTitle}</title>
      </Head>
      <NavBar2 />
      <NavBar1 />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

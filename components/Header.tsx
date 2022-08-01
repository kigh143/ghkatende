import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const Header: NextPage<any> = ({ title, description, keywords }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"
          defer
        ></Script>
      </Head>
      <section className="w-full px-8 text-gray-700 bg-white shadow-md border-b-1">
        <div className="container flex flex-col flex-wrap items-center justify-between py-2 mx-auto md:flex-row max-w-7xl ">
          <Link
            href="/"
            className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
          >
            <span className=" cursor-pointer text-xl font-black leading-none text-gray-900 select-none logo">
              GHK.
            </span>
          </Link>

          <div className="relative flex flex-col md:flex-row">
            <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
              <Link
                href="/"
                className="leading-6 text-gray-600 hover:text-gray-900"
              >
                <span className=" cursor-pointer mx-2">About</span>
              </Link>
              <Link
                href="/projects"
                className="leading-6 text-gray-600 hover:text-gray-900"
              >
                <span className="cursor-pointer mx-6">Case Studies</span>
              </Link>
              <Link
                href="/resume"
                className="leading-6 text-gray-600 hover:text-gray-900"
              >
                <span className="cursor-pointer  mx-2">Resume</span>
              </Link>
              <Link
                href="/retooling"
                className="leading-6 text-gray-600 hover:text-gray-900"
              >
                <span className="mx-2 cursor-pointer ">Retooling</span>
              </Link>
              <a
                href="https://ghkatende.hashnode.dev/"
                target={"_blank"}
                className="cursor-pointer leading-6 text-gray-600 md:mr-6 hover:text-gray-900"
              >
                <span className="mx-2 cursor-pointer ">Blog</span>
              </a>
            </nav>
            <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
              <a
                href="mailto:ghkatende@gmail.com"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

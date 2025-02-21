"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <motion.div
                className="mx-auto max-w-[800px] text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1
                  className="mb-5 text-3xl font-bold leading-tight text-blue-400 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                    filter: "drop-shadow(1px 1px 2px rgba(255,255,255,0.7))",
                  }}
                >
                  Welcome to{" "}
                  <strong
                    className="text-orange-500 transition-all duration-300  hover:scale-150 hover:text-blue-500"
                    style={{
                      textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                      filter: "drop-shadow(1px 1px 2px rgba(255,255,255,0.7))",
                    }}
                  >
                    Dimas BR
                  </strong>
                </h1>
                <p
                  className="mb-12 text-base !leading-relaxed text-black dark:text-white sm:text-lg md:text-xl"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                    filter: "drop-shadow(1px 1px 2px rgba(255,255,255,0.7))",
                  }}
                >
                  Specialist on Property Appraisal, Web Development, Data
                  Analysis, IT Support, Web Scraping, Logo Design.
                </p>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <Link
                      href="https://nextjstemplates.com/templates/saas-starter-startup"
                      className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-green-700/80"
                    >
                      About
                    </Link>
                  </motion.div>{" "}
                  <br />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <Link
                      href="https://github.com/NextJSTemplates/startup-nextjs"
                      className="rounded-lg bg-orange-400 px-8 py-4 
                     text-base font-semibold text-white duration-300 ease-in-out hover:bg-green-700/80"
                    >
                      Contact Me
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Efek Fade-in untuk Gambar */}
        <motion.div
          className="absolute right-0 top-0 z-[-1] h-[556px] w-[450px] opacity-30 lg:opacity-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            src="/images/dimasnih.png"
            alt="Your Photo"
            width={450}
            height={556}
            className="object-cover"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;

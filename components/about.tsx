"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// counter
import CountUp from "react-countup";
// variants
import { fadeIn } from "@/variants";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <div className="container  mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex w-1/2 xl:flex-row justify-center z-10">
          Hello
        </div>
        <div className="flex-1 flex w-1/2 flex-col justify-center  z-10">
          <div className="container  mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
            <div className="flex-1 flex flex-col justify-center  z-10">
              <h2>
                <span className="text-accent">Empowering</span> Talent: A Path
                to Excellence.
              </h2>
              <p>
                Accelerate career opportunities for individuals from
                underprivileged backgrounds, empowering dreams and
                transforming lives.
              </p>

              <div className="flex-1 flex flex-col justify-evenly z-10">
                <motion.h2
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h3 text-2xl font-semibold mt-10"
                >
                  <span className="text-accent">Our Goals</span>
                </motion.h2>
                {/* counters */}
                <motion.div
                  variants={fadeIn("right", 0.6)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
                >
                  <div className="flex flex-1 xl:gap-x-6 z-10">
                    {/* experience */}
                    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                        <CountUp start={0} end={10} duration={5} />
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        College Prospects into University
                      </div>
                    </div>
                    {/* clients */}
                    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                        <CountUp start={0} end={1000} duration={3} />
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        Laptops to Schools
                      </div>
                    </div>
                    {/* projects */}
                    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                        <CountUp start={0} end={50} duration={5} />
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        Mentor Graduate
                      </div>
                    </div>
                    {/* awards */}
                    <div className="relative flex-1">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                        £<CountUp start={0} end={100} duration={3} />K
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        School Loans/Fees
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, watching movies, and playing with my dog. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am
          currently learning about{" "}
          <span className="font-medium">history and philosophy</span>. I'm also
          learning how to play the guitar.
        </p>
      </div>
    </motion.section>
  );
}

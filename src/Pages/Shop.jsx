import { Hero } from "../Components/Hero/Hero";
import { NewCollections } from "../Components/NewCollections";
import { NewsLetter } from "../Components/NewsLetter";
import { Offers } from "../Components/Offers/Offers";
import { Popular } from "../Components/Popular";
import { AnimatePresence, easeInOut, motion, useInView } from "framer-motion";
import { newArrow } from "../assets";
import { useRef } from "react";

export function Shop() {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView0 = useInView(ref0);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  const isAnyInView = isInView0 || isInView1 || isInView2 || isInView3;

  return (
    <div className="relative">
      <AnimatePresence>
        {" "}
        {isAnyInView && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            onClick={() => scrollTo(0, 0)}
            className="fixed bottom-[5vh] right-[5vw] outline-none border-none
    rounded-full p-5 bg-orange-500 z-20"
          >
            <img
              src={newArrow}
              alt="^"
              className="h-5  -rotate-90 filter invert"
            />
          </motion.button>
        )}
      </AnimatePresence>
      <section className="bg-hero padding-x">
        <Hero />
      </section>
      <section ref={ref0} className="padding max-sm:mt-20">
        <Popular />
      </section>
      <section ref={ref1} className="padding">
        <Offers />
      </section>
      <section ref={ref2} className="padding">
        <NewCollections />
      </section>
      <section ref={ref3} className="padding">
        <NewsLetter />
      </section>
    </div>
  );
}

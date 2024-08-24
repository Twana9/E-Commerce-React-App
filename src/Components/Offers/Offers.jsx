import { exclusiveImage } from "../../assets";
import "./Offers.css";
import { motion } from "framer-motion";

export function Offers() {
  return (
    <div
      className="offers flex items-center gap-20  bg-hero
    h-[60vh] m-auto max-container max-xl:gap-14
    max-lg:h-[90vh] max-lg:flex-col 
    max-lg:gap-5 max-sm:overflow-hidden 
    max-lg:overflow-hidden"
    >
      <motion.div
        initial={{ x: "-200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="offers-left flex-1 flex flex-col gap-12 p-20
      justify-center max-xl:gap-6 max-lg:items-center max-sm:gap-1
      max-lg:gap-2"
      >
        <h1
          className="font-poppins text-[#171717] text-6xl
        font-medium max-xl:text-4xl max-lg:text-[38px] max-md:2xl 
        max-xl:leading-10 max-sm:text-3xl"
        >
          Exclusive
        </h1>
        <h1
          className="font-poppins text-[#171717] text-6xl
        font-medium whitespace-nowrap max-xl:text-4xl max-lg:text-[38px] max-md:2xl  
        max-xl:leading-10 max-lg:mb-5 max-sm:text-3xl"
        >
          Offers For You
        </h1>
        <p
          className="font-poppins text-slate-700 text-xl
        font-medium max-xl:text-lg max-xl:mt-5 max-sm:text-sm
        max-sm:mt-1 whitespace-nowrap max-lg:mt-0.5"
        >
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <a
          href="https://www.google.com/search?sca_esv=0dc2904424ef13c1&sca_upv=1&sxsrf=ADLYWIK3WzD9lki88FZW9NtVk7Y8tgMv4g:1723961711092&q=exclusive+clothing+offers&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jo6Ttnu6iRjjgGjARfLolnBxwfCgbMJhqRa3BtPLzlIdwE1cU58W5aNPjvgQAqxhFfItrlfNzOKuaaMyldVwSol2h6U4QUx3ax9SmhSWK6kCZHBTHE&sa=X&ved=2ahUKEwjvn5Xr8f2HAxVm_rsIHT0lKH0Q0pQJegQIExAB&biw=1366&bih=633&dpr=1"
          target="_blank"
        >
          <button
            className="w-[280px] h-14 bg-orange-500 text-white
        rounded-full font-palanquin text-xl font-medium border-none

        hover:bg-orange-600 max-xl:mt-6 max-sm:w-[200px] max-sm:h-10
        max-sm:text-lg max-lg:mt-0.5 transform active:translate-y-0.5"
          >
            Check Now
          </button>
        </a>
      </motion.div>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="offers-right flex-1 flex justify-center items-end 
      pt-24 max-lg:pt-0"
      >
        <img
          src={exclusiveImage}
          alt="bad picture"
          className="max-xl:h-[473px] max-xl:w-[300px]
          max-sm:h-[300px] max-sm:w-[170px] max-sm:mt-[-60px]
          "
        />
      </motion.div>
    </div>
  );
}

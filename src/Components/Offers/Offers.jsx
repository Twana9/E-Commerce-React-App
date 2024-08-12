import { exclusiveImage } from "../../assets";
import "./Offers.css";

export function Offers() {
  return (
    <div
      className="offers flex items-center gap-20  bg-hero
    h-[60vh] m-auto max-container max-xl:gap-14
    max-lg:h-[90vh] max-lg:flex-col 
    max-lg:gap-5 max-sm:overflow-hidden 
    max-lg:overflow-hidden"
    >
      <div
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
        <button
          className="w-[280px] h-14 bg-red-600 text-white
        rounded-full font-palanquin text-xl font-medium border-none
        hover:bg-red-700 max-xl:mt-6 max-sm:w-[200px] max-sm:h-10
        max-sm:text-lg max-lg:mt-0.5"
        >
          Check Now
        </button>
      </div>
      <div
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
      </div>
    </div>
  );
}

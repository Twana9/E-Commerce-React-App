import { exclusiveImage } from "../../assets";
import "./Offers.css";

export function Offers() {
  return (
    <div
      className="offers flex items-center gap-20 bg-hero
    h-[60vh] m-auto max-container"
    >
      <div
        className="offers-left flex-1 flex flex-col gap-12 p-20
      justify-center"
      >
        <h1
          className="font-poppins text-[#171717] text-6xl
        font-medium"
        >
          Exclusive
        </h1>
        <h1
          className="font-poppins text-[#171717] text-6xl
        font-medium whitespace-nowrap"
        >
          Offers For You
        </h1>
        <p
          className="font-poppins text-slate-700 text-xl
        font-medium"
        >
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button
          className="w-[280px] h-14 bg-red-600 text-white
        rounded-full font-palanquin text-xl font-medium border-none
        hover:bg-red-700"
        >
          Check Now
        </button>
      </div>
      <div className="offers-right flex-1 flex justify-center items-end pt-24">
        <img src={exclusiveImage} alt="bad picture" />
      </div>
    </div>
  );
}

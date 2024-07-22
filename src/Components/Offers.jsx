import { exclusiveImage } from "../assets";

export function Offers() {
  return (
    <div
      className="flex items-center g bg-hero
    h-[60vh] m-auto"
    >
      <div
        className="flex-1 flex flex-col gap-8 p-16
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
        font-medium"
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
          className="w-[200px] h-12 bg-red-600 text-white
        rounded-full font-palanquin text-xl"
        >
          Check Now
        </button>
      </div>
      <div className="flex-1 justify-center items-end">
        <img src={exclusiveImage} alt="bad picture" />
      </div>
    </div>
  );
}

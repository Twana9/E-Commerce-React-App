import { handIcon, arrow, heroImage } from "../../assets";
import "./Hero.css";
export function Hero() {
  return (
    <div
      className="hero flex items-center border border-red-500 
       h-full max-container max-xl:bg-cyan-300 "
    >
      <div
        className="hero-left flex-1 flex flex-col p-24 gap-3
      font-poppins lg:gap-1"
      >
        <h2
          className=" text-xl
      font-[600]  text-[#302e2e]"
        >
          NEW ARRIVALS ONLY
        </h2>
        <div
          className="hero-txt flex flex-col -space-y-8
        lg:-space-y-6"
        >
          <div className="flex items-center gap-2">
            <p
              className="text-[#090909] font-[600] text-[80px]
            max-xl:text-[55px] max-xl:leading-relaxed"
            >
              new
            </p>
            <img
              src={handIcon}
              alt="hand emoji"
              width={100}
              className="max-xl:w-[65px]"
            />
          </div>
          <p
            className="text-[#090909] font-[600] text-[80px] 
          whitespace-nowrap max-xl:text-[55px] max-xl:leading-relaxed"
          >
            collections
          </p>
          <p
            className="text-[#090909] font-[600] text-[80px] 
          whitespace-nowrap max-xl:text-[55px] max-xl:leading-relaxed"
          >
            for everyone
          </p>
        </div>
        <div>
          <div
            className="hero-btn flex justify-center items-center
          gap-3 bg-red-600 text-white font-medium text-lg
          rounded-[75px] h-[60px] w-[270px] mt-7"
          >
            <div>Latest Collection</div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="hero-right flex-1 flex justify-center items-center">
        <img
          src={heroImage}
          alt="image"
          height={550}
          width={500}
          className="max-xl:w-[400px] max-xl:h-[450xp]"
        />
      </div>
    </div>
  );
}

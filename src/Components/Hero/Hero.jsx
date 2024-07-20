import { handIcon, arrow, heroImage } from "../../assets";
import "./Hero.css";
export function Hero() {
  return (
    <div className="flex  h-full bg-hero ">
      <div
        className="hero-left flex-1 flex flex-col p-40 gap-3
      font-poppins"
      >
        <h2
          className=" text-xl
      font-[600]  text-[#302e2e]"
        >
          NEW ARRIVALS ONLY
        </h2>
        <div className="flex flex-col -space-y-8">
          <div className="flex items-center gap-2">
            <p className="text-[#090909] font-[600] text-[80px]">new</p>
            <img src={handIcon} alt="hand emoji" width={100} />
          </div>
          <p className="text-[#090909] font-[600] text-[80px]">collections</p>
          <p className="text-[#090909] font-[600] text-[80px]">for everyone</p>
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
      <div className="hero-right flex-1 justify-center items-center">
        <img src={heroImage} alt="image" height={550} width={550} />
      </div>
    </div>
  );
}

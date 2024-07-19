import { handIcon, arrow, heroImage } from "../../assets";
import "./Hero.css";
export function Hero() {
  return (
    <div className="flex justify-between h-full bg-hero ">
      <div
        className="hero-left flex flex-col p-40 gap-3
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
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="image" />
      </div>
    </div>
  );
}

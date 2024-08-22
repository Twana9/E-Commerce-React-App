import { handIcon, arrow, heroImage } from "../../assets";
import { motion } from "framer-motion";
import "./Hero.css";
export function Hero() {
  return (
    <div
      className="hero flex items-center 
       h-full max-container
       max-lg:flex-col max-lg:items-center overflow-hidden 
       "
    >
      <motion.div
        initial={{ x: "-200px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="hero-left flex-1 flex flex-col p-24 gap-3
      font-poppins max-xl:gap-1 max-lg:py-12  max-lg:gap-6
      max-lg:items-center"
      >
        <h2
          className=" text-xl
      font-[600]  text-[#525151] max-sm:text-lg"
        >
          NEW ARRIVALS ONLY
        </h2>
        <div
          className="hero-txt flex flex-col -space-y-8
        max-xl:-space-y-6 max-lg:-space-y-4 "
        >
          <div className="flex items-center gap-2 max-lg:justify-center">
            <p
              className="text-[#090909] font-[600] text-[80px]
            max-xl:text-[55px] max-xl:leading-relaxed
            max-lg:leading-loose  max-sm:text-[40px]"
            >
              new
            </p>
            <img
              src={handIcon}
              alt="hand emoji"
              width={100}
              className="max-xl:w-[64px] max-sm:w-[50px]"
            />
          </div>
          <p
            className="text-[#090909] font-[600] text-[80px] 
          whitespace-nowrap max-xl:text-[55px] max-xl:leading-relaxed
          max-lg:text-center max-lg:leading-loose
           max-sm:text-[40px]"
          >
            collections
          </p>
          <p
            className="text-[#090909] font-[600] text-[80px] 
          whitespace-nowrap max-xl:text-[55px] max-xl:leading-relaxed
          max-lg:text-center max-lg:leading-loose
           max-sm:text-[40px]"
          >
            for everyone
          </p>
        </div>
        <div>
          <a
            href="https://www.google.com/search?q=latest+clothe+colection&oq=latest+clothe+colection&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgNGB4yCggCEAAYBRgNGB4yCggDEAAYBRgNGB4yCggEEAAYBRgNGB4yCggFEAAYCBgNGB4yCggGEAAYCBgNGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigUyDQgJEAAYhgMYgAQYigXSAQoxMzQyMGowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8"
            target="_blank"
          >
            <div
              className="hero-btn flex justify-center items-center
          gap-3 bg-red-600 text-white font-medium text-lg
          rounded-[75px] h-[60px] w-[270px] mt-7 max-xl:w-[230px] 
          max-xl:h-[50px] max-sm:text-[16px] hover:bg-red-700
          max-sm:h-[45px] transform active:translate-y-0.5"
            >
              <div>Latest Collection</div>
              <img src={arrow} alt="arrow" />
            </div>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="hero-right flex-1 flex justify-center items-center"
      >
        <img
          src={heroImage}
          alt="image"
          height={550}
          width={500}
          className="max-xl:w-[400px] max-xl:h-[500px]
          max-sm:w-[330px] max-sm:h-[430px]"
        />
      </motion.div>
    </div>
  );
}

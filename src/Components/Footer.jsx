import { Link } from "react-router-dom";
import {
  FooterLogo,
  instagramIcon,
  pintesterIcon,
  whatsappIcon,
} from "../assets";

export function Footer() {
  return (
    <div
      className="flex flex-col justify-center items-center 
    gap-12 max-container font-poppins p-10 max-sm:gap-8"
    >
      <div
        className="flex items-center gap-10 max-xl:gap-6
      max-sm:gap-4"
      >
        <Link to="/">
          <img
            onClick={() => scrollTo(0, 0)}
            src={FooterLogo}
            alt="logo"
            className="object-contain 
        cursor-pointer max-xl:h-16 max-xl:w-16 max-sm:h-8
        max-sm:w-8"
          />
        </Link>
        <Link to="/">
          <p
            onClick={() => scrollTo(0, 0)}
            className="text-4xl font-medium cursor-pointer
        max-xl:text-3xl max-sm:text-xl"
          >
            SHOPPING
          </p>
        </Link>
      </div>
      <ul
        className="flex items-center gap-16 text-[#919191]
        max-xl:gap-10 max-lg:gap-8 max-md:gap-6 max-sm:text-[11px]
         max-sm:gap-3
      "
      >
        <li className="cursor-pointer hover:text-pink-500 ">Company</li>
        <li className="cursor-pointer hover:text-pink-500">Products</li>
        <li className="cursor-pointer hover:text-pink-500">Offices</li>
        <li className="cursor-pointer hover:text-pink-500">About</li>
        <li className="cursor-pointer hover:text-pink-500">Contact</li>
      </ul>
      <div className="flex items-center gap-6 max-sm:gap-4 ">
        <div
          className="p-2 bg-slate-50 border border-slate-100
        rounded-md hover:bg-slate-300 transition-bg duration-300
        cursor-pointer"
        >
          <img src={instagramIcon} alt="instagram" />
        </div>
        <div
          className="p-2 bg-slate-50 border border-slate-100
        rounded-md hover:bg-slate-300 transition-bg duration-300
        cursor-pointer"
        >
          <img src={pintesterIcon} alt="pintester" />
        </div>
        <div
          className="p-2 bg-slate-50 border border-slate-100
        rounded-md hover:bg-slate-300 transition-bg duration-300
        cursor-pointer"
        >
          <img src={whatsappIcon} alt="whatsapp" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-6">
        <hr
          className="h-[3px] w-[90%] rounded-full bg-[#bebebe]
        max-lg:w-full"
        />
        <p className="text-lg text-[#919191] max-sm:text-[10px] whitespace-nowrap">
          Copyright @ 2024 - All Right Reserved
        </p>
      </div>
    </div>
  );
}

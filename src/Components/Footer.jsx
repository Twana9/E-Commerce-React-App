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
    gap-12 max-container font-poppins"
    >
      <div className="flex items-center gap-12">
        <img
          src={FooterLogo}
          alt="logo"
          className="object-contain 
        cursor-pointer"
        />
        <p className="text-4xl font-medium cursor-pointer">SHOPPING</p>
      </div>
      <ul
        className="flex items-center gap-7 text-[#494949]
      "
      >
        <li className="cursor-pointer hover:text-pink-500 ">Company</li>
        <li className="cursor-pointer hover:text-pink-500">Products</li>
        <li className="cursor-pointer hover:text-pink-500">Offices</li>
        <li className="cursor-pointer hover:text-pink-500">About</li>
        <li className="cursor-pointer hover:text-pink-500">Contact</li>
      </ul>
      <div className="flex items-center gap-6 ">
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
      <div>
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

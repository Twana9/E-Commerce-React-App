import { useState } from "react";

export function NewsLetter() {
  const [email, setEmail] = useState("");
  return (
    <div
      className="bg-hero flex flex-col justify-center items-center
     gap-7 p-14 max-container max-md:gap-5 max-sm:gap-2 max-sm:py-8"
    >
      <p
        className="font-poppins text-slate-950 text-4xl font-medium
      whitespace-nowrap max-lg:text-3xl max-md:text-2xl max-sm:text-[14px]"
      >
        Get Exclusive Offers On Your Email
      </p>
      <p
        className="font-poppins text-slate-950 text-xl
      max-lg:text-lg max-md:text-sm max-sm:text-[8px] whitespace-nowrap"
      >
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex justify-center w-full ">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="ring-1 ring-slate-300 py-3 px-5 rounded-full
          w-[50%] outline-none focus:ring-1 focus:ring-slate-400
          max-lg:py-2 max-lg:px-4 max-lg:w-[55%] max-md:w-[70%]
          max-md:py-1 max-md:px-3  placeholder:text-sm max-md:text-sm
          max-sm:w-[200px] max-sm:text-[10px] max-sm:placeholder:text-[10px]
          "
        />
        <button
          className="bg-black text-white 
        py-3 px-5 rounded-full ml-[-108px] ring-1
         ring-black hover:bg-[#303030] max-lg:py-2 
         max-lg:px-4 max-lg:ml-[-100px] max-md:py-1 max-md:px-3
         max-md:text-sm max-md:ml-[-84px] max-sm:text-[10px]
         max-sm:ml-[-30px]
         "
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

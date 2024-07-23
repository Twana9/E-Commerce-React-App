export function NewsLetter() {
  return (
    <div
      className="bg-hero flex flex-col justify-center items-center
     gap-7 p-14 max-container"
    >
      <p
        className="font-poppins text-slate-950 text-4xl font-medium
      "
      >
        Get Exclusive Offers On Your Email
      </p>
      <p className="font-poppins text-slate-950 text-xl">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex justify-center w-full">
        <input
          type="email"
          placeholder="Your Email"
          className="ring-1 ring-slate-300 py-3 px-5 rounded-full
          w-[50%] outline-none focus:ring-1 focus:ring-slate-400"
        />
        <button
          className="bg-black text-white 
        py-3 px-5 rounded-full ml-[-108px] ring-1
         ring-black hover:bg-[#303030]"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

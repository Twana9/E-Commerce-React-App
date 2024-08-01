export function LoginSignup() {
  return (
    <div
      className="bg-[#fde1ff] w-full h-[90vh] flex justify-center 
    items-center font-poppins"
    >
      <div
        className="flex flex-col w-[38%] h-[450px] bg-white
      p-8 gap-5 max-lg:w-[55%] max-md:w-[65%] max-md:h-[500px]
      max-sm:w-[85%] max-sm:p-5 max-sm:gap-10 max-sm:h-[480px]"
      >
        <h1
          className="text-3xl font-semibold
        max-sm:text-xl uppercase"
        >
          Sign Up
        </h1>
        <div
          className="flex flex-col justify-center items-center
        gap-5 max-sm:gap-5"
        >
          <input
            className="w-[95%] h-10 border border-0.5 px-5 
             border-slate-300 text-sm rounded-lg outline-none
             focus:ring-1 focus:ring-slate-400 shadow-sm max-sm:h-9
             max-sm:text-xs"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-[95%] h-10 border border-0.5 px-5 
             border-slate-300 text-sm rounded-lg outline-none
             focus:ring-1 focus:ring-slate-400 shadow-sm max-sm:h-9
             max-sm:text-xs"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="w-[95%] h-10 border border-0.5 px-5 
             border-slate-300 text-sm rounded-lg outline-none
             focus:ring-1 focus:ring-slate-400 shadow-sm max-sm:h-9
             max-sm:text-xs"
            type="password"
            placeholder="Password"
          />
          <button
            className="w-[95%] min-h-10 bg-red-600 text-white
        rounded-lg text-lg hover:bg-red-500 shadow-md max-sm:min-h-9
        max-sm:text-sm"
          >
            Continue
          </button>
        </div>
        <p
          className="text-[16px] text-slate-gray ml-[11px]
        max-sm:tracking-tighter max-sm:text-sm max-sm:whitespace-nowrap
        "
        >
          Already have an account?{" "}
          <span className="text-red-500">Login here</span>
        </p>
        <div className="flex gap-2 ml-[11px] max-xl:items-start">
          <input type="checkbox" className="max-xl:mt-1" />
          <p
            className="text-[15px] text-slate-gray
           whitespace-nowrap tracking-tight 
           max-xl:whitespace-normal max-sm:tracking-tighter"
          >
            By continuing, i agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}

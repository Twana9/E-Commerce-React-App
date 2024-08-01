export function LoginSignup() {
  return (
    <div
      className="bg-[#fde1ff] w-full h-[90vh] flex justify-center 
    items-center font-poppins"
    >
      <div
        className="flex flex-col w-[42%] h-[63%] bg-white
      p-8 gap-5"
      >
        <h1 className="text-3xl font-semibold">Sign Up</h1>
        <div
          className="flex flex-col justify-center items-center
        gap-5"
        >
          <input
            className="w-[100%] h-16 border border-0.5 px-5 
             border-slate-gray rounded-lg"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-[100%] h-16 border border-0.5 px-5 
             border-slate-gray rounded-lg"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="w-[100%] h-16 border border-0.5 px-5 
             border-slate-gray rounded-lg"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="w-full h-16 bg-red-600 text-white
        rounded-lg text-xl hover:bg-red-500 "
        >
          Continue
        </button>
        <p className="text-lg text-slate-gray">
          Already have an account?{" "}
          <span className="text-red-500">Login here</span>
        </p>
        <div className="flex gap-2">
          <input type="checkbox" />
          <p className="text-lg text-slate-gray whitespace-nowrap">
            By continuing, i agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}

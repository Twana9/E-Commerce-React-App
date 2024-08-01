export function LoginSignup() {
  return (
    <div>
      <div className="flex flex-col">
        <h1>Sign Up</h1>
        <div>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p>
          Already have an account? <span>Login here</span>
        </p>
        <div>
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

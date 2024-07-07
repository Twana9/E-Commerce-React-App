import { cartIcon, logo } from "../../assets";
import "./Navbar.css";
export function Navbar() {
  return (
    <div
      className="flex justify-evently shadow-nav
     shadow-black p-4"
    >
      <div
        className="flex flex-1  justify-center
       items-center gap-5"
      >
        <img src={logo} alt="logo" />
        <p>SHOPPING</p>
      </div>
      <ul
        className="flex flex-1  justify-center
       items-center gap-[50px]"
      >
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div
        className="flex flex-1 justify-center
       items-center gap-5"
      >
        <button>Login</button>
        <img src={cartIcon} alt="cart" />
      </div>
    </div>
  );
}

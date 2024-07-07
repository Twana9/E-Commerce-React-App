import { cartIcon, logo } from "../../assets";
export function Navbar() {
  return (
    <div className="flex justify-around shadow-black">
      <div>
        <img src={logo} alt="logo" />
        <p>SHOPPING</p>
      </div>
      <ul>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div>
        <button>Login</button>
        <img src={cartIcon} alt="cart" />
      </div>
    </div>
  );
}

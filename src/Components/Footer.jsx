import {
  FooterLogo,
  instagramIcon,
  pintesterIcon,
  whatsappIcon,
} from "../assets";

export function Footer() {
  return (
    <div>
      <div>
        <img src={FooterLogo} alt="" />
        <p>SHOPPING</p>
      </div>
      <ul>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <div>
          <img src={instagramIcon} alt="instagram" />
        </div>
        <div>
          <img src={pintesterIcon} alt="pintester" />
        </div>
        <div>
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

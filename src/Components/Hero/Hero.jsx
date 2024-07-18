import { handIcon, arrow, heroImage } from "../../assets";
export function Hero() {
  return (
    <div className="flex justify-between">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div>
            <p>new</p>
            <img src={handIcon} alt="hand emoji" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="image" />
      </div>
    </div>
  );
}

import { Hero } from "../Components/Hero/Hero";
import { Offers } from "../Components/Offers/Offers";
import { Popular } from "../Components/Popular";

export function Shop() {
  return (
    <>
      <section className="bg-hero padding-x">
        <Hero />
      </section>
      <section className="padding">
        <Popular />
      </section>
      <section className="padding">
        <Offers />
      </section>
    </>
  );
}

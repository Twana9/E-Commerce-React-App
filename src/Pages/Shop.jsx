import { Hero } from "../Components/Hero/Hero";
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
    </>
  );
}

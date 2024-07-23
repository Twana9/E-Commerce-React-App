import { Hero } from "../Components/Hero/Hero";
import { NewCollections } from "../Components/NewCollections";
import { NewsLetter } from "../Components/NewsLetter";
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
      <section className="padding">
        <NewCollections />
      </section>
      <section className="padding">
        <NewsLetter />
      </section>
    </>
  );
}

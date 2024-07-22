import { useState } from "react";
import new_collections from "../assets/new_collections.js";
import { Item } from "./Item";
export function NewCollections() {
  const [newCollections, setNewCollections] = useState(new_collections);
  return (
    <div className="max-container">
      <h1
        className="text-slate-600 font-semibold text-4xl font-palanquin
      mb-8 max-md:text-[26px] max-md:leading-normal text-center"
      >
        NEW COLLECTIONS
      </h1>
      <hr
        className="mb-16  w-52 h-1.5  bg-slate-600 rounded-xl
      mx-auto max-md:w-40"
      />
      <div
        className="grid justify-items-center  grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2
       max-md:grid-cols-1 gap-20"
      >
        {newCollections.map((item) => (
          <Item {...item} />
        ))}
      </div>
    </div>
  );
}

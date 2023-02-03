import React from "react";
import Link from "next/link";

const Localisation = () => {
  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
  return (
    <div className="grid grid-rows-3">

  

      <div className=" h-2/3 p-3">
        <a
          className="align-center flex items-center justify-center"
          target="_blank"
          href={baseUrl}
        >
          <img
            className="w-2/3"
            src="./IMG_0537.JPG"
            alt="carte de la Guadeloupe"
          />
        </a>
      </div>
    </div>
  );
};

export default Localisation;
import React from "react";
import Banner from "../components/Banner";
import Infos from "../components/Infos";

const About = () => {
  const infos = [
    {
      title: "Fiabilité",
      msg: "Les annonces postées sur Kasa garantissent une fiabilité totale. Mes photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      msg: "La bienveillancefait partie des valeurs fondatrices de Kasa. Tout comportement discrimination ou de pertubation du voisinage entraînera une exclusion de notre plateforme",
    },
    {
      title: "Service",
      msg: "La bienveillancefait partie des valeurs fondatrices de Kasa. Tout comportement discrimination ou de pertubation du voisinage entraînera une exclusion de notre plateforme",
    },
    {
      title: "Sécurité",
      msg: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div>
      <section>
        <Banner
          img={"/image/montagne.webp"}
          style={{ filter: "brightness(73%) !important" }}
        />

        {infos.map((info, index) => (
          <Infos key={index} title={info.title} msg={info.msg} />
        ))}
      </section>
    </div>
  );
};

export default About;

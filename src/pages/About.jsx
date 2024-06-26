import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

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
    <>
      <section>
        <Banner img={"/image/montagne.webp"} className="about-banner" />
      </section>
      <section>
        {infos.map((info, index) => (
          <Collapse key={index} title={info.title} msg={info.msg} />
        ))}
      </section>
    </>
  );
};

export default About;

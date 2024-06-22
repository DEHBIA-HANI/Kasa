import React from "react";
import { useParams } from "react-router-dom";
import fichiers from "../fichier.json";
import Error from "../pages/Error";
import Carrousel from "../components/Carrousel";
import Place from "../components/Place";
import Tags from "../components/Tags";
import Host from "../components/Host";
import StarRating from "../components/StarRating";
import Collapse from "../components/Collapse";

const findLogementById = (id) => {
  return fichiers.find((fichier) => fichier.id === id);
};
const Logement = () => {
  const { id } = useParams();
  const fichier = findLogementById(id);
  if (!fichier) {
    return <Error />;
  }
  const {
    pictures,
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
  } = fichier;
  return (
    <>
      <section>
        <Carrousel pictures={pictures} title={title} />
        <div className="container_info">
          <div className="part_right">
            <Place title={title} location={location} />
            <Tags tags={tags} />
          </div>
          <div className="part_left">
            <Host host={host} />
            <StarRating rating={rating} />
          </div>
        </div>

        <div className="container_description">
          <Collapse
            className="title-logement"
            title="Description"
            msg={description}
          />
          <Collapse
            className="title-logement"
            title="Équipement"
            msg={equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </section>
    </>
  );
};

export default Logement;

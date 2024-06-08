import React from "react";
import { useParams } from "react-router-dom";
import fichiers from "../fichier.json";
import Error from "../pages/Error";
import Carrousel from "../components/logements/Carrousel";
import Place from "../components/logements/Place";
import Tags from "../components/logements/Tags";
import Host from "../components/logements/Host";
import StarRating from "../components/logements/StarRating";
import Info from "../components/Infos";

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
    cover,
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
        <Carrousel cover={cover} title={title} />
        <Place title={title} location={location} />
        <Tags tags={tags} />
        <Host host={host} />
        <StarRating rating={rating} />
        <Info title="Description" msg={description} />
        <Info
          title="Équipement"
          msg={equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </section>
    </>
  );
};

export default Logement;

// import React from "react";
// import { useParams } from "react-router-dom";
// import fichiers from "../fichier.json";
// import Infos from "../components/Infos";
// import Host from "../components/Host";
// import Tags from "../components/Tags";
// import StarRating from "../components/StarRating";

// const findLogementById = (id) => {
//   return fichiers.find((fichier) => fichier.id === id);
// };

// const Logement = () => {
//   const { id } = useParams();
//   const fichier = findLogementById(id);

//   const { equipments, tags, cover, title, location, description, host } =
//     fichier;

//   return (
//     <div className="contenaire-logement">
//       <div className="caroussel">
//         <img src={cover} alt={title} />
//       </div>
//       <div className="info_logement">
//         <div className="logement">
//           <h1>{title}</h1>
//           <p>{location}</p>
//           <Tags tags={tags} />
//         </div>
//         <div className="author">
//           <Host host={host} />
//           <StarRating />
//         </div>
//       </div>
//       <div className="description">
//         <Infos title="Description" msg={description} />
//         <Infos
//           title="Équipments"
//           msg={
//             <ul>
//               {equipments.map((equipment, index) => (
//                 <li key={index}>{equipment}</li>
//               ))}
//             </ul>
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default Logement;

// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import fichiers from "../fichier.json";
// // import Infos from "../components/Infos";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faStar } from "@fortawesome/free-solid-svg-icons";
// // // import Tags from "../components/Tags";

// // const findLogementById = (id) => {
// //   return fichiers.find((fichier) => fichier.id === id);
// // };
// // const Logement = () => {
// //   const { id } = useParams();
// //   const fichier = findLogementById(id);
// //   const { equipments, tags, cover, title, location, description, host } =
// //     fichier;

// //   return (
// //     <div className="contenaire-logement">
// //       <img src={cover} alt={title} />
// //       <div className="info_logement">
// //         <div className="logement">
// //           <h1>Cozy loft on the Canal Saint-Martin</h1>
// //           <p>{location}</p>
// //           <div className="tag">
// //             {tags.map((tag, index) => {
// //               return (
// //                 <ul>
// //                   <li key={index}>{tag}</li>
// //                 </ul>
// //               );
// //             })}
// //           </div>
// //         </div>
// //         <div className="author">
// //           <div className="part_author">
// //             <h2>{host.name}</h2>
// //             <img src={host.picture} alt={host.name} />
// //           </div>
// //           <div className="star">
// //             <i>
// //               <FontAwesomeIcon icon={faStar} />
// //             </i>
// //             <i>
// //               <FontAwesomeIcon icon={faStar} />
// //             </i>
// //             <i>
// //               <FontAwesomeIcon icon={faStar} />
// //             </i>
// //             <i>
// //               <FontAwesomeIcon icon={faStar} />
// //             </i>
// //             <i>
// //               <FontAwesomeIcon icon={faStar} />
// //             </i>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="description">
// //         <Infos title={"Description"} msg={description} />
// //         <Infos
// //           title={"Équipments"}
// //           msg={
// //             <ul>
// //               {equipments.map((equipment, index) => (
// //                 <li key={index}>{equipment}</li>
// //               ))}
// //             </ul>
// //           }
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Logement;

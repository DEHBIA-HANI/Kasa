import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <section className="error">
        <h2>404</h2>
        <div className="center_paragraphe">
          <p>Oups! La page que </p>
          <p>vous demander n'existe pas.</p>
        </div>
        <Link to="/">Retourner sur la page d'acceuil</Link>
      </section>
    </div>
  );
};

export default Error;

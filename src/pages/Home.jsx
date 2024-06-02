import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import fichier from "../fichier.json";

const Home = () => {
  return (
    <div>
      <section>
        <Banner
          img={"./image/falaise_mer.webp"}
          title={"Chez vous, partout et ailleurs"}
        />
      </section>
      <main>
        <Card fichiers={fichier} />
      </main>
    </div>
  );
};

export default Home;

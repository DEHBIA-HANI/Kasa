import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import fichier from "../fichier.json";

const Home = () => {
  return (
    <div>
      <main>
        <section>
          <Banner
            img={"./image/falaise_mer.webp"}
            title={"Chez vous, partout et ailleurs"}
            className="home-banner"
          />
        </section>
        <section>
          <Card fichiers={fichier} />
        </section>
      </main>
    </div>
  );
};

export default Home;

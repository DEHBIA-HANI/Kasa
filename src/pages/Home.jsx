import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
const Home = () => {
  return (
    <div>
      <Header />

      <Banner
        img={"./image/falaise_mer.webp"}
        title={"Chez vous, partout et ailleurs"}
      />
    </div>
  );
};

export default Home;

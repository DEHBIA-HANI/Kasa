import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Logement from "./pages/Logement";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="fichiers/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

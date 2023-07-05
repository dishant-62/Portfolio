import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from './components/work/Work';
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
import Qualifications from "./components/qualifications/Qualifications";
import ScrollUp from "./components/scrollup/ScrollUp";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Work/>
        <Contact />
      </main>
      <Footer/>
      <ScrollUp/>

    </div>
  );
}

export default App;

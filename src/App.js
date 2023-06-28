import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer/>
    </div>
  );
}

export default App;

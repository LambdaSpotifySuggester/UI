import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import MainSection from './components/mainSection';
import InfoSlide from './components/carousel';
function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <MainSection />
        <Footer />
    </div>
  );
}

export default App;

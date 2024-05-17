import React from 'react';
import Navbar from './Components/Navbar';
import Features from "./Components/Features";
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Download from './Components/Downloads';
import FAQ from './Components/FAQ';
import './App.css';
import MobileNavigation from './Components/MobileNavigation';

function App() {
  return (
    <>

    <Navbar />
    <MobileNavigation />
    <Features />
    <Download />
    <FAQ />
    <Contact />
    <Footer />

    </>
  );
}
export default App;

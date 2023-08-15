import React from 'react'
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import How from './Components/How';
import Navbar from './Components/Navbar'
import Services from './Components/Services';
import Clients from './Components/Clients';
const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <How />
    <About />
    <Services />
    <Clients />
    <Contact />
    <Footer />
    
      
    </>
  );
}

export default Home

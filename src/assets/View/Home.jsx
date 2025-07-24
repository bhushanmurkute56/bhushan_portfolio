import React from 'react'
import Navbar from './../Component/Navbar';
import MainPage from "./../Component/Main"
import Projects from '../Component/Projects';
import Footer from '../Component/Footer';
import HeroSection from '../Component/HeroSection';

function Home() {
  return (
    <div>
    <Navbar />
    <MainPage />
    <HeroSection />
    <Projects /> 
    <Footer />
    </div>
  )
}

export default Home;
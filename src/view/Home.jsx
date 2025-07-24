import Navbar from "./../Component/Navbar";
import MainPage from "./../Component/Main";
import HeroSection from "./../Component/HeroSection";
import Projects from "./../Component/Projects";
import Footer from "./../Component/Footer";

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
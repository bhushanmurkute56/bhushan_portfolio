import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import "./index.css"
import Home from './view/Home';
import Footer from './Component/Footer';
import HeroSection from './Component/HeroSection';
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Footer' element={<Footer />}></Route>
      <Route path='/HeroSection' element={<HeroSection />}></Route>
      <Route path='/Main' element={<Main />}></Route>
      <Route path='/Navbar' element={<Navbar />}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
    </Routes>
  </BrowserRouter>
);
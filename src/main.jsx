import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import "./index.css";
import Home from "./assets/View/Home"
import Navbar from './assets/Component/Navbar';
import HeroSection from './assets/Component/HeroSection';
import Projects from './assets/Component/Projects';
import Main from "./assets/Component/Main";
import Footer from "./assets/Component/Footer";

const root =  createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
  <Routes>
    <Route path='/' element = {<Home />}></Route>
    <Route path='/Navbar' element = {<Navbar />}></Route>
    <Route path='/MainPage' element = {<Main />}></Route>
    <Route path='/HeroSection' element = {<HeroSection />}></Route>
    <Route path='/Projects' element = {<Projects />}></Route>
    <Route path='/Footer' element = {<Footer />}></Route>
  </Routes>
</BrowserRouter>
);
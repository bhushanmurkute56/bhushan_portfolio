import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import "./index.css";
import Home from "./assets/View/Home"
import Navbar from './assets/Component/Navbar';

const root =  createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
  <Routes>
    <Route path='/' element = {<Home />}></Route>
    <Route path='/Navbar' element = {<Navbar />}></Route>
  </Routes>
</BrowserRouter>
);
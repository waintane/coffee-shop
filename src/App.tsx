import React from 'react';
import './App.scss';
import Entete from './composantes/UI/Entete';
import {Route, Routes} from "react-router-dom";
import Accueil from './composantes/pages/Accueil';
import Contact from './composantes/pages/Contact';
import Menu from './composantes/pages/Menu';
import Gallerie from './composantes/pages/Gallerie';
import Footer from './composantes/UI/Footer';

function App() {
  return (
    <div className="App">
      <Entete/>

      <Routes>
      <Route path="/" element = {<Accueil/>}></Route>
        <Route path="/coffee-shop" element = {<Accueil/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
        <Route path="/menu" element = {<Menu/>}></Route>
        <Route path="/gallerie" element = {<Gallerie/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

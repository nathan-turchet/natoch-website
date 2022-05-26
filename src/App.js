import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeEn from './en/pages/Home';
import HomeFr from './fr/pages/Home';
import BioFr from './fr/pages/Bio';
import BioEn from './en/pages/Bio';
import Error404En from './en/pages/Error404';
import Error404Fr from './fr/pages/Error404';

import "./styles/style.css";
import "https://kit.fontawesome.com/0c87a70838.js"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFr />}></Route>
        <Route path="/bio" element={<BioFr />}></Route>
        <Route path="/en/" element={<HomeEn />}></Route>
        <Route path="/en/bio" element={<BioEn />}></Route>
        <Route path="/en/*" element={<Error404En />}></Route>
        <Route path="*" element={<Error404Fr />}></Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;



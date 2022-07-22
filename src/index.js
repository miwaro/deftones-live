import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './features/store';
import Home from './pages/Home.js';
import Shows from './pages/Shows.js';
import Songs from './pages/Songs.js';
import About from './pages/About.js';
import Adrenaline from './pages/albums/Adrenaline.js';
import AroundTheFur from './pages/albums/AroundTheFur.js';
import WhitePony from './pages/albums/WhitePony.js';
import Deftones from './pages/albums/Deftones.js';
import SaturdayNightWrist from './pages/albums/SaturdayNightWrist.js';
import DiamondEyes from './pages/albums/DiamondEyes.js';
import KoiNoYokan from './pages/albums/KoiNoYokan.js';
import Gore from './pages/albums/Gore.js';
import Ohms from './pages/albums/Ohms.js';
import Covers from './pages/albums/Covers.js';
import BsidesAndRarities from './pages/albums/BsidesAndRarities.js';
import BlackStallion from './pages/albums/BlackStallion.js';
import './styles/styles.scss';

import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="shows" element={<Shows />} />
        <Route path="songs" element={<Songs />} />
        <Route path="about" element={<About />} />
        <Route path="adrenaline" element={<Adrenaline />} />
        <Route path="aroundthefur" element={<AroundTheFur />} />
        <Route path="whitepony" element={<WhitePony />} />
        <Route path="deftones" element={<Deftones />} />
        <Route path="saturdaynightwrist" element={<SaturdayNightWrist />} />
        <Route path="diamondeyes" element={<DiamondEyes />} />
        <Route path="koinoyokan" element={<KoiNoYokan />} />
        <Route path="gore" element={<Gore />} />
        <Route path="ohms" element={<Ohms />} />
        <Route path="bsidesandrarities" element={<BsidesAndRarities />} />
        <Route path="covers" element={<Covers />} />
        <Route path="blackstallion" element={<BlackStallion />} />
      </Routes>
    </Provider>
  </BrowserRouter>

);



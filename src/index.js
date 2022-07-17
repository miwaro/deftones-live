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
      </Routes>
    </Provider>
  </BrowserRouter>

);



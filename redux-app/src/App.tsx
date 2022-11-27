import React from 'react';
import HomePage from './views/pages/home-page/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './views/pages/about-page/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

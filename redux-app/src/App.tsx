import React from 'react';
import HomePage from './views/pages/home-page/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './views/pages/about-page/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './views/share/layout/Layout';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage></AboutPage>}/>
                    <Route path="*" element={<HomePage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;

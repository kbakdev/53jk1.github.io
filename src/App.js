import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import NotFoundPage from './pages/NotFoundPage';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import Header from './components/Header';
import { useMediaQuery } from '@material-ui/core';
import './App.css';

function App() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className="app">
            <BrowserRouter>
                {isMobile ? <MobileNav /> : <Header />}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

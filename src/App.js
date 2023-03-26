import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import PortfolioPage from './pages/PortfolioPage';
import NotFoundPage from './pages/NotFoundPage';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <MobileNav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

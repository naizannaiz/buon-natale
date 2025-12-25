import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import ProjectShowcase from './components/ProjectShowcase'
import About from './components/About'
import { motion } from 'framer-motion'

// Lazy loaded components
const SantaCanvas = lazy(() => import('./components/SantaCanvas'))
const Gallery = lazy(() => import('./components/Gallery'))

const LoadingSpinner = () => (
    <div className="section-loading">
        <div className="spinner"></div>
        <p>Loading Experience...</p>
    </div>
)

function App() {
    return (
        <div className="app-container">
            <Hero />
            <section className="santa-viewer-section">
                <div className="container">
                    <div className="section-header">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Meet the AI-Robo Santa
                        </motion.h2>
                        <p>Interactive 3D Preview of our masterpiece</p>
                    </div>
                    <div className="canvas-wrapper">
                        <Suspense fallback={<LoadingSpinner />}>
                            <SantaCanvas />
                        </Suspense>
                    </div>
                </div>
            </section>
            <Countdown />
            <ProjectShowcase />
            <About />
            <Suspense fallback={<LoadingSpinner />}>
                <Gallery />
            </Suspense>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <img src="/logo/Jyothi Logo for Tshirt.png" alt="Jyothi Logo" className="footer-logo" />
                        <div className="footer-text">
                            <p>© 2025 Jyothi Engineering College Students. All Rights Reserved.</p>
                            <p>Special contribution to Buon Natale Thrissur.</p>
                        </div>
                        <img src="/logo/2025.png" alt="Buon Natale Logo" className="footer-logo" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App

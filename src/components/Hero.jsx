import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Jyothi Engineering College Presents
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="title-main">Buon Natale</div>
                    <div className="year-text">2025</div>
                </motion.h1>

                <motion.p
                    className="hero-tagline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Revolutionizing tradition with AI & Robotics. Experience the future of celebration in Thrissur.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <button
                        className="btn-primary"
                        onClick={() => scrollToSection('models')}
                    >
                        Explore Models
                    </button>
                    <button
                        className="btn-outline"
                        onClick={() => scrollToSection('about')}
                    >
                        Watch Story
                    </button>
                </motion.div>
            </div>

            <div className="scroll-indicator" onClick={() => scrollToSection('models')}>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </header>
    )
}

export default Hero

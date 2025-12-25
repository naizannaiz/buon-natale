import { motion } from 'framer-motion'
import './About.css'

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/images/image.png"
                            alt="Buon Natale Celebration"
                            className="about-img"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="experience-badge">
                            <span>ESTD 2013</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="subtitle">The Tradition</span>
                        <h2>What is Buon Natale?</h2>
                        <p>
                            Buon Natale (Merry Christmas) is the cultural festival organized by the Thrissur Archdiocese and Thrissur Citizenry. Since 2013, it has transformed Thrissur into a global Christmas destination.
                        </p>
                        <div className="achievement-card">
                            <h4>Guinness World Record</h4>
                            <p>Entered the records in 2014 for the maximum number of people dressed up as Santa Claus.</p>
                        </div>
                        <p>
                            Beyond the celebration, Buon Natale serves a noble cause, raising charitable funds to support the community. This year, we at Jyothi Engineering College are proud to bring a technological revolution to this spiritual and cultural heritage.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About

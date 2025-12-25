import { motion } from 'framer-motion'
import './Gallery.css'

const images = [
    { url: '/images/IMG_1790.jpg', name: 'Design Phase' },
    { url: '/images/IMG_1808.jpg', name: 'Assembly' },
    { url: '/images/IMG_1809.jpg', name: 'Robotics Integration' },
    { url: '/images/WhatsApp Image 2025-12-25 at 4.27.58 PM.jpeg', name: 'Team Jyothi' },
    { url: '/images/WhatsApp Image 2025-12-25 at 4.28.51 PM.jpeg', name: 'Final Prototype' }
]

const Gallery = () => {
    return (
        <section className="gallery-section">
            <div className="container">
                <div className="section-header">
                    <h2>Process & Journey</h2>
                    <p>Behind the scenes of our revolutionary project</p>
                </div>

                <div className="gallery-grid">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className="gallery-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="gallery-img-container">
                                {/* Note: HEIC images might need conversion, but we reference them here as requested */}
                                <img src={img.url} alt={img.name} className="gallery-img" />
                                <div className="gallery-overlay">
                                    <span>{img.name}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery

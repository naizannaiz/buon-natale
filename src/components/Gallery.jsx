import { motion } from 'framer-motion'
import './Gallery.css'

const assets = [
    { url: '/images/IMG_1790.jpg', name: 'Design Phase', type: 'image' },
    { url: '/images/IMG_1808.jpg', name: 'Assembly', type: 'image' },
    { url: '/images/IMG_1809.jpg', name: 'Robotics Integration', type: 'image' },
    { url: '/images/WhatsApp Video 2026-01-19 at 11.40.55 AM.mp4', name: 'Dynamic Movement', type: 'video' },
    { url: '/images/WhatsApp Image 2026-01-19 at 11.43.30 AM.jpeg', name: 'Fine Tuning', type: 'image' },
    { url: '/images/WhatsApp Image 2026-01-19 at 11.43.32 AM.jpeg', name: 'Structural Work', type: 'image' },
    { url: '/images/WhatsApp Image 2026-01-19 at 11.43.33 AM.jpeg', name: 'Detailing', type: 'image' },
    { url: '/images/WhatsApp Image 2026-01-19 at 11.43.35 AM.jpeg', name: 'Component Test', type: 'image' },
    { url: '/images/WhatsApp Image 2026-01-19 at 11.43.37 AM.jpeg', name: 'Wiring Setup', type: 'image' },
    { url: '/images/WhatsApp Image 2026-01-19 at 11.43.39 AM.jpeg', name: 'Final Check', type: 'image' },
    { url: '/images/WhatsApp Image 2026-01-19 at 11.46.42 AM.jpeg', name: 'Team Effort', type: 'image' },
    { url: '/images/WhatsApp Image 2025-12-25 at 4.27.58 PM.jpeg', name: 'Team Jyothi', type: 'image' },
    { url: '/images/WhatsApp Image 2025-12-25 at 4.28.51 PM.jpeg', name: 'Final Prototype', type: 'image' }
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
                    {assets.map((asset, idx) => (
                        <motion.div
                            key={idx}
                            className="gallery-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="gallery-img-container">
                                {asset.type === 'video' ? (
                                    <video
                                        src={asset.url}
                                        className="gallery-asset"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={asset.url}
                                        alt={asset.name}
                                        className="gallery-asset"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                )}
                                <div className="gallery-overlay">
                                    <span>{asset.name}</span>
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

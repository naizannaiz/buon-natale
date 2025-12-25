import { motion } from 'framer-motion'
import { Bot, Plane, TreeDeciduous, Car } from 'lucide-react'
import './ProjectShowcase.css'

const projects = [
    {
        title: "AI-Robo Santa",
        desc: "Our flagship creation featuring advanced robotics and AI interaction.",
        icon: <Bot size={32} />,
        gradient: "from-red-600 to-red-900"
    },
    {
        title: "Papa Drone",
        desc: "A custom-built heavy-lift drone carrying Santa across the sky.",
        icon: <Plane size={32} />,
        gradient: "from-blue-600 to-blue-900"
    },
    {
        title: "Rotating Christmas Tree",
        desc: "A massive, kinetically dynamic tree with intelligent lighting.",
        icon: <TreeDeciduous size={32} />,
        gradient: "from-green-600 to-green-900"
    },
    {
        title: "Reindeer Float",
        desc: "Interactive mechanized reindeer lead our revolutionary parade.",
        icon: <Car size={32} />,
        gradient: "from-yellow-600 to-yellow-900"
    }
]

const ProjectShowcase = () => {
    return (
        <section id="models" className="showcase-section">
            <div className="container">
                <div className="section-header">
                    <h2>Our Contributions</h2>
                    <p>4 Innovation Models by Jyothi Engineering College Students</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="project-icon-wrapper">
                                {project.icon}
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectShowcase

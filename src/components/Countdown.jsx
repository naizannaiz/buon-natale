import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Countdown.css'

const Countdown = () => {
    // Target: 27 December 2025, 14:00:00
    const targetDate = new Date('2025-12-27T14:00:00').getTime()

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate - now

            if (distance < 0) {
                clearInterval(timer)
                return
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="countdown-section">
            <div className="container">
                <div className="glass-card countdown-wrapper">
                    <div className="countdown-header">
                        <h3>Counting down to the Revolution</h3>
                        <p>Buon Natale 2025 Starts In:</p>
                    </div>
                    <div className="countdown-grid">
                        <TimeUnit value={timeLeft.days} label="Days" />
                        <TimeUnit value={timeLeft.hours} label="Hours" />
                        <TimeUnit value={timeLeft.minutes} label="Minutes" />
                        <TimeUnit value={timeLeft.seconds} label="Seconds" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const TimeUnit = ({ value, label }) => (
    <motion.div
        className="time-unit"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
        <span className="time-value">{String(value).padStart(2, '0')}</span>
        <span className="time-label">{label}</span>
    </motion.div>
)

export default Countdown

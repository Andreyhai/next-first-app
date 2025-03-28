'use client'

import { useAnimation } from 'framer-motion';
import DarkButton from "../../shared/dark-button/DarkButton"
import styles from './FeedbackSection.module.scss'
import { motion } from 'framer-motion'

const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
};

const FeedbackSection = ({modalOpen}) => {

    return (
        <section className={styles.FeedbackSection}>
            <motion.div
                // ref={ref}
                // initial='hidden'
                // animate={controls}
                // variants={variants}
                // transition={{ duration: 1, ease: "easeOut" }}// Управляем анимацией

                // initial={{ scale: 0 }} // Начальное состояние: блок очень маленький
            // animate={{
            //     scale: [1, 1.5, 1], // Увеличение, затем уменьшение
            //     x: [0, 200, 0], // Перемещение вправо, затем обратно
            //     rotate: [0, 360], // Вращение на 360 градусов
            // }}
            // transition={{
            //     duration: 3, // Общая продолжительность анимации
            //     times: [0, 0.5, 1], // Временные метки для keyframes
            //     ease: "easeInOut", // Тип easing
            //     repeat: Infinity, // Бесконечное повторение
            //     repeatDelay: 1, // Задержка перед повторением
            // }}
                className={styles.container}>
                <h3 className={styles.title}>Wanna join the interno?</h3>
                <p className={styles.subtitle}>Contact Us & Get a Free Consultation</p>
                <DarkButton title="Connect With us" src={'/icons/arrows/arrowRight2.svg'} color='gold' modalOpen={modalOpen} />
            </motion.div>
        </section>
    )
}

export default FeedbackSection
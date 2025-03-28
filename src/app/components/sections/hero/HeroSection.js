'use client';

import styles from './HeroSection.module.scss';
import Image from 'next/image';
import DarkButton from '../../shared/dark-button/DarkButton'; // Абсолютный импорт
import { motion } from 'framer-motion';

const variants = {
    hidden: { scale: 0.9, opacity: 0, borderRadius: '0 0 0 0' },
    visible: { scale: 1, opacity: 1, borderRadius: '0 0 0 200px' },
};

const HeroSection = () => {
    return (
        <section className={styles.heroSection}> {/* Исправил на camelCase */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
                className={styles.container}
            >
                <h1>Let's Create Your Dream Interior</h1>
                <p>The world needs innovators and problem solvers who turn challenges into greater opportunities.</p>
                <DarkButton title="Get Started" src={"/icons/arrows/arrowRight.svg"} color="black" />
            </motion.div>
        </section>
    );
};

export default HeroSection;

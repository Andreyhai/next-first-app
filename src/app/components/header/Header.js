"use client"; // Должно быть первой строкой

import React from 'react';
import styles from './Header.module.scss';
// import logoIcon from '../../../../public/icons/logoIcon.svg'
// import logoText from '../../../../public/icons/logoTeext.svg'
// import humburgerIcon from '../../../../public/icons/Hamburger.svg'
// import closeIcon from '../../../../public/icons/closeIcon.svg'
import Image from 'next/image';
// import logoIcon from "/logoIcon.svg"; // ✅ Используй импорт вместо строки
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const MotionImage = motion(Image); // ✅ Делаем анимированную версию Image
const MotionLink = motion(Link); // ✅ Делаем анимированную версию Image

// Варианты анимации для родителя
const navVariants = {
    hidden: { opacity: 0 }, // Начальное состояние (невидимый)
    visible: {
        opacity: 1, // Конечное состояние (видимый)
        transition: {
            staggerChildren: 0.1, // Задержка между анимациями дочерних элементов
        },
    },
};

// Варианты анимации для дочерних элементов
const itemVariants = {
    hidden: { y: -50, opacity: 0 }, // Начальное состояние (выше и невидимый)
    visible: { y: 0, opacity: 1 }, // Конечное состояние (на месте и видимый)
};

const logoVariants = {
    hidden: { x: -100, rotate: -45, opacity: 0 }, // Начальное состояние: слева, повернут, невидим
    visible: { x: 0, rotate: 0, opacity: 1 },     // Конечное состояние: на месте, без поворота, видим
};

const logoNEVariants = {
    hidden: { x: 100, rotate: 45, opacity: 0 }, // Начальное состояние: слева, повернут, невидим
    visible: { x: 0, rotate: 0, opacity: 1 },     // Конечное состояние: на месте, без поворота, видим
};

const logoVariants1 = {
    hidden: { scale: 0, opacity: 0 }, // Начальное состояние: очень маленький и невидимый
    visible: { scale: 1, opacity: 1 }, // Конечное состояние: нормальный размер и видимый
};

const logoVariants2 = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", damping: 10, stiffness: 120 }, // Пружинный эффект
    },
};



const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <MotionLink
                    href={'/test'}
                    variants={logoVariants2}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={styles.logo} aria-label="Вернуться на главную">
                    <MotionImage
                        variants={logoVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        src={'/icons/logo/logoIcon.svg'}
                        alt="Логотип"
                        width={30}
                        height={30}
                    />
                    <MotionImage
                        variants={logoNEVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        src={'/icons/logo/logoTeext.svg'}
                        alt={'logoText'}
                        width={100}
                        height={40}
                    />
                </MotionLink>
                <motion.nav
                    initial="hidden" // Начальное состояние
                    animate="visible" // Конечное состояние
                    variants={navVariants} // Применяем варианты анимации 
                    className={styles.navigation}>
                    <motion.ul>
                        <motion.li variants={itemVariants}><a href="#home" className="active">Home</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#about">About Us</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#services">Services</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#pages">Pages</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#contact">Contact Us</a></motion.li>
                    </motion.ul>
                </motion.nav>
                <Image
                    className={styles.menu}
                    src={'/icons/menu/Hamburger.svg'}
                    alt={'Меню'}
                    onClick={toggleMenu}
                    width={40}
                    height={40}
                />
            </div>

            {/* Боковая панель */}
            <AnimatePresence>
                <div className={`${styles.sidePanel} ${isMenuOpen ? styles.open : ''}`}>
                    <Image
                        className={styles.closeButton}
                        src={'/icons/menu/closeIcon.svg'}
                        alt="Закрыть боковую панель"
                        onClick={toggleMenu}
                        width={20}
                        height={20}
                    />
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                        <motion.li variants={itemVariants}><a href="#home" className="active" onClick={toggleMenu}>Home</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#about" onClick={toggleMenu}>About Us</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#services" onClick={toggleMenu}>Services</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#pages" onClick={toggleMenu}>Pages</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#contact" onClick={toggleMenu}>Contact Us</a></motion.li>
                    </motion.ul>
                </div>
            </AnimatePresence>
        </header>
    );
};

export default Header;
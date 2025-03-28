'use client'

import styles from './ModalLogin.module.scss'
import { motion } from 'framer-motion';

const variants = {
    hidden: { scale: 0.9, opacity: 0, },
    visible: { scale: 1, opacity: 1, },
};

const ModalLogin = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                {/* {children} */}
                <h2>Modal Login</h2>
                <div>
                    <div><label>login:</label><input placeholder='Введите логин' type='email' required /></div>
                    <div><label>password:</label><input placeholder='Введите пароль' type='password' required /></div>

                </div>
            </motion.div>
        </div >
    );
};

export default ModalLogin;
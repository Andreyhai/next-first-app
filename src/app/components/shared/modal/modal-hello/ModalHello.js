'use client'

import { useEffect } from 'react';
import styles from '../modal.module.scss'
import { motion } from 'framer-motion';

const variants = {
    hidden: { scale: 0.9, opacity: 0, },
    visible: { scale: 1, opacity: 1, },
};

const ModalLogin = ({ isOpen, onClose }) => {
    
    useEffect(() => {
        if (isOpen) {
          const timer = setTimeout(() => {
            onClose();
          }, 3000); // Закрываем через 2 сек
          return () => clearTimeout(timer);
        }
      }, [isOpen, onClose]);
    
    
    
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 2 }}
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                {/* {children} */}
                <h2 className={styles.h2}>Добро пожаловать</h2>
                <h2 className={styles.h2}>во в рот невъебенное приложение!</h2>

            </motion.div>
        </div >
    );
};

export default ModalLogin;
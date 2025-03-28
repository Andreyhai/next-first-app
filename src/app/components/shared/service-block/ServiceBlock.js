import styles from "./ServiceBlock.module.scss";
import Image from "next/image";

const ServiceBlock = ({ title, subtitle }) => {
    return (
        <article className={styles.ServiceBlock}>
            <div className={styles.description}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <button className={styles.button}>
                <span className={styles.buttonText}>View More</span>
                <Image
                    className={styles.buttonIcon}
                    src={'/icons/arrows/arrowRight.svg'}
                    alt="Узнать больше"
                    width={40}
                    height={40}
                />
            </button>
        </article>
    );
};

export default ServiceBlock;

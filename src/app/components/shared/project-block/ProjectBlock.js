import styles from '../../sections/projects/ProjectsSection.module.scss'
import CirculeButton from "../circule-button/CirculeButton";
import Image from 'next/image';

const ProjectBlock = ({ id, title, subtitle, src }) => {
    return (
        <article className={styles.ProjectBlock} key={id}>
            <Image
                className={styles.image}
                src={src}
                alt={`Картинка ${title}`}
                width={400}
                height={700}
            />
            <article className={styles.info}>
                <article className={styles.infoText}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.subtitle}>{subtitle}</p>
                </article>
                <CirculeButton />
            </article>
        </article>
    );
};

export default ProjectBlock;

import DarkButton from "../../shared/dark-button/DarkButton"
import styles from './AboutSection.module.scss'
import Image from "next/image"

const AboutSection = () => {
    return (
        <section className={styles.AboutSection}>
            <div className={styles.container}>
                <article className={styles.infoBlock}>
                    <h3>We Tackle The Most Challenging Designs</h3>
                    <p>
                        The world needs innovators and problem
                        solvers who turn challenges into greater
                        opportunities. We have an insatiable
                        curiosity about transformative trends
                        challenging the status.
                    </p>
                    <article className={styles.contactBlock}>
                        <div className={styles.phoneBlock}>
                            <Image
                                src={'/icons/phoneIcon.svg'}
                                alt="image"
                                width={25}
                                height={25}
                            />
                        </div>
                        <div className={styles.constactInfo}>
                            <span className={styles.phoneNumber}>012345678</span>
                            <span className={styles.phoneInfo}>Call Us Anytime</span>
                        </div>
                    </article>
                    <DarkButton title={"Get Free Estimate"} src={'icons/arrows/arrowRight.svg'} color='black' />
                </article>
                <article className={styles.imageBlock} />
            </div>
        </section>
    )
}

export default AboutSection
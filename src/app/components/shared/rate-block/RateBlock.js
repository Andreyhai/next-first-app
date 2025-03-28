import Image from 'next/image'
import styles from './RateBlock.module.scss'

const RateBlock = ({ id, src, name, placeFrom, description }) => {
    return (
        <article key={id} className={styles.RateBlock}>
            <article className={styles.userInfo}>
                <Image
                    className={styles.userAvatar}
                    src={src}
                    alt="Аватар"
                    width={77}
                    height={77}
                />
                <div className={styles.userInformation}>
                    <h4 className={styles.firstName}>{name}</h4>
                    <p className={styles.placeFrom}>{placeFrom}</p>
                </div>
            </article>
            <p className={styles.description}>{description}</p>
        </article>
    )
}

export default RateBlock
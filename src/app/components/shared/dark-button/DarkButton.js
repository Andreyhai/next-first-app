import styles from './DarkButton.module.scss'
import Image from 'next/image';

const DarkButton = ({title, src, color, modalOpen}) => {
    return (
        <button className={styles.DarkButton} style={{background: color === 'black' ? '#292F36' : '#cda274'}} onClick={modalOpen}>
            <span>{title}</span>
            <Image src={src} alt="Get Started" width={30} height={30} />
        </button>
    )
}

export default DarkButton;
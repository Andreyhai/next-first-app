import styles from './CirculeButton.module.scss'
import Image from 'next/image'

const CirculeButton = () => {
    return (
        <button className={styles.button}>
            <Image src={'/icons/buttonArrow.svg'} alt={'Перейти'} width={20} height={20} />
        </button>
    )
}

export default CirculeButton
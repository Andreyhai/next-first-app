import RateBlock from '../../shared/rate-block/RateBlock'
import styles from './RateSection.module.scss'

const RateSection = () => {

    const data = [
        {
            id: 1,
            name: 'Lisa Clairton',
            placeFrom: 'New York, USA',
            description: 'We selected Interno interior because of rigorous design background & education.'
        },
        {
            id: 2,
            name: 'David Knight',
            placeFrom: 'Sydney, Australia',
            description: 'The team exceeded our expectations and emerged as leaders of our project’s.'
        },
        {
            id: 3,
            name: 'Lisa Clairton',
            placeFrom: 'Paris, France',
            description: 'They balanced the architectural vision and the project realities beautifully.'
        },

    ]

    return (
        <section className={styles.RateSection}>
            <div className={styles.container}>
                <h3 className={styles.title}>What the People Thinks About Interno</h3>
                <section className={styles.rateContainer}>
                    {data.map((rate, index) =>
                        <RateBlock
                            key={rate.id}
                            id={rate.id}
                            src={`/avatars/user${rate.id}.png`}
                            name={rate.name}
                            placeFrom={rate.placeFrom}
                            description={rate.description}
                        />
                    )}
                </section>
            </div>
        </section>
    )
}

export default RateSection
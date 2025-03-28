import styles from './AchievementsSection.module.scss'

const AchievementsSection = () => {
    const data = [
        {
            id: 1,
            count: '12',
            description: 'Years Of Experiance'
        },
        {
            id: 2,
            count: '5K',
            description: 'Success Project'
        },
        {
            id: 3,
            count: '1K',
            description: 'Active Project'
        },
        {
            id: 4,
            count: '4K',
            description: 'Happy Customers'
        },
    ]
    
    return (
    <section className={styles.AchievementsSection}>
        <div className={styles.container}>
            <article className={styles.achievementsBlock}>
                {data.map((item) => {
                    return (
                        <article  className={styles.achievement} style={{
                            borderLeft: item.id !== 1 ? '1px solid #cda274' : '',
                            borderRight: item.id !== 4 ? '1px solid #cda274' : '',
                            }} key={item.id}>
                            <h3 className={styles.title}>{item.count}</h3>
                            <p  className={styles.description}>{item.description}</p>
                        </article>
                    )
                })}
            </article>
        </div>
    </section>
    )
}

export default AchievementsSection
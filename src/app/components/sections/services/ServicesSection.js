import ServiceBlock from "../../shared/service-block/ServiceBlock"
import styles from './ServicesSection.module.scss'

const ServicesSection = () => {
    
    const services = [{
        title: 'Interior Design',
        subtitle: 'Enhancing the interior to achieve a healthier environment for the people using right space.'
    }, {
        title: 'Furniture',
        subtitle: 'Movable articles that are used to make a room or building suitable for living or working.'
    }, {
        title: 'Flooring',
        subtitle: 'Thin object any finished material applied over a floor structure to provide a walking surface.'
    }]
    
    return (
        <section className={styles.ServicesSection}>
            <article className={styles.container}>
                {services.map((service, index) => (<ServiceBlock key={index} title={service.title} subtitle={service.subtitle} />))}
            </article>
        </section>
    )
}

export default ServicesSection
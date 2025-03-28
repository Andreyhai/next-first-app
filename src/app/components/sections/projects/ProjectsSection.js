import ProjectBlock from '../../shared/project-block/ProjectBlock'

import styles from './ProjectsSection.module.scss'


const ProjectsSection = () => {

    const data = [
        {
            id: 1,
            title: 'Winery Dry Creek Building',
            subtitle: 'Art Modern',
        },
        {
            id: 2,
            title: 'Creative Workplace Design',
            subtitle: 'Minimalist',
        },
        {
            id: 3,
            title: 'Bedroom Interior Pot Work',
            subtitle: 'Modern',
        },
        {
            id: 4,
            title: 'Light Ambience Sepia Design',
            subtitle: 'Scandinavian',
        },

    ]

    return (
        <section className={styles.ProjectsSection}>
            <div className={styles.container}>
                <h3 className={styles.title}>Recent Projects</h3>
                <p className={styles.subtitle}>With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier.</p>
                <article className={styles.ProjectsContainer}>
                    {data.map((project) => {
                        return (
                            <ProjectBlock
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                subtitle={project.subtitle}
                                src={`/projects/project${project.id}.png`}
                            />
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default ProjectsSection
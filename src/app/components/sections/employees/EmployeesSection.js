import Image from 'next/image'

import styles from './EmployeesSection.module.scss'


const EmployeesSection = () => {
    const employees = [1, 2, 3, 4, 5]

    return (
        <section className={styles.EmployeesSection}>
            <div className={styles.container}>
                {employees.map((brand) => {
                    return (
                        <Image src={`/employees/brand${brand}.svg`} alt={`brand${brand}`} width={170} height={100} key={brand} />
                    )
                })}
            </div>
        </section>
    );
};

export default EmployeesSection;

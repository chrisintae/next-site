import styles from '@styles/components/twocolumn.module.scss'

const TwoColumn = ({ children, themeClass, subhead, headline, subcopy }) => {
    return (
        <section className={`wrapper ${styles.twoColumn} ${themeClass} `}>
            <div className={`container ${styles.container}`}>
                <div className={styles.copyContainer}>
                    {subhead && <h4>{subhead}</h4>}
                    <h2>{headline}</h2>
                    {subcopy && <p>{subcopy}</p>}
                </div>
                {children && <div className={styles.cardContainer}>
                    {children}
                </div>}
            </div>
        </section>
    )
}

export default TwoColumn
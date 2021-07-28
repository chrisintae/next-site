import styles from '@styles/components/hero.module.scss'

const Hero = ({ headline, subcopy, appStoreImgUrl, appStoreImgSrc, appStoreImgAlt }) => {
    return (
        <section className={`wrapper ${styles.hero}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.copyContainer}>
                    <h1>{headline}</h1>
                    <p>{subcopy}</p>
                    <a href={appStoreImgUrl} target='_blank'>
                        <img className={styles.appStoreBadge} src={appStoreImgSrc} alt={appStoreImgAlt} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
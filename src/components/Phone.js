import styles from '@styles/components/phone.module.scss'

const Phone = () => {
    return (
        <div className={styles.phoneContainer}>
            <img className={styles.phone} src='/iPhone.svg' alt='iPhone' />
        </div>
    )
}

export default Phone

import styles from './CertificatesSection.module.css';

export default function CertificatesSection() {
    return (
        <section className={styles.certificatesSection}>
            {/* <div className={styles.blueGlow}></div> */}
                <div className={styles.pinkGlow}></div>
                {/* <div className={styles.leftStars}></div> */}
                <div className={styles.rightStars}></div>
            <h1 className={styles.header}>We also provide completion certificate</h1>
            <img className={styles.certificate} src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt='demo'/>
        </section>
    );
}
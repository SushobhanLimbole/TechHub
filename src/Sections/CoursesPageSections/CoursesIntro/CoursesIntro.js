import styles from './CoursesInto.module.css';

export default function CoursesIntro({ content }) {
    return (
        <section className={styles.introSection}>
            <div className={styles.blueGlow}></div>
            <div className={styles.pinkGlow}></div>
            <div className={styles.leftStars}></div>
            <img className={styles.card} src={content.image} alt={content.title}/>
            <div className={styles.intro}>
                <h1 className={styles.title}>{content.title}</h1>
                <h4>Course Duration: {content.duration}</h4>
                <h1 className={styles.price}>₹{content.price}</h1>
                <p>{content.description}</p>
                <button className={styles.enquiry}>Enquiry</button>
            </div>
        </section>
    );
}
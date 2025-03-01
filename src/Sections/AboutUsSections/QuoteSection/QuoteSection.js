import styles from './QuoteSection.module.css';
import ideaPic from '../../../Assets/idea.png';

export default function QuoteSection() {
    return (
        <section className={styles.quoteSection}>
            <div className={styles.blueGlow}></div>
            <div className={styles.pinkGlow}></div>
            <div className={styles.leftStars}></div>
            <div className={styles.rightStars}></div>
            <div className={styles.quote}>
                <h1>"Empowering Minds with Simplicity and Practicality."</h1>
                <h3>We prioritize simplifying complex concepts and fostering practical implementation to equip learners with real-world expertise.<br /><br /> Regularly organized competitions provide valuable hands-on experience, while insights from our founder offer a profound understanding of the IT industry, inspiring growth and excellence.</h3>
            </div>
            <img className={styles.pic} src={ideaPic} alt='enlightment'/>
        </section>
    );
}
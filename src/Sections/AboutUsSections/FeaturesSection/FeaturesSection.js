import styles from './FeaturesSection.module.css';
import aimPic from '../../../Assets/quote.svg';

export default function FeaturesSection() {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.blueGlow}></div>
            <div className={styles.pinkGlow}></div>
            <div className={styles.leftStars}></div>
            <div className={styles.rightStars}></div>
            <div className={styles.features}>
                <h1>What we Offer?</h1>
                <ul>
                    <li><span>Simplified Learning:</span> Master complex concepts through an intuitive approach</li>
                    <li><span>Practical Exposure:</span> Gain real-world expertise with hands-on projects.</li>
                    <li><span>Personalized Growth:</span> Focused mentoring to unlock individual potential.</li>
                    <li><span>Expert Insights:</span> Learn from industry experiences shared by our founder.</li>
                    <li><span>Industry-Ready Training:</span> Prepare for real-world professional excellence.</li>
                    <li><span>Value for money:</span> Technology Hub offers high-quality IT training at an affordable price.</li>
                </ul>
            </div>
            <img className={styles.pic} src={aimPic} alt='features'/>
        </section>
    );
}
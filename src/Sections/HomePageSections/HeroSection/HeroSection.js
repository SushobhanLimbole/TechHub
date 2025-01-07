import Carousel from '../../../Components/Carousel/Carousel';
import heroStyles from './HeroSection.module.css';

export default function HeroSection({ images }) {
    return (
        <section className={`${heroStyles.heroSection} glass-rad-gra`}>
            <div className={heroStyles.heroBlueGlow}></div>
            <div className={heroStyles.heroStars}></div>
            <div className={heroStyles.tagSection}>
                <div className={heroStyles.tagline}>
                    <h1>"Learn Simply,<br />  Code Smartly"</h1>
                    <h2>Your Path to Full Stack </h2><h2>& Flutter Mastery!</h2>
                </div>
            </div>
            <Carousel images={images} />
        </section>
    );
}
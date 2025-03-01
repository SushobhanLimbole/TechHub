import { useState, useEffect } from 'react';
import Carousel from '../../../Components/Carousel/Carousel';
import heroStyles from './HeroSection.module.css';
import MobileCarousel from '../../../Components/MobileCarousel/MobileCarousel';

export default function HeroSection({ images }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 850); // Adjust breakpoint as needed
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            {
                isMobile
                ? <MobileCarousel images={images}/>
                : <Carousel images={images} />
            }
        </section>
    );
}
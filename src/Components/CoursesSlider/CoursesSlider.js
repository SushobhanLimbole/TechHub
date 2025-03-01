import { useEffect, useState, useRef } from "react";
import styles from './CoursesSlider.module.css';
import { useNavigate } from "react-router-dom";

export default function CoursesSlider({images}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const navigate = useNavigate();

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //     );
    // };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => handleNext(), 4000);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // Cleanup on unmount
    }, []);

    function handleNavigation() {
        navigate('/courses');
    }

    return (
        <div
            className={styles.carousel}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <div className={styles.cards}>
                {images.map((url, index) => (
                    <div
                        key={index}
                        className={`${styles.card} ${index === currentIndex
                                ? styles.active
                                : index === (currentIndex + 1) % images.length
                                    ? styles.next
                                    : index === (currentIndex - 1 + images.length) % images.length
                                        ? styles.prev
                                        : styles.hidden
                            }`}
                        aria-hidden={index !== currentIndex}
                    >
                        <img src={url} alt={`Slide ${index + 1}`} onClick={handleNavigation}/>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            {/* <button
                className={`${styles.control} ${styles.prev}`}
                onClick={handlePrev}
                aria-label="Previous slide"
            >
                &#9664;
            </button>
            <button
                className={`${styles.control} ${styles.next}`}
                onClick={handleNext}
                aria-label="Next slide"
            >
                &#9654;
            </button> */}
        </div>
    );
}
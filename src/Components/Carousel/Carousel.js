import { useEffect, useState, useRef } from "react";
import carouselStyles from "./Carousel.module.css";

export default function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
        );
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => handleNext(), 2000);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // Cleanup on unmount
    }, []);

    return (
        <div
            className={carouselStyles.carousel}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <div className={`${carouselStyles.carouselGlow} glow-center-pink`}></div>
            <div className={carouselStyles.cards}>
                {props.images.map((url, index) => (
                    <div
                        key={index}
                        className={`${carouselStyles.card} ${
                            index === currentIndex
                                ? carouselStyles.active
                                : index === (currentIndex + 1) % props.images.length
                                ? carouselStyles.next
                                : index === (currentIndex - 1 + props.images.length) % props.images.length
                                ? carouselStyles.prev
                                : carouselStyles.hidden
                        }`}
                        aria-hidden={index !== currentIndex}
                    >
                        <img src={url} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            {/* <button
                className={`${carouselStyles.control} ${carouselStyles.prev}`}
                onClick={handlePrev}
                aria-label="Previous slide"
            >
                &#9664;
            </button>
            <button
                className={`${carouselStyles.control} ${carouselStyles.next}`}
                onClick={handleNext}
                aria-label="Next slide"
            >
                &#9654;
            </button> */}
        </div>
    );
}

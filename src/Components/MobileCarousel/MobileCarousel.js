import { Carousel } from "react-bootstrap";
import styles from './MobileCarousel.module.css';

export default function MobileCarousel({ images = [] }) {

    return (
        <Carousel className={styles.mobCarousel}>
            {
                images.map((image,index) => (
                    <Carousel.Item>
                        <img className={styles.mobCarouselImg} src={image} alt={`Slide ${index + 1}`} />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

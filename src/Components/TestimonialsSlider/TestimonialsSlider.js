import styles from "./TestimonialsSlider.module.css";
import { Carousel } from "react-bootstrap";
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';

export default function TestimonialsSlider({ contents }) {
    
    return (
        <Carousel controls={false}>

            {
                contents.map((content) => (<Carousel.Item interval={3000}>
                    <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginBottom:'70px'
                }}>
                        <TestimonialsCard/>
                        <div className={styles.divider}></div>
                        <TestimonialsCard/>
                        <div className={styles.divider}></div>
                        <TestimonialsCard/>
                    </div>
                </Carousel.Item>))
            }

        </Carousel>
    );
}

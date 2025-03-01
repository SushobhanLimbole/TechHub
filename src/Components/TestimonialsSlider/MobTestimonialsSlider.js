import { Carousel } from 'react-bootstrap'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'
import styles from './TestimonialsSlider.module.css'

export default function MobTestimonialsSlider({ contents }) {

    return (
        <Carousel controls={false}>

            {
                contents.map((content) => (<Carousel.Item interval={3000}>
                    <div className={`${styles.mobSlider}`} >
                        <TestimonialsCard styleKey={1} />
                    </div>
                </Carousel.Item>))
            }

        </Carousel>
    )
}

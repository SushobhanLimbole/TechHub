import styles from "./TestimonialsSlider.module.css";
import { Carousel } from "react-bootstrap";
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';

export default function TestimonialsSlider({ contents }) {

    function renderContent(key, arr) {
        switch (key) {
            case 1:
                return (<Carousel.Item interval={3000}>
                    <div className={`${styles.singleCardSlider} ${styles.slider}`} >
                        <TestimonialsCard styleKey={1} />
                    </div>
                </Carousel.Item>)

            case 2:
                return (<Carousel.Item interval={3000}>
                    <div className={`${styles.twoCardSlider} ${styles.slider}`} >
                        <TestimonialsCard styleKey={2}/>
                        <div className={styles.divider}></div>
                        <TestimonialsCard styleKey={2}/>
                    </div>
                </Carousel.Item>)

            case 3:
                return (<Carousel.Item interval={3000}>
                    <div className={`${styles.threeCardSlider} ${styles.slider}`} >
                        <TestimonialsCard />
                        <div className={styles.divider}></div>
                        <TestimonialsCard />
                        <div className={styles.divider}></div>
                        <TestimonialsCard />
                    </div>
                </Carousel.Item>)

            default:
                <></>
                break;
        }
    }

    let tempArr = [];
    let completeArr = [];
    contents.forEach((ele, index) => {
        tempArr.push(ele);
        if ((index + 1) % 2 === 0) {
            completeArr.push(tempArr);
            tempArr = [];
        }
    })
    completeArr.push(tempArr);
    tempArr = [];
    console.log('completeArr = ', completeArr);

    return (
        <Carousel controls={false}>

            {   
                completeArr.map((content) => renderContent(content.length, content))
            }

        </Carousel>
    );
}

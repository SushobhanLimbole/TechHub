import styles from './TechStack.module.css';
import demoPic from '../../../Assets/html_logo.png';
import CourseSyllabus from '../CourseSyllabus/CourseSyllabus';
import { useState } from 'react';

export default function TechStack({ techStack = [] }) {

    const [selectedIndex,setIndex] = useState(0);

    function handleSelection(index) {
        setIndex(index);
    }

    return (
        <section className={styles.infoSection}>
            <div className={styles.techStack}>
                {
                    techStack.map((ele,index) => (
                        <div onClick={() => handleSelection(index)} className={ `${styles.card} ${index === selectedIndex ? styles.active : ''}`}>
                            <img src={demoPic} alt='logo' />
                            <h3>{ele.techName}</h3>
                        </div>
                    ))
                }
            </div>
            <CourseSyllabus techName={techStack[selectedIndex].techName} syllabus={techStack[selectedIndex].syllabus}/>
        </section>
    );
}
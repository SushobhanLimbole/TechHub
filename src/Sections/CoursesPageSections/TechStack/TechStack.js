import styles from './TechStack.module.css';
import demoPic from '../../../Assets/html_logo.png';

export default function TechStack() {

    const demo = ['HTML', 'CSS', 'Javascript', 'ReactJs', 'Python'];

    return (
        <div className={styles.techStack}>
            {
                demo.map((e) => (
                    <div className={styles.card}>
                        <img src={demoPic} alt='logo' />
                        <h3>{e}</h3>
                    </div>
                ))
            }
        </div>
    );
}
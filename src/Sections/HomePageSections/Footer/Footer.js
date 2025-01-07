import logo from '../../../Assets/logo_codex.png';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.innerFooterSection}>
                <img className={styles.footerLogo} src={logo} alt="logo" />
                <div className={styles.quickLinks}>
                    <h1>Quick Links</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Courses</a></li>
                        <li><a href="/">Enquiry</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div className={styles.contactColumn}>
                    <h1>GET IN TOUCH</h1>
                    <a className={styles.email} href='mailto:sushobhanlimbole17@gmail.com'><svg className={styles.mailLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg> sushobhanlimbole17@gmail.com</a>
                </div>
            </div>
            <h3 className={styles.copyright}>Copyright © 2025 Technology Hub Pvt Ltd. All Rights Reserved.</h3>
        </footer>
    );
}
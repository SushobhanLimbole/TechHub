import { useRef } from "react";
import styles from './ContactUsSection.module.css';

export default function ContactUs() {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);

    const handleMouseMove = (e, containerRef, cursorRef) => {
        if (containerRef.current && cursorRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left; // Cursor position relative to container
            const y = e.clientY - rect.top;

            cursorRef.current.style.left = `${x}px`;
            cursorRef.current.style.top = `${y}px`;
            cursorRef.current.style.visibility = "visible"; // Show the cursor

            // Tilt effect
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = -((y - centerY) / centerY) * 10; // Invert Y for correct up/down tilt
            const rotateY = ((x - centerX) / centerX) * 10;  // Normal X for left/right tilt


            // Determine which border to highlight
            let borderColor = "";

            if (x < rect.width * 0.2 && y < rect.height * 0.2) {
                borderColor = styles.borderTopLeft;
            } else if (x > rect.width * 0.8 && y < rect.height * 0.2) {
                borderColor = styles.borderTopRight;
            } else if (x < rect.width * 0.2 && y > rect.height * 0.8) {
                borderColor = styles.borderBottomLeft;
            } else if (x > rect.width * 0.8 && y > rect.height * 0.8) {
                borderColor = styles.borderBottomRight;
            } else if (x < rect.width * 0.2) {
                borderColor = styles.borderLeft;
            } else if (x > rect.width * 0.8) {
                borderColor = styles.borderRight;
            } else if (y < rect.height * 0.2) {
                borderColor = styles.borderTop;
            } else if (y > rect.height * 0.8) {
                borderColor = styles.borderBottom;
            }

            // Update border styling
            containerRef.current.className = `${styles.contactUs} cursor-section`; // Reset all borders
            if (borderColor) {
                containerRef.current.classList.add(`${borderColor}`);
            }

            containerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };

    const handleMouseLeave = (containerRef, cursorRef) => {
        if (cursorRef.current) {
            cursorRef.current.style.visibility = "hidden"; // Hide the cursor
            containerRef.current.className = `${styles.contactUs} cursor-section`;
        }
        if (containerRef.current) {
            containerRef.current.style.transform = "rotateX(0) rotateY(0)"; // Reset tilt
        }
    };

    return (
        <div
            className={`${styles.contactUs} cursor-section`}
            ref={containerRef}
            onMouseMove={(e) => handleMouseMove(e, containerRef, cursorRef)}
            onMouseLeave={() => handleMouseLeave(containerRef, cursorRef)}
        >
            <div className={`cursor ${styles.cursorColor}`} ref={cursorRef}></div>
            <h1 className={styles.contactUsHeader}>Stay Connected</h1>
            <h2 className={styles.tagline}>Reach Out to Us Anytime!</h2>
            <iframe title="map" className={styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d346.23957809007453!2d74.00692402237547!3d17.68915335699561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1736245453387!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <h1><svg className={styles.mailLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg> Email</h1>
                    <a className={styles.email} href='mailto:sushobhanlimbole17@gmail.com'> sushobhanlimbole17@gmail.com</a>
                </div>
                <div className={styles.content}>
                    <h1><svg className={styles.callLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg> Call Number</h1>
                    <p className={styles.call}>0000000000</p>
                </div>
            </div>
        </div>
    );
}
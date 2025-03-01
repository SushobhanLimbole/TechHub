import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700); // Adjust breakpoint as needed
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {
                isMobile
                    ? <MobileNavbar />
                    : <nav className={styles.navbar}>
                        <div className={styles.logoNavSection}>
                            <Link to={'/'}><div className={styles.logo}></div></Link>
                        </div>
                        <ul className={styles.navLinks}>
                            <li><Link to={"/"} onClick={() => document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })}>Courses</Link></li>
                            <li><Link to={"/"}>Enquiry</Link></li>
                            <li><Link to={"/about-us"}>About Us</Link></li>
                            <li><Link to={"/"} onClick={() => document.querySelector('#contact-us-id')?.scrollIntoView({ behavior: 'smooth' })}>Contact Us</Link></li>
                        </ul>
                    </nav>
            }
        </>
    );
}
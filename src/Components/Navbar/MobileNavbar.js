import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoNavSection}>
                <Link to={'/'}><div className={styles.logo}></div></Link>
            </div>
            <div className={styles.menuToggle} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
            {isOpen && (
                <ul className={styles.navMobMenu}>
                    <li><Link to={"/courses"}>Courses</Link></li>
                    <div className={styles.divider}></div>
                    <li><Link to={"/"}>Enquiry</Link></li>
                    <div className={styles.divider}></div>
                    <li><Link to={"/about-us"}>About Us</Link></li>
                    <div className={styles.divider}></div>
                    <li><Link to={"/#contact-us"}>Contact Us</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default MobileNavbar;

import { Link } from 'react-router-dom';
import navbarStyles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={navbarStyles.navbar}>
            <Link to={'/'}><div className={navbarStyles.logo}></div></Link>
            <ul className={navbarStyles.navContent}>
                <li className={navbarStyles.navLinks}><Link to={'/courses'}>Courses</Link></li>
                <li className={navbarStyles.navLinks}><Link to={'/'}>Enquiry</Link></li>
                <li className={navbarStyles.navLinks}><Link to={'/about-us'}>About Us</Link></li>
                <li className={navbarStyles.navLinks}><a href='/#contact-us'>Contact Us</a></li>
            </ul>
        </div>
    );
}
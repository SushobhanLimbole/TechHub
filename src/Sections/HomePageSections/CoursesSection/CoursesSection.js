import { useEffect, useRef, useState } from "react";
import styles from './CoursesSection.module.css';
import CoursesSlider from '../../../Components/CoursesSlider/CoursesSlider';

export default function Courses({ images }) {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 850); // Adjust breakpoint as needed
        };
    
        const handleTouchOutside = (e) => {
          if (containerRef.current && !containerRef.current.contains(e.target)) {
            resetEffects();
          }
        };
    
        // Initial setup
        handleResize();
        window.addEventListener('resize', handleResize);
    
        if (isMobile) {
          document.addEventListener("touchstart", handleTouchOutside);
        }
    
        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
          document.removeEventListener("touchstart", handleTouchOutside);
        };
      }, [isMobile]);

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
            containerRef.current.className = `cursor-section ${styles.courses}`; // Reset all borders
            if (borderColor) {
                containerRef.current.classList.add(`${borderColor}`);
            }

            containerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };

    const handleMouseLeave = (containerRef, cursorRef) => {
        if (cursorRef.current && !isMobile) {
            cursorRef.current.style.visibility = "hidden"; // Hide the cursor
            containerRef.current.className = `cursor-section ${styles.courses}`;
        }
        if (containerRef.current && !isMobile) {
            containerRef.current.style.transform = "rotateX(0) rotateY(0)"; // Reset tilt
        }
    };

    const resetEffects = () => {
        if (cursorRef.current) {
          cursorRef.current.style.visibility = "hidden";
        }
        if (containerRef.current) {
          containerRef.current.className = `cursor-section ${styles.courses}`;
          containerRef.current.style.transform = "rotateX(0) rotateY(0)";
        }
      };

    // const content = {
    //     image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
    //     title: "Java Full Stack",
    //     duration: "8 Months",
    //     price: "13,500",
    //     description: "Java Full Stack Development combines front-end and back-end expertise, leveraging Java, frameworks like Spring Boot, and front-end technologies such as HTML, CSS, and JavaScript to build dynamic, scalable, and robust web applications.",
    //     techStack: [
    //         {
    //             techImg: '',
    //             techName: 'HTML',
    //             syllabus: [
    //                 'Introduction to HTML',
    //                 'Block Tag',
    //                 'Inline Tag'
    //             ]
    //         },
    //         {
    //             techImg: '',
    //             techName: 'CSS',
    //             syllabus: [
    //                 'Introduction to CSS',
    //                 'Variables',
    //                 'Classes'
    //             ]
    //         },
    //         {
    //             techImg: '',
    //             techName: 'JavaScript',
    //             syllabus: [
    //                 'Introduction to HTML',
    //                 'Block Tag',
    //                 'Inline Tag'
    //             ]
    //         },
    //         {
    //             techImg: '',
    //             techName: 'ReactJs',
    //             syllabus: [
    //                 'Introduction to HTML',
    //                 'Block Tag',
    //                 'Inline Tag'
    //             ]
    //         },
    //         {
    //             techImg: '',
    //             techName: 'Python',
    //             syllabus: [
    //                 'Introduction to HTML',
    //                 'Block Tag',
    //                 'Inline Tag'
    //             ]
    //         },
    //     ]
    // };

    return (
        <div
            id="courses"
            className={`cursor-section ${styles.courses}`}
            ref={containerRef}
            onMouseMove={(e) => handleMouseMove(e, containerRef, cursorRef)}
            onMouseLeave={() => handleMouseLeave(containerRef, cursorRef)}
        >
            <div className={`cursor ${styles.cursorColor}`} ref={cursorRef}></div>
            <h1 className={styles.coursesHeader}>Enter the Coding World with Us</h1>
            <h2 className={styles.tagline}>Discover Knowledge and Growth Through Our Expert-Led Courses! </h2>
            <div className={styles.coursesSlider}>
                <CoursesSlider images={images} />
            </div>
        </div>
    );
}
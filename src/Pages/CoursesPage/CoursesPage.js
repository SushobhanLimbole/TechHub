import { useLocation } from "react-router-dom";
import CertificatesSection from "../../Sections/CoursesPageSections/CertificatesSection/CertificatesSection";
import CoursesIntro from "../../Sections/CoursesPageSections/CoursesIntro/CoursesIntro";
import TechStack from "../../Sections/CoursesPageSections/TechStack/TechStack";
import styles from './CoursesPage.module.css';

export default function CoursesPage() {

    // const location = useLocation();
    // const content = location.state || {};

    const content = {
        courseIntro: {
            image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
            title: "Java Full Stack",
            duration: "8 Months",
            price: "13,500",
            description: "Java Full Stack Development combines front-end and back-end expertise, leveraging Java, frameworks like Spring Boot, and front-end technologies such as HTML, CSS, and JavaScript to build dynamic, scalable, and robust web applications.",
        },
        aboutCourse: 'The Java Full Stack Development Program offers an extensive exploration of both front-end and back-end technologies. Beginning with Core Java, participants gain mastery over object-oriented programming and foundational concepts. The curriculum advances into crafting responsive and interactive interfaces using HTML, CSS, JavaScript, and React.js. On the server side, expertise in JDBC, Hibernate, and Spring Boot empowers learners to design robust, scalable, and secure applications. This program emphasizes practical implementation, preparing individuals for excellence in the ever-evolving software industry.',
        techStack: [
            {
                techImg: '',
                techName: 'HTML',
                syllabus: [
                    'Introduction to HTML',
                    'Block Tag',
                    'Inline Tag'
                ]
            },
            {
                techImg: '',
                techName: 'Advanced Java',
                syllabus: [
                    'Introduction to CSS',
                    'Variables',
                    'Classes'
                ]
            },
            {
                techImg: '',
                techName: 'JavaScript',
                syllabus: [
                    'Introduction to HTML',
                    'Block Tag',
                    'Inline Tag'
                ]
            },
            {
                techImg: '',
                techName: 'ReactJs',
                syllabus: [
                    'Introduction to HTML',
                    'Block Tag',
                    'Inline Tag'
                ]
            },
            {
                techImg: '',
                techName: 'Python',
                syllabus: [
                    'Introduction to HTML',
                    'Block Tag',
                    'Inline Tag'
                ]
            },
        ],
        certificate: ''
    };

    return (
        <>
            <CoursesIntro content={content.courseIntro} />
            <section className={styles.glowSection}>
                <section className={styles.aboutSection}>
                    <h1>About Course</h1>
                    <p>{content.aboutCourse}</p>
                    <div className={styles.aboutBlueGlow}></div>
                    <div className={styles.aboutPinkGlow}></div>
                    <div className={styles.aboutLeftStars}></div>
                    <div className={styles.aboutRightStars}></div>
                </section>
                <TechStack techStack={content.techStack}/>
            </section>
            <CertificatesSection certificate={content.certificate} />
        </>
    );
}
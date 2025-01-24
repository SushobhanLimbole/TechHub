import CertificatesSection from "../../Sections/CoursesPageSections/CertificatesSection/CertificatesSection";
import CoursesIntro from "../../Sections/CoursesPageSections/CoursesIntro/CoursesIntro";
import TechStack from "../../Sections/CoursesPageSections/TechStack/TechStack";
import styles from './CoursesPage.module.css';

export default function CoursesPage() {

    const content = {
        image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        title: "Java Full Stack",
        duration: "8 Months",
        price: "13,500",
        description: "Java Full Stack Development combines front-end and back-end expertise, leveraging Java, frameworks like Spring Boot, and front-end technologies such as HTML, CSS, and JavaScript to build dynamic, scalable, and robust web applications.",
        techStack: [
            {
                techImg: '',
                techName: 'HTML'
            },
            {
                techImg: '',
                techName: 'CSS'
            },
            {
                techImg: '',
                techName: 'Js'
            },
        ]
    };

    return (
        <>
            <CoursesIntro content={content} />
            <section className={styles.glowSection}>
                <section className={styles.aboutSection}>
                    <h1>About Course</h1>
                    <p>The Java Full Stack Development Program offers an extensive exploration of both front-end and back-end technologies. Beginning with Core Java, participants gain mastery over object-oriented programming and foundational concepts. The curriculum advances into crafting responsive and interactive interfaces using HTML, CSS, JavaScript, and React.js. On the server side, expertise in JDBC, Hibernate, and Spring Boot empowers learners to design robust, scalable, and secure applications. This program emphasizes practical implementation, preparing individuals for excellence in the ever-evolving software industry.</p>
                    <div className={styles.aboutBlueGlow}></div>
                    <div className={styles.aboutPinkGlow}></div>
                    <div className={styles.aboutLeftStars}></div>
                    <div className={styles.aboutRightStars}></div>
                </section>
                <TechStack />
            </section>
            <CertificatesSection />
        </>
    );
}
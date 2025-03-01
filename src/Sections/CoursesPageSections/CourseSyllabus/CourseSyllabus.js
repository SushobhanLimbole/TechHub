import styles from './CourseSyllabus.module.css';

export default function CourseSyllabus({ techName, syllabus = [] }) {
    return (
        <>
            <div className={styles.syllabusSection}>
                <h1 className={styles.header}>{techName}</h1>
                <ol>
                    {
                        syllabus.map((content) => <li>{content}</li>)
                    }
                </ol>
            </div>
        </>
    )
}

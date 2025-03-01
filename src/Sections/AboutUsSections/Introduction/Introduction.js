import instaLogo from '../../../Assets/insta.png';
import linkedinLogo from '../../../Assets/linkedin.png';
import styles from './Introduction.module.css';

export default function Introduction() {
    return (
        <section className={styles.introductionSection}>
            <div className={styles.blueGlow}></div>
            <div className={styles.pinkGlow}></div>
            <div className={styles.leftStars}></div>
            <div className={styles.rightStars}></div>
            <div className={styles.card}>
                <img className={styles.profilePhoto} src={"https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"} alt='Shubham Sir' />
            </div>
            <div className={styles.intro}>
                <h1>Shubham Mane</h1>
                <div className={styles.socialMedia}>
                    <h3>Founder</h3>
                    <a href='/'><img src={linkedinLogo} alt='linkedin'/></a>
                    <a href='/'><img src={instaLogo} alt='instagram'/></a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius deserunt error repellat soluta commodi totam quas sit blanditiis dolorum quia, aperiam magnam voluptatem non architecto id similique, dolore qui!
                    Voluptate, quisquam! Officia aperiam, expedita illo unde architecto nemo? Laudantium deserunt maxime, ea inventore corrupti rem quo excepturi repellat nihil earum distinctio sequi, aperiam illo neque libero fuga rerum nesciunt?
                    Ea consequatur beatae impedit. Ad ea, vel iusto maiores, quas consequuntur rerum molestias dolorum optio provident consectetur fugiat ipsam! Corrupti, quam. Recusandae cumque possimus fuga laborum voluptatem enim, assumenda.
                    Aspernatur in enim eveniet consequatur voluptatibus maxime labore aliquam illum ut. Ea laboriosam delectus consectetur consequuntur fuga earum unde officia perferendis laborum. Porro quibusdam vitae quod vel iste fugiat quia.
                    Eos culpa quidem, illo quia animi non quibusdam consequatur laborum, dolorem libero reprehenderit maiores cum maxime nihil molestias? Fuga cumque error illo cupiditate, aut est quasi amet veniam soluta alias.
                    Non, facere ducimus. Ea aliquid, commodi numquam natus error sint expedita animi consequatur, ex voluptas ab odit sed voluptate optio reprehenderit voluptatem dolorem cupiditate minima, non debitis. Asperiores, hic! Iusto.
                    Non mollitia laudantium quia eos veniam in voluptatem nisi tenetur rerum, optio ad accusamus.</p>
            </div>
        </section>
    );
}
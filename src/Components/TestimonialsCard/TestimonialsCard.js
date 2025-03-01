import cardStyles from './TestimonialsCard.module.css';

export default function TestimonialsCard({ styleKey = '' }) {

    let styleCard;

    function cardStyle() {
        switch (styleKey) {
            case 1:
                styleCard = cardStyles.singleCard;
                break;

            case 2:
                styleCard = cardStyles.twoCard;
                break;

            case 3:
                styleCard = cardStyles.threeCard;
                break;

            default:
                break;
        }
    }
    cardStyle();

    return (
        <div className={`${cardStyles.testimonialsCard} ${styleCard}`}>
            <div className={cardStyles.testimonialsCardHeader}>
                <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="profile pic" />
                <h2>Sushobhan Limbole</h2>
            </div>
            <p>Love Babbar is a Software Engineer and a Youtuber, primarily known for his Coding and Software Engineering skills. He is quite a popular figure among students as well as working professionals on various social media platforms, his YouTube and LinkedIn profiles amassing almost 1M subscribers. He's also mentored 500k+ students so far. He has done his B.Tech from the Netaji Subhash Institute of Technology, Delhi, and worked in Amazon and Microsoft.</p>
        </div>
    );
}
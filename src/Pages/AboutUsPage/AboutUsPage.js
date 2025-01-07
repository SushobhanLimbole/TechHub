import FeaturesSection from '../../Sections/AboutUsSections/FeaturesSection/FeaturesSection';
import Introduction from '../../Sections/AboutUsSections/Introduction/Introduction';
import QuoteSection from '../../Sections/AboutUsSections/QuoteSection/QuoteSection';
// import styles from './AboutUsPage.module.css';

export default function AboutUsPage() {
    return (
        <>
            <Introduction />
            <QuoteSection />
            <FeaturesSection />
        </>
    );
}
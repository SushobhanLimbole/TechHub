import HeroSection from "../../Sections/HomePageSections/HeroSection/HeroSection";
import Testimonials from "../../Sections/HomePageSections/TestimonialsSection/TestimonialsSection";
import Courses from "../../Sections/HomePageSections/CoursesSection/CoursesSection";
import ContactUs from "../../Sections/HomePageSections/ContactUsSection/ContactUsSection";

export default function HomePage() {

    // images array for carousel
    const images = [
        "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
        "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    ];
    
    return (
        <>
            <HeroSection images={images} />
            <Courses images={images}/>
            <Testimonials/>
            <ContactUs/>
        </>
    );
}

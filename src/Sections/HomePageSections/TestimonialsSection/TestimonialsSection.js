import { useRef } from "react";
import TestimonialsSlider from '../../../Components/TestimonialsSlider/TestimonialsSlider';
import testimonialsStyles from './TestimonialsSection.module.css';

export default function Testimonials() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

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
        borderColor = testimonialsStyles.borderTopLeft;
      } else if (x > rect.width * 0.8 && y < rect.height * 0.2) {
        borderColor = testimonialsStyles.borderTopRight;
      } else if (x < rect.width * 0.2 && y > rect.height * 0.8) {
        borderColor = testimonialsStyles.borderBottomLeft;
      } else if (x > rect.width * 0.8 && y > rect.height * 0.8) {
        borderColor = testimonialsStyles.borderBottomRight;
      } else if (x < rect.width * 0.2) {
        borderColor = testimonialsStyles.borderLeft;
      } else if (x > rect.width * 0.8) {
        borderColor = testimonialsStyles.borderRight;
      } else if (y < rect.height * 0.2) {
        borderColor = testimonialsStyles.borderTop;
      } else if (y > rect.height * 0.8) {
        borderColor = testimonialsStyles.borderBottom;
      }

      // Update border styling
      containerRef.current.className = `${testimonialsStyles.testimonials} cursor-section`; // Reset all borders
      if (borderColor) {
        containerRef.current.classList.add(`${borderColor}`);
      }

      containerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = (containerRef, cursorRef) => {
    if (cursorRef.current) {
      cursorRef.current.style.visibility = "hidden"; // Hide the cursor
      containerRef.current.className = `${testimonialsStyles.testimonials} cursor-section`;
    }
    if (containerRef.current) {
      containerRef.current.style.transform = "rotateX(0) rotateY(0)"; // Reset tilt
    }
  };

  const contents = [1, 2, 3, 4, 5];

  return (
    <div
      id="testimonials"
      className={`${testimonialsStyles.testimonials} cursor-section`}
      ref={containerRef}
      onMouseMove={(e) => handleMouseMove(e, containerRef, cursorRef)}
      onMouseLeave={() => handleMouseLeave(containerRef, cursorRef)}
    >
      <div className={`cursor ${testimonialsStyles.cursorColor}`} ref={cursorRef}></div>
      <h1 className={testimonialsStyles.testimonialsHeader}>What our Student Says</h1>
      <h2 className={testimonialsStyles.tagline}>Discover inspiration and insights through recent reviews from our students. </h2>
      <TestimonialsSlider contents={contents} />
    </div>
  );
}
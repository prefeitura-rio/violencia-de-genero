import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollytellingSection = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');

    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: `.trigger-${index + 1}`,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black min-h-screen relative">
      <div className="h-screen trigger-1"></div>
      <div className="h-screen trigger-2"></div>
      <div className="h-screen trigger-3"></div>
      <div className="h-screen trigger-4"></div>
      <div className="h-screen trigger-5"></div>
      <div className="h-screen trigger-6"></div>

      <div className="fixed inset-0 flex items-center justify-center fade-in text-white text-4xl">
        Welcome to the Scrollytelling Experience
      </div>
      <div className="fixed inset-0 flex items-center justify-center fade-in text-white text-4xl">
       Discover the Magic of Scrolling
      </div>
     
      <div className="fixed inset-0 flex items-center justify-center fade-in text-white text-4xl">
       Keep Exploring
      </div>
      <div className="fixed inset-0 flex items-center justify-center fade-in text-white text-4xl">
       Almost There
      </div>
     
    </div>
  );
};

export default ScrollytellingSection;
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollytellingSection = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.left-eye-trigger',
      start: 'top center',
      onEnter: () => gsap.to('.left-eye', { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to('.left-eye', { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: '.right-eye-trigger',
      start: 'top center',
      onEnter: () => gsap.to('.right-eye', { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to('.right-eye', { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: '.sunglasses-trigger',
      start: 'top center',
      onEnter: () => {
        gsap.to(['.left-eye', '.right-eye'], { opacity: 0, duration: 0.5 });
        gsap.to('.sunglasses', { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to('.sunglasses', { opacity: 0, duration: 0.5 });
        gsap.to(['.left-eye', '.right-eye'], { opacity: 1, duration: 0.5 });
      },
    });
  }, []);

  return (
    <div className="bg-black min-h-screen relative">
      <div className="h-screen left-eye-trigger bg-red-300"></div>
      <div className="h-screen right-eye-trigger bg-purple-400"></div>
      <div className="h-screen sunglasses-trigger bg-black"></div>

      <div className="fixed flex flex-row top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="left-eye opacity-0">
          <img src="./left-eye.png" alt="Left Eye" />
        </div>
        <div className="right-eye opacity-0">
          <img src="./right-eye.png" alt="Right Eye" />
        </div>
        <div className="sunglasses opacity-0">
          <img src="./sunglasses.png" alt="Sunglasses" />
        </div>
      </div>
    </div>
  );
};

export default ScrollytellingSection;
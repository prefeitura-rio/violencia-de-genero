import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollytellingSection = () => {
  useEffect(() => {
    gsap.to('.text1', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.trigger-1',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse'
      }
    });

    gsap.to('.text2', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.trigger-2',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse'
      }
    });

    gsap.to('.text1, .text2', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.trigger-3',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse'
      }
    });

    gsap.to('.text3', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.trigger-4',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse'
      }
    });

    gsap.to('.text4', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.trigger-5',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse'
      }
    });

    gsap.to('.text3, .text4', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.trigger-6',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse'
      }
    });
  }, []);

  return (
    <div className="bg-black min-h-screen relative">
      <div className="h-screen trigger-1 bg-red-300"></div>
      <div className="h-screen trigger-2 bg-purple-400"></div>
      <div className="h-screen trigger-3 bg-green-500"></div>
      <div className="h-screen trigger-4 bg-black"></div>
      <div className="h-screen trigger-5 bg-blue-600"></div>
      <div className="h-screen trigger-6 bg-yellow-500"></div>

      <div className="fixed inset-0 flex flex-col items-center justify-center space-y-4 text-white text-4xl">
        <div className="text1 opacity-0">Welcome to the Scrollytelling Experience</div>
        <div className="text1 opacity-0">bb</div>
        <div className="text2 opacity-0">Discover the Magic of Scrolling</div>
        <div className="text3 opacity-0">Keep Exploring</div>
        <div className="text4 opacity-0">Almost There</div>
      </div>
    </div>
  );
};

export default ScrollytellingSection;
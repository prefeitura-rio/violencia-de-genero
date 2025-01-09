import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import mute from "../assets/mute.svg";
import replay from "../assets/replay.svg";
import Cover from "./Cover";
import Intro from "./Intro";
import Cases from "./Cases";
import ClockSection from "./ClockSection";
import CasesTwo from "./CasesTwo";

gsap.registerPlugin(ScrollTrigger);

const ScrollytellingSection = () => {
  useEffect(() => {
    gsap.set(
      ".frame2, .frame3, .frame4, .frame5, .frame6,.frame7,.frame8,.frame9, .frame10, .frame11, .frame12, .frame13, .frame14,.frame15, .frame16,.frame17,.frame18,.frame19,.frame20, .frame21, .frame22, .frame23, .frame24, .frame25, .frame26, .frame27, .frame28, .frame29, .frame30, .frame31, .frame32, .frame33 ",
      { opacity: 0 }
    );

    ScrollTrigger.create({
      trigger: ".frame1-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame1", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame1", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame2-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame2", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame2", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame3-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame1", ".frame2"], { opacity: 0, duration: 0.5 });
        gsap.to(".frame3", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame3", { opacity: 0, duration: 0.5 });
        gsap.to([".frame1", ".frame2"], { opacity: 1, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame4-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame4", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame4", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame5-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame5", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame5", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame6-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame4", ".frame5"], { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame4", { opacity: 1, duration: 0.5 });
        gsap.to(".frame5", { opacity: 1, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame7-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame7", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame7", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame8-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame8", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame8", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame9-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame7", ".frame8"], { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame7", { opacity: 1, duration: 0.5 });
        gsap.to(".frame8", { opacity: 1, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame10-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame10", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame10", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame11-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame10"], { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame10", { opacity: 1, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame12-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame12", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame12", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame13-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame13", { opacity: 1, duration: 0.5 });
        gsap.to(".frame12", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame13", { opacity: 0, duration: 0.5 });
        gsap.to(".frame12", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame14-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame14", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame14", { opacity: 0, duration: 0.5 }),
    });
    ScrollTrigger.create({
      trigger: ".frame15-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame15", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame15", { opacity: 0, duration: 0.5 }),
    });
    ScrollTrigger.create({
      trigger: ".frame16-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame16", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame16", { opacity: 0, duration: 0.5 }),
    });
    ScrollTrigger.create({
      trigger: ".frame17-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame17", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame17", { opacity: 0, duration: 0.5 }),
    });
    ScrollTrigger.create({
      trigger: ".frame18-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame18", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame18", { opacity: 0, duration: 0.5 }),
    });
    ScrollTrigger.create({
      trigger: ".frame19-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame19", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame19", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame19-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(
          [
            ".frame13",
            ".frame14",
            ".frame15",
            ".frame16",
            ".frame17",
            ".frame18",
            ".frame19",
          ],
          { opacity: 0, duration: 0.5 }
        );
      },
      onLeaveBack: () => {
        gsap.to(".frame13", { opacity: 1, duration: 0.5 });
        gsap.to(".frame14", { opacity: 1, duration: 0.5 });
        gsap.to(".frame15", { opacity: 1, duration: 0.5 });
        gsap.to(".frame16", { opacity: 1, duration: 0.5 });
        gsap.to(".frame17", { opacity: 1, duration: 0.5 });
        gsap.to(".frame18", { opacity: 1, duration: 0.5 });
        gsap.to(".frame19", { opacity: 1, duration: 0.5 });
      },
    });

    // A Violência contra mulheres aumentou...
    ScrollTrigger.create({
      trigger: ".frame20-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame20", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame20", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame21-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame21", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame21", { opacity: 0, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame22-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame22", { opacity: 1, duration: 0.5 });
        gsap.to(".frame21", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame22", { opacity: 0, duration: 0.5 });
        gsap.to(".frame21", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame23-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame23", { opacity: 1, duration: 0.5 });
        gsap.to(".frame22", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame23", { opacity: 0, duration: 0.5 });
        gsap.to(".frame22", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame24-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame24", { opacity: 1, duration: 0.5 });
        gsap.to(".frame23", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame24", { opacity: 0, duration: 0.5 });
        gsap.to(".frame23", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame25-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame25", { opacity: 1, duration: 0.5 });
        gsap.to(".frame24", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame25", { opacity: 0, duration: 0.5 });
        gsap.to(".frame24", { opacity: 1, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame26-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame25, .frame20"], { opacity: 0, duration: 0.5 });
        gsap.to(".frame26", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame26", { opacity: 0, duration: 0.5 });
        gsap.to([".frame25, .frame20"], { opacity: 1, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame27-trigger",
      start: "top center",
      onEnter: () => gsap.to(".frame27", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame27", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame28-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame27"], { opacity: 0, duration: 0.5 });
        gsap.to(".frame28", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame28", { opacity: 0, duration: 0.5 });
        gsap.to([".frame27"], { opacity: 1, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame29-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame29", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame29", { opacity: 0, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame30-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame29"], { opacity: 0, duration: 0.5 });
        gsap.to(".frame30", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame30", { opacity: 0, duration: 0.5 });
        gsap.to([".frame29"], { opacity: 1, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame31-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame31", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame31", { opacity: 0, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame32-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame32", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame32", { opacity: 0, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame33-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame31", ".frame32", ".frame33"], {
          opacity: 0,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to([".frame31", ".frame32", ".frame33"], {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  }, []);

  return (
    <div className="bg-black min-h-screen relative">
      {/* Section1 */}
      <div className="h-screen frame1-trigger"></div>
      <div className="h-screen frame2-trigger"></div>
      <div className="h-screen frame3-trigger"></div>
      {/* Section2 */}
      <div className="h-screen frame4-trigger"></div>
      <div className="h-screen frame5-trigger"></div>
      <div className="h-screen frame6-trigger"></div>
      {/* Section3 */}
      <div className="h-screen frame7-trigger"></div>
      <div className="h-screen frame8-trigger"></div>
      <div className="h-screen frame9-trigger"></div>
      {/* Cover */}
      <div className="h-screen frame10-trigger"></div>
      <div className="h-screen frame11-trigger"></div>
      {/* Intro */}
      <div className="h-screen frame12-trigger"></div>
      {/* Cases */}
      <div className="h-screen frame13-trigger"></div>
      <div className="h-screen frame14-trigger"></div>
      <div className="h-screen frame15-trigger"></div>
      <div className="h-screen frame16-trigger"></div>
      <div className="h-screen frame17-trigger"></div>
      <div className="h-screen frame18-trigger"></div>
      <div className="h-screen frame19-trigger"></div>
      {/* ClockSection */}
      <div className="h-screen frame20-trigger"></div>
      <div className="h-screen frame21-trigger"></div>
      <div className="h-screen frame22-trigger"></div>
      <div className="h-screen frame23-trigger"></div>
      <div className="h-screen frame24-trigger"></div>
      <div className="h-screen frame25-trigger"></div>
      <div className="h-screen frame26-trigger"></div>
      {/* CasesTwo */}
      <div className="h-screen frame27-trigger"></div>
      <div className="h-screen frame28-trigger"></div>
      <div className="h-screen frame29-trigger"></div>
      <div className="h-screen frame30-trigger"></div> {/* clean */}
      <div className="h-screen frame31-trigger"></div>
      <div className="h-screen frame32-trigger"></div>
      <div className="h-screen frame33-trigger"></div> {/* clean */}
      <div className="h-screen fixed w-full flex flex-col items-center">
        <div className="flex items-center justify-center fixed top-28 w-full">
          <div className="frame1 border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="frame1 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="frame2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="frame1 text-white text-lg">
            Ele tinha problemas com álcool?
          </p>
        </div>
        <div className="frame2 flex items-center justify-center fixed top-52 w-full text-xl">
          <p className="text-white">
            “Ele era um, quando bebia era outro. Se transformava em outra
            pessoa.”
          </p>
        </div>
      </div>
      <img
        src={img1}
        alt="Fixed Bottom Left"
        className="frame2 fixed bottom-0 left-0 w-auto h-[50vh] sm:h-[70vh] lg:h-[85vh]"
      />
      <div className="frame2 fixed sm:bottom-8 sm:right-8 bottom-4 right-4 flex gap-4">
        <button
          className="w-7 h-7 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 1 clicked")}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-8 h-8 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 2 clicked")}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>
      {/* Section2 */}
      <div className="h-screen fixed w-full flex flex-col items-center md:items-start md:pl-32">
        <div className="flex items-center justify-center fixed top-52 w-full md:w-auto">
          <div className="frame4 border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="frame4 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="frame5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="frame4 text-white text-lg">
            Ele te xingava ou constrangia?
          </p>
        </div>
        <div className="frame5 flex items-center justify-center fixed top-72 w-full md:w-auto text-xl">
          <p className="text-white">
            “Chamava de puta, de vagabunda. Na frente dos outros.”
          </p>
        </div>
      </div>
      <img
        src={img2}
        alt="Fixed Bottom Left"
        className="frame5 fixed bottom-0 right-0 w-auto h-[50vh] sm:h-[70vh] lg:h-[85vh]"
      />
      <div className="frame5 fixed sm:bottom-28 sm:left-32 bottom-4 left-4 flex gap-4">
        <button
          className="w-7 h-7 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 1 clicked")}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-8 h-8 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 2 clicked")}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>
      {/* Section3 */}
      <div className="h-screen fixed w-full flex flex-col items-center md:items-end md:pr-32">
        <div className="flex items-center justify-center fixed top-52 w-full md:w-auto">
          <div className="frame7 border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="frame7 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="frame8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="frame7 text-white text-lg">
            Ele já te ameaçou ou agrediu?
          </p>
        </div>
        <div className="frame8 flex items-center justify-center fixed top-72 w-full md:w-auto text-xl">
          <p className="text-white">
            “Ele me tacou álcool e quis tocar fogo. Falou que eu só poderia sair
            dali morta.”
          </p>
        </div>
      </div>
      <img
        src={img3}
        alt="Fixed Bottom Left"
        className="frame8 fixed bottom-0 left-0 w-auto h-[50vh] sm:h-[70vh] lg:h-[85vh]"
      />
      <div className="frame8 fixed sm:bottom-28 sm:right-32 bottom-4 right-4 flex gap-4">
        <button
          className="w-7 h-7 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 1 clicked")}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-8 h-8 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 2 clicked")}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>
      {/* Cover */}
      <Cover />
      {/* Intro */}
      <Intro />
      {/* Cases */}
      <Cases />
      {/* ClockSection */}
      <ClockSection />
      {/* CasesTwo */}
      <CasesTwo />
    </div>
  );
};

export default ScrollytellingSection;

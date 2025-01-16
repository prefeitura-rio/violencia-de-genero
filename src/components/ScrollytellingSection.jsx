import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import mute from "../assets/mute.svg";
import replay from "../assets/replay.svg";
import rightIcon from "../assets/right-icon.svg";
import Cover from "./Cover";
import Intro from "./Intro";
import Cases from "./Cases";
import ClockSection from "./ClockSection";
import CasesTwo from "./CasesTwo";
import MapSection from "./MapSection";
import TypingEffect from "./TypingEffect";
import Intro2 from "./Intro2";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

const ScrollytellingSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const audioRef2 = useRef(null);
  const audioRef5 = useRef(null);

  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollTime(Date.now());
      setShowMessage(false);
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      if (Date.now() - lastScrollTime > 3000) {
        setShowMessage(true);
      }
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [lastScrollTime]);

  useEffect(() => {
    gsap.set(
      ".frame2, .frame3, .frame4, .frame5, .frame6,.frame7,.frame8,.frame9, .frame10, .frame11, .frame12, .frame12-2, .frame13, .frame14,.frame15, .frame16,.frame17,.frame18,.frame19,.frame20, .frame21, .frame22, .frame23, .frame24, .frame25, .frame26, .frame27, .frame28, .frame29, .frame30, .frame31, .frame32, .frame33, .frame34, .frame35, .frame36, .frame37, .frame38, .frame39, .frame40, .frame41, .frame42, .frame43, .frame44, .frame45, .frame46, .frame47, .frame48, .frameCMC, .frameCEAM, .frameNEAM, .frameNEAP, .frameAS, .frameSMC",
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
      onEnter: () => {
        gsap.to(".frame2", { opacity: 1, duration: 0.5 });
        setStartAnimation("frame2");
        audioRef2.current.play();
      },
      onLeaveBack: () => {
        gsap.to(".frame2", { opacity: 0, duration: 0.5 });
        audioRef2.current.pause();
        audioRef2.current.currentTime = 0;
      },
      onLeave: () => {
        setStartAnimation("");
        audioRef2.current.pause();
        audioRef2.current.currentTime = 0;
      },
      onEnterBack: () => setStartAnimation("frame2"),
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
      onEnter: () => {
        gsap.to(".frame5", { opacity: 1, duration: 0.5 });
        setStartAnimation("frame5");
        audioRef5.current.play();
      },
      onLeaveBack: () => {
        gsap.to(".frame5", { opacity: 0, duration: 0.5 });
        audioRef5.current.pause();
        audioRef5.current.currentTime = 0;
      },
      onLeave: () => {
        setStartAnimation("");
        audioRef5.current.pause();
        audioRef5.current.currentTime = 0;
      },
      onEnterBack: () => setStartAnimation("frame5"),
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
      onEnter: () => {
        gsap.to(".frame8", { opacity: 1, duration: 0.5 });
        setStartAnimation("frame8");
      },
      onLeaveBack: () => gsap.to(".frame8", { opacity: 0, duration: 0.5 }),
      onLeave: () => setStartAnimation(""),
      onEnterBack: () => setStartAnimation("frame8"),
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
      trigger: ".frame12-2-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame12-2", { opacity: 1, duration: 0.5 });
        gsap.to(".frame12", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame12-2", { opacity: 0, duration: 0.5 });
        gsap.to(".frame12", { opacity: 1, duration: 0.5 });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame13-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame13", { opacity: 1, duration: 0.5 });
        gsap.to(".frame12-2", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame13", { opacity: 0, duration: 0.5 });
        gsap.to(".frame12-2", { opacity: 1, duration: 0.5 });
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
      onEnter: () => {
        gsap.to(".frame27", { opacity: 1, duration: 0.5 });
        setStartAnimation("frame27");
      },
      onLeaveBack: () => gsap.to(".frame27", { opacity: 0, duration: 0.5 }),
      onLeave: () => setStartAnimation(""),
      onEnterBack: () => setStartAnimation("frame27"),
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
        setStartAnimation("frame32");
      },
      onLeaveBack: () => {
        gsap.to(".frame32", { opacity: 0, duration: 0.5 });
      },
      onLeave: () => setStartAnimation(""),
      onEnterBack: () => setStartAnimation("frame32"),
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

    ScrollTrigger.create({
      trigger: ".frame34-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame34", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame34", { opacity: 0, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame35-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame35", { opacity: 1, duration: 0.5 });
        setStartAnimation("frame35");
      },
      onLeaveBack: () => {
        gsap.to(".frame35", { opacity: 0, duration: 0.5 });
      },
      onLeave: () => setStartAnimation(""),
      onEnterBack: () => setStartAnimation("frame35"),
    });

    ScrollTrigger.create({
      trigger: ".frame36-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame34", ".frame35", ".frame36"], {
          opacity: 0,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to([".frame34", ".frame35", ".frame36"], {
          opacity: 1,
          duration: 0.5,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".frame37-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame37", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame37", { opacity: 0, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame38-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame38", { opacity: 1, duration: 0.5 });
        setStartAnimation("frame38");
      },
      onLeaveBack: () => {
        gsap.to(".frame38", { opacity: 0, duration: 0.5 });
      },
      onLeave: () => setStartAnimation(""),
      onEnterBack: () => setStartAnimation("frame38"),
    });
    ScrollTrigger.create({
      trigger: ".frame39-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame37", ".frame38", ".frame39"], {
          opacity: 0,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to([".frame37", ".frame38", ".frame39"], {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame40-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame40", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame40", { opacity: 0, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame41-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame41", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame41", { opacity: 0, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame42-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame42", { opacity: 1, duration: 0.5 });
        gsap.to(".frameCMC", { opacity: 1, duration: 0.5 });
        gsap.to(".frame41", { opacity: 0, duration: 0.5 });
        gsap.to(".frame40", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame42", { opacity: 0, duration: 0.5 });
        gsap.to(".frameCMC", { opacity: 0, duration: 0.5 });
        gsap.to(".frame41", { opacity: 1, duration: 0.5 });
        gsap.to(".frame40", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame43-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame43", { opacity: 1, duration: 0.5 });
        gsap.to(".frameCEAM", { opacity: 1, duration: 0.5 });
        gsap.to(".frame42", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame43", { opacity: 0, duration: 0.5 });
        gsap.to(".frameCEAM", { opacity: 0, duration: 0.5 });
        gsap.to(".frame42", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame44-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame44", { opacity: 1, duration: 0.5 });
        gsap.to(".frameNEAM", { opacity: 1, duration: 0.5 });
        gsap.to(".frame43", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame44", { opacity: 0, duration: 0.5 });
        gsap.to(".frameNEAM", { opacity: 0, duration: 0.5 });
        gsap.to(".frame43", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame45-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame45", { opacity: 1, duration: 0.5 });
        gsap.to(".frameNEAP", { opacity: 1, duration: 0.5 });
        gsap.to(".frame44", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame45", { opacity: 0, duration: 0.5 });
        gsap.to(".frameNEAP", { opacity: 0, duration: 0.5 });
        gsap.to(".frame44", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame46-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame46", { opacity: 1, duration: 0.5 });
        gsap.to(".frameAS", { opacity: 1, duration: 0.5 });
        gsap.to(".frame45", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame46", { opacity: 0, duration: 0.5 });
        gsap.to(".frameAS", { opacity: 0, duration: 0.5 });
        gsap.to(".frame45", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame47-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame47", { opacity: 1, duration: 0.5 });
        gsap.to(".frameSMC", { opacity: 1, duration: 0.5 });
        gsap.to(".frame46", { opacity: 0, duration: 0.5 });
        // gsap.to(".frame45", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame47", { opacity: 0, duration: 0.5 });
        gsap.to(".frameSMC", { opacity: 0, duration: 0.5 });
        gsap.to(".frame46", { opacity: 1, duration: 0.5 });
        // gsap.to(".frame45", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame48-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame48", { opacity: 1, duration: 0.5 });
        gsap.to(
          ".frame47, .frameCMC, .frameCEAM ,.frameNEAM ,.frameNEAP ,.frameAS ,.frameSMC",
          {
            opacity: 0,
            duration: 0.5,
          }
        );
      },
      onLeaveBack: () => {
        gsap.to(".frame48", { opacity: 0, duration: 0.5 });
        gsap.to(
          ".frame47, .frameCMC, .frameCEAM ,.frameNEAM ,.frameNEAP ,.frameAS ,.frameSMC",
          {
            opacity: 1,
            duration: 0.5,
          }
        );
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
      <div className="h-screen block sm:hidden frame12-2-trigger"></div>
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
      <div className="h-screen frame34-trigger"></div>
      <div className="h-screen frame35-trigger"></div>
      <div className="h-screen frame36-trigger"></div>
      <div className="h-screen frame37-trigger"></div>
      <div className="h-screen frame38-trigger"></div>
      <div className="h-screen frame39-trigger"></div>
      {/* MapSection */}
      <div className="h-screen frame40-trigger"></div>
      <div className="h-screen frame41-trigger"></div>
      <div className="h-screen frame42-trigger"></div>
      <div className="h-screen frame43-trigger"></div>
      <div className="h-screen frame44-trigger"></div>
      <div className="h-screen frame45-trigger"></div>
      <div className="h-screen frame46-trigger"></div>
      <div className="h-screen frame47-trigger"></div>
      <div className="h-screen frame48-trigger"></div>
      {showMessage && (
        <div className="text-sm bg-transparent z-50 fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-white bg-black bg-opacity-50 blink">
          Continue descendo
        </div>
      )}
      <div className="h-screen fixed w-full flex flex-col items-center">
        <audio
          ref={audioRef2}
          src="https://cdn.freesound.org/previews/368/368384_3298571-lq.mp3"
        />
        <audio
          ref={audioRef5}
          src="https://cdn.freesound.org/previews/368/368386_3298571-lq.mp3"
        />
        <div className="flex items-center justify-center fixed top-28 md:top-1/2 md:-mt-48 w-full">
          <div className="frame1 border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="scale-150 frame2"
            />
          </div>
          <p className="frame1 text-white text-2xl xl:text-3xl">
            Ele tinha problemas com álcool?
          </p>
        </div>
        <div className="frame2 flex items-center justify-center fixed top-56 md:inset-0 md:m-auto w-full max-w-[600px]">
          <p className="text-white text-3xl xl:text-4xl mx-4">
            <TypingEffect
              text={` “Ele era um, quando bebia era outro. \nSe transformava em outra pessoa.”`}
              speed={80}
              showBlink={false}
              startAnimation={startAnimation === "frame2"}
            />
          </p>
        </div>
      </div>
      <img
        src={img1}
        alt="Fixed Bottom Left"
        className="frame2 fixed bottom-0 left-0 w-auto h-[60vh] lg:h-[85vh]"
      />
      <div className="frame2 z-50 fixed sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4">
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer"
          onClick={() => {
            audioRef2.current.currentTime = 0;
            audioRef2.current.play();
          }}
          disabled={startAnimation !== "frame2"}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer"
          onClick={() => {
            audioRef2.current.muted = !audioRef2.current.muted;
          }}
          disabled={startAnimation !== "frame2"}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>
      {/* Section2 */}
      <div className="flex items-center justify-start fixed top-28 md:top-1/2 md:-mt-48 w-full pl-4 md:pl-32">
        <div className="frame5 border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
          <img src={rightIcon} alt="Right Icon" className="scale-150 frame5" />
        </div>
        <p className="frame5 text-white text-2xl xl:text-3xl">
          Ele te xingava ou constrangia?
        </p>
      </div>
      <div className="frame5 flex items-center justify-start fixed top-56 md:inset-0 w-full max-w-[600px] pl-4 md:pl-32">
        <p className="text-white text-3xl xl:text-4xl">
          <TypingEffect
            text={`“Chamava de puta, de vagabunda. \nNa frente dos outros.”`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame5"}
          />
        </p>
      </div>
      <img
        src={img2}
        alt="Fixed Bottom Left"
        className="frame5 fixed bottom-0 right-0  w-[100vw] max-w-[500px] sm:max-w-[600px] sm:w-[70vw] md:max-w-[800px]"
      />
      <div className="frame5 z-50 fixed sm:bottom-28 pl-4 bottom-28 md:pl-32 flex gap-4">
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer"
          onClick={() => {
            audioRef5.current.currentTime = 0;
            audioRef5.current.play();
          }}
          disabled={startAnimation !== "frame5"}
        >
          <img src={replay} alt="Button 2b" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer"
          onClick={() => {
            audioRef5.current.muted = !audioRef5.current.muted;
          }}
          disabled={startAnimation !== "frame5"}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>
      {/* Section3 */}
      <div className="flex items-center justify-center sm:justify-end fixed top-28 md:top-1/2 md:-mt-48 w-full pr-4 md:pr-20 lg:pr-32">
        <div className="frame7 border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
          <img src={rightIcon} alt="Right Icon" className="scale-150 frame8" />
        </div>
        <p className="frame7 text-white text-2xl xl:text-3xl">
          Ele já te ameaçou ou agrediu?
        </p>
      </div>
      <div className="frame8 flex items-center justify-center sm:justify-end fixed top-56 md:inset-0 w-full pr-4 md:pr-20 lg:pr-32 ">
        <p className="text-white text-3xl xl:text-4xl mx-4 sm:mx-0 max-w-[600px]">
          <TypingEffect
            text={`“Ele me tacou álcool e quis tocar fogo. \nFalou que eu só poderia sair dali morta.”`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame8"}
          />
        </p>
      </div>
      <img
        src={img3}
        alt="Fixed Bottom Left"
        className="frame8 fixed -bottom-10 -left-10 w-[100vw] max-w-[500px] sm:max-w-[600px] sm:w-[70vw] md:max-w-[800px]"
      />
      <div className="frame8 fixed z-50 sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4">
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 3a clicked")}
          disabled={startAnimation !== "frame8"}
        >
          <img src={replay} alt="Button 3b" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 2 clicked")}
          disabled={startAnimation !== "frame8"}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>
      {/* Cover */}
      <Cover />
      {/* Intro */}
      <Intro />
      {/* Intro2 - Continuation for Mobile */}
      <Intro2 />
      {/* Cases */}
      <Cases />
      {/* ClockSection */}
      <ClockSection />
      {/* CasesTwo */}
      <CasesTwo startAnimation={startAnimation} />
      {/* MapSection */}
      <MapSection />
    </div>
  );
};

export default ScrollytellingSection;

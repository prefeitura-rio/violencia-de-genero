import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cover from "./Cover";
import Intro from "./Intro";
import BeforeIntro from "./BeforeIntro";
import Cases from "./Cases";
import ClockSection from "./ClockSection";
import CasesTwo from "./CasesTwo";
import MapSection from "./MapSection";
import Conclusion from "./Conclusion";
import Intro2 from "./Intro2";
import "../App.css";
import AudioControl from "./AudioControl";

gsap.registerPlugin(ScrollTrigger);

const ScrollytellingSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const audioRef = useRef(null);
  const [audioSource, setAudioSource] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [buttonsPosition, setButtonsPosition] = useState("");

  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  const [showMessage, setShowMessage] = useState(false);
  const [triggerActivated, setTriggerActivated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollTime(Date.now());
      if (!triggerActivated) {
        setShowMessage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      if (Date.now() - lastScrollTime > 3000 && !triggerActivated) {
        setShowMessage(true);
      }
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [lastScrollTime, triggerActivated]);

  useEffect(() => {
    gsap.set(
      "buttons, .frame2, .frame3, .frame4, .frame5, .frame6,.frame7,.frame8,.frame9, .frame10, .frame11, .frame12, .frame12-2, .frame13, .frame14,.frame15, .frame16,.frame17,.frame18,.frame19,.frame20, .frame21, .frame22, .frame23, .frame24, .frame25, .frame26, .frame27, .frame28, .frame29, .frame30, .frame31, .frame32, .frame33, .frame34, .frame35, .frame36, .frame37, .frame38, .frame39, .frame40, .frame41, .frame42, .frame43, .frame44, .frame45, .frame46, .frame47, .frame48, .frameCMC, .frameCEAM, .frameNEAM, .frameNEAP, .frameAS, .frameSMC,.frame1-conclusao,.frame1b-conclusao, .frame2-conclusao, .frame3-conclusao, .frame5-conclusao, .frame6-conclusao",
      { opacity: 0 }
    );
    gsap.set(".casesTwo", { display: "none" });

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
        gsap.to([".frame2", ".buttons"], { opacity: 1, duration: 0.5 });
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4"
        );
        setStartAnimation("frame2");
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/ele_era_um.mp3"
        );
        setIsDisabled(false);
      },
      onLeaveBack: () => {
        gsap.to([".frame2", ".buttons"], { opacity: 0, duration: 0.5 });
        setIsDisabled(true);
      },
      onLeave: () => {
        setStartAnimation("");
        setIsDisabled(true);
      },
      onEnterBack: () => {
        setStartAnimation("frame2");
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4"
        );
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/ele_era_um.mp3"
        );
        setIsDisabled(false);
      },
    });

    ScrollTrigger.create({
      trigger: ".frame3-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame1", ".frame2", ".buttons"], {
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".frame3", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame3", { opacity: 0, duration: 0.5 });
        gsap.to([".frame1", ".frame2", ".buttons"], {
          opacity: 1,
          duration: 0.5,
        });
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
        gsap.to([".frame5", ".buttons"], { opacity: 1, duration: 0.5 });
        setButtonsPosition(
          "fixed sm:bottom-28 pl-4 bottom-[44vh] md:pl-32 flex gap-4"
        );
        setStartAnimation("frame5");
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/chamava_de_puta.mp3"
        );
        setIsDisabled(false);
      },
      onLeaveBack: () => {
        gsap.to([".frame5", ".buttons"], { opacity: 0, duration: 0.5 });
        setIsDisabled(true);
      },
      onLeave: () => {
        setStartAnimation("");
        setIsDisabled(true);
      },
      onEnterBack: () => {
        setStartAnimation("frame5");
        setButtonsPosition(
          "fixed sm:bottom-28 pl-4 bottom-[44vh] md:pl-32 flex gap-4"
        );
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/chamava_de_puta.mp3"
        );
        setIsDisabled(false);
      },
    });

    ScrollTrigger.create({
      trigger: ".frame6-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame4", ".frame5", ".buttons"], {
          opacity: 0,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(".frame4", { opacity: 1, duration: 0.5 });
        gsap.to(".frame5", { opacity: 1, duration: 0.5 });
        gsap.to(".buttons", { opacity: 1, duration: 0.5 });
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
        gsap.to([".frame8", ".buttons"], { opacity: 1, duration: 0.5 });
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-[40vh] flex gap-4"
        );
        setStartAnimation("frame8");
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/ele_me_tacou_alcool.mp3"
        );
        setIsDisabled(false);
      },
      onLeaveBack: () => {
        gsap.to([".frame8", ".buttons"], { opacity: 0, duration: 0.5 });
        setIsDisabled(true);
      },
      onLeave: () => {
        setStartAnimation("");
        setIsDisabled(true);
      },
      onEnterBack: () => {
        setStartAnimation("frame8");
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-[40vh] flex gap-4"
        );
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/ele_me_tacou_alcool.mp3"
        );
        setIsDisabled(false);
      },
    });

    ScrollTrigger.create({
      trigger: ".frame9-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame7", ".frame8", ".buttons"], {
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".frame9", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame9", { opacity: 0, duration: 0.5 });
        gsap.to([".frame7", ".frame8", ".buttons"], {
          opacity: 1,
          duration: 0.5,
        });
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
      onEnter: () => gsap.to(".frame27", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".frame27", { opacity: 0, duration: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: ".frame28-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame28", ".buttons"], { opacity: 1, duration: 0.5 });
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-8 flex gap-4"
        );
        setStartAnimation("frame28");
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/na_primeira_vez_que_me_deu_um_tapa.mp3"
        );
        setIsDisabled(false);
      },
      onLeaveBack: () => {
        gsap.to([".frame28", ".buttons"], { opacity: 0, duration: 0.5 });
        setIsDisabled(true);
      },
      onLeave: () => {
        setStartAnimation("");
        setIsDisabled(true);
      },
      onEnterBack: () => {
        setStartAnimation("frame28");
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-8 flex gap-4"
        );
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/na_primeira_vez_que_me_deu_um_tapa.mp3"
        );
        setIsDisabled(false);
      },
    });

    ScrollTrigger.create({
      trigger: ".frame29-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame27", ".frame28", ".buttons"], {
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".frame29", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame29", { opacity: 0, duration: 0.5 });
        gsap.to([".frame27", ".frame28", ".buttons"], {
          opacity: 1,
          duration: 0.5,
        });
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
      trigger: ".frame30b-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame30"], { opacity: 0, duration: 0.5 });
        gsap.to(".frame30b", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame30b", { opacity: 0, duration: 0.5 });
        gsap.to([".frame30"], { opacity: 1, duration: 0.5 });
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
        gsap.to([".frame32", ".buttons"], { opacity: 1, duration: 0.5 });
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4"
        );
        setStartAnimation("frame32");
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/ele_era_ciumento.mp3"
        );
        setIsDisabled(false);
      },
      onLeaveBack: () => {
        gsap.to([".frame32", ".buttons"], { opacity: 0, duration: 0.5 });
        setIsDisabled(true);
      },
      onLeave: () => {
        setStartAnimation("");
        setIsDisabled(true);
      },
      onEnterBack: () => {
        setStartAnimation("frame32");
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4"
        );
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/ele_era_ciumento.mp3"
        );
        setIsDisabled(false);
      },
    });

    ScrollTrigger.create({
      trigger: ".frame33-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame31", ".frame32", ".frame33", ".buttons"], {
          opacity: 0,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to([".frame31", ".frame32", ".frame33", ".buttons"], {
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
        gsap.to([".frame35", ".buttons"], { opacity: 1, duration: 0.5 });
        setButtonsPosition(
          "sm:bottom-28 left-4 md:left-20 lg:left-32 bottom-28 flex gap-4"
        );
        setStartAnimation("frame35");
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/ele_controlava_onde_eu_ia.mp3"
        );
        setIsDisabled(false);
      },
      onLeaveBack: () => {
        gsap.to([".frame35", ".buttons"], { opacity: 0, duration: 0.5 });
        setIsDisabled(true);
      },
      onLeave: () => {
        setStartAnimation("");
        setIsDisabled(true);
      },
      onEnterBack: () => {
        setStartAnimation("frame35");
        setButtonsPosition(
          "sm:bottom-28 left-4 md:left-20 lg:left-32 bottom-28 flex gap-4"
        );
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/ele_controlava_onde_eu_ia.mp3"
        );
        setIsDisabled(false);
      },
    });

    ScrollTrigger.create({
      trigger: ".frame36-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame34", ".frame35", ".frame36", ".buttons"], {
          opacity: 0,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to([".frame34", ".frame35", ".frame36", ".buttons"], {
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
        gsap.to([".frame38", ".buttons"], { opacity: 1, duration: 0.5 });
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4"
        );
        setStartAnimation("frame38");
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/teve_uma_vez.mp3"
        );
        setIsDisabled(false);
      },
      onLeaveBack: () => {
        gsap.to([".frame38", ".buttons"], { opacity: 0, duration: 0.5 });
        setIsDisabled(true);
      },
      onLeave: () => {
        setStartAnimation("");
        setIsDisabled(true);
      },
      onEnterBack: () => {
        setStartAnimation("frame38");
        setButtonsPosition(
          "sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4"
        );
        setAudioSource(
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/teve_uma_vez.mp3"
        );
        setIsDisabled(false);
      },
    });
    ScrollTrigger.create({
      trigger: ".frame39-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to([".frame37", ".frame38", ".frame39", ".buttons"], {
          opacity: 0,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to([".frame37", ".frame38", ".frame39", ".buttons"], {
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
    ScrollTrigger.create({
      trigger: ".frame1-conclusao-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame1-conclusao", { opacity: 1, duration: 0.5 });
        gsap.to(".frame48", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame1-conclusao", { opacity: 0, duration: 0.5 });
        gsap.to(".frame48", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame1b-conclusao-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame1b-conclusao", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame1b-conclusao", { opacity: 0, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame2-conclusao-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame2-conclusao", { opacity: 1, duration: 0.5 });
        gsap.to(".frame1-conclusao", { opacity: 0, duration: 0.5 });
        gsap.to(".frame1b-conclusao", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame2-conclusao", { opacity: 0, duration: 0.5 });
        gsap.to(".frame1-conclusao", { opacity: 1, duration: 0.5 });
        gsap.to(".frame1b-conclusao", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame3-conclusao-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame3-conclusao", { opacity: 1, duration: 0.5 });
        gsap.to(".frame2-conclusao", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame3-conclusao", { opacity: 0, duration: 0.5 });
        gsap.to(".frame2-conclusao", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame4-conclusao-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame3-conclusao", { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame3-conclusao", { opacity: 1, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame5-conclusao-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame5-conclusao", { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(".frame5-conclusao", { opacity: 0, duration: 0.5 });
      },
    });
    ScrollTrigger.create({
      trigger: ".frame6-conclusao-trigger",
      start: "top center",
      onEnter: () => {
        gsap.to(".frame6-conclusao", { opacity: 1, duration: 0.5 });
        gsap.to(".frame5-conclusao", { opacity: 0, duration: 0.5 });
        setShowMessage(false);
        setTriggerActivated(true);
      },
      onLeaveBack: () => {
        gsap.to(".frame6-conclusao", { opacity: 0, duration: 0.5 });
        gsap.to(".frame5-conclusao", { opacity: 1, duration: 0.5 });
        setShowMessage(true);
        setTriggerActivated(false);
      },
    });
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSource;
      if (!isDisabled) {
        audioRef.current.play();
      }
    }
  }, [audioSource, isDisabled]);

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
      <div className="h-screen frame30-trigger"></div>
      <div className="h-screen frame30b-trigger"></div> {/* clean */}
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
      {/* Conclusion */}
      <div className="h-screen frame1-conclusao-trigger"></div>
      <div className="h-screen frame1b-conclusao-trigger"></div>
      <div className="h-screen frame2-conclusao-trigger"></div>
      <div className="h-screen frame3-conclusao-trigger"></div>
      <div className="h-screen frame4-conclusao-trigger"></div>
      <div className="h-screen frame5-conclusao-trigger"></div>
      <div className="h-screen frame6-conclusao-trigger"></div>
      {showMessage && (
        <div className="text-sm bg-transparent z-50 fixed bottom-0 left-1/2 transform -translate-x-1/2 p-1 text-white bg-black bg-opacity-50 blink">
          Continue descendo
        </div>
      )}
      <audio ref={audioRef} />
      <AudioControl
        audioRef={audioRef}
        isDisabled={isDisabled}
        buttonsPosition={buttonsPosition}
      />
      {/* StoryLayout */}
      {/* <StoryLayout /> */}
      {/* BeforeIntro */}
      <BeforeIntro startAnimation={startAnimation} />
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
      <Conclusion />
    </div>
  );
};

export default ScrollytellingSection;

import React from "react";
import rightIcon from "../assets/right-icon.svg";
import TypingEffect from "./TypingEffect";

const BeforeIntro = ({ startAnimation }) => {
  return (
    <>
      <div className="h-screen fixed w-full flex flex-col items-center">
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
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/compressed-images/img1.png"
        alt="Fixed Bottom Left"
        className="frame2 fixed bottom-0 left-0 w-[100vw] max-w-[500px] sm:max-w-[600px] sm:w-[70vw] md:max-w-[800px]"
      />
      {/* Section2 */}
      <div className="flex items-center justify-start fixed top-28 md:top-1/2 md:-mt-48 w-full pl-4 md:pl-32">
        <div className="frame4 border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
          <img src={rightIcon} alt="Right Icon" className="scale-150 frame5" />
        </div>
        <p className="frame4 text-white text-2xl xl:text-3xl">
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
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/compressed-images/img2.png"
        alt="Fixed Bottom Left"
        className="frame5 fixed bottom-0 right-0  w-[100vw] max-w-[400px] lg:w-[70vw] lg:max-w-[800px]"
      />
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
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/compressed-images/img3.png"
        alt="Fixed Bottom Left"
        className="frame8 fixed -bottom-10 -left-10 w-[100vw] max-w-[500px] md:max-w-[600px] md:w-[70vw] xl:max-w-[800px]"
      />
    </>
  );
};

export default BeforeIntro;

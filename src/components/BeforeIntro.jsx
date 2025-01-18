import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import mute from "../assets/mute.svg";
import replay from "../assets/replay.svg";
import rightIcon from "../assets/right-icon.svg";
import TypingEffect from "./TypingEffect";

const BeforeIntro = ({ startAnimation, audioRef2, audioRef5 }) => {
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
    </>
  );
};

export default BeforeIntro;

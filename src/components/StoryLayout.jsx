import TypingEffect from "./TypingEffect";
import rightIcon from "../assets/right-icon.svg";
import mute from "../assets/mute.svg";
import replay from "../assets/replay.svg";
import { useEffect } from "react";

export const StoryLayout = ({
  imgSrc,
  imgPosition,
  checkboxText,
  checkboxTextPosition,
  typingText,
  typingTextPosition,
  buttonsPosition,
  startAnimation,
  frameElements,
  audioSource,
  audioRef,
}) => {
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSource;
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
  }, [audioSource, audioRef]);

  const handleReplay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Failed to replay audio:", error);
      });
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  return (
    <>
      <div className="z-50 h-screen fixed w-full flex flex-col items-center">
        <div className={`${checkboxTextPosition}`}>
          <div
            className={`element1 border-2 border-white w-6 h-6 flex items-center justify-center mr-2`}
          >
            <img
              src={rightIcon}
              alt="Right Icon"
              className={`element2 scale-150`}
            />
          </div>
          <p className={`element1 text-white text-2xl xl:text-3xl`}>
            {checkboxText}
          </p>
        </div>
        <div className={`element2 ${typingTextPosition}`}>
          <p className="text-white text-3xl xl:text-4xl mx-4">
            <TypingEffect
              text={`${typingText}`}
              speed={80}
              showBlink={false}
              startAnimation={startAnimation}
            />
          </p>
        </div>
      </div>
      <img
        src={imgSrc}
        alt="Fixed Bottom Left"
        className={`element2 ${imgPosition}`}
      />
      <div className={`element2 ${buttonsPosition}`}>
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer"
          onClick={handleReplay}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer"
          onClick={handleMute}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>
      <audio ref={audioRef} />
    </>
  );
};

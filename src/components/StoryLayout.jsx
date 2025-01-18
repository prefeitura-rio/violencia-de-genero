import TypingEffect from "./TypingEffect";
import rightIcon from "../assets/right-icon.svg";
import mute from "../assets/mute.svg";
import replay from "../assets/replay.svg";

export const StoryLayout = ({
  imgSrc,
  imgPosition,
  checkboxText,
  checkboxTextPosition,
  typingText,
  typingTextPosition,
  buttonsPosition,
  startAnimation,
  currentFrame,
}) => {
  return (
    <>
      <div className="h-screen fixed w-full flex flex-col items-center">
        <div className={`${checkboxTextPosition}`}>
          <div
            className={`${currentFrame[0]} border-2 border-white w-6 h-6 flex items-center justify-center mr-2`}
          >
            <img src={rightIcon} alt="Right Icon" className="scale-150" />
          </div>
          <p className=" text-white text-2xl xl:text-3xl">{checkboxText}</p>
        </div>
        <div className={`${typingTextPosition}`}>
          <p className="text-white text-3xl xl:text-4xl mx-4">
            <TypingEffect
              text={`${typingText}`}
              speed={80}
              showBlink={false}
              startAnimation={startAnimation === ""}
            />
          </p>
        </div>
      </div>
      <img src={imgSrc} alt="Fixed Bottom Left" className={`${imgPosition}`} />
      <div className={`${buttonsPosition}`}>
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer"
          onClick={() => {}}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer"
          onClick={() => {}}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>
    </>
  );
};

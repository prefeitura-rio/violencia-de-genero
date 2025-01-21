import React from "react";
import muteIcon from "../assets/mute.svg";
import replayIcon from "../assets/replay.svg";

const AudioControl = ({ audioRef, isDisabled, buttonsPosition }) => {
  return (
    <div className={`buttons z-50 fixed ${buttonsPosition}`}>
      <button
        className="w-9 h-9 bg-transparent border-none cursor-pointer"
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }}
        disabled={isDisabled}
      >
        <img src={replayIcon} alt="Replay Audio" className="w-full h-full" />
      </button>
      <button
        className="w-10 h-10 bg-transparent border-none cursor-pointer"
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
          }
        }}
        disabled={isDisabled}
      >
        <img src={muteIcon} alt="Mute Audio" className="w-full h-full" />
      </button>
    </div>
  );
};

export default AudioControl;

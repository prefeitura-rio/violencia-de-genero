import React, { useState, useEffect } from "react";
import muteIcon from "../assets/mute.svg";
import soundIconOn from "../assets/sound_icon_on.svg";
import replayIcon from "../assets/replay.svg";

const AudioControl = ({ audioRef, isDisabled, buttonsPosition }) => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      setIsMuted(audioRef.current.muted);
    }
  }, [audioRef]);

  const handleMuteToggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

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
        onClick={handleMuteToggle}
        disabled={isDisabled}
      >
        <img
          src={isMuted ? muteIcon : soundIconOn}
          alt="Mute Audio"
          className="w-full h-full"
        />
      </button>
    </div>
  );
};

export default AudioControl;

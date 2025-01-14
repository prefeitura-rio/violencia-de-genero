import { useState, useEffect } from "react";

const TypingEffect = ({
  text,
  speed = 100,
  showBlink,
  startAnimation,
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      const delayTimer = setTimeout(() => {
        setStartTyping(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    }
  }, [startAnimation, delay]);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed, startTyping]);

  const lines = displayedText.split("\n");

  return (
    <div className="typing-container">
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      {showBlink && <span className="animate-blink">|</span>}
    </div>
  );
};

export default TypingEffect;

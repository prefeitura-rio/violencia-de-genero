import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    setScrollWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollWidth}%`,
        height: "4px",
        backgroundColor: "white",
        zIndex: 99,
      }}
    />
  );
};

export default ScrollProgressBar;

import { useState, useEffect } from "react";
import "./App.css";
import ScrollytellingSection from "./components/ScrollytellingSection";
import TypingEffect from "./components/TypingEffect";

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 50); // Small delay to trigger the fade-in effect
    }, 7000); // 7 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return (
      <div className="bg-black text-white text-lg flex items-center justify-center h-screen">
        <TypingEffect
          text="Por trás dos números, estão vidas que não podemos ignorar."
          speed={80}
        />
      </div>
    );
  }

  return (
    <div
      className={`bg-red-400 font-cormorant fade-in ${
        showContent ? "show" : ""
      }`}
    >
      <ScrollytellingSection />
    </div>
  );
}

export default App;

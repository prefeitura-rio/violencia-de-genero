import { useState } from "react";
import "./App.css";
import ScrollytellingSection from "./components/ScrollytellingSection";
import TypingEffect from "./components/TypingEffect";

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showDialog, setShowDialog] = useState(true);
  const [audio] = useState(
    new Audio(
      "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/Typing-on-a-keyboard(chosic.com).mp3"
    )
  );

  const startAnimation = () => {
    audio.play().catch((err) => console.error("Audio playback failed:", err));
    const timer = setTimeout(() => {
      setLoading(false);
      audio.pause();
      setTimeout(() => {
        setShowContent(true);
      }, 50); // Small delay to trigger the fade-in effect
    }, 7000); // 7 seconds

    return () => {
      clearTimeout(timer); // Cleanup the timer
      audio.pause(); // Stop the audio if the component unmounts
    };
  };

  const handleAllow = () => {
    setShowDialog(false);
    startAnimation();
  };

  const handleDeny = () => {
    window.location.href =
      "https://www.instagram.com/secretariadamulher.rio/?hl=en";
  };

  if (showDialog) {
    return (
      <div className="bg-black font-cormorant px-2 text-white text-2xl flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="mb-4">
            Este conteúdo contém informações sensíveis sobre violência de
            gênero. Deseja continuar?
          </p>
          <button
            onClick={handleAllow}
            className="bg-gray-600 px-4 py-2 rounded text-white mx-2"
          >
            Continuar
          </button>
          <button
            onClick={handleDeny}
            className="bg-red-500 px-4 py-2 rounded text-white mx-2"
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-black font-cormorant px-6 text-white text-2xl flex items-center justify-center h-screen">
        <TypingEffect
          text="Por trás dos números, estão vidas que não podemos ignorar."
          speed={110}
          showBlink={true}
          startAnimation={true}
        />
      </div>
    );
  }

  return (
    <div className="bg-black font-cormorant">
      <div
        className={`fade-in ${showContent ? "show" : ""}`}
        style={{ minHeight: "100vh" }} // Ensure it takes full screen
      >
        <ScrollytellingSection />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import ScrollytellingSection from "./components/ScrollytellingSection";
import TypingEffect from "./components/TypingEffect";
import rightIcon from "./assets/right-icon.svg";

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

  // const handleDeny = () => {
  //   window.location.href =
  //     "https://www.instagram.com/secretariadamulher.rio/?hl=en";
  // };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTimeout(() => {
      handleAllow();
    }, 500);
  };

  if (showDialog) {
    return (
      <div className="bg-black font-cormorant px-1 text-white text-2xl flex items-center justify-center h-screen">
        <div className="text-center max-w-[600px]">
          <p className="mb-10">
            Atenção: essa reportagem aborda temática sensível a algumas pessoas,
            como violência de gênero e doméstica. Caso você ou alguém conhecido
            esteja passando por uma situação similar às retratadas aqui, entre
            em contato com a Secretaria da Mulher pelo site mulher.rio ou ligue
            para o número 180.
          </p>
          <div className="flex flex-col items-center">
            {/* Botão centralizado */}
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={handleCheckboxChange}
            >
              {/* Caixa personalizada */}
              <div
                className={`border-2 border-white w-6 h-6 flex items-center justify-center bg-transparent mr-2`}
              >
                {isChecked && (
                  <img
                    src={rightIcon}
                    alt="Right Icon"
                    className="scale-150 frame8"
                  />
                )}
              </div>
              {/* Texto "Continuar" */}
              <span className="text-white">Continuar</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-black font-cormorant px-6 text-white text-2xl flex items-center justify-center h-screen text-center">
        <TypingEffect
          text="Para ilustração desta reportagem, foram utilizadas imagens geradas com auxílio de inteligência artificial."
          speed={55}
          showBlink={true}
          startAnimation={true}
          maxWidth="600px"
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

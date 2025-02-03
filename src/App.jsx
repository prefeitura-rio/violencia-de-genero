import { useState } from "react";
import "./App.css";
import ScrollytellingSection from "./components/ScrollytellingSection";
import TypingEffect from "./components/TypingEffect";
import rightIcon from "./assets/right-icon.svg";
import soundUp from "./assets/sound_up.gif";
import ScrollProgressBar from "./ScrollProgressBar";
import scrollDown from "./assets/finger-scroll.gif"; // Import the image
import scrollDownComputer from "./assets/scrollDownComputer.gif"; // Import the image

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showDialog, setShowDialog] = useState(true);
  const [audio] = useState(
    new Audio(
      "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/audios/Typing-on-a-keyboard(chosic.com).mp3"
    )
  );
  const [showBox, setShowBox] = useState(false); // State to manage the box visibility
  const [fadeOut, setFadeOut] = useState(false); // State to manage the fade-out effect

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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTimeout(() => {
      handleAllow();
    }, 500);
  };

  const handleClick = () => {
    setShowBox(true); // Show the box
    setFadeOut(false); // Reset fade-out state

    // Start fade-out after 1.5 seconds
    setTimeout(() => {
      setFadeOut(true); // Trigger fade-out
      setTimeout(() => {
        setShowBox(false); // Hide the box after fade-out completes
      }, 1000); // Match the duration of the fade-out transition
    }, 3000);
  };

  if (showDialog) {
    return (
      <div className="bg-black font-cormorant px-1 text-white text-2xl flex items-center justify-center h-screen">
        <div className="text-center max-w-[600px]">
          <p className="mb-10">
            Atenção: essa reportagem aborda temáticas sensíveis para algumas
            pessoas, como violência de gênero e doméstica. Caso você ou alguém
            conhecido esteja passando por uma situação similar às retratadas
            aqui, entre em contato com a Secretaria da Mulher ou ligue para o
            número 180.
          </p>
          <div className="flex flex-col items-center">
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={handleCheckboxChange}
            >
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
          text="Ligue o áudio. Role o mouse para ler a matéria; não é necessário clicar nas caixas de seleção."
          speed={55}
          showBlink={true}
          startAnimation={true}
          maxWidth="600px"
        />
        <img
          src={soundUp}
          alt="Volume Up"
          className="w-20 fixed bottom-0 pb-10 filter invert"
        />
      </div>
    );
  }

  return (
    <div className="bg-black font-cormorant">
      <ScrollProgressBar />
      <div
        onClick={handleClick}
        className="z-90 flex items-center justify-center fixed top-28 md:top-1/2 md:-mt-48 w-full h-8 cursor-pointer"
      ></div>
      {showBox && (
        <div
          className={`z-90 fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm fade-in-out ${
            fadeOut ? "" : "show"
          }`}
        >
          <div className="bg-gray-800 bg-opacity-40 flex flex-col items-center justify-center p-6 rounded-lg text-center">
            <img src={scrollDown} alt="Central Image" className="w-20 block lg:hidden mb-4" />
            <img
              src={scrollDownComputer}
              alt="Central Image"
              className="hidden w-20 lg:block mb-4"
            />
            <p className="block lg:hidden text-white">Deslize suavemente<br/> para cima para avançar</p>
            <p className="hidden lg:block text-white">Desça suavemente para avançar</p>
          </div>
        </div>
      )}
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

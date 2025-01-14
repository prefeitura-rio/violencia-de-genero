import clockFourGirls from "../assets/clock-four-girls.png";
import fourGirls from "../assets/four-girls.png";

import clockThreeGirls from "../assets/clock-three-girls.png";
import threeGirls from "../assets/three-girls.png";

import clockTwoGirls from "../assets/clock-two-girls.png";
import twoGirls from "../assets/two-girls.png";

import clockOneGirl from "../assets/clock-one-girl.png";
import oneGirl from "../assets/one-girl.png";

const ClockSection = () => {
  return (
    <>
      <div className="fixed h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center px-4">
        {/* Text Section */}
        <div className="fixed top-14 max-w-[600px] text-left mx-4">
          <h1 className="frame20 text-xl xl:text-lg mb-4">
            A Violência contra mulheres aumentou em todos os títulos criminais
            no Brasil em 2023. No Brasil,{" "}
            <strong>4 mulheres foram assassinadas por dia</strong>, na média do
            ano, pelo fato de serem mulheres.
          </h1>
        </div>
      </div>
      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center ">
        <img
          src={clockFourGirls}
          alt="Relógio representando a passagem do tempo"
          className="frame21 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src={fourGirls}
          alt="Quatro figuras femininas representando vítimas"
          className="frame21 w-[80%] sm:w-[50%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockFourGirls}
          alt="Relógio representando a passagem do tempo"
          className="frame21 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src={fourGirls}
          alt="Quatro figuras femininas representando vítimas"
          className="frame21 w-[80%] sm:w-[50%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockThreeGirls}
          alt="Relógio representando a passagem do tempo"
          className="frame22 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src={threeGirls}
          alt="Três figuras femininas representando vítimas"
          className="frame22 w-[80%] sm:w-[50%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockTwoGirls}
          alt="Relógio representando a passagem do tempo"
          className="frame23 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src={twoGirls}
          alt="Três figuras femininas representando vítimas"
          className="frame23 w-[80%] sm:w-[50%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockOneGirl}
          alt="Relógio representando a passagem do tempo"
          className="frame24 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src={oneGirl}
          alt="Três figuras femininas representando vítimas"
          className="frame24 w-[80%] sm:w-[50%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockFourGirls}
          alt="Relógio representando a passagem do tempo"
          className="frame25 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src={oneGirl}
          alt="Três figuras femininas representando vítimas"
          className="frame24 opacity-0 w-[80%] sm:w-[50%] h-auto"
        />
      </div>
    </>
  );
};

export default ClockSection;

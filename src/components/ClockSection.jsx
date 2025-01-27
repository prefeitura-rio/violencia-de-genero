import clockFourGirls from "../assets/clock-four-girls.png";

import clockThreeGirls from "../assets/clock-three-girls.png";

import clockTwoGirls from "../assets/clock-two-girls.png";

import clockOneGirl from "../assets/clock-one-girl.png";

const ClockSection = () => {
  return (
    <>
      <div className="fixed h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center px-4">
        {/* Text Section */}
        <div className="fixed top-14 max-w-[580px] text-left mx-4">
          <h1 className="frame20 text-xl mb-4">
            A Violência contra mulheres aumentou em todo o Brasil em 2023. No
            país,
            <span className="text-[#EECBAD]">
              {" "}
              <strong>4 mulheres foram assassinadas por dia</strong>
            </span>{" "}
            , em média, apenas pelo fato de serem mulheres.
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
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/four-girls.png"
          alt="Quatro figuras femininas representando vítimas"
          className="frame21 w-[80%] sm:w-[35%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockFourGirls}
          alt="Relógio representando a passagem do tempo"
          className="frame21 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/four-girls.png"
          alt="Quatro figuras femininas representando vítimas"
          className="frame21 w-[80%] sm:w-[35%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockThreeGirls}
          alt="Relógio representando a passagem do tempo"
          className="frame22 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/three-girls.png"
          alt="Três figuras femininas representando vítimas"
          className="frame22 w-[80%] sm:w-[35%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockTwoGirls}
          alt="Relógio representando a passagem do tempo"
          className="frame23 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/two-girls.png"
          alt="Três figuras femininas representando vítimas"
          className="frame23 w-[80%] sm:w-[35%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockOneGirl}
          alt="Relógio representando a passagem do tempo"
          className="frame24 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/one_girls.png"
          alt="Três figuras femininas representando vítimas"
          className="frame24 w-[80%] sm:w-[35%] h-auto"
        />
      </div>

      <div className="translate-y-10 sm:translate-y-0 fixed bottom-0 h-screen flex-col sm:flex-row w-full flex items-center justify-center">
        <img
          src={clockFourGirls}
          alt="Relógio representando a passagem do tempo"
          className="frame25 translate-y-10 sm:translate-y-0 pt-20 w-[200px] sm:w-[300px] h-auto"
        />
        <img
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/one_girls.png"
          alt="Três figuras femininas representando vítimas"
          className="frame24 opacity-0 w-[80%] sm:w-[35%] h-auto"
        />
      </div>
    </>
  );
};

export default ClockSection;

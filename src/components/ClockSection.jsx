import clockFourGirls from "../assets/clock-four-girls.png";
import fourGirls from "../assets/four-girls.png";

// import clockThreeGirls from "../assets/clock-three-girls.png";
// import threeGirls from "../assets/three-girls.png";

// import clockTwoGirls from "../assets/clock-two-girls.png";
// import twoGirls from "../assets/two-girls.png";

// import clockOneGirl from "../assets/clock-one-girl.png";
// import oneGirl from "../assets/one-girl.png";

const ClockSection = () => {
  return (
    <div className="fixed h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center px-4">
      {/* Text Section */}
      <div className="fixed top-[15%] max-w-[600px] text-left mx-4">
        <h1 className="frame20 text-md mb-4">
          A Violência contra mulheres aumentou em todos os títulos criminais no
          Brasil em 2023. No Brasil,{" "}
          <strong>4 mulheres foram assassinadas por dia</strong>, na média do
          ano, pelo fato de serem mulheres.
        </h1>
        <div className="absolute top-0 flex justify-center space-x-4 pt-10">
          <img
            src={clockFourGirls}
            alt="Relógio representando a passagem do tempo"
            className="frame20 w-[300px] h-auto object-contain"
          />
          <img
            src={fourGirls}
            alt="Quatro figuras femininas representando vítimas"
            className="frame20 w-[1200px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ClockSection;

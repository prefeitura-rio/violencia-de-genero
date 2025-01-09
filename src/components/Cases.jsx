import manchete_img1 from "../assets/manchete_img1.png";
import manchete_img2 from "../assets/manchete_img2.png";
import manchete_img3 from "../assets/manchete_img3.png";
import manchete_img4 from "../assets/manchete_img4.png";
import manchete_img5 from "../assets/manchete_img5.png";

const Cases = () => {
  return (
    <div className="fixed h-screen w-full flex flex-col items-center justify-center bg-black text-center text-white px-4">
      <div className="mb-6 fixed top-1/4 -translate-y-1/2 items-center flex flex-col max-w-[600px] text-left mx-4">
        <h1 className="text-md mb-2">
          {/* Full text for desktop */}
          <span className="frame13">
            Feminicídio é o assassinato de mulheres motivado por questões de
            gênero, geralmente ligado ao ódio ou desprezo pela condição
            feminina. É uma presença comum nas manchetes dos jornais cariocas,
            expondo casos de uma violência que atinge as mulheres em sua forma
            mais extrema
          </span>
        </h1>
        <img
          className="frame14 z-10 absolute top-32 -left-28"
          src={manchete_img1}
        ></img>
        <img
          className="frame15 z-20 absolute top-48 left-48"
          src={manchete_img2}
        ></img>
        <img
          className="frame16 z-30 absolute top-60 left-0"
          src={manchete_img3}
        ></img>
        <img
          className="frame17 z-40 absolute top-64 -left-24"
          src={manchete_img4}
        ></img>
        <img
          className="frame18 z-50 absolute top-72 left-28"
          src={manchete_img5}
        ></img>
      </div>
    </div>
  );
};

export default Cases;

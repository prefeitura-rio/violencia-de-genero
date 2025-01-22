const Cases = () => {
  return (
    <div className="fixed h-screen w-full flex flex-col items-center justify-center bg-black text-center text-white px-4">
      <div className="mb-6 fixed top-40 -translate-y-1/2 items-center flex flex-col max-w-[600px] text-left mx-4">
        <h1 className="text-xl mb-2">
          {/* Full text for desktop */}
          <span className="frame13">
            Feminicídio é o{" "}
            <span className="text-[#EECBAD]">
              {" "}
              <b>assassinato de mulheres motivado por questões de gênero</b>
            </span>
            , geralmente ligado ao ódio ou desprezo pela condição feminina. É
            uma presença comum nas manchetes dos jornais cariocas, expondo casos
            de uma violência que atinge as mulheres em sua forma mais extrema
          </span>
        </h1>
      </div>

      <img
        className="frame14 z-10 fixed top-[40%] left-[10%] w-[80%] md:left-[30%] md:top-[40%]  max-w-[600px] "
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/manchete_img1.png"
      ></img>
      <img
        className="frame15 z-20 fixed top-[46%] left-[5%] w-[80%] md:left-[20%] md:top-[52%] max-w-[600px]"
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/manchete_img2.png"
      ></img>
      <img
        className="frame16 z-30 fixed top-[52%] left-[15%] w-[80%] md:left-[40%] md:top-[55%]  max-w-[600px]"
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/manchete_img3.png"
      ></img>
      <img
        className="frame17 z-40 fixed top-[60%] left-[5%] w-[88%] md:left-[25%] md:top-[69%]  max-w-[600px]"
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/manchete_img4.png"
      ></img>
      <img
        className="frame18 z-50 fixed top-[67%] left-[5%] w-[88%] md:left-[30%] md:top-[65%]  max-w-[700px]"
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/manchete_img5.png"
      ></img>
    </div>
  );
};

export default Cases;

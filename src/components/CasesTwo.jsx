import mute from "../assets/mute.svg";
import replay from "../assets/replay.svg";
import rightIcon from "../assets/right-icon.svg";
import TypingEffect from "./TypingEffect";
import { useEffect } from "react";

const CasesTwo = ({ startAnimation }) => {
  useEffect(() => {
    console.log("startAnimation", startAnimation);
  }, [startAnimation]);

  return (
    <div className="fixed h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center px-4">
      {/* Text Section */}
      <div className="fixed frame27 top-10 sm:top-20 max-w-[900px] text-left mx-4">
        <h1 className="text-xl mb-4">
          Embora o feminicídio muitas vezes ocupe as manchetes, a maioria dos
          casos de violência de gênero permanece oculta, longe dos olhos do
          público. São{" "}
          <span className="text-[#EECBAD]">
            <b>agressões diárias</b>{" "}
          </span>{" "}
          que se escondem nas paredes de casas, nas relações silenciosamente
          abusivas e nas ameaças veladas, formando um ciclo invisível que
          raramente vira notícia. Por trás de cada dado registrado,{" "}
          <span className="text-[#EECBAD]">
            <b>inúmeros casos nunca denunciados</b>.
          </span>
        </h1>
      </div>
      <div className="fixed md:right-32 frame28 top-[52%] sm:top-[40%] max-w-[500px]  mx-0">
        <h1 className="sm:hidden text-2xl xl:text-3xl mx-4 sm:mx-0 text-right">
          <TypingEffect
            text={`“Na primeira vez que ele... Me deu um tapa nas costas, eu já tinha ido lá falar com elas.`}
            speed={65}
            showBlink={false}
            startAnimation={startAnimation === "frame28"}
          />
          <div className="ml-24 text-right">
            <TypingEffect
              text={`Elas já tinham me dado todo apoio e tal. E aí me pediram pra fazer a denúncia. Só que eu... Não tive forças”.`}
              speed={65}
              showBlink={false}
              startAnimation={startAnimation === "frame28"}
              delay={7300}
            />
          </div>
        </h1>
        <h1 className="hidden sm:block text-2xl xl:text-3xl mx-4 sm:mx-0 text-right">
          <TypingEffect
            text={`“Na primeira vez que ele... Me deu um tapa nas costas, eu já tinha ido lá falar com elas. Elas já tinham me dado todo apoio e tal. E aí me pediram pra fazer a denúncia. Só que eu... Não tive forças”.`}
            speed={65}
            showBlink={false}
            startAnimation={startAnimation === "frame28"}
          />
        </h1>
      </div>
      <img
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/sad_woman.png"
        alt="Relógio representando a passagem do tempo"
        className="frame28 fixed bottom-0 -left-10 sm:left-0 w-[300px] sm:w-[70vw] max-w-[800px]"
      />
      {/* <div className="frame27 fixed sm:bottom-8 md:right-32 bottom-10 right-4 flex gap-4">
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button na1a clicked")}
          disabled={startAnimation !== "frame27"}
        >
          <img src={replay} alt="Button 4a" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 2 clicked")}
          disabled={startAnimation !== "frame27"}
        >
          <img src={mute} alt="Button 4b" className="w-full h-full" />
        </button>
      </div> */}
      {/* <div className="flex items-center justify-center sm:justify-end fixed top-28 md:top-1/2 md:-mt-48 w-full pr-4 md:pr-20 lg:pr-32"> */}
      <div className="flex items-start 3xl:justify-center px-4 lg:px-20 2xl:ml-0 justify-start text-left w-full fixed frame30 top-20 sm:top-20">
        <h1 className="text-xl mb-4 max-w-[500px]">
          A violência de gênero geralmente é associada à{" "}
          <span className="text-[#EECBAD]">
            <b>agressões físicas ou sexuais</b>
          </span>{" "}
          , mas se apresenta em várias formas, desde comportamentos sutis até
          ameaças de morte. As violências mais comuns são classificadas como{" "}
          {""}
          <span className="text-[#EECBAD]">
            <b>psicológicas, morais e patrimoniais</b>
          </span>
          , cada uma deixando profundas marcas nas vítimas.
        </h1>
        <img
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/woman_man.png"
          alt="Relógio representando a passagem do tempo"
          className="frame30 fixed bottom-0 -right-20 w-[600px] sm:w-[900px] md:w-[1100px] max-w-[1000px]"
        />
      </div>
      {/* <div className="flex items-center justify-center sm:justify-end fixed top-28 md:top-1/2 md:-mt-48 w-full pr-4 md:pr-20 lg:pr-32"> */}
      <div className="flex flex-col items-center lg:items-end fixed top-16 md:top-80 md:-mt-48 w-full pr-4 lg:pr-32">
        <div className="mx-4 flex flex-col items-start space-y-4">
          <div className="flex items-center justify-start">
            <div className="frame31 border-2 border-white w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
              <img
                src={rightIcon}
                alt="Right Icon"
                className="scale-150 frame32"
              />
            </div>
            <p className="frame31 text-white text-2xl xl:text-3xl text-left">
              Seu parceiro(a) já expressou ciúmes obsessivos;
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div className="frame31 border-2 border-white w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
              {/* <img src={rightIcon} alt="Right Icon" className="scale-150" /> */}
            </div>
            <p className="frame31 text-white text-2xl xl:text-3xl text-left">
              Você sente medo de que ele se aborreça;
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div className="frame31 border-2 border-white w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
              {/* <img
                src={rightIcon}
                alt="Right Icon"
                className="scale-150 frame32"
              /> */}
            </div>
            <p className="frame31 text-white text-2xl xl:text-3xl text-left">
              Não consegue falar sobre a relação com outras pessoas.
            </p>
          </div>
        </div>
      </div>
      <div className="frame32 flex items-center justify-center sm:justify-end fixed inset-0 w-full pr-4 md:pr-20 lg:pr-32 ">
        <p className="text-white text-3xl xl:text-4xl mx-4 sm:mx-0 max-w-[600px]">
          <TypingEffect
            text={`“Ele era ciumento. Tinha posse de mim”.`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame32"}
          />
        </p>
      </div>
      <img
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/woman_on_hand.png"
        alt="Relógio representando a passagem do tempo"
        className="frame31 fixed bottom-0 left-0 w-[80vw] sm:w-[60vw] max-w-[800px]"
      />
      {/* <div className="frame32 fixed z-50 sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4">
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer ml-10"
          onClick={() => alert("Button 5a clicked")}
          disabled={startAnimation !== "frame32"}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer ml-2"
          onClick={() => alert("Button 5b clicked")}
          disabled={startAnimation !== "frame32"}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div> */}

      <div className="flex flex-col items-start lg:items-start fixed top-10 md:top-80 md:-mt-48 w-full pl-4 md:pl-20 lg:pl-32">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center justify-start">
            <div className="frame34 border-2 border-white w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
              {/* <img
                src={rightIcon}
                alt="Right Icon"
                className="scale-150 frame35"
              /> */}
            </div>
            <p className="frame34 text-white text-2xl xl:text-3xl text-left">
              Ele te ridiculariza;
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div className="frame34 border-2 border-white w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
              <img
                src={rightIcon}
                alt="Right Icon"
                className="scale-150 frame35"
              />
            </div>
            <p className="frame34 text-white text-2xl xl:text-3xl text-left">
              Controla o que você faz ou quem vê;
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div className="frame34 border-2 border-white w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
              {/* <img
                src={rightIcon}
                alt="Right Icon"
                className="scale-150 frame35"
              /> */}
            </div>
            <p className="frame34 text-white text-2xl xl:text-3xl text-left">
              Te intimida, amedronta ou chantageia.
            </p>
          </div>
        </div>
      </div>
      <div className="frame35 flex items-center justify-start lg:justify-start fixed inset-0 w-full pl-4 md:pl-20 lg:pl-32 ">
        <p className="text-white text-3xl xl:text-4xl sm:mx-0 max-w-[600px] text-left">
          <TypingEffect
            text={`“Ele controlava onde eu ia, \no que eu fazia, quem eu via”.`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame35"}
          />
        </p>
      </div>
      <img
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/marionette.png"
        alt="Relógio representando a passagem do tempo"
        className="frame34 fixed -bottom-5 -right-5 w-[400px] sm:w-[70vw] max-w-[800px]"
      />
      {/* <div className="frame35 fixed z-50 sm:bottom-28 left-4 md:left-20 lg:left-32 bottom-28 flex gap-4">
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer "
          onClick={() => alert("Button 5a clicked")}
          disabled={startAnimation !== "frame35"}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer "
          onClick={() => alert("Button 5b clicked")}
          disabled={startAnimation !== "frame35"}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div> */}

      <div className="flex flex-col items-center lg:items-end fixed top-10 md:top-80 md:-mt-48 w-full pr-4 lg:pr-32">
        <div className="mx-4 flex flex-col items-start space-y-4">
          <div className="flex items-center justify-start">
            <div className="frame37 border-2 border-white w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
              {/* <img
                src={rightIcon}
                alt="Right Icon"
                className="scale-150 frame38"
              /> */}
            </div>
            <p className="frame37 text-white text-2xl xl:text-3xl text-left">
              Destrói ou esconde seus documentos;
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div className="frame37 border-2 border-white w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
              {/* <img
                src={rightIcon}
                alt="Right Icon"
                className="scale-150 frame38"
              /> */}
            </div>
            <p className="frame37 text-white text-2xl xl:text-3xl text-left">
              Impede de sair ou ver outras pessoas;
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div className="frame37 border-2 border-white w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
              <img
                src={rightIcon}
                alt="Right Icon"
                className="scale-150 frame38"
              />
            </div>
            <p className="frame37 text-white text-2xl xl:text-3xl text-left">
              Te ameaça ou persegue.
            </p>
          </div>
        </div>
      </div>
      <div className="frame38 flex items-center justify-center sm:justify-end fixed inset-0 w-full pr-4 md:pr-20 lg:pr-32 ">
        <p className="text-white text-3xl xl:text-4xl mx-4 sm:mx-0 max-w-[500px] text-right">
          <TypingEffect
            text={`“Teve uma vez que ele me perseguiu. Ele virou pra mim e falou: estou apenas te vigiando. Seguindo os teus passos.”`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame38"}
          />
        </p>
      </div>
      <img
        src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/girls_shadow.png"
        alt="Relógio representando a passagem do tempo"
        className="frame37 fixed bottom-0 left-0 w-[80vw] sm:w-[60vw] max-w-[800px]"
      />
      {/* <div className="frame38 fixed z-50 sm:bottom-28 right-4 md:right-20 lg:right-32 bottom-28 flex gap-4">
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer ml-10"
          onClick={() => alert("Button 5a clicked")}
          disabled={startAnimation !== "frame38"}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer ml-2"
          onClick={() => alert("Button 5b clicked")}
          disabled={startAnimation !== "frame38"}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div> */}
    </div>
  );
};

export default CasesTwo;

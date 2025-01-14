import sadWomam from "../assets/sad-womam.png";
import womamMan from "../assets/woman-man.png";
import womanOnHand from "../assets/woman-on-hand.png";
import girlsShadow from "../assets/girls-shadow.png";
import marionette from "../assets/marionette.png";
import mute from "../assets/mute.svg";
import replay from "../assets/replay.svg";
import rightIcon from "../assets/right-icon.svg";
import TypingEffect from "./TypingEffect";

const CasesTwo = ({ startAnimation }) => {
  return (
    <div className="fixed h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center px-4">
      {/* Text Section */}
      <div className="fixed frame27 top-10 sm:top-20 max-w-[900px] text-left mx-4">
        <h1 className="text-xl xl:text-lg mb-4">
          Embora o feminicídio muitas vezes ocupe as manchetes, a maioria dos
          casos de violência de gênero permanece oculta, longe dos olhos do
          público. São agressões diárias que se escondem nas paredes de casas,
          nas relações silenciosamente abusivas e nas ameaças veladas, formando
          um ciclo invisível que raramente vira notícia. Por trás de cada dado
          registrado, existem inúmeros casos nunca denunciados.
        </h1>
      </div>
      <div className="fixed md:right-32 frame27 top-[52%] sm:top-[40%] max-w-[500px]  mx-0">
        <h1 className="sm:hidden text-2xl xl:text-3xl mx-4 sm:mx-0 text-right">
          <TypingEffect
            text={`“Na primeira vez que ele... Me deu um tapa nas costas, eu já tinha ido lá falar com elas.`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame27"}
          />
          <div className="ml-24 text-right">
            <TypingEffect
              text={`Elas já tinham me dado todo apoio e tal. E aí me pediram pra fazer a denúncia. Só que eu... Não tive forças”.`}
              speed={80}
              showBlink={false}
              startAnimation={startAnimation === "frame27"}
              delay={7300}
            />
          </div>
        </h1>
        <h1 className="hidden sm:block text-2xl xl:text-3xl mx-4 sm:mx-0 text-right">
          <TypingEffect
            text={`“Na primeira vez que ele... Me deu um tapa nas costas, eu já tinha ido lá falar com elas. Elas já tinham me dado todo apoio e tal. E aí me pediram pra fazer a denúncia. Só que eu... Não tive forças”.`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame27"}
          />
        </h1>
      </div>
      <img
        src={sadWomam}
        alt="Relógio representando a passagem do tempo"
        className="frame27 fixed bottom-0 -left-10 sm:left-0 w-[300px] sm:w-[70vw] max-w-[800px]"
      />
      <div className="frame27 fixed sm:bottom-8 md:right-32 bottom-10 right-4 flex gap-4">
        <button
          className="w-9 h-9 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 1 clicked")}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-10 h-10 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 2 clicked")}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>

      <div className="fixed frame29 top-10 sm:top-20 max-w-[900px] text-left mx-4">
        <h1 className="text-xl xl:text-lg mb-4">
          A violência de gênero geralmente é associada à agressões físicas ou
          sexuais, mas se apresenta em várias formas, desde comportamentos sutis
          até ameaças de morte. As violências mais comuns são classificadas como
          psicológicas, morais e patrimoniais, cada uma deixando profundas
          marcas nas vítimas.
        </h1>
        <img
          src={womamMan}
          alt="Relógio representando a passagem do tempo"
          className="frame29 fixed bottom-0 -right-20 w-[600px] sm:w-[900px] md:w-[1100px] max-w-[1000px]"
        />
      </div>

      <div className="fixed frame31 top-14 sm:top-20 sm:right-36 text-left mx-4">
        <div className="flex items-center pb-4">
          <div className="border-2 border-white w-6 h-6 flex-shrink-0 mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="frame32 w-full h-full object-contain"
            />
          </div>
          <p className=" text-white text-2xl xl:text-3xl">
            Seu parceiro(a) já expressou ciúmes obsessivos;
          </p>
        </div>
        <div className="flex items-center pb-4">
          <div className="border-2 border-white w-6 h-6 flex-shrink-0 mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="frame32 w-full h-full object-contain"
            />
          </div>
          <p className=" text-white text-2xl xl:text-3xl">
            Você sente medo de que ele se aborreça;
          </p>
        </div>
        <div className="flex items-center">
          <div className="border-2 border-white w-6 h-6 flex-shrink-0 mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="frame32 w-full h-full object-contain"
            />
          </div>
          <p className=" text-white text-2xl xl:text-3xl">
            Não consegue falar sobre a relação com outras pessoas.
          </p>
        </div>
        <p className="frame32 text-3xl xl:text-4xl pt-20 sm:pt-28 flex flex-col sm:flex-row items-center">
          <TypingEffect
            text={`“Ele era ciumento. Tinha posse de mim”.`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame32"}
          />
          <div className="flex mt-6 sm:mt-0">
            <button
              className="w-9 h-9 bg-transparent border-none cursor-pointer ml-10"
              onClick={() => alert("Button 1 clicked")}
            >
              <img src={replay} alt="Button 1" className="w-full h-full" />
            </button>
            <button
              className="w-10 h-10 bg-transparent border-none cursor-pointer ml-2"
              onClick={() => alert("Button 2 clicked")}
            >
              <img src={mute} alt="Button 2" className="w-full h-full" />
            </button>
          </div>
        </p>
        {/* <p className="text-3xl xl:text-4xl pt-16 flex flex-col sm:flex-row items-center">
          “Eu não tinha coragem de falar. Por medo de ser julgada.”
          <div className="flex mt-4 sm:mt-0">
            <button
              className="w-9 h-9 bg-transparent border-none cursor-pointer ml-10"
              onClick={() => alert("Button 1 clicked")}
            >
              <img src={replay} alt="Button 1" className="w-full h-full" />
            </button>
            <button
              className="w-10 h-10 bg-transparent border-none cursor-pointer ml-2"
              onClick={() => alert("Button 2 clicked")}
            >
              <img src={mute} alt="Button 2" className="w-full h-full" />
            </button>
          </div>
        </p> */}
        <img
          src={womanOnHand}
          alt="Relógio representando a passagem do tempo"
          className="frame31 fixed bottom-0 left-0 w-[80vw] sm:w-[60vw] max-w-[800px]"
        />
      </div>

      <div className="fixed frame34 top-14 sm:top-20 sm:left-36 text-left mx-4">
        <div className="flex items-center pb-4">
          <div className="border-2 border-white w-6 h-6 flex-shrink-0 mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="frame35 w-full h-full object-contain"
            />
          </div>
          <p className="text-white text-2xl xl:text-3xl">
            Ele te ridiculariza;
          </p>
        </div>
        <div className="flex items-center pb-4">
          <div className="border-2 border-white w-6 h-6 flex-shrink-0 mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="frame35 w-full h-full object-contain"
            />
          </div>
          <p className="text-white text-2xl xl:text-3xl">
            Controla o que você faz ou quem vê;
          </p>
        </div>
        <div className="flex items-center pb-4">
          <div className="border-2 border-white w-6 h-6 flex-shrink-0 mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="frame35 w-full h-full object-contain"
            />
          </div>
          <p className="text-white text-2xl xl:text-3xl">
            Te intimida, amedronta ou chantageia.
          </p>
        </div>
        <p className="frame35 text-3xl xl:text-4xl pt-4 sm:pt-28 flex flex-col items-start">
          <TypingEffect
            text={`“Ele controlava onde eu ia, \no que eu fazia, quem eu via”.`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame35"}
          />
          <div className="flex mt-8">
            <button
              className="w-9 h-9 bg-transparent border-none cursor-pointer mr-2"
              onClick={() => alert("Button 1 clicked")}
            >
              <img src={replay} alt="Button 1" className="w-full h-full" />
            </button>
            <button
              className="w-10 h-10 bg-transparent border-none cursor-pointer"
              onClick={() => alert("Button 2 clicked")}
            >
              <img src={mute} alt="Button 2" className="w-full h-full" />
            </button>
          </div>
        </p>
        <img
          src={marionette}
          alt="Relógio representando a passagem do tempo"
          className="frame34 fixed bottom-0 right-0 w-[400px] lg:w-[70vw] max-w-[800px]"
        />
      </div>

      <div className="fixed frame37 top-14 max-w-[600px] sm:top-28 sm:right-10 text-left mx-4">
        <div className="flex items-center pb-4">
          <div className="border-2 border-white w-6 h-6 flex-shrink-0 mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="frame38 w-full h-full object-contain"
            />
          </div>
          <p className="text-white text-2xl xl:text-3xl">
            Destrói ou esconde seus documentos;
          </p>
        </div>
        <div className="flex items-center pb-4">
          <div className="border-2 border-white w-6 h-6 flex-shrink-0 mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="frame38 w-full h-full object-contain"
            />
          </div>
          <p className="text-white text-2xl xl:text-3xl">
            Impede de sair ou ver outras pessoas;
          </p>
        </div>
        <div className="flex items-center pb-4">
          <div className="border-2 border-white w-6 h-6 flex-shrink-0 mr-2">
            <img
              src={rightIcon}
              alt="Right Icon"
              className="frame38 w-full h-full object-contain"
            />
          </div>
          <p className="text-white text-2xl xl:text-3xl">
            Te ameaça ou persegue.
          </p>
        </div>
        <p className="text-white max-w-[600px] sm:max-w-[400px] text-3xl xl:text-4xl pt-4 sm:pt-28 flex flex-col items-start">
          <TypingEffect
            text={`“Teve uma vez que ele me perseguiu. Ele virou pra mim e falou: estou apenas te vigiando. Seguindo os teus passos.”`}
            speed={80}
            showBlink={false}
            startAnimation={startAnimation === "frame38"}
          />
        </p>
        <div className="flex justify-end w-full mt-8">
          <button
            className="w-9 h-9 bg-transparent border-none cursor-pointer mr-2"
            onClick={() => alert("Button 1 clicked")}
          >
            <img src={replay} alt="Button 1" className="w-full h-full" />
          </button>
          <button
            className="w-10 h-10 bg-transparent border-none cursor-pointer"
            onClick={() => alert("Button 2 clicked")}
          >
            <img src={mute} alt="Button 2" className="w-full h-full" />
          </button>
        </div>
        <img
          src={girlsShadow}
          alt="Relógio representando a passagem do tempo"
          className="frame37 fixed bottom-0 left-0 w-[250px] sm:w-[60vw] max-w-[800px]"
        />
      </div>
    </div>
  );
};

export default CasesTwo;

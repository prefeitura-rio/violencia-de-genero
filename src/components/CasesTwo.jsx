import sadWomam from "../assets/sad-womam.png";
import womamMan from "../assets/woman-man.png";
import womanOnHand from "../assets/woman-on-hand.png";
import mute from "../assets/mute.svg";
import replay from "../assets/replay.svg";

const CasesTwo = () => {
  return (
    <div className="fixed h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center px-4">
      {/* Text Section */}
      <div className="fixed frame27 top-[15%] max-w-[1000px] text-left mx-4">
        <h1 className="text-md mb-4">
          Embora o feminicídio muitas vezes ocupe as manchetes, a maioria dos
          casos de violência de gênero permanece oculta, longe dos olhos do
          público. São agressões diárias que se escondem nas paredes de casas,
          nas relações silenciosamente abusivas e nas ameaças veladas, formando
          um ciclo invisível que raramente vira notícia. Por trás de cada dado
          registrado, existem inúmeros casos nunca denunciados.
        </h1>
      </div>
      <div className="fixed frame27 top-[40%] max-w-[600px] text-left mx-4">
        <h1 className="text-md mb-4">
          “Na primeira vez que ele... Me deu um tapa nas costas, eu já tinha ido
          lá falar com elas. Elas já tinham me dado todo apoio e tal. E aí me
          pediram pra fazer a denúncia. Só que eu... Não tive forças”.
        </h1>
      </div>
      <img
        src={sadWomam}
        alt="Relógio representando a passagem do tempo"
        className="frame27 fixed bottom-0 left-0 w-auto h-[50vh] sm:h-[70vh] lg:h-[85vh]"
      />
      <div className="frame27 fixed sm:bottom-28 sm:right-32 bottom-4 right-4 flex gap-4">
        <button
          className="w-7 h-7 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 1 clicked")}
        >
          <img src={replay} alt="Button 1" className="w-full h-full" />
        </button>
        <button
          className="w-8 h-8 bg-transparent border-none cursor-pointer"
          onClick={() => alert("Button 2 clicked")}
        >
          <img src={mute} alt="Button 2" className="w-full h-full" />
        </button>
      </div>

      <div className="fixed frame29 top-28 left-28 max-w-[600px] text-left mx-4">
        <h1 className="text-md mb-4">
          Embora o feminicídio muitas vezes ocupe as manchetes, a maioria dos
          casos de violência de gênero permanece oculta, longe dos olhos do
          público. São agressões diárias que se escondem nas paredes de casas,
          nas relações silenciosamente abusivas e nas ameaças veladas, formando
          um ciclo invisível que raramente vira notícia. Por trás de cada dado
          registrado, existem inúmeros casos nunca denunciados.
        </h1>
        <img
          src={womamMan}
          alt="Relógio representando a passagem do tempo"
          className="frame29 fixed bottom-0 right-0 w-auto h-[50vh] sm:h-[70vh] lg:h-[85vh]"
        />
      </div>

      <div className="fixed frame31 top-36 right-36 max-w-[600px] text-left mx-4">
        <div className="flex items-center">
          <div className="border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="frame32"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-white text-lg">
            Seu parceiro(a) já expressou ciúmes obsessivos;
          </p>
        </div>
        <div className="flex items-center">
          <div className="border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="frame32"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-white text-lg">
            Você sente medo de que ele se aborreça;
          </p>
        </div>
        <div className="flex items-center">
          <div className="border-2 border-white w-6 h-6 flex items-center justify-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="frame32"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-white text-lg">
            Não consegue falar sobre a relação com outras pessoas.
          </p>
        </div>
        <p className="text-white text-lg pt-28">
          “Ele era ciumento. Tinha posse de mim”.
        </p>
        <p className="text-white text-lg pt-16">
          “Eu não tinha coragem de falar. Por medo de ser julgada.”
        </p>
        <img
          src={womanOnHand}
          alt="Relógio representando a passagem do tempo"
          className="frame31 fixed bottom-0 left-0 w-auto h-[50vh] sm:h-[70vh] lg:h-[85vh]"
        />
      </div>
    </div>
  );
};

export default CasesTwo;

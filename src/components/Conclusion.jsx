import logo from "../assets/logo.png";
const Conclusion = () => {
  return (
    <>
      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        <h1 className="frame1-conclusao text-xl">
          Além dessas, outras políticas públicas cariocas oferecem auxílio
          financeiro e apoio às vítimas:
        </h1>
        <br></br>
        <span className="frame1b-conclusao text-xl">
          Cartão Mulher Carioca: auxílio financeiro de R$500 para mulheres em
          situação de vulnerabilidade socioeconômica atendidas pela Secretaria.
        </span>
      </div>
      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        <h1 className="frame2-conclusao text-xl">
          Além dessas, outras políticas públicas cariocas oferecem auxílio
          financeiro e apoio às vítimas:
        </h1>
        <br></br>
        <span className="frame2-conclusao text-xl">
          Cartão Move Mulher: O Cartão Move Mulher é um programa de auxílio
          passagem, no valor equivalente a 6 (seis) passagens de ônibus, para
          mulheres em situação de violência doméstica e familiar cujo objetivo é
          garantir o deslocamento e a continuidade de atendimento nos serviços
          da Rede Especializada de Enfrentamento à Violência contra a Mulher.
        </span>
      </div>
      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        <h1 className="frame3-conclusao text-xl">
          Além dessas, outras políticas públicas cariocas oferecem auxílio
          financeiro e apoio às vítimas:
        </h1>
        <br></br>
        <span className="frame3-conclusao text-xl">
          Cartão Órfãos do Feminicídio: O Cartão Mulher Carioca – Órfãos do
          Feminicídio será disponibilizado de forma emergencial para famílias de
          vítimas desse tipo de crime, ocorridos no município a partir de
          janeiro de 2022. O valor mensal é de R$400 para cada um dos filhos,
          durante seis meses, podendo ser prorrogado por até mais seis meses.
        </span>
      </div>
      <div className="frame5-conclusao fixed h-screen w-full flex flex-col items-center justify-center bg-black text-center text-white px-4">
        <div className="mb-6 fixed top-1/2 -translate-y-1/2 items-center flex flex-col max-w-[600px] text-left mx-4">
          <h1 className="text-xl mb-2">
            {/* Full text for desktop */}
            No site mulher.rio, cariocas podem entender se suas realidades
            requerem atendimento especializado.  A violência de gênero é uma
            questão alarmante e generalizada que afeta milhões de mulheres em
            todo o Brasil, revelando um cenário de dores silenciadas. No Rio de
            Janeiro, essa realidade é desafiadora, com altos índices de
            agressões e feminicídios que clamam por uma resposta robusta das
            autoridades. Diante desse contexto, as ações e políticas públicas da
            Secretaria da Mulher da Prefeitura do Rio de Janeiro se destacam
            como um esforço significativo para enfrentar a violência de gênero e
            garantir que os culpados sejam responsabilizados e as vítimas tenham
            acesso ao suporte necessário. Esse conjunto de iniciativas não
            apenas acolhe e protege as vítimas, mas também reforça o compromisso
            da cidade em construir um ambiente mais seguro e justo para todas as
            mulheres. É crucial que esses esforços sejam continuamente
            fortalecidos e ampliados, para que a luta contra a violência de
            gênero se torne uma realidade duradoura no Rio de Janeiro.
          </h1>
        </div>
      </div>
      <div className="frame6-conclusao fixed inset-0 flex flex-col items-center justify-center bg-black text-center text-white px-4">
        <div className="flex flex-col items-center max-w-[600px]">
          {/* Title */}
          <h1 className="text-xl font-bold text-[#EECBAD] mb-8">Autores:</h1>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Escritório de Dados */}
            <div>
              <h2 className="text-lg font-semibold underline decoration-1 ">
                Escritório de Dados
              </h2>
              <ul className="-space-y-1">
                <li>Caio Jacintho</li>
                <li>Carol Castro</li>
                <li>Lucas Tavares</li>
                <li>Mateus Lana</li>
                <li>Pedro Meneghel</li>
              </ul>
            </div>

            {/* Presidente da IplanRio */}
            <div>
              <h2 className="text-lg font-semibold">Presidente da IplanRio</h2>
              <p>João Carabetta</p>
            </div>

            {/* Secretaria da Mulher */}
            <div>
              <h2 className="text-lg font-semibold">Secretaria da Mulher</h2>
            </div>
            {/* Prefeito */}
            <div>
              <h2 className="text-lg font-semibold">Prefeito</h2>
              <p>Eduardo Paes</p>
            </div>
          </div>
          {/* Logos */}
          <div className="mt-10">
            <img src={logo} alt="Prefeitura do Rio Logo" className="h-10" />
          </div>
        </div>
      </div>

      <div className="frame1b-conclusao fixed bottom-0 right-0">
        <img
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/woman_card1.png"
          alt="Relógio representando a passagem do tempo"
          className="fixed bottom-0 right-0  w-[100vw] max-w-[700px] sm:max-w-[700px] lg:w-[70vw] lg:max-w-[900px]"
        />
      </div>
      <div className="frame2-conclusao fixed bottom-0 right-0">
        <img
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/woman_card2.png"
          alt="Relógio representando a passagem do tempo"
          className="fixed bottom-0 right-0  w-[100vw] max-w-[700px] sm:max-w-[700px] lg:w-[70vw] lg:max-w-[900px]"
        />
      </div>
      <div className="frame3-conclusao fixed bottom-0 right-0">
        <img
          src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/violencia-de-genero/images/woman_card3.png"
          alt="Relógio representando a passagem do tempo"
          className="fixed bottom-0 right-0  w-[100vw] max-w-[700px] sm:max-w-[700px] lg:w-[70vw] lg:max-w-[900px]"
        />
      </div>
    </>
  );
};

export default Conclusion;

import map1 from "../assets/map1.png";
import map2 from "../assets/map2.png";
import map3 from "../assets/map3.png";
import map4 from "../assets/map4.png";
import map5 from "../assets/map5.png";
import map6 from "../assets/map6.png";
import map7 from "../assets/map7.png";
import map8 from "../assets/map8.png";
import CMC from "../assets/CMC.svg";
import CEAM from "../assets/CEAM.svg";
import NEAM from "../assets/NEAM.svg";
import NEAP from "../assets/NEAP.svg";
import AS from "../assets/AS.svg";
import SMC from "../assets/SMC.svg";

const MapSection = () => {
  return (
    <>
      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        <h1 className="frame40 text-xl xl:text-lg mb-4">
          Desde 2021, a{" "}
          <span className="text-[#EECBAD]">
            Secretaria Especial de Políticas e Promoção da Mulher (SPM-Rio)
          </span>{" "}
          expandiu de 3 para 25 os equipamentos de atendimento, promoção e
          enfrentamento à violência contra a mulher. Conheça alguns deles:
        </h1>
      </div>
      <div className="frame41 fixed inset-0 flex items-center justify-center z-10">
        <img
          src={map1}
          alt="Relógio representando a passagem do tempo"
          className="fixed w-auto h-auto  object-contain"
        />
      </div>
      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        {/* map2 */}

        <h1 className="frame42 text-xl xl:text-lg mb-4 z-20">
          <span className="text-[#EECBAD]"> Casas da Mulher Carioca</span>
          <br></br> As Casas da Mulher Carioca são espaços de acolhimento e
          capacitação nos quais são oferecidos serviços de atendimento
          psicossocial, orientação jurídica, orientação pedagógica, cursos
          livres e oficinas em diversas áreas. Também são incentivadas trocas de
          vivências em rodas de conversas e outras atividades coletivas, com
          objetivo de ampliar a inclusão da mulher na vida social e em
          atividades culturais.
        </h1>
      </div>
      <div className="frame42 fixed inset-0 translate-y-28 sm:translate-y-0 flex items-center justify-center z-10">
        <img
          src={map2}
          alt="Relógio representando a passagem do tempo"
          className="fixed w-auto h-auto  object-contain"
        />
      </div>

      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        {/* map3 */}

        <h1 className="frame43 text-xl xl:text-lg mb-4 z-20">
          <span className="text-[#EECBAD]">
            Centros Especializados de Atendimento à Mulher
          </span>{" "}
          <br></br>Os CEAMs oferecem suporte social, psicológico e jurídico para
          mulheres de 18 a 60 anos em situação de violência de gênero,
          ajudando-as a superar traumas e resgatar sua cidadania. O CEAM também
          promove grupos de reflexão, palestras, cursos e oficinas em parceria
          com outras instituições, com programação disponível no site.
        </h1>
      </div>
      <div className="frame43 fixed inset-0 translate-y-24 sm:translate-y-0 flex items-center justify-center z-10">
        <img
          src={map3}
          alt="Relógio representando a passagem do tempo"
          className="fixed w-auto h-auto  object-contain"
        />
      </div>

      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        {/* map4 */}

        <h1 className="frame44 text-xl xl:text-lg mb-4 z-20">
          <span className="text-[#EECBAD]">
            Núcleos Especializados de Atendimento à Mulher (NEAMs)
          </span>
          <br></br> Os CEAMs oferecem suporte social, psicológico e jurídico
          para mulheres de 18 a 60 anos em situação de violência de gênero,
          ajudando-as a superar traumas e resgatar sua cidadania. O CEAM também
          promove grupos de reflexão, palestras, cursos e oficinas em parceria
          com outras instituições, com programação disponível no site.
        </h1>
      </div>
      <div className="frame44 fixed inset-0 translate-y-24 sm:translate-y-0 flex items-center justify-center z-10">
        <img
          src={map4}
          alt="Relógio representando a passagem do tempo"
          className="fixed w-auto h-auto  object-contain"
        />
      </div>

      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        {/* map5 */}

        <h1 className="frame45 text-xl xl:text-lg mb-4 z-20">
          <span className="text-[#EECBAD]">
            Núcleos Especializados de Atendimento Psicoterapêutico (NEAPs)
          </span>
          <br></br> Onde a mulher pode receber acompanhamento clínico, que dure
          o tempo necessário para que possa ter suas condições psicológicas e
          emocionais restabelecidas.
        </h1>
      </div>
      <div className="frame45 fixed inset-0 flex items-center justify-center z-10">
        <img
          src={map5}
          alt="Relógio representando a passagem do tempo"
          className="fixed w-auto h-auto  object-contain"
        />
      </div>

      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        {/* map6 */}

        <h1 className="frame46 text-xl xl:text-lg mb-4 z-20">
          <span className="text-[#EECBAD]">Abrigo Sigiloso</span>
          <br /> Mulheres em risco iminente de morte são encaminhadas com seus
          filhos para o abrigo, em local não divulgado. Dessa forma, agressores
          não conseguem localizá-las.
        </h1>
      </div>
      <div className="frame46 fixed inset-0 flex items-center justify-center z-10">
        <img
          src={map6}
          alt="Relógio representando a passagem do tempo"
          className="fixed w-auto h-auto  object-contain"
        />
      </div>
      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        {/* map7 */}

        <h1 className="frame47 text-xl xl:text-lg mb-4 z-20">
          <span className="text-[#EECBAD]">
            Salas Mulher Cidadã, Programa Mulheres do Rio e Parceiros
          </span>
          <br /> Além desses espaços, a Secretaria mantém 11 Salas Mulher Cidadã
          e 24 Espaços Apoiadores através de parcerias com outras instituições.
        </h1>
      </div>
      <div className="frame47 fixed inset-0 flex items-center justify-center z-10">
        <img
          src={map7}
          alt="Relógio representando a passagem do tempo"
          className="fixed w-auto h-auto  object-contain"
        />
      </div>
      <div className="fixed top-10 sm:top-20 text-white left-0 sm:left-20 max-w-[600px] text-left mx-4 z-20">
        {/* map8 */}

        <h1 className="frame48 text-xl xl:text-lg mb-4 z-20">
          Desde 2021, mais de{" "}
          <span className="text-[#EECBAD]">
            850 mil mulheres foram impactadas
          </span>{" "}
          pelos equipamentos de promoção da mulher e mais de{" "}
          <span className="text-[#EECBAD]">200 mil foram capacitadas</span> para
          o mercado de trabalho nas Casas da Mulher Carioca. Entre 2022 e 2024,
          os Centros e Núcleos Especializados da Secretaria da Mulher realizaram
          mais de{" "}
          <span className="text-[#EECBAD]">
            17 mil atendimentos a mulheres em situação de violência de gênero.
          </span>{" "}
          <br />
          <br />
          Esses atendimentos ofereceram{" "}
          <span className="text-[#EECBAD]">
            apoio psicológico, jurídico e social
          </span>
          , buscando não apenas a proteção imediata, mas também o fortalecimento
          emocional e a autonomia das vítimas. O volume expressivo de
          atendimentos revela a importância e a demanda constante por esses
          serviços.
        </h1>
      </div>
      <div className="frame48 fixed inset-0 flex items-center justify-center z-10">
        <img
          src={map8}
          alt="Relógio representando a passagem do tempo"
          className="fixed w-auto h-auto  object-contain"
        />
      </div>
      {/* Seis linhas de imagem + texto */}
      <div className="flex flex-wrap max-w-[400px] fixed bottom-0 sm:bottom-2 left-0 sm:left-20 mx-4 text-white z-30">
        <div className="frameCMC flex items-center mr-2 mb-2">
          <img
            src={CMC}
            alt="Relógio representando a passagem do tempo"
            className="w-8"
          />
          <span className="text-sm ml-2 pb-2">Casas da Mulher Carioca</span>
        </div>

        <div className="frameCEAM flex items-center mr-2 mb-2">
          <img
            src={CEAM}
            alt="Relógio representando a passagem do tempo"
            className="w-8"
          />
          <span className="text-sm ml-2 pb-2">CEAM</span>
        </div>

        <div className="frameNEAM flex items-center mr-2 mb-2">
          <img
            src={NEAM}
            alt="Relógio representando a passagem do tempo"
            className="w-8"
          />
          <span className="text-sm ml-2 pb-2">NEAM</span>
        </div>

        <div className="frameNEAP flex items-center mr-2 mb-2">
          <img
            src={NEAP}
            alt="Relógio representando a passagem do tempo"
            className="w-8"
          />
          <span className="text-sm ml-2 pb-2">NEAP</span>
        </div>

        <div className="frameAS flex items-center mr-2 mb-2">
          <img
            src={AS}
            alt="Relógio representando a passagem do tempo"
            className="w-8"
          />
          <span className="text-sm ml-2 pb-2">Abrigo Sigiloso</span>
        </div>

        <div className="frameSMC flex items-center mr-2 mb-2">
          <img
            src={SMC}
            alt="Relógio representando a passagem do tempo"
            className="w-8"
          />
          <span className="text-sm ml-2 pb-2">
            Salas Mulher Cidadã, <br></br>Mulheres do Rio e Parceiros
          </span>
        </div>
      </div>
    </>
  );
};

export default MapSection;

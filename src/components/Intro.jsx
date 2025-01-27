const Intro = () => {
  return (
    <div className="frame12 fixed h-screen w-full flex flex-col items-center justify-center bg-black text-center text-white px-4">
      <div className="mb-6 fixed top-1/2 -translate-y-1/2 items-center flex flex-col max-w-[600px] text-left mx-4">
        <h1 className="text-xl mb-2">
          {/* Full text for desktop */}
          <span className="">
            “Legítima defesa da honra" já foi uma tese recorrente nos tribunais
            brasileiros para absolver homens que agrediram ou mataram mulheres.
            Em sua essência, sustentava a ideia de que a violência podia ser
            justificada caso a conduta da vítima fosse vista como uma ameaça à
            honra do agressor. Diante dos juízes, da sociedade e do Brasil,{" "}
            <span className="text-[#EECBAD]">
              <b>
                {" "}
                a vida de uma mulher valia menos que o nome do homem que a
                tirava.
              </b>
            </span>
            <b></b>
            <br></br>
            <br></br>
            Somente em 2023 o Supremo Tribunal Federal declarou inconstitucional
            o uso da tese da legítima defesa da honra em crimes de feminicídio
            ou de agressão contra mulheres.
            <br></br>
            <br></br>
            <span className="hidden 3xl:block">
              Mas a violência de gênero é uma ferida que segue aberta no país:
              somente em 2023, foram{" "}
              <span className="text-[#EECBAD]">
                <b>1.467 feminicídios registrados em 2024</b>
              </span>
              . {""}O estado do Rio de Janeiro concentrou quase um terço desse
              total.
              <br></br>
              <br></br>
              Esta visualização de dados busca revelar as diversas formas de
              agressão e as ações da{" "}
              <span className="text-[#EECBAD]">
                <b>Secretaria da Mulher (SPM-Rio) e da Prefeitura</b>{" "}
              </span>
              para coibir os crimes, acolher e auxiliar as vítimas da capital
              fluminense. O objetivo é apresentar esses dados, contar{" "}
              <span className="text-[#EECBAD]">
                <b>histórias</b>{" "}
              </span>{" "}
              de vítimas sobreviventes e, assim, construir um futuro livre da
              violência de gênero.
              {/* <br></br>
              <br></br>
              <span className="text-[#EECBAD]">
                <b>No site mulher.rio</b>
              </span>
              , cariocas podem entender se suas realidades requerem atendimento
              especializado, e onde consegui-lo. */}
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Intro;

const Intro2 = () => {
  return (
    <div className="frame12-2 fixed h-screen w-full flex flex-col items-center justify-center bg-black text-center text-white px-4">
      <div className="mb-6 fixed top-1/2 -translate-y-1/2 items-center flex flex-col max-w-[600px] text-left mx-4">
        <h1 className="text-xl mb-2">
          {/* Full text for desktop */}
          <span className="">
            A violência de gênero é uma ferida aberta que se perpetua ao longo
            das gerações brasileiras, inclusive no Rio de Janeiro. Aqui, as
            estatísticas refletem uma realidade alarmante, com{" "}
            <span className="text-[#EECBAD]">
              <b>1.467 feminicídios registrados em 2024</b>
            </span>
            , e uma média de três mortes por mês na cidade. Esses números
            revelam uma dor profunda, onde lares e ruas se tornam cenários de
            crimes evitáveis.
            <br></br>
            <br></br>
            Esta visualização de dados busca mapear a violência de gênero,
            revelando as diversas formas de agressão e as ações da{" "}
            <span className="text-[#EECBAD]">
              <b>Secretaria da Mulher (SPM-Rio) e da Prefeitura</b>{" "}
            </span>{" "}
            para combater os crimes e auxiliar as vítimas. O objetivo não é
            apenas apresentar esses dados, mas contar histórias que clamam por
            justiça e construir um futuro livre da violência de gênero.
            <br></br>
            <br></br>
            <span className="text-[#EECBAD]">
              {" "}
              <b>No site mulher.rio</b>
            </span>
            , cariocas podem entender se suas realidades requerem atendimento
            especializado, e onde consegui-lo.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Intro2;

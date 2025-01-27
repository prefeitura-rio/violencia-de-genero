const Intro3 = () => {
  return (
    <div className="frame12-3 fixed h-screen w-full flex flex-col items-center justify-center bg-black text-center text-white px-4">
      <div className="mb-6 fixed top-1/2 -translate-y-1/2 items-center flex flex-col max-w-[600px] text-left mx-4">
        <h1 className="text-xl mb-2">
          {/* Full text for desktop */}
          <span className="">
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
            {/* <span className="text-[#EECBAD]">
              {" "}
              <b>No site mulher.rio</b>
            </span>
            , cariocas podem entender se suas realidades requerem atendimento
            especializado, e onde consegui-lo. */}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Intro3;

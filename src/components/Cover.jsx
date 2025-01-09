import logo from "../assets/logo.png";
const Cover = () => {
  return (
    <div className="frame10 fixed h-screen w-full flex flex-col items-center justify-center bg-black text-center text-white px-4">
      <div className="mb-6 fixed top-1/2 -translate-y-1/2 items-center flex flex-col">
        <h1 className="text-3xl font-bold mb-2">
          Violência de Gênero no Rio de Janeiro
        </h1>
        <p className="text-lg mb-20 text-[#EECBAD]">
          A dura realidade das mulheres cariocas exposta em dados e histórias
        </p>
        <p className="text-sm pb-20">
          Desenvolvido pela Equipe de Visualização de<br></br> Dados do
          Escritório de Dados da Prefeitura <br></br>da Cidade do Rio de Janeiro
        </p>
        <div>
          <img src={logo} alt="Logo" className="w-40 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Cover;

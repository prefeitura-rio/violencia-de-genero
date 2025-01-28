const Intro2 = () => {
  return (
    <div className="frame12-2 fixed h-screen w-full flex flex-col items-center justify-center bg-black text-center text-white px-4">
      <div className="mb-6 fixed top-1/2 -translate-y-1/2 items-center flex flex-col max-w-[600px] text-left mx-4">
        <h1 className="text-xl mb-2">
          {/* Full text for desktop */}
          <span className="">
            Mas a violência de gênero é uma ferida que segue aberta no país:
            somente em 2023, foram{" "}
            <span className="text-[#EECBAD]">
              <b>1.467 feminicídios registrados</b>
            </span>
            . {""}O estado do Rio de Janeiro concentrou quase um terço desse
            total.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Intro2;

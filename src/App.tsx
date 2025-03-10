import LogoImg from "./assets/logo.png";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-3 bg-neutral-900">
      <main className="text-white flex flex-col bg-neutral-800 p-2 w-full max-w-3xl  md:max-w-5xl h-screen max-h-4/6 md:max-h-10/12 justify-center items-center shadow-md rounded-lg">
        <img
          src={LogoImg}
          alt="logo dev Frases"
          className="w-full max-w-xs md:max-w-sm"
        />
        <span className="block text-center my-2 font-bold text-xl md:text-4xl md:my-6">
          categorias
        </span>
        <div className="flex items-center justify-center gap-2">
          <button className="bg-white text-black p-1 rounded-lg border-2 focus:border-green-500 cursor-pointer">
            Motivação
          </button>
          <button className="bg-white text-black p-1 rounded-lg border-2 focus:border-green-500 cursor-pointer">
            Bom dia
          </button>
        </div>
        <button className="mt-7 bg-blue-500 py-2 px-4 md:text-lg md:px-6 rounded-md cursor-pointer hover:bg-blue-600 transiotion duration-200 ease-in-out">
          Gerar Frase
        </button>

        <div className="mt-10 w-full text-center max-w-sm bg-white font-bold text-orange-500 italic p-4 rounded-lg">
          Frases irão aparecer aqui auiosdsajidbasbjdaskhbnjdasjnkbd Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sequi nam
        </div>
      </main>
    </div>
  );
};

export default App;

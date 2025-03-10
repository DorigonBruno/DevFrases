import { useState } from "react";
import LogoImg from "./assets/logo.png";

const App = () => {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoria, setCategoria] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Siga os bons e aprenda com eles.",
        "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
        "Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.",
        "Não importa que você vá devagar, contanto que você não pare.",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Bom dia! Desejo que a sua manhã seja tão bela e especial quanto você e o seu coração.",
        "Você é especial para mim, então merece um bom dia exclusivo e cheio de carinho!",
        "Olha o que temos aqui: um novo dia! É uma nova oportunidade para fazer coisas incríveis",
        "Um lindo dia, começando com café da manhã, música, boas energias, bom humor, pessoas de bem e gratidão.",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategoria(index);
  }

  function gerarFrases() {
    const numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoria].frases.length
    );

    setTextoFrase(`"${allFrases[categoria].frases[numeroAleatorio]}"`);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center p-3 bg-neutral-900">
      <main className="text-white flex flex-col bg-neutral-800 p-2 w-full max-w-3xl  md:max-w-5xl h-screen max-h-4/6 md:max-h-10/12 justify-center items-center shadow-md rounded-lg">
        <img
          src={LogoImg}
          alt="logo dev Frases"
          className="w-full max-w-xs md:max-w-sm"
        />
        <span className="block text-center my-2 font-bold text-xl md:text-4xl md:my-6">
          Categorias
        </span>
        <div className="flex items-center justify-center gap-4">
          {allFrases.map((frase, index) => (
            <button
              key={frase.id}
              className={`bg-white text-black p-1 rounded-md my-1 border-2 cursor-pointer border-green-500 ${
                frase.nome === allFrases[categoria].nome
                  ? "border-2"
                  : "border-none"
              } `}
              onClick={() => handleSwitchCategory(index)}
            >
              {frase.nome}
            </button>
          ))}
        </div>
        <button
          className="mt-7 bg-blue-500 py-2 px-4 md:text-lg md:px-6 rounded-md cursor-pointer hover:bg-blue-600 transiotion duration-200 ease-in-out"
          onClick={() => gerarFrases()}
        >
          Gerar Frase
        </button>

        {textoFrase && (
          <div className="mt-10 w-full text-center max-w-sm bg-white font-bold text-orange-500 italic p-4 rounded-lg">
            {textoFrase}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;

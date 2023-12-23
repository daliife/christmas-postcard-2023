import "./App.css";
import moon from "./assets/moon.png";
import audio1 from "./assets/Les dotze van tocant Arnau Tordera OK.mp3";
import audio2 from "./assets/Les dotze van tocant Escolania de Montserrat OK.mp3";
import audio3 from "./assets/Les dotze van tocant Infantil OK.mp3";
import audio5 from "./assets/Les dotze van tocant Lieder Camera OK.mp3";
import audio4 from "./assets/Les dotze van tocant Locomotora negra OK.mp3";
import { MusicIcon } from "./icon";

function App() {
  const audios = [audio1, audio2, audio3, audio4, audio5];
  const playAudioOnSource = (position) => {
    const audioTag = document.querySelector("audio");
    audioTag.src = audios[position - 1];
    audioTag.play();
    const buttons = document.querySelectorAll(".music-button");
    buttons.forEach((button) => {
      button.classList.remove("border-blue-300");
      button.classList.add("border-white");
    });
    buttons[position - 1].classList.remove("border-white");
    buttons[position - 1].classList.add("border-blue-300");
  };

  return (
    <div id="background-stars">
      <div className="w-[100vw] h-full absolute overflow-hidden -z-5">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <img
        src={moon}
        alt="moon"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 sm:w-1/4 h-auto opacity-40 z-0 "
      />
      <div className="sm:h-[100vh] h-full flex flex-col gap-0 items-center justify-center p-6 z-10 relative">
        <h3 className="text-2xl font-semibold">LES DOTZE VAN TOCANT TEST</h3>
        <p className="italic text-sm">tradicional catalana</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 h-fit mt-4">
          <p className="text-lg font-medium">
            Les dotze van tocant.
            <br />
            Ja és nat el Déu Infant,
            <br />
            fill de Maria.
            <br />
            <br />
            El cel és estrellat,
            <br />
            el món és tot glaçat,
            <br />
            neva i venteja.
            <br />
            <br />
            D'algun llop famolenc
            <br />
            del fons d'un negre avenc
            <br />
            l'udol arriba.
          </p>
          <p className="text-lg font-medium items-center mt-6 sm:mt-0">
            La Verge i el Fillet
            <br />
            n'estan mig morts de fred
            <br />
            i el vell tremola.
            <br />
            <br />
            Josep, a poc a poc
            <br />
            encén allà un gran foc
            <br /> i els àngels canten.
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-6">
          <button
            className="music-button flex gap-3 items-center border-2 border-white rounded-xl p-2 hover:bg-gray-600"
            onClick={() => playAudioOnSource(1)}
          >
            <MusicIcon />
          </button>
          <button
            className="music-button flex gap-2 items-center border-2 border-white rounded-xl p-2 hover:bg-gray-600"
            onClick={() => playAudioOnSource(2)}
          >
            <MusicIcon />
          </button>
          <button
            className="music-button flex gap-2 items-center border-2 border-white rounded-xl p-2 hover:bg-gray-600"
            onClick={() => playAudioOnSource(3)}
          >
            <MusicIcon />
          </button>
          <button
            className="music-button flex gap-2 items-center border-2 border-white rounded-xl p-2 hover:bg-gray-600"
            onClick={() => playAudioOnSource(4)}
          >
            <MusicIcon />
          </button>
          <button
            className="music-button flex gap-2 items-center border-2 border-white rounded-xl p-2 hover:bg-gray-600"
            onClick={() => playAudioOnSource(5)}
          >
            <MusicIcon />
          </button>
        </div>
        <audio controls className="hidden">
          Your browser does not support the audio element.
        </audio>
        <p className="text-2xl font-bold mt-10 text-center text-blue-300">
          BON NADAL I VENTURÓS VINT-I-QUATRE!
        </p>
        <p className="text-lg text-center">Pau, David, Núria i Ricard</p>
        <p className="text-sm text-center">Nadal 2023</p>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import moon from "./assets/moon.png";
import audio1 from "./assets/Les_dotze_van_tocant_Arnau_Tordera.mp3";
import audio2 from "./assets/Les_dotze_van_tocant_Escolania_de_Montserrat.mp3";
import audio3 from "./assets/Les_dotze_van_tocant_Infantil.mp3";
import audio5 from "./assets/Les_dotze_van_tocant_Lieder_Camera.mp3";
import audio4 from "./assets/Les_dotze_van_tocant_Locomotora_Negra.mp3";

function App() {
  const audioArray = [audio1, audio2, audio3, audio4, audio5];
  const randomAudio = audioArray[Math.floor(Math.random() * audioArray.length)];
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 sm:w-1/4 h-auto opacity-20 z-0 "
      />
      <div className="sm:h-[100vh] h-full flex flex-col gap-4 items-center justify-center p-6 z-10 relative">
        <h3 className="text-3xl font-bold">LES DOTZE VAN TOCANT</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 h-fit">
          <p className="text-lg font-medium">
            Les dotze van tocant.
            <br />
            Ja és nat el Rei Infant,
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
          <p className="text-md font-medium">
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
        <audio controls className="w-60">
          <source src={randomAudio} />
          Your browser does not support the audio element.
        </audio>
        <p className="italic text-sm">
          Refresca la pàgina per a escoltar una nova versió de la música.
        </p>
        <p className="text-md mt-2">RNDP</p>
      </div>
    </div>
  );
}

export default App;

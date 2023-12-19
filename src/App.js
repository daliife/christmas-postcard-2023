import "./App.css";
import moon from "./assets/moon.png";

function App() {
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 sm:w-1/4 h-auto opacity-30 z-0 "
      />
      <div className="sm:h-[100vh] h-full flex flex-col gap-4 items-center justify-center p-6">
        {/* <h3 className="text-2xl font-bold">Les dotze van tocant</h3> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 h-fit">
          <p className="text-md font-medium">
            Les dotze van tocant.
            <br />
            Ja és nat el Rei Infant,
            <br />
            fill de Maria.
            <br />
            Ja és nat el Rei Infant,
            <br />
            fill de Maria, fill de Maria.
            <br />
            <br />
            El cel és estrellat,
            <br />
            el món és tot glaçat,
            <br />
            neva i venteja.
            <br />
            El món és tot glaçat,
            <br />
            neva i venteja, neva i venteja.
            <br />
            <br />
            D'algun llop famolenc
            <br />
            del fons d'un negre avenc
            <br />
            l'udol arriba.
            <br />
            Del fons d'un negre avenc
            <br />
            l'udol arriba, l'udol arriba.
          </p>
          <p className="text-md font-medium">
            La Verge i el Fillet
            <br />
            n'estan mig morts de fred,
            <br />
            i el vell tremola.
            <br />
            N'estan mig morts de fred,
            <br />
            i el vell tremola, i el vell tremola.
            <br />
            <br />
            Josep, a poc a poc
            <br />
            encén allà un gran foc
            <br />
            i els àngels canten.
            <br />
            Encén allà un gran foc
            <br />i els àngels canten, i els àngels canten.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

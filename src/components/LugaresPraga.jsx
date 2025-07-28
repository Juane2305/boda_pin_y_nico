import party from "../assets/praga/party.json";
import ceremony from "../assets/praga/ceremony.json";
import Lottie from 'react-lottie-player';


const LugaresPraga = ({
  linkCeremonia = "",
  nombreIglesia = "",
  horaIglesia = "",
  linkFiesta = "",
  nombreSalon = "",
  horaFiesta = "",
  claseContainer = "flex flex-col md:flex-row items-center justify-center gap-8 my-8",
  claseTexto = "text-gray-800",
}) => {
  return (
    <div className={`w-full text-center ${claseTexto} py-10`}>
      <div className={claseContainer}>
        {linkCeremonia && linkCeremonia.trim() !== "" && (
          <div className="flex flex-col items-center gap-3 max-w-xs">
            <div style={{ width: 120, height: 120 }}>
              <Lottie
                loop
                play
                animationData={ceremony}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h3 className="text-2xl font-semibold font-['Quicksand']">Ceremonia</h3>
            <p className="font-light font-['Quicksand']">
              La ceremonia se realizará en <strong>{nombreIglesia}</strong> a
              las {horaIglesia}.
            </p>
            <a
              href={linkCeremonia}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-4 py-3 my-2 rounded-full hover:bg-gray-700 hover:text-white transition font-['Quicksand']"
            >
              Cómo llegar
            </a>
          </div>
        )}

        {linkFiesta && linkFiesta.trim() !== "" && (
          <div className="flex flex-col items-center gap-3 max-w-xs">
            <div style={{ width: 120, height: 120 }}>
              <Lottie
                loop
                play
                animationData={party}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h3 className="text-2xl font-semibold font-['Quicksand']">Ubicación</h3>
            <p className="font-light font-['Quicksand']">
              <strong>{nombreSalon}</strong> a las <strong>{horaFiesta}</strong>.
            </p>
            <a
              href={linkFiesta}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-4 py-3 my-2 rounded-full hover:bg-gray-700 hover:text-white transition font-['Quicksand']"
            >
              Cómo llegar
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LugaresPraga;

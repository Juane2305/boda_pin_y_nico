import { useState } from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopyOutline } from "react-icons/io5";


export const Modal = ({claseBoton, claseBotonModal, borderModal, textColor}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  // Función para copiar texto al portapapeles
  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert(`¡Copiado al portapapeles!`);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <button
        className={`py-4 px-6 border-2 mt-5 transition hover:transform hover:scale-105 hover:shadow-lg cursor-pointer ${claseBoton}`} data-aos= 'fade-up'
        onClick={() => setIsOpen(true)}
      >
        Ver Datos Bancarios
      </button>

      {isOpen && (
        <div className={`fixed inset-0 bg-opacity-30 bg-black/55 backdrop-blur-md flex justify-center items-center px-2 z-50 font-['Quicksand']`}>
        <div className={`bg-white p-4 md:w-xl rounded-lg flex flex-col justify-center items-center border-8 ${borderModal}`}>
          <div className="flex flex-col justify-center space-y-7 text-gray-900 cursor-default px-3">
            <h2 className=" font-bold text-2xl text-center cursor-default">Datos Bancarios</h2>
            <h3 className="text-center font-semibold">Datos en PESOS</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-lg">Titular:</p>
                <p className="text-lg">
                  Priscila Lorena Glat
                </p>
              </div>
              <p className="text-lg">
                <span className="font-semibold">CBU:</span>
                <button
                  className="ml-3 bg-green-700 text-white px-2 py-1 rounded-lg cursor-pointer"
                  onClick={() => copiarTexto("0140060103500353067369")}
                >
                  Copiar CBU
                </button>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Alias:</span> Pin.y.nico
                <button
                  className="ml-3 cursor-pointer"
                  onClick={() => copiarTexto("Pin.y.nico")}
                >
                  <IoCopyOutline className={`${textColor}`}/>
                </button>
              </p>
              <p className="font-semibold text-lg">Banco Provincia</p>
            </div>
            <h3 className="text-center font-semibold">Datos en USD</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-lg">Titular:</p>
                <p className="text-lg">
                  Priscila Lorena Glat
                </p>
              </div>
              <p className="text-lg">
                <span className="font-semibold">CTA:</span> 4004930-1 092-2
                <button
                  className="ml-3 cursor-pointer"
                  onClick={() => copiarTexto("4004930-1 092-2")}
                >
                  <IoCopyOutline className={`${textColor}`}/>
                </button>
              </p>
              <p className="text-lg">
                <span className="font-semibold">CBU:</span>
                <button
                  className="ml-3 bg-green-700 text-white px-2 py-1 rounded-lg cursor-pointer"
                  onClick={() => copiarTexto("00700924-31004004930125")}
                >
                  Copiar CBU
                </button>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Alias:</span> Pin.y.nico.usd
                <button
                  className="ml-3 "
                  onClick={() => copiarTexto("Pin.y.nico.usd")}
                >
                  <IoCopyOutline className={`${textColor}`}/>
                </button>
              </p>
              <p className="font-semibold text-lg">Banco Galicia</p>
            </div>

            <button className={` py-4 rounded-lg text-white font-bold hover:bg-transparent hover:transition hover:text-gray-900 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer ${claseBotonModal}`} onClick={() => setIsOpen(false)}>Cerrar</button>
          </div>
        </div>
      </div>
      )}
    </>
  );
};
import cancion from "../assets/song.m4a";
import Countdown from "../components/Countdown";
import GoogleCalendarButton from "../components/GoogleCalendarButton";
import DressCode from "../components/DressCode";
import DatosBancarios from "../components/DatosBancarios";
import Asistencia from "../components/Asistencia";
import Footer from "../components/Footer";
import TextoFinal from "../components/TextoFinal";
import MusicScreen from "../components/MusicScreen";
import { GalleryPraga } from "../components/GalleryPraga";
import LugaresPraga from "../components/LugaresPraga";
import Itinerary from "../components/Itinerary";

const Invitation = () => {
  const targetDate = new Date("2026-03-07T13:00:00-03:00");

  return (
    <div>
      <div className="absolute">
        <MusicScreen cancion={cancion} />
      </div>

      <div className="relative flex flex-col items-center justify-center h-screen w-full text-center md:bg-[url(https://res.cloudinary.com/dfschbyq2/image/upload/v1742341160/Fondo_de_Pantalla_Computador_Simple_Beige_18_gyfe4i.png)] bg-[url(https://res.cloudinary.com/dfschbyq2/image/upload/v1753476679/portada_1_zt2lcc.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
        <div
          data-aos="fade-in"
          className="relative z-10 flex flex-col items-center text-center "
        >
          <p className="text-md md:text-xl uppercase tracking-widest text-white mb-4">
            ¡Nos Casamos!
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 font-['Tangerine']">
            Pin &amp; Nico
          </h1>
          <p className="text-base md:text-xl text-white">07 / 03 / 2026</p>
        </div>
      </div>
      <div>
        <section
          id="contador"
          className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 py-10 font-thin"
        >
          <Countdown
            containerClasses={
              "w-full flex flex-col justify-center items-center gap-y-5 "
            }
            targetDate={targetDate}
          />
        </section>

        <LugaresPraga
          linkCeremonia=""
          nombreIglesia="Nombre Iglesia"
          horaIglesia="10:00hs"
          linkFiesta="https://maps.app.goo.gl/GVDMQQrzieKwiyJS7?g_st=awb"
          nombreSalon="La Soñada, Salon Eventos"
          horaFiesta="17:30hs"
          claseContainer="flex flex-col md:flex-row items-center justify-center gap-8 my-8 "
          claseTexto="text-gray-900"
        />

        <section className="mb-16">
          <GalleryPraga
            text="Nosotros"
            sectionClass="bg-white text-gray-700"
            images={[
              {
                index: 1,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1753476550/1_1_yzn9yb.jpg",
              },
              {
                index: 2,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1753476571/2_2_1_irfnnj.jpg",
              },
              {
                index: 3,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1753476589/3ok_1_q3aapo.jpg",
              },
              {
                index: 4,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1753476614/4_1_m0am0y.jpg",
              },
              {
                index: 5,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1753476637/6_1_gxlyiu.jpg",
              },
              {
                index: 6,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1753476661/7_1_cjycsg.jpg",
              },
            ]}
            />
        </section>

        <div className="bg-[#8fc09f] text-center text-white relative">
          <GoogleCalendarButton
            titleCalendar="Casamiento de Pin y Nico"
            fechaComienzo="20260307T173000"
            fechaFin="20260308T023000"
            salon="La Soñada Salon Eventos"
            imgClass="text-white"
            buttonClass="font-['Quicksand'] border border-green-700 bg-white py-3 px-6 text-gray-800 rounded-full hover:bg-gray-100 hover:text-gray-800 transform transition-transform duration-300 ease-in-out font-semibold"
            />
        </div>
        <div className="relative">
          <DressCode dress_code="Formal" />
        </div>
        <DatosBancarios
          texto="Tu mejor regalo es que nos acompañes en este día, peeero...si queres aportar con la causa, todas las gotas mojan 😂"
          claseContenedor="bg-[#8fc09f] text-white"
          claseBoton="font-['Quicksand'] border border-green-700 bg-white py-3 px-6 text-gray-800 rounded-full hover:bg-gray-100 hover:text-gray-800 transform transition-transform duration-300 ease-in-out font-semibold"
          textSize="text-lg"
          cbu="284529529245"
          alias="francisco.mp"
          banco="Nombre Banco"
          nombre="Francisco Lopez"
          claseBotonModal="bg-[#8fc09f] border-[#8fc09f]"
          borderModal="border-[#8fc09f]"
          textColor="text-[#8fc09f]"
          />
        <Asistencia
          clase="py-10 bg-fondo-banner"
          claseButton="border font-['Quicksand'] cursor-pointer py-3 px-6 rounded-full border-gray-800 font-semibold hover:border-gray-700 hover:bg-white hover:text-gray:800"
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSdz8uE480IPINt0_OP2TTd2IfyX-PtTAGU1acQH4rsO1pXnjA/viewform?usp=header"
          />
        <Itinerary/>
        <TextoFinal textoFinal="¡Gracias por venir!" />
        <Footer />
      </div>
    </div>
  );
};

export default Invitation;

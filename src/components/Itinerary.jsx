import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PiChampagneLight, PiDiscoBall } from "react-icons/pi";
import { GiLinkedRings, GiHotMeal } from "react-icons/gi";
import arco from "../assets/arco-de-boda.png";
import { ImHeart } from "react-icons/im";
import { LuDessert } from "react-icons/lu";
import { FaChampagneGlasses } from "react-icons/fa6";
import { CiPizza } from "react-icons/ci";
import { BsArrowThroughHeart } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";


const Itinerary = () => {
  return (
    <div>
      <h3 className='text-center my-20 text-7xl font-["Tangerine"]'>
        Itinerario
      </h3>
      <VerticalTimeline lineColor="#5e836a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="17:30hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<GiLinkedRings />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Llegada de invitados/as
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid #5e836a" }}
          date="18:30hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center pt-2 lg:pt-5">
              <img src={arco} alt="Arco de boda" className="w-6 h-6" />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Recepción
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="20:00hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<ImHeart />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Arranca el baile
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="21:00hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<GiHotMeal />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Cena
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="21:45hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<PiChampagneLight />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Siga el baile siga el baileee
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="22:30hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<LuDessert />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Postre
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="23:00hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<PiDiscoBall />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Baile
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="23:45hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<FaChampagneGlasses />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Brindis y mesa dulce
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="00:00hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<LiaBirthdayCakeSolid />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Cumple Pin
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="00:30hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<PiDiscoBall />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            La vida es un CARNAVAL
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="02:00hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<CiPizza />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Fin de fiesta
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid  #5e836a" }}
          date="02:30hs"
          iconStyle={{ background: "#5e836a", color: "#fff" }}
          icon={<BsArrowThroughHeart />}
        >
          <h3 className="vertical-timeline-element-title font-['Quicksand'] text-xl">
            Se terminó lo que se daba
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Itinerary;

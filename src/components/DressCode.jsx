import dressCode from '../assets/dress-code.svg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const DressCode = ({dress_code}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="  mt-20 flex flex-col justify-center items-center py-20">
        <h3 className="text-gray-700 text-3xl text-center px-5 md:px-0 font-semibold font-['Quicksand'] tracking-wider" data-aos= 'fade-up'>Dress Code</h3>
        <img src={dressCode} alt="regalo" className="w-56 pt-10" data-aos= 'fade-up'/>
        <p className='text-5xl font-semibold text-gray-700 font-["Tangerine"] mt-5' data-aos= 'fade-up'>{dress_code}</p>
    </div>
  )
}

export default DressCode

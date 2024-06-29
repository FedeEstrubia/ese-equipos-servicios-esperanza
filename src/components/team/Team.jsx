import Card from "../card/Card";
import {motion} from 'framer-motion'

// NO SE ESTA USANDO ESTE COMPONENTE

export default function Team() {
  return (
    <div id="team" className="div-card-container flex flex-col justify-center items-center w-full h-screen bg-[#2d4fbd] z-10 gap-5">
      <motion.h1 className='text-[#eee] ' initial={{scale:0}} transition={{duration:1}} whileInView={{scale:1}}>Nuestro Equipo</motion.h1>
      <motion.h3 className='text-[#eee] w-2/3' initial={{scale:0}} transition={{duration:1}} whileInView={{scale:1}}>Conoce a cada miembro de nuestro equipo pulsando sobre ellos</motion.h3>
      <Card />
    </div>
  );
} 
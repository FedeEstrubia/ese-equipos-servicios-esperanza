import { motion } from "framer-motion";
import ButtonHero from "../buttons/ButtonHero";

export default function Hero() {
  const scrollToInfo = () => {
    console.log('Clickaste el Boton')
    document.getElementById('info').scrollIntoView({behavior:'smooth'})
  }

  return (
    <div id="hero" className="div-hero flex flex-col relative w-full h-screen overflow-hidden">
      <div className="overlay-text flex flex-col justify-center items-center w-screen h-screen bg-black bg-opacity-80 z-30">
        <div className="overlay-text flex flex-col justify-center items-center w-screen h-screen bg-blue-900 bg-opacity-30 gap-6 z-30">
          <motion.h1
            className="gradient m-0 text-white text-center font-bold text-5xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            BIENVENIDOS A ESE
          </motion.h1>
          <motion.h3
            className="m-0 w-2/3 text-white font-normal"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.3 }}
          >
            Esperamos poder satisfacer sus necesidades
          </motion.h3>
          <ButtonHero onClick={scrollToInfo} text={'Comencemos..'} color={'primary'} variant={'ghost'}/>
        </div>
      </div>

      <img
        className="img-hero sm:hidden absolute object-cover h-screen min-w-[640px] left-1/2 -translate-x-1/2 z-20 "
        src="/FotoHero.jpg"
        alt="Imagen de Inicio"
      />
      <img className="min-h-screen max-w-none absolute left-1/2 -translate-x-1/2 z-10" src="/img-inicio.jpg" alt="Imagen de Inicio" />
    </div>
  );
}

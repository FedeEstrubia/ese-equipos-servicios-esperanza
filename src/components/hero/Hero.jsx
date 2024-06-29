import { motion } from "framer-motion";

export default function Hero() {
  // const scrollToInfo = () => {
  //   console.log('Clickaste el Boton')
  //   document.getElementById('info').scrollIntoView({behavior:'smooth'})
  // }

  return (
    <div id="hero" className="flex flex-col relative w-full h-screen overflow-hidden">
      <div className="overlay-text flex flex-col justify-center bg-gradient-to-b from-[#00000000] to-fondo items-center w-screen h-screen z-30">
        <div className="overlay-text flex flex-col justify-center bg-gradient-to-b from-[#00204a] to-[#00000000]  items-center w-screen h-screen gap-6 z-30">
          <motion.h1
            className="gradient m-0 w-full text-white text-[3rem] sm:text-[6rem]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Bienvenido Ese
          </motion.h1>
          <motion.h3
            className="m-0 w-full text-white sm:mb-[10vh] sm:text-2xl font-normal"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.3 }}
          >
            Esperamos poder satisfacer sus necesidades
          </motion.h3>
          {/* <ButtonHero onClick={scrollToInfo} text={'Comencemos..'} color={'primary'} variant={'ghost'}/> */}
        </div>
      </div>

      <img
        className="img-hero sm:hidden absolute object-cover h-screen min-w-[640px] left-1/2 -translate-x-1/2 z-20 "
        src="/FotoHero.jpg"
        alt="Imagen de Inicio"
      />
      <img className="hidden sm:flex min-h-screen max-w-none absolute left-1/2 -translate-x-1/2 z-10" src="/img-inicio.jpg" alt="Imagen de Inicio" />
    </div>
  );
}

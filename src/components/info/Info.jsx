import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";

export default function Info() {
  const refDeLaval = React.useRef(null);
  const refBauduco = React.useRef(null);
  const inView = useInView(refDeLaval, { once: true, amount: 0.5 });
  const inView2 = useInView(refBauduco, { once: true, amount: 0.5 });
  const [startAnimationDeLaval, setStartAnimationDeLaval] = useState(false);
  const [startAnimationBauduco, setStartAnimationBauduco] = useState(false);
  useEffect(() => {
    if (inView) {
      setStartAnimationDeLaval(true);
    }
  }, [inView]);
  useEffect(() => {
    if (inView2) {
      setStartAnimationBauduco(true);
    }
  }, [inView2]);

  return (
    <>
      {/* Distribuidores DeLaval */}
      <div
        ref={refDeLaval}
        className="flex flex-col sm:flex-row mt-20 justify-center items-center w-screen z-20"
      >
        <div
          id="info"
          className=" flex flex-col justify-center items-center gap-4 sm:w-[55%] sm:gap-16 z-20"
        >
          <motion.h1
            className="m-0 p-0 select-none text-claro text-3xl leading-tight p-1 sm:text-6xl sm:max-w-[70%]"
            initial={{ x: -1000 }}
            animate={startAnimationDeLaval ? { x: 0 } : { x: -1000 }}
            transition={{ duration: 1.3, delay:0.2, type: "spring" }}
          >
            Distribuidores oficiales de
            <strong className="text-celeste text-3xl sm:text-6xl">
              {" "}
              DeLaval
            </strong>
          </motion.h1>
          <motion.p
            className="m-0 p-0 text-claro select-none w-3/4 sm:w-2/3 sm:text-2xl font-light"
            initial={{ x: -1000 }}
            animate={startAnimationDeLaval ? { x: 0 } : { x: -1000 }}
            transition={{ duration: 1.5, delay:0.4, type: "spring" }}
          >
            Nuestro trabajo es Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </motion.p>
        </div>
        <motion.div
          className="flex justify-center items-center mt-6 sm:justify-start sm:w-[45%] sm:overflow-hidden"
          initial={{ x: 1000 }}
          animate={startAnimationDeLaval ? { x: 0 } : { x: 1000 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <img
            className="shadow-xl overflow-hidden h-[w-50%] w-[90%] rounded-3xl z-20 "
            src="/fondo-info-prueba.jpg"
            alt="Fondo de Info"
          />
        </motion.div>
      </div>

      {/* Distribuidores Bauduco */}
      <div
        ref={refBauduco}
        className="flex flex-col sm:flex-row mt-16 sm:mt-20 mb-20 justify-center items-center w-screen z-20"
      >
        <motion.div
          initial={{ x: -1000 }}
          animate={startAnimationBauduco ? { x: 0 } : { x: -1000 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="hidden sm:flex justify-center items-center mt-6 sm:justify-end sm:w-[45%] sm:overflow-hidden"
        >
          <img
            className="shadow-xl overflow-hidden h-[w-50%] w-[90%] rounded-3xl z-20 "
            src="/fondo-info-prueba.jpg"
            alt="Fondo de Info"
          />
        </motion.div>
        <div
          id="info"
          className="sm:w-[55%] flex flex-col justify-center items-center gap-4 sm:gap-16 z-20"
        >
          <motion.h1
            initial={{ x: 1000 }}
            animate={startAnimationBauduco ? { x: 0 } : { x: 1000 }}
            transition={{ duration: 1.4, delay: 0.2, type: "spring" }}
            className="m-0 p-0 select-none text-3xl sm:text-6xl text-claro p-1 leading-tight sm:max-w-[70%]"
          >
            Distribuidores oficiales de
            <strong className="text-red-600 text-3xl sm:text-6xl">
              {" "}
              Bauduco
            </strong>
          </motion.h1>
          <motion.p
            initial={{ x: 1000 }}
            animate={startAnimationBauduco ? { x: 0 } : { x: 1000 }}
            transition={{ duration: 1.5,delay:0.4, type: "spring" }}
            className="m-0 p-0 select-none text-claro sm:text-2xl font-light w-3/4 sm:w-2/3"
          >
            Nuestro trabajo es Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </motion.p>
        </div>
        <div className="sm:hidden flex justify-center items-center mt-6 sm:justify-end sm:w-[45%] sm:overflow-hidden">
          <img
            className="shadow-xl overflow-hidden h-[w-50%] w-[90%] rounded-3xl z-20 "
            src="/fondo-info-prueba.jpg"
            alt="Fondo de Info"
          />
        </div>
      </div>
    </>
  );
}

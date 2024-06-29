import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";

// const items = [
//   {
//     key: 1,
//     id: 1,
//     title: "Soy un item",
//     subtitle: "Soy el item con id 1",
//     paragraph:
//       "Hola soy el primer item y es un gusto poder estar hablando contigo!!",
//   },
//   {
//     key: 2,
//     id: 2,
//     title: "Soy un item",
//     subtitle: "Soy el item con id 2",
//     paragraph:
//       "Hola soy el segundo item y es un gusto poder estar hablando contigo!!",
//   },
//   {
//     key: 3,
//     id: 3,
//     title: "Soy un item",
//     subtitle: "Soy el item con id 3",
//     paragraph:
//       "Hola soy el tercer item y es un gusto poder estar hablando contigo!!",
//   },
//   {
//     key: 4,
//     id: 4,
//     title: "Soy un item",
//     subtitle: "Soy el item con id 4",
//     paragraph:
//       "Hola soy el cuarto item y es un gusto poder estar hablando contigo!!",
//   },
//   {
//     key: 5,
//     id: 5,
//     title: "Soy un item",
//     subtitle: "Soy el item con id 5",
//     paragraph:
//       "Hola soy el quinto item y es un gusto poder estar hablando contigo!!",
//   },
//   {
//     key: 6,
//     id: 6,
//     title: "Soy un item",
//     subtitle: "Soy el item con id 6",
//     paragraph:
//       "Hola soy el sexto item y es un gusto poder estar hablando contigo!!",
//   },
// ];

const items = [
  {
    id: 1,
    src: "../public/photoMauro.jpg",
    alt: "Foto de Mauro",
    name: "Mauro",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore nam delectus enim sed eveniet totam iste, iure possimus corrupti distinctio, itaque commodi quos laboriosam. Laudantium qui sunt atque explicabo.",
  },
  {
    id: 2,
    src: "../public/photoMauro.jpg",
    alt: "Foto de Mauro",
    name: "Ricardo",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore nam delectus enim sed eveniet totam iste, iure possimus corrupti distinctio, itaque commodi quos laboriosam. Laudantium qui sunt atque explicabo.",
  },
  {
    id: 3,
    src: "../public/photoMauro.jpg",
    alt: "Foto de Mauro",
    name: "Primo",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore nam delectus enim sed eveniet totam iste, iure possimus corrupti distinctio, itaque commodi quos laboriosam. Laudantium qui sunt atque explicabo.",
  },
  {
    id: 4,
    src: "../public/photoMauro.jpg",
    alt: "Foto de Mauro",
    name: "Tortu",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore nam delectus enim sed eveniet totam iste, iure possimus corrupti distinctio, itaque commodi quos laboriosam. Laudantium qui sunt atque explicabo.",
  },
  {
    id: 5,
    src: "../public/photoMauro.jpg",
    alt: "Foto de Mauro",
    name: "Mauro",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore nam delectus enim sed eveniet totam iste, iure possimus corrupti distinctio, itaque commodi quos laboriosam. Laudantium qui sunt atque explicabo.",
  },
  {
    id: 6,
    src: "../public/photoMauro.jpg",
    alt: "Foto de Mauro",
    name: "Tortu",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore nam delectus enim sed eveniet totam iste, iure possimus corrupti distinctio, itaque commodi quos laboriosam. Laudantium qui sunt atque explicabo.",
  },
];

export default function CardFramerMotion() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedItem = items.find((item) => item.id === selectedId);
  const scroll = () => {
    document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="card"
      className="flex flex-col w-screen justify-center items-center  h-screen gap-2"
    >
      <div className="flex flex-col items-center gap-8 w-screen h-screen">
        {/* Titulo */}
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", type: "spring" }}
          className="text-[350%]"
        >
          Nuestro <strong className="text-celeste">Equipo</strong>
        </motion.h1>
        {/* Subtitulo */}
        <motion.h2
          className="text-[150%]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            ease: "easeInOut",
            type: "spring",
          }}
        >
          Presionen sobre nosotros para conocernos!!
        </motion.h2>

        {/* iteracion de cards */}
        <div className="grid grid-cols-2 w-full h-[60vh] justify-evenly items-center sm:grid-cols-3 sm:grid-rows-2 sm:p-2 sm:gap-2 sm:w-[50%] sm:h-[65%]">
          <div className="flex justify-center items-center sm:w-full sm:h-full">
            <motion.div
              className="w-[50%] h-[50%] ml-12 sm:ml-0 overflow-hidden rounded-full cursor-pointer"
              layoutId={items[0].id}
              key={items[0].id}
              onClick={() => setSelectedId(items[0].id)}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0,
              }}
            >
              <img
                className="relative max-w-none w-[100%] h-auto rounded-full"
                src={items[0].src}
                alt={items[0].alt}
              />
              {/* <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5> */}
            </motion.div>
          </div>
          <div className="flex justify-center items-center sm:w-full sm:h-full sm:items-start">
            <motion.div
              className="w-[50%] h-[50%] mr-12 sm:mr-0 overflow-hidden rounded-full cursor-pointer"
              layoutId={items[1].id}
              key={items[1].id}
              onClick={() => setSelectedId(items[1].id)}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
                delay: 0.1,
              }}
            >
              <img
                className="relative max-w-none w-[100%] h-auto  rounded-full"
                src={items[1].src}
                alt={items[1].alt}
              />
              {/* <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5> */}
            </motion.div>
          </div>
          <div className="flex justify-center items-center sm:w-full sm:h-full ">
            <motion.div
              className="w-[50%] h-[50%] mr-10 sm:mr-0 overflow-hidden rounded-full cursor-pointer"
              layoutId={items[2].id}
              key={items[2].id}
              onClick={() => setSelectedId(items[2].id)}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.15,
              }}
            >
              <img
                className="relative max-w-none w-[100%] h-auto  rounded-full"
                src={items[2].src}
                alt={items[2].alt}
              />
              {/* <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5> */}
            </motion.div>
          </div>
          <div className="flex justify-center items-center sm:ml-8 sm:w-full sm:h-full">
            <motion.div
              className="w-[50%] h-[50%] ml-10 sm:ml-0 overflow-hidden rounded-full cursor-pointer"
              layoutId={items[3].id}
              key={items[3].id}
              onClick={() => setSelectedId(items[3].id)}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.15,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <img
                className="relative max-w-none w-[100%] h-auto rounded-full"
                src={items[3].src}
                alt={items[3].alt}
              />
              {/* <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5> */}
            </motion.div>
          </div>
          <div className="flex justify-center items-center sm:w-full sm:h-full sm:items-end">
            <motion.div
              className="w-[50%] h-[50%] ml-12 sm:ml-0 overflow-hidden rounded-full cursor-pointer"
              layoutId={items[4].id}
              key={items[4].id}
              onClick={() => setSelectedId(items[4].id)}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",

                delay: 0.25,
              }}
            >
              <img
                className="relative max-w-none w-[100%] h-auto rounded-full"
                src={items[4].src}
                alt={items[4].alt}
              />
              {/* <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5> */}
            </motion.div>
          </div>

          <div className="flex justify-center items-center sm:w-full sm:h-full">
            <motion.div
              className="w-[50%] h-[50%] mr-12 sm:mr-0 overflow-hidden rounded-full sm:mr-8 cursor-pointer"
              layoutId={items[5].id}
              key={items[5].id}
              onClick={() => setSelectedId(items[5].id)}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",

                delay: 0.2,
              }}
            >
              <img
                className="relative max-w-none w-[100%] h-auto rounded-full"
                src={items[5].src}
                alt={items[5].alt}
              />
              {/* <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5> */}
            </motion.div>
          </div>

          <AnimatePresence>
            {selectedId && selectedItem && (
              <motion.div
                className="flex flex-col items-center justify-center absolute w-[60vw] h-[40vh] ml-[20vw] mr-[20vw] sm:w-[20vw] sm:h-[50vh] sm:ml-[15vw] overflow-hidden gap-2 bg-slate-900 text-[#07f] rounded-3xl"
                layoutId={selectedId}
              >
                <div className="flex top-0 absolute justify-end w-full bg-none z-20">
                  <div className="flex justify-center items-center rounded-full bg-slate-700 w-[2rem] h-[2rem] m-2 z-20">
                    <motion.button
                      className="flex justify-center items-center rounded-full w-full h-full border-0 bg-transparent text-celeste cunia z-20"
                      onClick={() => setSelectedId(null)}
                    >
                      X
                    </motion.button>
                  </div>
                </div>
                <motion.h2 className="text-celeste mb-10 text-3xl font-medium z-20">
                  {selectedItem.name}
                </motion.h2>
                {/* <motion.h5 className="cunia">{selectedItem}</motion.h5> */}
                <motion.p className="text-claro mr-4 ml-4 text-sm z-20">
                  {selectedItem.paragraph}
                </motion.p>
                <img
                  className="absolute max-w-none h-full opacity-10 z-0"
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* boton para celular */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut", type: "spring" }}
          className="flex absolute items-end h-screen mb-24"
        >
          <Button
            onClick={scroll}
            variant="ghost"
            color="primary"
            className="sm:hidden"
          >
            Siguiente Seccion
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

// {items.map((item) => (
//           <motion.div
//           className="flex justify-center items-center bg-blue-800 w-full h-full"
//           layoutId={item.id}
//           key={item.id}
//           onClick={() => setSelectedId(item.id)}
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           transition={{
//             duration: 1.2,
//             ease: "easeInOut",
//             type: "spring",
//             delay: 0,
//           }}
//           >
//             <img
//               className="relative max-w-none w-[120px] h-auto  rounded-full"
//               src={item.src}
//               alt={item.alt}
//               />
//             {/* <motion.h2>{item.title}</motion.h2>
//             <motion.h5>{item.subtitle}</motion.h5> */}
//           </motion.div>
//         ))}

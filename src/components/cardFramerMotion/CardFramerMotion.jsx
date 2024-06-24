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
    console.log("Clickaste el Boton");
    document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="card"
      className="flex flex-col w-screen justify-center items-center bg-black bg-opacity-80 h-screen gap-2"
    ><div className="flex flex-col w-screen h-screen bg-blue-900 bg-opacity-30">


      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", type: "spring" }}
        >
       
        Nuestro Equipo
      </motion.h1>
      <motion.h2
        className="w-1/2 "
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: "easeInOut",
          type: "spring",
        }}
        >
        Presionen sobre nosotros para conocernos!!
      </motion.h2>
      <div className="flex flex-wrap justify-evenly items-center h-[60%]">
        {items.map((item) => (
          <motion.div
          className="flex overflow-hidden justify-center items-center bg-blue-800 w-[120px] h-[120px] m-[3%] rounded-full"
          layoutId={item.id}
          key={item.id}
          onClick={() => setSelectedId(item.id)}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            type: "spring",
            delay: 0,
          }}
          >
            <img
              className="relative max-w-none w-[165px] mt-10 mr-3 h-auto"
              src={item.src}
              alt={item.alt}
              />
            {/* <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5> */}
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && selectedItem && (
            <motion.div
            className="flex overflow-hidden flex-col items-center absolute justify-center gap-2 bg-slate-900 text-[#07f] h-[25rem] w-2/3 rounded-3xl"
            layoutId={selectedId}
            >
              <div className="flex top-0 absolute justify-end w-full bg-none z-20">
                <div className="flex flex-row justify-center rounded-full items-center bg-slate-700 w-[2rem] h-[2rem] m-2 z-20">
                  <motion.button
                    className="rounded-full bg-transparent text-[#07f] cunia z-20"
                    onClick={() => setSelectedId(null)}
                    >
                    X
                  </motion.button>
                </div>
              </div>
              <motion.h2 className="cunia text-[#59f] mb-10 text-2xl z-20">
                {selectedItem.name}
              </motion.h2>
              {/* <motion.h5 className="cunia">{selectedItem}</motion.h5> */}
              <motion.p className="font-comic-neue text-[#eef] mr-4 ml-4 text-sm z-20">
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
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4 , ease:'easeInOut', type:'spring'}}
        className="flex absolute items-end h-screen mb-24"
        >
        <Button onClick={scroll} variant="ghost" color="primary" className="sm:hidden">
          Siguiente Seccion
        </Button>
      </motion.div>
        </div>
    </div>
  );
}
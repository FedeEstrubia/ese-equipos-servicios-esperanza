import {motion} from 'framer-motion'
import './card.css'

const cards = [
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

export default function Card() {
  return (
    <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5}} className="div-cards-container">
      {cards.map((item, index) => (
        <motion.div initial={{scale:0}} whileTap={{scale:2}} transition={{duration:0.1}} whileInView={{scale:1}} className="div-card" id={item.name} key={index}>
          <div className={`div-img-card ${item.name}`}>
            <img src={item.src} alt={item.alt} className="img-card" />
          </div>
          <h1 className="name-card">Hola soy {`${item.name}`}</h1>
          <p className="paragraph-card">{`${item.paragraph}`}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}     
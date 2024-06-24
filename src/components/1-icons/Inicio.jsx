import {motion} from 'framer-motion'
const scroll = () => {
  console.log('Clickaste el Boton')
  document.getElementById('hero').scrollIntoView({behavior:'smooth'})
}
const SvgComponent = (props) => (
  <motion.svg
    transition={{duration:0.5, delay:0.2}} initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}}
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="#bcf"
    viewBox="0 0 24 24"
    onClick={scroll}
    {...props}
  >
    <path d="M3.012 10.981 3 11h2v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h2a1 1 0 0 0 .555-1.832l-9-6a1 1 0 0 0-1.11 0l-9 6a1 1 0 0 0-.277 1.387.98.98 0 0 0 .844.426ZM10 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h-4Z" />
  </motion.svg>
)
export default SvgComponent

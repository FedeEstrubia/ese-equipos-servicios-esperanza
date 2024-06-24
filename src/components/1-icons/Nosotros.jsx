import {motion} from 'framer-motion'
const scroll = () => {
  console.log('Clickaste el Boton')
  document.getElementById('card').scrollIntoView({behavior:'smooth'})
}
const SvgComponent = (props) => (
  <motion.svg
  transition={{duration:0.5, delay:0.4}} initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}}
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 28 28"
    onClick={scroll}
    {...props}
  >
    <title>{"ic_fluent_people_community_28_filled"}</title>
    <path
      fill="#bcf"
      fillRule="nonzero"
      d="M17.75 18c.966 0 1.75.784 1.75 1.75v2.002l-.008.108c-.31 2.127-2.22 3.149-5.425 3.149-3.193 0-5.134-1.01-5.553-3.112L8.5 21.75v-2c0-.966.784-1.75 1.75-1.75h7.5Zm.494-6h6.006c.966 0 1.75.784 1.75 1.75v2.002l-.008.108c-.31 2.127-2.22 3.149-5.425 3.149l-.168-.002a2.752 2.752 0 0 0-2.47-2.001L17.75 17h-.922a4.491 4.491 0 0 0 1.672-3.5c0-.526-.09-1.03-.256-1.5ZM3.75 12h6.006c-.166.47-.256.974-.256 1.5 0 1.33.578 2.527 1.496 3.35l.176.15h-.922c-1.262 0-2.326.85-2.65 2.01l-.033-.001c-3.193 0-5.134-1.01-5.553-3.112L2 15.75v-2c0-.966.784-1.75 1.75-1.75ZM14 10a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm6.5-6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm-13 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
    />
  </motion.svg>
)
export default SvgComponent

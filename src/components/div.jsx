import {motion} from 'framer-motion'
export default function Div(){
    return(
        <motion.div initial={{scale:0}} transition={{duration:0.5}} whileHover={{y:-50, scale:1.2}} whileTap={{scale:3, duration:0.2}} animate={{scale:1}} className="flex flex-col w-1/2 h-1/2 bg-gray-500 border-4 border-blue-500 rounded-2xl p-5">
            <h1 className="text-blue-200">Hola soy un titulo</h1>
            <p className="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex possimus doloribus, mollitia omnis fuga sequi laboriosam facilis iste similique nihil. Exercitationem, alias? Aliquid minus nemo facilis aut voluptates repudiandae?</p>
        </motion.div>
    )
}
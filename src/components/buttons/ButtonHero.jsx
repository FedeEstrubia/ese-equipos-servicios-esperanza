import { Button } from "@nextui-org/react";
import {motion} from 'framer-motion'

const buttonhero = ({onClick, text, color, variant}) => {
  return (
    <motion.div initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:1.4, ease:'easeInOut', type:'spring'}} className="flex sm:hidden absolute items-end h-screen p-36">
      {/* variant="shadow" | variant="solid" | variant="faded" | variant="bordered" | variant="light" | variant="flat" | variant="ghost" */}
      <Button onClick={onClick} color={color} variant={variant} id="button-hero">
        {text}
      </Button>
    </motion.div>
  );
}

export default buttonhero;
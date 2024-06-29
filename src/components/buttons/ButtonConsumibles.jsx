import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <Popover
      showArrow
      backdrop="transparent"
      placement="right"
      classNames={{
        base: [
          // arrow color
          "before:bg-gray-600",
        ],
        content: ["border border-gray-600", "bg-fondo"],
      }}
    >
      <PopoverTrigger>
        <Button className="text-2xl p-[5%] w-[16vw] bg-claro">
          Consumibles
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {() => (
          <div className="p-1 box-border flex flex-col justify-center items-end  bg-fondo bg-opacity-80 rounded-xl">
            <motion.h1  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:1, delay:0, type:'spring'}} className="text-center w-[17vw] p-4 text-[300%]">
              Consumibles
            </motion.h1>
            <div className=" p-4 box-border flex flex-wrap justify-center items-end h-[40vh] w-[17vw] opacity-100 rounded-xl">
              <motion.div  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.2, delay:0.22, type:'easeInOut'}} className="relative flex justify-center items-end w-[45%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[85%] h-[85%] mb-[-30%] rounded-[100%] border-[3px] animate-pulse border-blue-600 z-50"
                  src="/Ellipse 1.png"
                  alt=""
                />
              </motion.div>
              <motion.div initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.2, delay:0.15, type:'easeInOut'}}  className="relative flex justify-end items-start w-[45%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[85%] h-[85%] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 2.png"
                  alt=""
                />
              </motion.div>
              <motion.div  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.2, delay:0.27, type:'easeInOut'}} className="relative flex justify-start items-end w-[45%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[85%] h-[85%] ml-[-15%] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 3.png"
                  alt=""
                />
              </motion.div>
              <motion.div initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.2, delay:0.05, type:'easeInOut'}} className="relative flex justify-end items-end w-[45%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[95%] h-[95%] mb-[20%] mr-[8%] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 4.png"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

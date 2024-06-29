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
        <Button className="text-2xl p-[5%] w-[16vw] bg-claro">Repuestos</Button>
      </PopoverTrigger>
      <PopoverContent>
        {() => (
          <div className="p-1 gap-6 box-border flex flex-col justify-center items-end bg-fondo bg-opacity-80 rounded-xl">
            <motion.h1  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:1, delay:0, type:'spring'}} className="text-center p-4 w-[16vw] text-[300%]">
              Repuestos
            </motion.h1>
            <div className="mb-[-10%] box-border flex flex-wrap justify-center items-center h-[40vh] w-[16vw] opacity-100 rounded-xl">
              <motion.div initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.2, delay:0.1, type:'easeInOut'}}  className="relative flex justify-center items-center w-[45%] mb-[-45%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] rounded-[100%] border-[3px] animate-pulse border-blue-600 z-50"
                  src="/Ellipse 1.png"
                  alt=""
                />
              </motion.div>
              <motion.div  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.2, delay:0.2, type:'easeInOut'}} className="relative flex justify-center items-center w-[45%] mt-[-45%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 2.png"
                  alt=""
                />
              </motion.div>
              {/* OCULTOS */}
              <div className="hidden relative flex justify-start items-end w-[45%] h-[31%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[72px] h-[72px] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 3.png"
                  alt=""
                />
              </div>
              <div className="hidden relative flex justify-start items-start w-[45%] h-[31%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[84px] h-[84px] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 4.png"
                  alt=""
                />
              </div>
              <div className="hidden relative flex justify-center items-start w-[45%] h-[31%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[58px] h-[58px] ml-2 mt-4 rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 5.png"
                  alt=""
                />
              </div>
              <div className="hidden relative flex justify-end items-center w-[45%] h-[31%] ">
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w'12 h-12 mb-32 mr-[-4px] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 2.png"
                  alt=""
                />
                <img
                  className="w-[68px] h-[68px] mt-2 rounded-[100%] border-[3px] border-blue-600 animate-spin-slow"
                  src="/Ellipse 6.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

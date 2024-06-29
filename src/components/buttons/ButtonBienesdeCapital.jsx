import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import {  motion } from "framer-motion";

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
          Bienes de Capital
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {() => (
          <div className="p-1 gap-6 box-border flex flex-col justify-center items-end bg-fondo bg-opacity-80 rounded-xl">
            <motion.h1
              initial={{ scale:0 }}
              whileInView={{ scale:1}}
              transition={{ duration: 1, type:'spring' }}
              className="pt-6 pb-6 text-center text-[300%] w-[18vw]"
            >
              Bienes de Capital
            </motion.h1>
            <div className=" box-border flex flex-wrap justify-center items-end h-[45vh] w-[18vw] mb-[5%] opacity-100 rounded-xl">
              <motion.div
                initial={{ scale: 0 , opacity:0}}
                whileInView={{ scale: 1 , opacity:1}}
                transition={{ duration: 0.2, delay: 0.35, type:'easeInOut'}}
                className="relative flex justify-end items-end w-[45%] "
              >
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[70%] h-[70%] rounded-[100%] border-[3px] animate-pulse border-blue-600 z-50"
                  src="/Ellipse 1.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 , opacity:0}}
                whileInView={{ scale: 1 , opacity:1}}
                transition={{ duration: 0.2, delay: 0.39,  type:'easeInOut'}}
                className="relative flex justify-end items-start w-[45%]"
              >
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[70%] h-[70%] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 2.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 , opacity:0}}
                whileInView={{ scale: 1 , opacity:1}}
                transition={{ duration: 0.2, delay: 0.28, type:'easeInOut'}}
                className="relative flex justify-start items-end w-[45%]"
              >
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[70%] h-[70%] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 3.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 , opacity:0}}
                whileInView={{ scale: 1 , opacity:1}}
                transition={{ duration: 0.2, delay: 0.05 ,type:'easeInOut'}}
                className="relative flex justify-start items-start w-[45%]"
              >
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[90%] h-[90%] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 4.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 , opacity:0}}
                whileInView={{ scale: 1 , opacity:1}}
                transition={{ duration: 0.2, delay: 0.18, type:'easeInOut'}}
                className="relative flex justify-center items-center w-[45%]"
              >
                <img
                  className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[70%] h-[70%] rounded-[100%] border-[3px] border-blue-600 animate-pulse"
                  src="/Ellipse 6.png"
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

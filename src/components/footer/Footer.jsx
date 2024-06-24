import YoutubeIcon from "../1-icons/YoutubeB&W";
import FacebookIcon from "../1-icons/FacebookB&W";
import InstagramIcon from "../1-icons/InstagramB&W1";
import Terminos from "../derechos/Terminos";
import Politicas from "../derechos/Politicas";
import { motion } from "framer-motion";
import Mail from "../1-icons/MailB&W";
import Phone from "../1-icons/PhoneCopy";
import Location from "../1-icons/LocationB&W";

export default function Footer() {
  return (
    <footer className="overflow-hidden bottom flex flex-col items-center justify-center w-screen h-1/6 bg-[#000640] gap-1 z-30">
      <img
        className="absolute w-[300px] mb-6 opacity-[5%] z-0"
        src="../public/ESE-fondo.png"
        alt="Logo Footer"
      />

      {/* Info Empresa */}
      <div className="flex flex-col w-full z-30">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center">
            <div className="flex overflow-hidden justify-center items-center w-[20px] h-[20px]">
              <Phone />
            </div>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ duration: 0.15 }}
              href="tel:+543496423085"
              className="text-[#ccc] p-[0.4rem]"
            >
              +54 3496-423085
            </motion.a>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex overflow-hidden justify-center items-center w-[20px] h-[20px]">
              <Mail />
            </div>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ duration: 0.15 }}
              href="mailto:equiposyserviciosventas@gmail.com?subject=Buenos%20Diass!!&body=Quiero%20comprarles%20todoo!!"
              className="text-[#ccc] p-[0.4rem]"
            >
              equiposyserviciosventas@gmail.com
            </motion.a>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex overflow-hidden justify-center items-center w-[20px] h-[20px]">
              <Location />
            </div>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ duration: 0.15 }}
              href="https://www.google.com/maps?q=kreder+3350,+esperanza,+santa+fe,+argentina"
              className="text-[#ccc] p-[0.4rem]"
            >
              Kreder 3350, Esperanza , Santa Fe , Arg
            </motion.a>
          </div>
        </div>

        {/* Social Networks */}
        <div className="social-networks-container flex w-full h-full justify-center items-center z-20">
          <div className="social-networks flex justify-evenly items-center pt-4 pb-2 mt-1 w-[70%] h-2/3 border-t-1 z-20">
            <a href="https://www.facebook.com">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex justify-center items-center w-10 h-10 overflow-hidden"
              >
                <FacebookIcon />
              </motion.div>
            </a>
            <a href="https://www.instagram.com">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex justify-center items-center w-10 h-10 overflow-hidden"
              >
                <InstagramIcon />
              </motion.div>
            </a>
            <a href="https://www.youtube.com">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex justify-center items-center w-10 h-10 overflow-hidden"
              >
                <YoutubeIcon />
              </motion.div>
            </a>
          </div>
        </div>
      </div>

      {/* Terminos y Condiciones | Politicas de Privcidad CodeMax */}
      <div className="flex mt-2 pt-2 border-t-1">
        <Terminos />
        <Politicas />
      </div>

      <div className="derechos flex flex-row justify-center items-center h-2/5 pb-2 pt-2">
        <p className="text-[#ccc] text-base font-semibold">
          Desarrollado por&nbsp;
        </p>
        <motion.p
          whileHover={{ scale: 0.98, y: -1 }}
          className="cursor-pointer text-[#08f] text-lg font-semibold"
        >
          CodeMax
        </motion.p>
      </div>
    </footer>
  );
}

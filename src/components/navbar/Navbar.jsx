import InicioIcon from "../1-icons/Inicio";
import NosotrosIcon from "../1-icons/Nosotros";
import ContactoIcon from "../1-icons/Phone";
import ServiciosIcon from "../1-icons/Maquina";
import LogoESE from "../1-icons/LogoESEFondo";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbarid");
      const infoSection = document.getElementById("info");

      if (window.scrollY > infoSection.offsetHeight - navbar.offsetHeight) {
        navbar.classList.add("bg-opacity-40");
        navbar.classList.add("backdrop-blur");
        navbar.classList.remove("bg-opacity-0");
      } else {
        navbar.classList.add("bg-opacity-0");
        navbar.classList.remove("bg-opacity-40");
        navbar.classList.remove("backdrop-blur");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      id="navbarid"
      className="flex flex-row fixed top-0 justify-between rounded-b-[10vw] items-center w-[100%] h-16 bg-[#000630] bg-opacity-0 z-50"
    >
      <div className="flex w-1/4 justify-center items-center">
        <LogoESE />
      </div>
      <div className="flex sm:hidden w-1/2 h-full justify-evenly items-center">
        <InicioIcon />
        <ServiciosIcon />
        <NosotrosIcon />
        <ContactoIcon />
      </div>
      <div className="hidden sm:flex w-1/2 h-full justify-evenly items-center">
        <a className="cursor-pointer hover:scale-95">Inicio</a>
        <a className="cursor-pointer hover:scale-95">Sobre Nosotros</a>
        <a className="cursor-pointer hover:scale-95">Nuestro Equipo</a>
        <a className="cursor-pointer hover:scale-95">Productos y Servicios</a>
      </div>
      <div className="flex w-1/4 justify-center items-center">
        <div className="absolute w-[4%] h-[50%] animate-ping rounded-lg bg-celeste bg-opacity-50">
        </div>
          <Button className="bg-celeste text-claro font-medium text-base hover:border-claro hover:scale-95">
            Contactanos
          </Button>
      </div>
    </header>
  );
}
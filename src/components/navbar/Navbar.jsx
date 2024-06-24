import InicioIcon from "../1-icons/Inicio";
import NosotrosIcon from "../1-icons/Nosotros";
import ContactoIcon from "../1-icons/Phone";
import ServiciosIcon from "../1-icons/Maquina";
import MenuIcon from "../1-icons/Menu";
import LogoESE from "../1-icons/LogoESEFondo";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbarid");
      const infoSection = document.getElementById("info");

      if (window.scrollY > infoSection.offsetHeight - navbar.offsetHeight) {
        navbar.classList.add("bg-opacity-95");
        navbar.classList.remove("bg-opacity-0");
      } else {
        navbar.classList.add("bg-opacity-0");
        navbar.classList.remove("bg-opacity-95");
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
      className="flex flex-row fixed top-0 justify-between items-center w-screen h-16 bg-[#000630] bg-opacity-0 z-50"
    >
      <div className="flex w-1/4 justify-center items-center">
        <LogoESE />
      </div>
      <div className="flex w-1/2 h-full justify-evenly items-center">
        <InicioIcon />
        <ServiciosIcon />
        <NosotrosIcon />
        <ContactoIcon />
      </div>
      <div className="flex w-1/4 justify-center items-center">
        <MenuIcon className="ml-10" />
      </div>
    </header>
  );
}

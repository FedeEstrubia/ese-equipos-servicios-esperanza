import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  const phoneNumber = "3496460599";
  const message = "Hola buenos días queria hacerles una consulta!!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
  <div>
    <div className="fixed animate-ping w-[40px] h-[40px] bottom-0 right-0 m-[42px] bg-green-900 rounded-full z-40"></div>
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 right-0 m-8 z-50"
    >
      <FaWhatsapp className="z-50" size={60} style={{ color: "#25d366" }} />
      
    </a></div>
  );
}
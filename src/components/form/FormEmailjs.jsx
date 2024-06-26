import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Button, Textarea } from "@nextui-org/react";
import Modal from "react-modal";

export default function FormEmail() {
  const form = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2jf8fhk", "template_nfi61w7", form.current, {
        publicKey: "vxeT_Ss-Ic5p0ebQD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setModalIsOpen(true);
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.log("FAILED...", error.text);
        }
      );

    form.current.reset();
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Formulario Enviado"
        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"
      >
        <div className="flex flex-col items-center bg-[#002075] p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl text-[#ddd] mb-4 z-50">
            ¡Formulario Enviado!
          </h2>
          <p>
            Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
          </p>
          <Button className="w-1/4 mt-4" onClick={() => setModalIsOpen(false)}>
            Cerrar
          </Button>
        </div>
      </Modal>
      <form
        className="flex flex-col h-screen w-full gap-10 justify-center items-center"
        id="form"
        ref={form}
        onSubmit={sendEmail}
      >
        <h1 className="">Complete sus datos y nos contactaremos!!</h1>
        <div className="flex flex-row gap-4  w-full z-20 div-form-next-container justify-center items-center">
          <div className="flex flex-col gap-2 w-[70%] sm:w-[60%] pt-6 pb-6 items-center sm:items-end">
            <motion.div className="flex w-full flex-wrap items-end justify-center gap-4 sm:flex-col sm:items-center sm:w-2/3">
              <motion.div
                className="w-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                }}
              >
                <Input
                  key="outside"
                  type="text"
                  label="Nombre"
                  labelPlacement="inside"
                  name="user_name"
                />
              </motion.div>
              <motion.div
                className="w-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                }}
              >
                <Input
                  key="outside"
                  type="email"
                  label="Email"
                  labelPlacement="inside"
                  name="user_email"
                />
              </motion.div>
              <motion.div
                className="w-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                }}
              >
                <Input
                  key="outside"
                  type="text"
                  label="Establecimiento"
                  labelPlacement="inside"
                  name="user_establishment"
                />
              </motion.div>
              <motion.div
                className="w-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                }}
              >
                <Input
                  key="outside"
                  type="text"
                  label="Localidad"
                  labelPlacement="inside"
                  name="user_location"
                />
              </motion.div>

              <motion.div
                className="w-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                }}
              >
                <Textarea
                  variant="faded"
                  label="Mensaje"
                  placeholder="Consultanos lo que necesites!!"
                  className="text-black"
                  name="message"
                />
              </motion.div>
              <Button
                type="submit"
                color={"primary"}
                className="w-32 sm:w-1/3 sm:mt-4"
              >
                Enviar
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="hidden sm:flex sm:w-1/2 justify-evenly"
          >
            <img
              src="/fondo-info-prueba.jpg"
              alt="Imagen Formulario"
              className="shadow-xl w-[90%] rounded-3xl mb-16"
            />
          </motion.div>
        </div>
      </form>
    </>
  );
}

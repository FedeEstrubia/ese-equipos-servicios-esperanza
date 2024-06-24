import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="h-[1rem] bg-[#000640] text-[#ccc] font-comic-neue font-bold">
        Términos y Condiciones
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "max-h-[70vh] py-6 overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#051035] text-[#acf] items-center",
          header: "border-b-[1px] border-[#292f46] w-full items-center",
          footer: "border-t-[1px] border-[#292f46] justify-center w-full",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Términos y Condiciones
              </ModalHeader>
              <ModalBody>
                <p className=" text-sm block text-center text-[#bce]">
                  Estos términos y condiciones rigen el uso de nuestro sitio web
                  y los servicios ofrecidos por CodeMax. Al acceder y utilizar
                  nuestro sitio web, usted acepta cumplir con estos términos y
                  condiciones.
                </p>

                <ol className="list-decimal list-inside">
                  <li className="font-bold">Uso del sitio web</li>
                  <br />
                  <p className="text-sm block text-center  text-[#abd]">
                    Usted se compromete a utilizar nuestro sitio web de manera
                    legal y respetuosa. No puede utilizar el sitio para realizar
                    actividades fraudulentas o ilegales.
                  </p>
                  <br />
                  <li className="font-bold">Propiedad intelectual</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    Todo el contenido del sitio web, incluidos textos, imágenes,
                    logotipos y gráficos, es propiedad de CodeMax y está
                    protegido por las leyes de propiedad intelectual.
                  </p>
                  <br />
                  <li className="font-bold">Limitación de responsabilidad</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    No somos responsables de ningún daño directo, indirecto o
                    incidental que surja del uso de nuestro sitio web o
                    servicios.
                  </p>
                  <br />
                  <li className="font-bold">Enlaces a sitios de terceros</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    Nuestro sitio web puede contener enlaces a sitios web de
                    terceros. No somos responsables del contenido o las
                    prácticas de privacidad de esos sitios.
                  </p>
                  <br />
                  <li className="font-bold">Contacto</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    Si tiene alguna pregunta sobre estos términos y condiciones,
                    por favor contáctenos en:
                  </p>
                  <a className="block text-center mt-[0.5rem] text-[#08f]" href="">
                    support@codemax.com
                  </a>
                  <br />
                  <li className="font-bold">Cambios en los términos y condiciones</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    Nos reservamos el derecho de modificar estos términos y
                    condiciones en cualquier momento. Las modificaciones se
                    publicarán en esta página y serán efectivas inmediatamente
                    después de su publicación.
                  </p>
                  <br />
                  <p className="block text-center text-xs text-[#abd]">
                    Fecha de vigencia: 12 de junio de 2024
                  </p>
                </ol>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#06f] shadow-lg shadow-indigo-500/20 text-[#acf]"
                  onPress={onClose}
                >
                  Entendido
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
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
      <Button onPress={onOpen} className='h-[1rem] bg-[#000640] text-[#ccc] font-comic-neue font-bold'>
        Políticas de Privacidad
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "max-h-[70vh] py-6 overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#eee] dark:bg-[#051035] text-[#acf] items-center opacity-95",
          header: "border-b-[1px] border-[#292f46] w-full items-center",
          footer: "border-t-[1px] border-[#292f46] justify-center w-full",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Políticas de Privacidad
              </ModalHeader>
              <ModalBody>
                <p className=" text-sm block text-center text-[#bce]">
                  En CodeMax, estamos comprometidos a proteger y respetar su
                  privacidad. Esta política de privacidad explica cómo
                  recopilamos, usamos y protegemos su información personal
                  cuando utiliza nuestro sitio web.
                </p>

                <ol className="list-decimal list-inside">
                  <li className="font-bold">Información que recopilamos</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    Recopilamos información personal que usted nos proporciona,
                    como su nombre, dirección de correo electrónico y número de
                    teléfono cuando se suscribe a nuestro boletín, realiza un
                    pedido o se pone en contacto con nosotros.
                  </p>
                  <br />
                  <li className="font-bold">Uso de su información</li>
                  <p className="mt-[0.8rem] block text-[#abd]">Usamos su información para:</p>
                  <br />
                  <ul className="list-disc list-inside block text-medium">
                    <li className=" text-[#abd]">Proporcionar y mejorar nuestros servicios.</li>
                    <li className=" text-[#abd]">
                      Enviar comunicaciones promocionales y actualizaciones.
                    </li>
                    <li className=" text-[#abd]">
                      Responder a sus consultas y brindar soporte al cliente.
                    </li>
                  </ul>
                  <br />
                  <li className="font-bold">Compartir su información</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    No compartimos su información personal con terceros, excepto
                    cuando sea necesario para cumplir con la ley o proteger
                    nuestros derechos.
                  </p>
                  <br />
                  <li className="font-bold">Seguridad de la información</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    Implementamos medidas de seguridad adecuadas para proteger
                    su información contra el acceso no autorizado, la
                    alteración, divulgación o destrucción.
                  </p>
                  <br />
                  <li className="font-bold">Sus derechos</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    Usted tiene el derecho de acceder, corregir o eliminar su
                    información personal. Para ejercer estos derechos, póngase
                    en contacto con nosotros a través de nuestro correo
                    electrónico:
                    
                  </p><a className="block text-center mt-[0.5rem] text-[#08f]" href="https://mail.google.com/mail/u/2/#inbox">
                      codemax@codemax.com
                    </a>
                  <br />
                  <li className="font-bold">Cambios en esta política</li>
                  <br />
                  <p className="text-sm block text-center text-[#abd]">
                    Nos reservamos el derecho de actualizar esta política de
                    privacidad en cualquier momento. Publicaremos cualquier
                    cambio en esta página y actualizaremos la fecha de vigencia.
                  </p><br /><p className="block text-center text-xs text-[#abd]">Fecha de vigencia: 12 de junio de 2024</p>
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
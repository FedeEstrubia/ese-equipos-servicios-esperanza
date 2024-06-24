import { useForm } from "react-hook-form";
// importaciones de framerMotion
import { Input } from "@nextui-org/input";
import { Button, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function App() {
  // const placements = [
  //   /**Nombre */
  //   {
  //     key: "outside",
  //     type: "text",
  //     label: "Name",
  //     labelPlacement: "inside",
  //   },
  //   /**Email */
  //   {
  //     key: "outside",
  //     type: "email",
  //     label: "Email",
  //     labelPlacement: "inside",
  //   },
  //   /**Establecimiento */
  //   {
  //     key: "outside",
  //     type: "text",
  //     label: "Establecimiento",
  //     labelPlacement: "inside",
  //   },
  //   /**Localidad */
  //   {
  //     key: "outside",
  //     type: "text",
  //     label: "Localidad",
  //     labelPlacement: "inside",
  //   },
  // ];
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="flex flex-col h-screen w-full bg-gray-400 gap-10 justify-center items-center"
      id="form"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <h1 className="">Complete sus datos y nos contactaremos!!</h1>
      <div className="flex flex-col gap-4  w-full z-20 div-form-next-container items-center">
        <div className="flex flex-col gap-2 w-2/3 pt-6 pb-6 items-center">
          <motion.div className="flex w-full flex-wrap items-end justify-center md:flex-nowrap md:mb-0 gap-4">
            {/* {placements.map((placement, index) => (
              <Input
                key={index}
                type={placement.type}
                label={placement.label}
                labelPlacement={placement.labelPlacement}
                {...register(`${placement.label}`, { required: true })}
              />
            ))} */}

            <motion.div
              className="w-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            >
              <Input
                key="outside"
                type="text"
                label="Nombre"
                labelPlacement="inside"
                {...register(`Nombre`, { required: true })}
              />
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            >
              <Input
                key="outside"
                type="email"
                label="Email"
                labelPlacement="inside"
                {...register(`Email`, { required: true })}
              />
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            >
              <Input
                key="outside"
                type="text"
                label="Establecimiento"
                labelPlacement="inside"
                {...register(`Establecimiento`, { required: true })}
              />
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            >
              <Input
                key="outside"
                type="text"
                label="Localidad"
                labelPlacement="inside"
                {...register(`Localidad`, { required: true })}
              />
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            >
              <Textarea
                variant="faded"
                label="Mensaje"
                placeholder="Consultanos lo que necesites!!"
                description="Enter a concise description of your project."
                className="text-black"
                {...register(`Mensaje`, { required: true })}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut", type: "spring" }}
        className="mt-[-30px]"
      >
        <Button type="submit" color={"primary"} className="w-32">
          Enviar
        </Button>
      </motion.div>
    </form>
  );
}
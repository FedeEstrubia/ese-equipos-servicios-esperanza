import { Input } from "@nextui-org/react";
import {motion} from 'framer-motion'

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <motion.div whileHover={{scale:1.4}} transition={{duration:0.3}} className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            key="outside"
            type="email"
            label="Name"
            labelPlacement="outside"
          />
        </motion.div>
      </div>
    </div>
  );
}

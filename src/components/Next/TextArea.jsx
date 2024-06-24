import {Textarea} from "@nextui-org/react";

export default function App() {
  return (
    <Textarea
      variant="faded"
      label="Mensaje"
      placeholder="Consultanos lo que necesites!!"
      description="Enter a concise description of your project."
      className="max-w-xs text-black"
    />
  );
}

import ButtonBienesdeCapital from '../buttons/ButtonBienesdeCapital'
import ButtonConsumibles from '../buttons/ButtonConsumibles'
import ButtonRepuestos from '../buttons/ButtonRepuestos'


export default function Prueba2() {
  return (
    <div className="hidden sm:flex justify-center items-center w-screen h-[50vh]">
      <div className="flex flex-col gap-2 w-[30%] h-[100%] justify-center items-center">
      <ButtonBienesdeCapital />
      <ButtonConsumibles />
      <ButtonRepuestos />
     
      </div>
    </div>
  );
}
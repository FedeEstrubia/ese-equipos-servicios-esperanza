import Hero from "../hero/Hero";
// import Team from "../team/Team";
// import Form from "../form/Form";
import FormEmail from "../form/FormEmailjs";
import Info from "../info/Info";
import Card from "../cardFramerMotion/CardFramerMotion";
import WhatsappChat from '../whatsapp/WhatsappChat'

export default function Body() {
  return (
    <div className="w-screen relative flex flex-col justify-start items-center bg-fondo overflow-hidden">
      <WhatsappChat/>
      <Hero />
      <Info />
      <Card />
      {/* <Team /> */}
      <FormEmail />
      {/* <Form /> */}
    </div>
  );
}

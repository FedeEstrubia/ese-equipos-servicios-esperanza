import Button from "../buttons/ButtonHero";
export default function Info() {
  const scroll = () => {
    console.log("Clickaste el Boton");
    document.getElementById("card").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex flex-row justify-center w-screen h-screen z-20">
        <div
          id="info"
          className="h-screen sm:w-[55%] flex flex-col justify-center items-center gap-14 z-20"
        >
          <h1 className="m-0 p-0 text-[#eee] max-w-[70%]">
            Somos distribuidores Oficiales de deLaval
          </h1>
          <p className="m-0 p-0 text-[#ddd] w-2/3 font-medium">
            Nuestro trabajo es Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Tempora facere laboriosam consectetur obcaecati
            autem nemo dolorem, quibusdam quas mollitia laudantium nihil nisi,
            laborum qui? Placeat hic corrupti aspernatur nulla est.
          </p>
          <Button
            onClick={scroll}
            text={"Siguiente seccion"}
            color={"primary"}
            variant={"ghost"}
          />
        </div>
        <div className="hidden sm:flex items-center w-[45%] overflow-hidden">
          <img
            className="shadow-xl overflow-hidden h-[w-50%] w-[90%] rounded-3xl z-20 "
            src="/fondo-info-prueba.jpg"
            alt="Fondo de Info"
          />
        </div>
      </div>
    </>
  );
}

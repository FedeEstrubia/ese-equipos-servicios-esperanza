import Button from "../buttons/ButtonHero";
export default function Info() {
  const scroll = () => {
    console.log("Clickaste el Boton");
    document.getElementById("card").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* Distribuidores DeLaval */}
      <div className="flex flex-row justify-center items-center w-screen h-[70vh] z-20">
        <div
          id="info"
          className="h-screen sm:w-[55%] flex flex-col justify-center items-center gap-12 z-20"
        >
          <h1 className="m-0 p-0 text-claro max-w-[70%]">
            Distribuidores oficiales de{" "}
            <strong className="text-celeste text-4xl">DeLaval</strong>
          </h1>
          <p className="m-0 p-0 text-claro w-2/3 font-medium">
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
        <div className="hidden sm:flex sm:items-center sm:justify-start sm:w-[45%] sm:overflow-hidden">
          <img
            className="shadow-xl overflow-hidden h-[w-50%] w-[90%] rounded-3xl z-20 "
            src="/fondo-info-prueba.jpg"
            alt="Fondo de Info"
          />
        </div>
      </div>

      {/* Distribuidores Bauduco */}
      <div className="flex flex-row justify-center items-center w-screen h-[70vh] z-20">
        <div className="hidden sm:flex sm:items-center sm:justify-end sm:w-[45%] sm:overflow-hidden">
          <img
            className="shadow-xl overflow-hidden h-[w-50%] w-[90%] rounded-3xl z-20 "
            src="/fondo-info-prueba.jpg"
            alt="Fondo de Info"
          />
        </div>
        <div
          id="info"
          className="h-screen sm:w-[55%] flex flex-col justify-center items-center gap-12 z-20"
        >
          <h1 className="m-0 p-0 text-claro max-w-[70%]">
            Distribuidores oficiales de{" "}
            <strong className="text-red-600 text-4xl">Bauduco</strong>
          </h1>
          <p className="m-0 p-0 text-claro w-2/3 font-medium">
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
      </div>
    </>
  );
}

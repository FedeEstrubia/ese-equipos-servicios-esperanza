export default function Prueba() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-400">
      <div className=" p-1 box-border flex flex-wrap justify-center items-end w-[250px] h-[500px] bg-gray-900 bg-opacity-80 rounded-xl">
        <div className=" p-4 box-border flex flex-wrap justify-center items-center w-full h-[400px] opacity-100 rounded-xl">
          <div className="relative flex justify-end items-end w-[45%] h-[31%] ">
            <img className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[68px] h-[68px] rounded-[100%] border-[3px] animate-pulse border-blue-600 z-50" src="/Ellipse 1.png" alt="" />
          </div>
          <div className="relative flex justify-end items-start w-[45%] h-[31%] ">
            <img className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-16 h-16 rounded-[100%] border-[3px] border-blue-600 animate-pulse" src="/Ellipse 2.png" alt="" />
          </div>
          <div className="relative flex justify-start items-end w-[45%] h-[31%] ">
            <img className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[72px] h-[72px] rounded-[100%] border-[3px] border-blue-600 animate-pulse" src="/Ellipse 3.png" alt="" />
          </div>
          <div className="relative flex justify-start items-start w-[45%] h-[31%] ">
            <img className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[84px] h-[84px] rounded-[100%] border-[3px] border-blue-600 animate-pulse" src="/Ellipse 4.png" alt="" />
          </div>
          <div className="relative flex justify-center items-start w-[45%] h-[31%] ">
            <img className="transition-all duration-500 ease-in-out hover:scale-[1.2] w-[58px] h-[58px] ml-2 mt-4 rounded-[100%] border-[3px] border-blue-600 animate-pulse" src="/Ellipse 5.png" alt="" />
          </div>
          <div className="relative flex justify-end items-center w-[45%] h-[31%] ">
            <img className="transition-all duration-500 ease-in-out hover:scale-[1.2] w'12 h-12 mb-32 mr-[-4px] rounded-[100%] border-[3px] border-blue-600 animate-pulse" src="/Ellipse 2.png" alt="" />
            <img className="w-[68px] h-[68px] mt-2 rounded-[100%] border-[3px] border-blue-600 animate-spin-slow" src="/Ellipse 6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
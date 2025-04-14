// import { useEffect } from "react";

function RedirectPage() {
  // useEffect(() => {
  //   document.body.classList.add("redirect-page");
  //   return () => {
  //     document.body.classList.remove("redirect-page");
  //   };
  // }, []);

  // bg-[#f4f9fc]/70

  //text-gray-700

  // bg-gradient-to-r from-[#dfe6dd]/60 to-[#b8c6db]

  // bg-gradient-to-r from-[#66994a]/70 to-[#29478c]/90

  {/* <Link to="https://www.ieee.org/" className="hidden lg:block shrink-0 ">
          <img
            src="/assets/logo-ieee.svg"
            alt="IEEE Logo"
            className="h-8 w-auto object-contain center"
          />
        </Link> */}

  return (
    <div className="flex items-center justify-center px-4 py-8 lg:mt-30 md:mt-24 sm:mt-24 mt-4">
      <div className=" max-w-5xl w-full  bg-gradient-to-r from-[#66994a]/70 to-[#29478c]/90  rounded-2xl shadow-lg p-6 sm:p-14  text-center transition-opacity duration-1000 ease-in opacity-0 animate-fadeIn ">

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Bienvenido
        </h1>

        <p className="text-white text-lg sm:text-xl mb-8">
        Para acceder al registro de una conferencia, seleccione una de las opciones a continuación:
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center"> 

          <div className="flex-1 bg-[#dfeedf] p-6 rounded-xl shadow-md flex flex-col items-center text-center"> {/* PEPQA */}
          <div className="flex items-center mb-1">
          <img src="/assets/pepqa.png" alt="PEPQA Logo" className="h-10 sm:h-12 w-auto max-w-[120px] sm:max-w-none object-contain" />
          <h2 className="font-extrabold sm:text-1xl md:text-2xl lg:text-3xl  pl-4 text-[#66994a]"> PEPQA</h2>
          </div>
            <p className="text-[#69a132] mb-4 mt-3">
              Modelando la Red Moderna y Resiliente
            </p>
            <a href="https://pepqa.ieeecolcaribeconference.com/" target="_blank" rel="noopener noreferrer">
              <button className="hover:bg-[#6bc74f] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg tracking-wide w-full sm:w-auto py-2 px-5 rounded-md text-base sm:text-lg bg-[#66994a] text-[#fff] font-semibold ">
              Ir al registro
              </button>
            </a>
          </div>

          <div className="flex-1 bg-[#eaf6ff] p-6 rounded-xl shadow-md flex flex-col items-center text-center"> {/* TEMSCON */}
          <div className="mb-1 mt-1">
            <img src="/assets/logo-temscon.png" alt="TEMSCon Logo" className="h-10 sm:h-12 w-auto max-w-[120px] sm:max-w-none object-contain" />
          </div>
            <p className="text-[#4a699b] mb-4 mt-2">
              Innovación en Gestión Tecnológica y Empresarial
            </p>
            <a href="https://temscon.ieeecolcaribeconference.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#5c75a8] text-[#ffffff] font-semibold rounded-md hover:bg-[#c01d0f] text-lg  hover:text-white transition-all duration-300 shadow-md hover:shadow-lg tracking-wide py-2 px-5 ">
                Ir al registro
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedirectPage;

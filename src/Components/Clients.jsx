const Clients = () => {
  return (

      <div className="text-center space-y-10 text-white mx-6 my-36 md:pb-28">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold ">
          Our Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-lg w-[95%] lg:w-[85%] mx-auto rounded-xl bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white md:h-64 lg:h-80 rounded-xl bg-clip-border">
                <img src='./G&P.webp' className=" w-full h-full " />
              </div>
              <div className="p-6">
                <div className="text-center mb-2">
                  <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                    Gadget & Park
                  </p>

                </div>
              </div>
            </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-lg w-[95%] lg:w-[85%] mx-auto rounded-xl bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white md:h-64 lg:h-80 rounded-xl bg-clip-border">
                <img src='./WhatsApp Image 2024-12-05 at 6.05.27 PM.webp' className="w-full h-full" />
              </div>
              <div className="p-6">
                <div className="text-center mb-2">
                  <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                    RIVO
                  </p>

                </div>
              </div>
            </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-lg w-[95%] lg:w-[85%] mx-auto rounded-xl bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white md:h-64 lg:h-80 rounded-xl bg-clip-border">
                <img src='./NEUSIS NAME.png' className=" w-full h-full" />
              </div>
              <div className="p-6">
                <div className="text-center mb-2">
                  <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                  STUDIO NEUSIS
                  </p>

                </div>
              </div>
            </div>
        </div>
      </div>
  );
};

export default Clients;

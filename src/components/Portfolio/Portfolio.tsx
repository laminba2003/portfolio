const Portfolio = () => {
  return (
    <div className="relative flex flex-wrap justify-around w-full md:px-8 lg:px-24 py-28 bg-gray-50">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl">
          <img className="object-cover w-64 h-64" src="/Shopteamize.jpg" alt="Shopteamize" loading="lazy" />
          <a className="absolute top-0 flex flex-col items-center justify-center w-full h-full p-4 text-center bg-gray-700 bg-opacity-70 hover:bg-opacity-50">
            <h2 className="text-pink-500 font-inter">Shopteamize</h2>
            <p className="text-purple-100 font-inter">
              E-commerce marketplace
              <br />➔ React ➔ Redux ➔ NextJS ➔ Braintree
            </p>
          </a>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <img className="object-cover w-64 h-64" src="/livefoot.jpg" alt="Livefoot" loading="lazy" />
          <a className="absolute top-0 flex flex-col items-center justify-center w-full h-full p-4 text-center bg-gray-700 bg-opacity-80 hover:bg-opacity-70">
            <h2 className="text-pink-500 font-inter">Livefoot</h2>
            <p className="text-purple-100 font-inter">
              Realtime football matches results
              <br />➔ React ➔ Redux ➔ GatbyJS ➔ TailwindCSS
            </p>
          </a>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <img className="object-cover w-64 h-64" src="/findpairs.jpg" alt="Find pairs" loading="lazy" />
          <a className="absolute top-0 flex flex-col items-center justify-center w-full h-full p-4 text-center bg-gray-700 bg-opacity-80 hover:bg-opacity-70">
            <h2 className="text-pink-500 font-inter">Find pairs</h2>
            <p className="text-purple-100 font-inter">
              Game of finding pairs
              <br />➔ React ➔ Redux ➔ NextJS ➔ Styled components
            </p>
          </a>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <img className="object-cover w-64 h-64" src="/ambiance studio.jpg" alt="Ambiance Studio" loading="lazy" />
          <a className="absolute top-0 flex flex-col items-center justify-center w-full h-full p-4 text-center bg-gray-700 bg-opacity-80 hover:bg-opacity-70">
            <h2 className="text-pink-500 font-inter">Ambiance Studio</h2>
            <p className="text-purple-100 font-inter">
              Online music studio
              <br />➔ React ➔ Redux ➔ Webaudio ➔ WebAssembly
            </p>
          </a>
        </div>
      </div>
      <h4 className="absolute left-0 mt-12 ml-20 text-6xl font-bold tracking-tighter text-pink-600 font-casual top-1">
        Port
      </h4>
      <h4 className="font-casual absolute right-0 mr-20 text-6xl font-bold tracking-tighter bottom-2 md:bottom-2.5 text-pink-500">
        folio
      </h4>
    </div>
  )
}

export default Portfolio

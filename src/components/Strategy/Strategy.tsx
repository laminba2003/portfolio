const Strategy = () => {
  return (
    <section className="strategy relative flex flex-wrap items-center justify-center overflow-hidden bg-gray-50 h-96">
      <div className="relative z-20 flex flex-wrap justify-around w-full max-w-4xl">
        <div className="w-full md:w-48 lg:w-64">
          <div className="relative mt-1 mb-4 md:mt-2 lg:mb-6">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1499914485622-a88fac536970?w=420"
              className="object-cover w-full h-16 md:w-48 md:h-48 lg:h-64 lg:w-64"
            />

            <div className="absolute bottom-0 left-0 flex items-start justify-center w-full">
              <div className="w-1 h-16 -mb-6 bg-gray-900"></div>
            </div>
          </div>

          <h3 className="text-center uppercase lg:-mt-2.5 text-purple-600 font-extrabold">PROBLEM SOLVING</h3>
        </div>

        <div className="w-full md:w-48 lg:w-64 md:mt-16">
          <div className="relative mb-4">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1462078563783-650e23af549d?w=420"
              className="object-cover w-full h-16 md:w-48 md:h-48 lg:h-64 lg:w-64"
            />

            <div className="absolute bottom-0 left-0 flex items-start justify-center w-full">
              <div className="w-1 h-16 -mb-6 bg-gray-900 md:-mb-3"></div>
            </div>
          </div>

          <h3 className="font-sans font-extrabold text-center text-pink-600 uppercase md:-mt-3.5">DESIGN SKILLS</h3>
        </div>

        <div className="w-full md:hidden">
          <div className="relative mb-4">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1581291518570-03a26006fb21?w=480"
              className="object-cover w-full h-16"
            />

            <div className="absolute bottom-0 left-0 flex items-start justify-center w-full">
              <div className="w-1 h-16 -mb-6 bg-gray-900"></div>
            </div>
          </div>

          <h3 className="font-sans font-extrabold text-center text-purple-600 uppercase">User interfaces</h3>
        </div>
      </div>

      <div className="absolute top-0 right-0 z-10 w-1/2 h-full -mr-20 bg-gray-300"></div>

      <div className="absolute bottom-0 right-0 z-10 w-1 h-64 mr-5 bg-gray-100"></div>
    </section>
  )
}

export default Strategy

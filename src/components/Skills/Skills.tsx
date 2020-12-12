const Skills = () => {
  return (
    <div className="px-4 pt-1.5 md:pt-2 md:mx-4 lg:mx-auto lg:w-2/3 mx-auto my-8 font-inter">
      <h2 className="font-extrabold text-pink-600 uppercase">➔ Top skills</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="px-6 pt-4 pb-8 mb-3 md:mb-2.5 bg-purple-700">
          <h3 className="text-pink-400 font-inter">Programming languages</h3>
          <span className="block pt-1 text-gray-300 text-label-info">Javascript</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-95pct"></div>
          <span className="text-gray-300 text-label-info">Typescript</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-90pct"></div>
          <span className="text-gray-300 text-label-info">PHP</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-80pct"></div>
          <span className="text-gray-300 text-label-info">Java</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-80pct"></div>
          <span className="text-gray-300 text-label-info">Rust/WebAssembly</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-50pct"></div>
        </div>
        <div className="px-4 pt-4 pb-8 mb-2.5 bg-purple-700">
          <h3 className="text-pink-400 font-inter">Libraries & Frameworks</h3>
          <span className="block pt-1 text-gray-300 text-label-info">React</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-95pct"></div>
          <span className="text-gray-300 text-label-info">NodeJS</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-90pct"></div>
          <span className="text-gray-300 text-label-info">VueJS</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-90pct"></div>
          <span className="text-gray-300 text-label-info">Laravel</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-80pct"></div>
          <span className="text-gray-300 text-label-info">TailwindCSS</span>
          <div className="h-1 mb-3 bg-yellow-200 rounded-full w-90pct"></div>
        </div>
      </div>
      <div className="w-full px-4 pt-1 text-lg bg-purple-700">
        <span className="text-pink-500 block mt-0.5 font-bold font-inter text-center md:text-left">Tools</span>
        <p className="flex flex-wrap justify-center gap-1 pb-6 -mt-2 text-gray-300 md:justify-start">
          <span className="text-pink-500">➔</span> Git
          <span className="text-pink-500">➔</span> Webpack
          <span className="text-pink-500">➔</span> Electron
          <span className="text-pink-500">➔</span> Docker
          <span className="text-pink-500">➔</span> AWS
          <span className="text-pink-500">➔</span> Netlify
          <span className="text-pink-500">➔</span> VSCode
          <span className="text-pink-500">➔</span> Agile
          <span className="text-pink-500">➔</span> SCRUM
        </p>
      </div>
    </div>
  )
}

export default Skills

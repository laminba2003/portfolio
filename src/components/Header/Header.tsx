import Links from '@components/Links/Links'

const Header = () => {
  return (
    <header className="relative flex justify-between w-full">
      <div className="px-4 py-4 pb-64 bg-gray-900 md:pb-72 lg:w-64">
        <h1 className="text-3xl leading-tight font-casual text-gray-50">
          <span className="inline-block text-white bg-purple-400 rounded-full font-inter">{'</>'}</span>{' '}
          <span className="font-slant-1">Hi</span>, I am Babacar
        </h1>
        <p className="text-gray-100 font-inter">
          <span className="font-slant-1 font-recursive">Passionate</span> and ambitious
          <br />
          <span className="font-slant-1 font-recursive">software</span> engineer from
          <span className="font-slant-1 font-recursive"> Dakar, Senegal.</span>
          <br />
          <span className="font-slant-1 font-recursive">loving</span> web technologies and delivers scalable solutions.
        </p>
      </div>
      <img
        src="/cover.jpg"
        className="absolute object-cover w-full h-40 filter-gray md:h-48 lg:h-64 top-2/3 md:left-24 md:top-48 lg:top-40 md:w-80 lg:w-2/3"
      />
      <div className="flex-grow bg-white">
        <Links header={true} />
      </div>
    </header>
  )
}

export default Header

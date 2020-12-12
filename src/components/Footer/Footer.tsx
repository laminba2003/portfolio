import { ReactNode } from 'react'

import Links from '@components/Links/Links'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 text-center text-gray-500 bg-gray-900 py-7 md:py-5 lg:py-6">
      <Links />
      <p>
        &copy; Copyright {new Date().getFullYear()} <br /> Built with
        <br />
        Typescript, React, NextJS and TailwindCSS
      </p>
    </div>
  )
}

export default Footer

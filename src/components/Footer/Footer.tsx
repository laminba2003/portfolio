import { ReactNode } from 'react'

import Links from '@components/Links/Links'

const Footer = () => {
  return (
    <div
      id="space"
      className="flex flex-col w-full px-4 text-center text-gray-400 py-7 md:py-5 lg:py-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Links />
      <p className="text-sm">
        &copy; Copyright {new Date().getFullYear()} <br /> Built with
        <br />
        Typescript, React, NextJS and TailwindCSS
      </p>
    </div>
  )
}

export default Footer

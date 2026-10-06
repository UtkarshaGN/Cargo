import React from 'react'
import { Link } from 'react-router'
import { FaCar } from "react-icons/fa";
export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
         <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-950">
           <FaCar className="shrink-0" aria-hidden="true" /> CarGo
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-gray-700">
          <Link to="/cars" className="transition-colors hover:text-teal-600">All Cars</Link>
          <Link to="/about" className="transition-colors hover:text-teal-600">About Us</Link>
          <Link to="/contact" className="transition-colors hover:text-teal-600">Contact</Link>
          <Link to="/profile" className="transition-colors hover:text-teal-600">My account</Link>
          <Link to="/login" className="transition-colors hover:text-teal-600">Login</Link>
          <Link to="/register" className="rounded-md bg-teal-600 px-4 py-2 text-white transition-colors hover:bg-teal-700">Register</Link>
        </div>
      </nav>
    </header>
  )
}

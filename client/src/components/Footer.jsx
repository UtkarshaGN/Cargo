import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl font-semibold text-teal-500">Rent a vehicle with evolve and experience the difference.</h2>
          <p className="mt-3 text-sm text-white">Cargo is car hire reimagined for today’s traveller - bold, modern, and built on smart tech. From booking to drop-off, every step is designed to be seamless, intuitive and stress-free.</p>
        </div>
        <div>
          <h3 className="font-semibold text-teal-500">Explore</h3>
          <p className="mt-3 text-sm text-white">Home</p>
          <p className="mt-2 text-sm text-white">About Cargo</p>
           <p className="mt-2 text-sm text-white">All Cars</p>
        </div>
        <div>
          <h3 className="font-semibold text-teal-500">Support</h3>
          <p className="mt-3 text-sm text-white">Contact us</p>
          <p className="mt-2 text-sm text-white">Help center</p>
        </div>
        <div>
          <h3 className="font-semibold text-teal-500">Get in touch</h3>
          <p className="mt-3 text-sm text-white">hello@utk.com</p>
          <p className="mt-3 text-sm text-white">Privacy Policy</p>
          <p className="mt-3 text-sm text-white">Terms & Conditions</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-gray-800 pt-5 text-sm text-gray-400">
        All rights reserved.
      </div>
    </footer>
  )
}

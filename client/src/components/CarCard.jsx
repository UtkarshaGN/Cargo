import React from 'react'
import {Link} from 'react-router'


export default function CarCard({car}) {
  return (
    <>
     <Link to ={`/cars/${car?._id}`} className="group block h-full overflow-hidden border border-[#dce2dc] bg-white text-[#17211c] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">
     <div className="h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#e8ede8]">
          <img 
          src={`data:image/png;base64,${car?.image}`} 
          alt="car images" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
          
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#101713]/20 to-transparent" />
        </div>
        <div className="flex min-h-[142px] flex-col px-5 py-5 sm:px-6">
            <h3 className="text-xl font-semibold leading-tight tracking-tight text-[#17211c] transition-colors group-hover:text-teal-800">{car?.name}</h3>
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#65716a]">{car?.about}</p>
        </div>
     </div>
     </Link>
    </>
  )
}

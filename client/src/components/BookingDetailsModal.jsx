import React from 'react'

export default function BookingDetailsModal({BookingDetailsModal, setBookingDetailsModal}) {
  return (
    <>
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
      <section
        aria-labelledby="booking-modal-title"
        aria-modal="true"
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        role="dialog"
      >
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5 sm:px-8">
          <div>
            
            <h2 id="booking-modal-title" className="mt-1 text-2xl font-semibold text-slate-900">
               Your Booking details
            </h2>
            <p className="mt-1 text-sm text-slate-500">Choose your dates and review the total.</p>
          </div>
          <button onClick={()=>setBookingDetailsModal(false)}
            aria-label="Close booking modal"
            className="rounded-full p-2 text-xl leading-none text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            type="button"
          >
            &times;
          </button>
        </div>

        <div className="space-y-6 px-6 py-6 sm:px-8">
          <p>Journey date</p>
          <p>return date</p>
          <p>price</p>
          <p>totalprice</p>
          <p>status</p>

        

         
        </div>
      </section>
    </div>
      
    </>
  )
}

import React from 'react'

export default function BookingModel() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
      <section
        aria-labelledby="booking-modal-title"
        aria-modal="true"
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        role="dialog"
      >
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Your reservation
            </p>
            <h2 id="booking-modal-title" className="mt-1 text-2xl font-semibold text-slate-900">
              Booking details
            </h2>
            <p className="mt-1 text-sm text-slate-500">Choose your dates and review the total.</p>
          </div>
          <button
            aria-label="Close booking modal"
            className="rounded-full p-2 text-xl leading-none text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            type="button"
          >
            &times;
          </button>
        </div>

        <div className="space-y-6 px-6 py-6 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Pick-up date</span>
              <input
                className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15"
                type="date"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Return date</span>
              <input
                className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15"
                type="date"
              />
            </label>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Price per day</span>
              <span className="font-medium text-slate-900">$89.00</span>
            </div>
            <div className="my-4 border-t border-dashed border-slate-200" />
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900">Total</span>
              <span className="text-xl font-semibold text-slate-900">$178.00</span>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              type="button"
            >
              Close
            </button>
            <button
              className="rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
              type="button"
            >
              Save changes
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

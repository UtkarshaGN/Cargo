import React from 'react'

export default function EditModal({
  editModal,
  setEditModal,
  name,
  setName,
  phone,
  setPhone,
  password,
  setPassword,
  handleUpdate
}) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">

        <section
          aria-labelledby="booking-modal-title"
          aria-modal="true"
          className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
          role="dialog"
        >

          {/* Header */}
          <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5 sm:px-8">

            <h2
              id="booking-modal-title"
              className="mt-1 text-2xl font-semibold text-slate-900"
            >
              Manage your details
            </h2>

            <button
              onClick={() => setEditModal(false)}
              aria-label="Close booking modal"
              className="rounded-full p-2 text-xl leading-none text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              type="button"
            >
              &times;
            </button>

          </div>

          {/* Form */}
          <div className="space-y-6 px-6 py-6 sm:px-8">

            <div className="grid gap-4 sm:grid-cols-2">

              {/* Name */}
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </span>

                <input
                  className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              {/* Phone */}
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Phone
                </span>

                <input
                  className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              {/* Password */}
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </span>

                <input
                  className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

              <button
                onClick={() => setEditModal(false)}
                className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                type="button"
              >
                Close
              </button>

              <button
                className="rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
                type="button"
                onClick={handleUpdate}
              >
                Update
              </button>

            </div>

          </div>
        </section>
      </div>
    </>
  )
}
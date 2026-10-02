import React from 'react'

export default function Contact() {
  return (
    <main className="bg-[#f4f5f1] text-[#171b19]">
      <section className="relative isolate flex min-h-[390px] items-end overflow-hidden bg-[#111715] text-white sm:min-h-[470px]">
        <img
          src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=2000&q=85"
          alt="A car waiting on an open road"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101614]/90 via-[#101614]/55 to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-24 sm:px-10 sm:pb-16 lg:px-12">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
            <span className="h-px w-9 bg-teal-200" /> We’re here to help
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Let’s talk cars.</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
            Questions, ideas, or ready to find your next drive? Send us a note.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Contact Cargo</p>
          <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Tell us what’s on your mind.</h2>
          <p className="mt-4 max-w-sm text-base leading-7 text-[#68716c]">
            Fill out the form and our team will be ready to help with your car search.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[#29322e]">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className="w-full border border-[#cbd2cd] bg-white px-4 py-3 text-[#171b19] outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[#29322e]">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full border border-[#cbd2cd] bg-white px-4 py-3 text-[#171b19] outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-topic" className="mb-2 block text-sm font-medium text-[#29322e]">What can we help with?</label>
            <select
              id="contact-topic"
              name="topic"
              defaultValue=""
              required
              className="w-full border border-[#cbd2cd] bg-white px-4 py-3 text-[#171b19] outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
            >
              <option value="" disabled>Select a topic</option>
              <option value="finding-a-car">Finding a car</option>
              <option value="account">My account</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[#29322e]">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full resize-y border border-[#cbd2cd] bg-white px-4 py-3 text-[#171b19] outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
            />
          </div>
          <button type="submit" className="inline-flex items-center gap-4 bg-[#15201c] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
            Send message <span aria-hidden="true">&#8594;</span>
          </button>
        </form>
      </section>
    </main>
  )
}

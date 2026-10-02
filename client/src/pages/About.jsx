import React from 'react'

export default function About() {
  return (
    <main className="overflow-hidden bg-[#f4f5f1] text-[#171b19]">
      <section className="relative isolate min-h-[560px] bg-[#111715] text-white lg:min-h-[620px]">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
          alt="A classic sports car on an open road"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101614]/95 via-[#101614]/75 to-[#101614]/15" />
        <div className="mx-auto flex min-h-[560px] max-w-7xl items-end px-6 pb-16 pt-24 sm:px-10 lg:min-h-[620px] lg:items-center lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
              <span className="h-px w-10 bg-teal-300" /> The Cargo story
            </p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              The right car changes everything.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
              We make finding your next car feel less like a chore and more like the start of somewhere new.
            </p>
            <a href="#our-approach" className="mt-9 inline-flex items-center gap-3 border-b border-teal-300 pb-2 text-sm font-semibold text-white transition-colors hover:text-teal-200">
              Get to know us <span aria-hidden="true">&#8595;</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-7 right-8 hidden text-xs font-medium uppercase tracking-[0.18em] text-white/70 sm:block lg:right-12">
          Find your kind of drive
        </div>
      </section>

      <section id="our-approach" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Why Cargo</p>
          <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Car shopping, with the human part put back in.
          </h2>
        </div>
        <div className="max-w-2xl lg:pt-2">
          <p className="text-lg leading-8 text-[#434b47]">
            A car is more than a listing and a price. It is the school run, the long way home, the weekend you have been planning. Cargo brings the details together so you can choose with confidence and get on with what comes next.
          </p>
          <p className="mt-5 text-base leading-7 text-[#68716c]">
            We believe a better car-buying experience starts with clear information, a thoughtful range, and people who make the process feel straightforward from the first search to the handover.
          </p>
        </div>
      </section>

      <section className="border-y border-[#dce1dc] bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 sm:grid-cols-3 sm:px-10 lg:px-12">
          <div className="border-b border-[#dce1dc] py-9 sm:border-b-0 sm:border-r sm:py-12 sm:pr-8">
            <p className="text-4xl font-semibold tracking-tight">01</p>
            <h3 className="mt-5 text-lg font-semibold">Choose with clarity</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-[#68716c]">Useful details up front, so you can compare cars without the guesswork.</p>
          </div>
          <div className="border-b border-[#dce1dc] py-9 sm:border-b-0 sm:border-r sm:px-8 sm:py-12">
            <p className="text-4xl font-semibold tracking-tight">02</p>
            <h3 className="mt-5 text-lg font-semibold">Find your fit</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-[#68716c]">A considered range for different roads, routines, and next chapters.</p>
          </div>
          <div className="py-9 sm:py-12 sm:pl-8">
            <p className="text-4xl font-semibold tracking-tight">03</p>
            <h3 className="mt-5 text-lg font-semibold">Enjoy the journey</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-[#68716c]">A simpler path from the first look to the moment you turn the key.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-10 md:flex-row md:items-end md:justify-between lg:px-12 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Your next chapter</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Let’s find the car that takes you there.</h2>
        </div>
        <a href="/cars" className="inline-flex w-fit items-center gap-3 rounded-sm bg-[#15201c] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700">
          Explore all cars <span aria-hidden="true">&#8594;</span>
        </a>
      </section>
    </main>
  )
}

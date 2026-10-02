import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f4f5f1] text-[#171b19]">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-14 pt-12 sm:px-10 md:pt-16 lg:min-h-[610px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-12 lg:py-16">
        <div className="relative z-10 max-w-xl">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
            <span className="h-px w-9 bg-teal-700" /> Find your kind of drive
          </p>
          <h1 className="text-6xl font-semibold leading-[0.9] tracking-tight sm:text-7xl lg:text-[88px]">
            Roads look
            <br />
            good <span className="text-teal-700">from</span>
            <br />
            here<span className="text-teal-700">.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#59625d] sm:text-lg">
            Meet the car that makes the everyday feel like a little more. Your next chapter starts with a better search.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link to="/cars" className="inline-flex items-center gap-4 bg-[#15201c] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-teal-800">
              Browse all cars <span aria-hidden="true">&#8594;</span>
            </Link>
            <Link to="/about" className="text-sm font-semibold text-[#26312c] underline decoration-[#9aa39e] underline-offset-4 transition-colors hover:text-teal-800">
              Why Cargo
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-[#d9ded9] pt-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-sm font-semibold text-white">C</span>
            <p className="text-sm text-[#59625d]">A more considered way to find your next car.</p>
          </div>
        </div>

        <div className="relative min-h-[360px] sm:min-h-[470px] lg:min-h-[520px]">
          <div className="absolute -right-16 top-8 hidden h-[82%] w-[72%] bg-[#c4e7d9] sm:block" />
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=85"
            alt="A silver sports car ready for the open road"
            className="absolute inset-0 h-full w-full object-cover object-center sm:inset-y-5 sm:left-4 sm:h-[calc(100%-2.5rem)] sm:w-[calc(100%-1rem)]"
          />
          <div className="absolute bottom-5 left-5 max-w-[220px] bg-white px-5 py-4 shadow-lg sm:bottom-10 sm:left-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-800">The open road</p>
            <p className="mt-1 text-lg font-semibold">Make room for more.</p>
          </div>
          <p className="absolute right-0 top-0 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#59625d] [writing-mode:vertical-rl] sm:block">Cargo / Drive your way</p>
        </div>
      </section>

      <section className="bg-[#15201c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-16">
          <div className="flex flex-col gap-5 border-b border-white/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Start with the feeling</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">What does your next drive look like?</h2>
            </div>
            <Link to="/cars" className="inline-flex w-fit items-center gap-3 pb-1 text-sm font-semibold text-white transition-colors hover:text-teal-300">
              See every car <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
          <div className="grid divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <Link to="/cars" className="group py-7 sm:pr-7 sm:py-9">
              <span className="text-xs font-medium text-teal-300">01 / EVERYDAY</span>
              <span className="mt-3 flex items-center justify-between text-xl font-medium">The daily <span className="text-white/50 transition-transform group-hover:translate-x-1">&#8594;</span></span>
              <span className="mt-2 block text-sm text-white/60">Easy-going comfort for the miles you make most.</span>
            </Link>
            <Link to="/cars" className="group py-7 sm:px-7 sm:py-9">
              <span className="text-xs font-medium text-teal-300">02 / OUT THERE</span>
              <span className="mt-3 flex items-center justify-between text-xl font-medium">The escape <span className="text-white/50 transition-transform group-hover:translate-x-1">&#8594;</span></span>
              <span className="mt-2 block text-sm text-white/60">A little more space for the long way round.</span>
            </Link>
            <Link to="/cars" className="group py-7 sm:pl-7 sm:py-9">
              <span className="text-xs font-medium text-teal-300">03 / ALL YOURS</span>
              <span className="mt-3 flex items-center justify-between text-xl font-medium">The statement <span className="text-white/50 transition-transform group-hover:translate-x-1">&#8594;</span></span>
              <span className="mt-2 block text-sm text-white/60">For the drive that feels unmistakably you.</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

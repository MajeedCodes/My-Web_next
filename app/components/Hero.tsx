'use client'

import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    subtitle: "Fashion Sale",
    title: "Minimal Menz Style",
    description: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
    image: "/img1.webp?height=600&width=800",
  },
  {
    id: 2,
    subtitle: "New Collection",
    title: "Summer Fashion Trends",
    description: "Discover our latest collection of summer styles perfect for the modern gentleman seeking comfort and elegance.",
    image: "/img6.jpg?height=600&width=800",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-gray-50">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center', // Centering the background image
            }}
          >
            <div className="container mx-auto grid h-full grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2">
              <div className="z-10 text-center lg:text-left">
                <h2 className="font-serif text-xl font-normal tracking-wide text-red-500 sm:text-2xl lg:text-3xl">
                  {slide.subtitle}
                </h2>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:max-w-2xl lg:mx-0 lg:text-xl">
                  {slide.description}
                </p>
                <button className="mt-8 bg-gray-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:text-base">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? 'bg-gray-900 w-4' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

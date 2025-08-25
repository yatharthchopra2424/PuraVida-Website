"use client"

import type React from "react"
import { useState, useEffect } from "react"

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/herbal-extracts-manufacturing-facility.png",
      title: "Premium Herbal Extracts",
      subtitle: "Manufacturing Excellence Since 2018",
      description: "Leading manufacturer and supplier of premium health products and natural supplements",
    },
    {
      image: "/natural-supplements-laboratory.png",
      title: "Natural Supplements",
      subtitle: "Quality Assured Products",
      description: "ISO certified facility ensuring highest quality standards for all our products",
    },
    {
      image: "/ayurvedic-herbs-processing.png",
      title: "Ayurvedic Heritage",
      subtitle: "Traditional Wisdom, Modern Technology",
      description: "Combining ancient Ayurvedic knowledge with modern manufacturing processes",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative h-[calc(100vh-120px)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(45, 92, 0, 0.6), rgba(45, 92, 0, 0.6)), url(${slide.image})`,
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">{slide.title}</h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-orange-400 animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-400">{slide.description}</p>
                <div className="flex space-x-4 animate-fade-in-up animation-delay-600">
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                    Explore Products
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-800 transition-colors font-semibold">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-orange-500" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default HeroSection

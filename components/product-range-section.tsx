"use client"

import { ChevronRight, ChevronLeft } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import productData from "@/lib/products-data.json"

const productCategories = productData.categories

function EmblaCarousel({ products }: { products: any[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div
        className="embla overflow-hidden"
        ref={emblaRef}
        style={{ width: '1312px', margin: '0 auto' }}
      >
        <div className="embla__container flex gap-2">
          {products.map((product, productIndex) => (
            <div
              key={productIndex}
              className="embla__slide flex-shrink-0"
              style={{ flex: '0 0 20%', minWidth: 0 }}
            >
              <div
                className="w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative transform scale-95 flex flex-col"
                style={{ height: '549px' }}
              >
                {/* Product image */}
                <div className="aspect-square bg-gray-100 flex items-center justify-center p-4 flex-shrink-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product content - flexible to fill space */}
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">{product.name}</h4>

                  {/* Product specifications */}
                  <div className="space-y-1 mb-4 flex-grow">
                    {product.specs.map((spec: any, specIndex: number) => (
                      <div key={specIndex} className="text-sm">
                        <span className="font-medium text-gray-600">{spec.label}:</span>
                        <span className="text-gray-500 ml-1">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Get Quote button - fixed to bottom with minimal margin */}
                <div className="px-4 pb-3">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium" size="sm">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className={`absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border ${
          !prevBtnDisabled
            ? 'border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-600'
            : 'border-gray-100 text-gray-300 cursor-not-allowed'
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className={`absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border ${
          !nextBtnDisabled
            ? 'border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-600'
            : 'border-gray-100 text-gray-300 cursor-not-allowed'
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default function ProductRangeSection() {
  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  const sortProductsByPopularity = (products: any[]) => {
    return products.sort((a, b) => {
      // Popular products first
      if (a.popular && !b.popular) return -1
      if (!a.popular && b.popular) return 1

      // Then sort by name alphabetically
      return a.name.localeCompare(b.name)
    })
  }
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight font-sans">Our Product Range</h2>
        </div>

        {/* Product categories */}
        {productCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category heading */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl md:text-3xl font-extrabold text-black dark:text-white tracking-tight font-sans">{category.title}</h3>
              <Button
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = `/categories/${generateSlug(category.title)}`}
              >
                <span>Explore Category</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Products Carousel */}
            <div className="relative">
              <EmblaCarousel products={sortProductsByPopularity([...category.products])} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

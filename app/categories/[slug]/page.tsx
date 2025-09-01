"use client"

import { useState, useEffect, useMemo } from "react"
import { useParams, useSearchParams } from "next/navigation"
import { ChevronRight, Search, Filter, X, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import productData from "@/lib/products-data.json"

interface Product {
  name: string
  image: string
  popular?: boolean
  specs: Array<{
    label: string
    value: string
  }>
}

interface Category {
  title: string
  products: Product[]
}

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}


export default function CategoryPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const slug = params.slug as string

  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"name" | "popular">("name")
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [selectedApplications, setSelectedApplications] = useState<string[]>([])
  const [selectedBotanicals, setSelectedBotanicals] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [highlightedProduct, setHighlightedProduct] = useState<string | null>(null)
  const [highlightPhase, setHighlightPhase] = useState<'initial' | 'fade'>('initial')

  // Find the category based on slug
  const category = useMemo(() => {
    return productData.categories.find(cat => generateSlug(cat.title) === slug)
  }, [slug])

  // Handle highlight parameter
  useEffect(() => {
    const highlightParam = searchParams.get('highlight')
    if (highlightParam && category) {
      const decodedHighlight = decodeURIComponent(highlightParam)
      const product = category.products.find(p => generateSlug(p.name) === decodedHighlight)
      if (product) {
        setHighlightedProduct(product.name)
        setHighlightPhase('initial')

        // Scroll to the product after a short delay to ensure DOM is rendered
        setTimeout(() => {
          const element = document.getElementById(`product-${generateSlug(product.name)}`)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }, 500)

        // Start fade-out effect after blinking animation completes
        const fadeTimer = setTimeout(() => {
          setHighlightPhase('fade')
        }, 4500) // 4.5 seconds for initial blinking (1.5s * 3 blinks)

        // Clear highlight after fade-out completes
        const clearTimer = setTimeout(() => {
          setHighlightedProduct(null)
          setHighlightPhase('initial')
        }, 7500) // 7.5 seconds total

        return () => {
          clearTimeout(fadeTimer)
          clearTimeout(clearTimer)
        }
      }
    }
  }, [searchParams, category])

  // Get all unique filter options
  const filterOptions = useMemo(() => {
    if (!category) return { ingredients: [], applications: [], botanicals: [] }

    const ingredients = new Set<string>()
    const applications = new Set<string>()
    const botanicals = new Set<string>()

    category.products.forEach(product => {
      product.specs.forEach(spec => {
        if (spec.label === "Active Ingredient") {
          ingredients.add(spec.value)
        } else if (spec.label === "Application" || spec.label === "Primary Application") {
          // Split multiple applications
          spec.value.split(',').forEach(app => ingredients.add(app.trim()))
        } else if (spec.label === "Botanical Name") {
          botanicals.add(spec.value)
        }
      })
    })

    return {
      ingredients: Array.from(ingredients).sort(),
      applications: Array.from(applications).sort(),
      botanicals: Array.from(botanicals).sort()
    }
  }, [category])


  // Filter and sort products
  const filteredProducts = useMemo(() => {
    if (!category) return []

    let filtered = category.products.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Active ingredients filter
      if (selectedIngredients.length > 0) {
        const hasSelectedIngredient = selectedIngredients.some(ingredient =>
          product.specs.some(spec =>
            spec.label === "Active Ingredient" && spec.value.includes(ingredient)
          )
        )
        if (!hasSelectedIngredient) return false
      }

      // Applications filter
      if (selectedApplications.length > 0) {
        const hasSelectedApplication = selectedApplications.some(application =>
          product.specs.some(spec =>
            (spec.label === "Application" || spec.label === "Primary Application") &&
            spec.value.toLowerCase().includes(application.toLowerCase())
          )
        )
        if (!hasSelectedApplication) return false
      }

      // Botanical name filter
      if (selectedBotanicals.length > 0) {
        const hasSelectedBotanical = selectedBotanicals.some(botanical =>
          product.specs.some(spec =>
            spec.label === "Botanical Name" && spec.value === botanical
          )
        )
        if (!hasSelectedBotanical) return false
      }

      return true
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          if (a.popular && !b.popular) return -1
          if (!a.popular && b.popular) return 1
          return a.name.localeCompare(b.name)
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [category, searchQuery, sortBy, selectedIngredients, selectedApplications, selectedBotanicals])

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedIngredients([])
    setSelectedApplications([])
    setSelectedBotanicals([])
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32">
        <div className="min-h-screen bg-gray-50">
          {/* Breadcrumb */}
          <div className="bg-white border-b">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <a href="/" className="hover:text-green-600">Home</a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900 font-medium">{category.title}</span>
              </nav>
            </div>
          </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {category.title}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Reset
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>


              {/* Active Ingredients */}
              {filterOptions.ingredients.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Active Ingredients
                  </label>
                  <div className="max-h-40 overflow-y-auto space-y-2">
                    {filterOptions.ingredients.map(ingredient => (
                      <label key={ingredient} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedIngredients.includes(ingredient)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedIngredients([...selectedIngredients, ingredient])
                            } else {
                              setSelectedIngredients(selectedIngredients.filter(i => i !== ingredient))
                            }
                          }}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{ingredient}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {filterOptions.applications.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Applications
                  </label>
                  <div className="max-h-40 overflow-y-auto space-y-2">
                    {filterOptions.applications.map(application => (
                      <label key={application} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedApplications.includes(application)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedApplications([...selectedApplications, application])
                            } else {
                              setSelectedApplications(selectedApplications.filter(a => a !== application))
                            }
                          }}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{application}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Botanical Names */}
              {filterOptions.botanicals.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Botanical Names
                  </label>
                  <div className="max-h-40 overflow-y-auto space-y-2">
                    {filterOptions.botanicals.map(botanical => (
                      <label key={botanical} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBotanicals.includes(botanical)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBotanicals([...selectedBotanicals, botanical])
                            } else {
                              setSelectedBotanicals(selectedBotanicals.filter(b => b !== botanical))
                            }
                          }}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{botanical}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Mobile Filter Toggle */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <span className="text-sm text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="popular">Popularity</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                <Button onClick={resetFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    id={`product-${generateSlug(product.name)}`}
                    className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                      highlightedProduct === product.name
                        ? highlightPhase === 'initial'
                          ? 'product-highlight ambient-light ring-4 ring-orange-400 ring-opacity-50 shadow-xl'
                          : 'product-highlight-fade ambient-light-fade ring-2 ring-orange-400 ring-opacity-30 shadow-lg'
                        : ''
                    }`}
                  >
                    {/* Product image */}
                    <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Product content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Product specs */}
                      <div className="space-y-1 mb-4">
                        {product.specs.slice(0, 2).map((spec, specIndex) => (
                          <div key={specIndex} className="text-sm">
                            <span className="font-medium text-gray-600">{spec.label}:</span>
                            <span className="text-gray-500 ml-1">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Get Quote button */}
                      <div className="flex justify-center">
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </main>
  )
}
"use client"

import type React from "react"
import { useEffect, useId, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import productData from "@/lib/products-data.json"

type Product = {
  name: string
  image: string
  popular?: boolean
}

type Category = {
  title: string
  products: Product[]
}

type ProductData = {
  categories: Category[]
}

const slugify = (title: string) =>
  title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

const Navbar: React.FC = () => {
  const data = productData as unknown as ProductData
  const router = useRouter()

  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  // Refs to manage positioning and click-outside
  const searchWrapRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Create a flat list of products with category slug and product slug
  const allProducts = useMemo(() => {
    const list: Array<{
      name: string
      image: string
      categoryTitle: string
      categorySlug: string
      productSlug: string
    }> = []
    data.categories.forEach((category) => {
      const cSlug = slugify(category.title)
      category.products.forEach((p) => {
        list.push({
          name: p.name,
          image: p.image,
          categoryTitle: category.title,
          categorySlug: cSlug,
          productSlug: slugify(p.name),
        })
      })
    })
    return list
  }, [data])

  // Popular picks if field empty
  const popularProducts = useMemo(() => {
    const popular: Array<{
      name: string
      image: string
      categorySlug: string
      productSlug: string
    }> = []
    data.categories.forEach((category) => {
      const cSlug = slugify(category.title)
      const picked = category.products
        .filter((p) => p.popular)
        .slice(0, 2)
      if (picked.length < 2) {
        picked.push(...category.products.slice(0, 2 - picked.length))
      }
      popular.push(
        ...picked.map((p) => ({
          name: p.name,
          image: p.image,
          categorySlug: cSlug,
          productSlug: slugify(p.name),
        })),
      )
    })
    return popular
  }, [data])

  // Debounced query to avoid filtering on every keystroke
  const [debouncedQuery, setDebouncedQuery] = useState("")
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 150)
    return () => clearTimeout(t)
  }, [query])

  // Filtered suggestions
  const suggestions = useMemo(() => {
    if (!debouncedQuery) return popularProducts
    const q = debouncedQuery.toLowerCase()
    return allProducts
      .filter((p) => p.name.toLowerCase().includes(q))
      .slice(0, 20)
      .map((p) => ({
        name: p.name,
        image: p.image,
        categorySlug: p.categorySlug,
        productSlug: p.productSlug,
      }))
  }, [allProducts, popularProducts, debouncedQuery])

  // Open list when focusing/clicking the input
  const openSuggestions = () => {
    setOpen(true)
  }

  // Close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!searchWrapRef.current) return
      if (!searchWrapRef.current.contains(e.target as Node)) {
        setOpen(false)
        setActiveIndex(-1)
      }
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [])

  // Unique ids for aria-controls and options
  const listboxId = `listbox-${useId()}`
  const optionId = (i: number) => `option-${listboxId}-${i}`

  const navigateTo = (categorySlug: string, productSlug: string) => {
    router.push(`/categories/${categorySlug}?highlight=${encodeURIComponent(productSlug)}`)
    setOpen(false)
    setActiveIndex(-1)
  }

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    const term = query.trim()
    if (!term) {
      // Prefer focusing the input instead of alert
      inputRef.current?.focus()
      return
    }
    // Best-effort: find first match; otherwise keep list open for selection
    const match = allProducts.find((p) =>
      p.name.toLowerCase().includes(term.toLowerCase()),
    )
    if (match) {
      navigateTo(match.categorySlug, match.productSlug)
    } else {
      setOpen(true)
      setActiveIndex(suggestions.length ? 0 : -1)
    }
  }

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true)
      setActiveIndex(0)
      e.preventDefault()
      return
    }
    if (!open) return

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => {
        const next = suggestions.length ? (prev + 1) % suggestions.length : -1
        // Ensure active option is visible
        const el = document.getElementById(optionId(next))
        el?.scrollIntoView({ block: "nearest" })
        return next
      })
      e.preventDefault()
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => {
        const next = suggestions.length ? (prev - 1 + suggestions.length) % suggestions.length : -1
        const el = document.getElementById(optionId(next))
        el?.scrollIntoView({ block: "nearest" })
        return next
      })
      e.preventDefault()
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        const s = suggestions[activeIndex]
        navigateTo(s.categorySlug, s.productSlug)
        e.preventDefault()
      }
    } else if (e.key === "Escape") {
      setOpen(false)
      setActiveIndex(-1)
      e.preventDefault()
    }
  }

  // Prefetch category route on hover of an option (optional optimization)
  const prefetchOption = (categorySlug: string, productSlug: string) => {
    const href = `/categories/${categorySlug}?highlight=${encodeURIComponent(productSlug)}`
    // Next.js docs recommend deliberate handling of prefetch; this is a safe-on-hover approach
    router.prefetch?.(href)
  }

  const clearQuery = () => {
    setQuery("")
    setActiveIndex(-1)
    setOpen(true)
    inputRef.current?.focus()
  }

  return (
    <div className="navbar-wrapper fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="top-header bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Left side - Logo and Company Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p4U2jnF8kzNoJzD7zD54avAFLygP5H.png"
                  alt="PuraVida Natural Logo"
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex flex-col text-sm text-gray-600">
                <div className="font-semibold text-gray-800">Puravida Natural</div>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    169, Uttam Nagar West, New Delhi - 110059, India
                  </span>
                  <span>GST No.- 07ABCFP5743NIZS</span>
                </div>
              </div>
            </div>

            {/* Right side - Contact Buttons */}
            <div className="flex items-center space-x-3">
              {/* Call Button as tel link */}
              <a href="tel:9811647596" className="flex items-center bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-orange-500 rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-800">Call 9811647596</div>
                    <div className="text-gray-500 text-xs">89% Response rate</div>
                  </div>
                </div>
              </a>

              {/* Send Email Button */}
              <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="font-semibold text-lg tracking-wider">Send Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="ps-navigation ps-header--5 bg-green-800 text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <div className="ps-navigation__left ml-8">
              <nav className="ps-main-menu">
                <ul className="menu flex items-center">
                  {/* Products Mega Menu */}
                  <li className="has-mega-menu relative group">
                    <Link
                      href="/products"
                      className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors py-6 px-4 text-lg font-semibold tracking-wider"
                    >
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="w-5 h-5">
                        <g clipPath="url(#clip0_18_48)">
                          <path
                            d="M19.6875 18.375H1.31251C0.587605 18.375 0 17.7874 0 17.0625C0 16.3376 0.587605 15.75 1.31251 15.75H19.6875C20.4124 15.75 21 16.3376 21 17.0625C21 17.7874 20.4124 18.375 19.6875 18.375Z"
                            fill="#fff"
                          ></path>
                          <path
                            d="M19.6875 11.8125H1.31251C0.587605 11.8125 0 11.2249 0 10.5C0 9.77515 0.587605 9.1875 1.31251 9.1875H19.6875C20.4124 9.1875 21 9.7751 21 10.5C21 11.2249 20.4124 11.8125 19.6875 11.8125Z"
                            fill="#fff"
                          ></path>
                          <path
                            d="M19.6875 5.24999H1.31251C0.587605 5.24999 0 4.66238 0 3.93748C0 3.21257 0.587605 2.62497 1.31251 2.62497H19.6875C20.4124 2.62497 21 3.21257 21 3.93748C21 4.66238 20.4124 5.24999 19.6875 5.24999Z"
                            fill="#fff"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_18_48">
                            <rect width="21" height="21" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Our Product Range</span>
                    </Link>
                    <div className="mega-menu absolute top-full left-0 w-screen bg-white text-gray-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="container mx-auto">
                        <div className="mega-menu__row grid grid-cols-7 gap-4 p-8">
                          <div className="mega-menu__column">
                            <Link href="/standardized-herbal-extracts">
                              <h4 className="font-bold text-green-800 mb-3 hover:text-orange-500 text-xs">STANDARDIZED HERBAL EXTRACTS</h4>
                            </Link>
                            <ul className="sub-menu--mega space-y-1 text-xs max-h-64 overflow-y-auto">
                              <li><Link href="/standardized-herbal-extracts#acai-berry-extract" className="hover:text-green-800 block py-0.5">Acai Berry</Link></li>
                              <li><Link href="/standardized-herbal-extracts#amla-extract" className="hover:text-green-800 block py-0.5">Amla</Link></li>
                              <li><Link href="/standardized-herbal-extracts#ashwagandha-extract" className="hover:text-green-800 block py-0.5">Ashwagandha</Link></li>
                              <li><Link href="/standardized-herbal-extracts#curcumin-extract" className="hover:text-green-800 block py-0.5">Curcumin</Link></li>
                              <li><Link href="/standardized-herbal-extracts#ginger-extract" className="hover:text-green-800 block py-0.5">Ginger</Link></li>
                              <li><Link href="/standardized-herbal-extracts#turmeric-extract" className="hover:text-green-800 block py-0.5">Turmeric</Link></li>
                              <li><Link href="/standardized-herbal-extracts" className="mm_va text-xs uppercase text-orange-500 font-medium hover:text-orange-600 block py-0.5">View All</Link></li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <Link href="/essential-oils">
                              <h4 className="font-bold text-green-800 mb-3 hover:text-orange-500 text-xs">ESSENTIAL OILS</h4>
                            </Link>
                            <ul className="sub-menu--mega space-y-1 text-xs">
                              <li><Link href="/essential-oils#clove-leaf-oil" className="hover:text-green-800 block py-0.5">Clove Oil</Link></li>
                              <li><Link href="/essential-oils#eucalyptus-oil" className="hover:text-green-800 block py-0.5">Eucalyptus</Link></li>
                              <li><Link href="/essential-oils#ginger-oil" className="hover:text-green-800 block py-0.5">Ginger Oil</Link></li>
                              <li><Link href="/essential-oils#lavender-oil" className="hover:text-green-800 block py-0.5">Lavender</Link></li>
                              <li><Link href="/essential-oils#peppermint-oil" className="hover:text-green-800 block py-0.5">Peppermint</Link></li>
                              <li><Link href="/essential-oils#turmeric-oil" className="hover:text-green-800 block py-0.5">Turmeric Oil</Link></li>
                              <li><Link href="/essential-oils" className="mm_va text-xs uppercase text-orange-500 font-medium hover:text-orange-600 block py-0.5">View All</Link></li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <Link href="/oleoresins">
                              <h4 className="font-bold text-green-800 mb-3 hover:text-orange-500 text-xs">OLEORESINS</h4>
                            </Link>
                            <ul className="sub-menu--mega space-y-1 text-xs">
                              <li><Link href="/oleoresins#black-pepper-oleoresin" className="hover:text-green-800 block py-0.5">Black Pepper</Link></li>
                              <li><Link href="/oleoresins#capsicum-oleoresin" className="hover:text-green-800 block py-0.5">Capsicum</Link></li>
                              <li><Link href="/oleoresins#cinnamon-oleoresin" className="hover:text-green-800 block py-0.5">Cinnamon</Link></li>
                              <li><Link href="/oleoresins#ginger-oleoresin" className="hover:text-green-800 block py-0.5">Ginger</Link></li>
                              <li><Link href="/oleoresins#paprika-oleoresin" className="hover:text-green-800 block py-0.5">Paprika</Link></li>
                              <li><Link href="/oleoresins#turmeric-oleoresin" className="hover:text-green-800 block py-0.5">Turmeric</Link></li>
                              <li><Link href="/oleoresins" className="mm_va text-xs uppercase text-orange-500 font-medium hover:text-orange-600 block py-0.5">View All</Link></li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <Link href="/fruit-juice-powders">
                              <h4 className="font-bold text-green-800 mb-3 hover:text-orange-500 text-xs">FRUIT JUICE POWDERS</h4>
                            </Link>
                            <ul className="sub-menu--mega space-y-1 text-xs">
                              <li><Link href="/fruit-juice-powders#amla-juice-powder" className="hover:text-green-800 block py-0.5">Amla</Link></li>
                              <li><Link href="/fruit-juice-powders#beet-root-juice-powder" className="hover:text-green-800 block py-0.5">Beet Root</Link></li>
                              <li><Link href="/fruit-juice-powders#mango-juice-powder" className="hover:text-green-800 block py-0.5">Mango</Link></li>
                              <li><Link href="/fruit-juice-powders#orange-juice-powder" className="hover:text-green-800 block py-0.5">Orange</Link></li>
                              <li><Link href="/fruit-juice-powders#pomegranate-juice-powder" className="hover:text-green-800 block py-0.5">Pomegranate</Link></li>
                              <li><Link href="/fruit-juice-powders" className="mm_va text-xs uppercase text-orange-500 font-medium hover:text-orange-600 block py-0.5">View All</Link></li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <Link href="/phytochemicals">
                              <h4 className="font-bold text-green-800 mb-3 hover:text-orange-500 text-xs">PHYTOCHEMICALS</h4>
                            </Link>
                            <ul className="sub-menu--mega space-y-1 text-xs">
                              <li><Link href="/phytochemicals#berberine-hcl" className="hover:text-green-800 block py-0.5">Berberine HCL</Link></li>
                              <li><Link href="/phytochemicals#curcumin" className="hover:text-green-800 block py-0.5">Curcumin</Link></li>
                              <li><Link href="/phytochemicals#natural-caffeine" className="hover:text-green-800 block py-0.5">Caffeine</Link></li>
                              <li><Link href="/phytochemicals#piperine" className="hover:text-green-800 block py-0.5">Piperine</Link></li>
                              <li><Link href="/phytochemicals#quercetin-dihydrate" className="hover:text-green-800 block py-0.5">Quercetin</Link></li>
                              <li><Link href="/phytochemicals#resveratrol" className="hover:text-green-800 block py-0.5">Resveratrol</Link></li>
                              <li><Link href="/phytochemicals" className="mm_va text-xs uppercase text-orange-500 font-medium hover:text-orange-600 block py-0.5">View All</Link></li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <Link href="/amino-acids">
                              <h4 className="font-bold text-green-800 mb-3 hover:text-orange-500 text-xs">AMINO ACIDS</h4>
                            </Link>
                            <ul className="sub-menu--mega space-y-1 text-xs">
                              <li><Link href="/amino-acids#acetyl-l-carnitine" className="hover:text-green-800 block py-0.5">Acetyl L-Carnitine</Link></li>
                              <li><Link href="/amino-acids#bcaa-blend" className="hover:text-green-800 block py-0.5">BCAA Blend</Link></li>
                              <li><Link href="/amino-acids#creatine-monohydrate" className="hover:text-green-800 block py-0.5">Creatine</Link></li>
                              <li><Link href="/amino-acids#l-arginine" className="hover:text-green-800 block py-0.5">L-Arginine</Link></li>
                              <li><Link href="/amino-acids#l-glutathione" className="hover:text-green-800 block py-0.5">L-Glutathione</Link></li>
                              <li><Link href="/amino-acids#l-theanine" className="hover:text-green-800 block py-0.5">L-Theanine</Link></li>
                              <li><Link href="/amino-acids" className="mm_va text-xs uppercase text-orange-500 font-medium hover:text-orange-600 block py-0.5">View All</Link></li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <Link href="/nutraceuticals">
                              <h4 className="font-bold text-green-800 mb-3 hover:text-orange-500 text-xs">NUTRACEUTICALS</h4>
                            </Link>
                            <ul className="sub-menu--mega space-y-1 text-xs">
                              <li><Link href="/nutraceuticals#astaxanthin" className="hover:text-green-800 block py-0.5">Astaxanthin</Link></li>
                              <li><Link href="/nutraceuticals#coenzyme-q10" className="hover:text-green-800 block py-0.5">CoQ10</Link></li>
                              <li><Link href="/nutraceuticals#lutein" className="hover:text-green-800 block py-0.5">Lutein</Link></li>
                              <li><Link href="/nutraceuticals#omega-3-fatty-acids" className="hover:text-green-800 block py-0.5">Omega-3</Link></li>
                              <li><Link href="/nutraceuticals#spirulina-powder" className="hover:text-green-800 block py-0.5">Spirulina</Link></li>
                              <li><Link href="/nutraceuticals#whey-protein" className="hover:text-green-800 block py-0.5">Whey Protein</Link></li>
                              <li><Link href="/nutraceuticals" className="mm_va text-xs uppercase text-orange-500 font-medium hover:text-orange-600 block py-0.5">View All</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-menu__row p-8 pt-0">
                          <Link
                            href="/products"
                            className="ps-btn ps-btn--warning bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
                          >
                            View All Categories
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* About Us */}
                  <li className="has-mega-menu relative group">
                    <Link
                      href="/about"
                      className="d-flex conta_p align-items-center flex items-center space-x-2 text-white hover:text-orange-400 transition-colors py-6 px-4 text-lg font-semibold tracking-wider"
                    >
                      <span>About Us</span>
                      <span className="sub-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none" className="w-3 h-3">
                          <path
                            d="M5.40907 4.31821L1.59091 0.5L0.5 1.59089L5.40907 6.5L10.3182 1.59089L9.22728 0.5L5.40907 4.31821Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                    <div className="mega-menu pfl_mega_menu absolute top-full left-0 bg-white text-gray-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-48">
                      <div className="container">
                        <div className="mega-menu__row p-4">
                          <ul className="sub-menu--mega d-flex flex-wrap space-y-2">
                            <li className="mega-menu__column w-full">
                              <Link href="/testimonial" className="block hover:text-green-800 py-2">
                                Testimonial
                              </Link>
                            </li>
                            <li className="mega-menu__column w-full">
                              <button
                                onClick={() => window.open("/Product List.pdf", "_blank")}
                                className="cp block hover:text-green-800 py-2 text-left w-full cursor-pointer"
                              >
                                Download Brochure
                              </button>
                            </li>
                            <li className="mega-menu__column w-full">
                              <button
                                onClick={() => window.open("/Product List.pdf", "_blank")}
                                className="cp block hover:text-green-800 py-2 text-left w-full cursor-pointer"
                              >
                                Download Product List
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Contact Us */}
                  <li className="has-mega-menu">
                    <Link
                      href="/contact"
                      className="text-white hover:text-orange-400 transition-colors py-6 px-4 block text-lg font-semibold tracking-wider"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right Navigation - Search with INCREASED WIDTH */}
            <div className="ps-navigation__right mr-10">
              <div className="ps-header__search header__search22">
                <form onSubmit={onSubmit} method="get" name="search-form" aria-label="Site search">
                  {/* INCREASED WIDTH: Changed from 304px to 400px */}
                  <div ref={searchWrapRef} className="relative" style={{ width: 400 }}>
                    <div className="flex items-stretch">
                      <input
                        ref={inputRef}
                        className="form-control ps-input bg-white text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full rounded-l-md"
                        type="text"
                        id="ss"
                        placeholder="Search Products/Services"
                        value={query}
                        onChange={(e) => {
                          setQuery(e.target.value)
                          setOpen(true)
                          setActiveIndex(-1)
                        }}
                        onFocus={openSuggestions}
                        onKeyDown={onKeyDown}
                        autoComplete="off"
                        // ARIA combobox attributes
                        role="combobox"
                        aria-autocomplete="list"
                        aria-expanded={open}
                        aria-controls={listboxId}
                        aria-activedescendant={activeIndex >= 0 ? optionId(activeIndex) : undefined}
                      />

                      {query && (
                        <button
                          type="button"
                          onClick={clearQuery}
                          className="px-3 bg-white text-gray-500 hover:text-gray-700 border border-r-0 border-l-0 border-gray-300"
                          aria-label="Clear search"
                          title="Clear"
                        >
                          ✕
                        </button>
                      )}

                      <button
                        type="submit"
                        className="search-btn bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer rounded-r-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                        >
                          <path
                            d="M11.0482 10.5737L14 13.5248L13.0248 14.5L10.0737 11.5482C8.9757 12.4285 7.60993 12.9072 6.20262 12.9052C2.77877 12.9052 0 10.1265 0 6.70262C0 3.27877 2.77877 0.5 6.20262 0.5C9.62646 0.5 12.4052 3.27877 12.4052 6.70262C12.4072 8.10993 11.9285 9.4757 11.0482 10.5737ZM9.66575 10.0624C10.5404 9.16291 11.0289 7.95722 11.0269 6.70262C11.0269 4.03687 8.86768 1.87836 6.20262 1.87836C3.53687 1.87836 1.37836 4.03687 1.37836 6.70262C1.37836 9.36768 3.53687 11.5269 6.20262 11.5269C7.45722 11.5289 8.66291 11.0404 9.56237 10.1657L9.66575 10.0624Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span className="font-semibold text-lg tracking-wider">Search</span>
                      </button>
                    </div>

                    {/* Live region for screen readers */}
                    <div className="sr-only" role="status" aria-live="polite">
                      {open ? `${suggestions.length} results available` : ""}
                    </div>

                    {/* Suggestions dropdown */}
                    {open && (
                      <div
                        id={listboxId}
                        role="listbox"
                        className="absolute top-full left-0 w-full bg-white shadow-lg z-50 max-h-96 overflow-y-auto border border-gray-200 rounded-md mt-1"
                      >
                        {suggestions.length === 0 ? (
                          <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
                        ) : (
                          suggestions.map((s, i) => {
                            const href = `/categories/${s.categorySlug}?highlight=${encodeURIComponent(s.productSlug)}`
                            const isActive = i === activeIndex
                            return (
                              <Link
                                key={`${s.categorySlug}-${s.productSlug}-${i}`}
                                href={href}
                                id={optionId(i)}
                                role="option"
                                aria-selected={isActive}
                                className={`block px-4 py-2 border-b last:border-b-0 border-gray-100 ${
                                  isActive ? "bg-gray-100" : "bg-white"
                                }`}
                                // Prevent input blur before click handler
                                onMouseDown={(e) => e.preventDefault()}
                                onMouseEnter={() => {
                                  setActiveIndex(i)
                                  prefetchOption(s.categorySlug, s.productSlug)
                                }}
                                onClick={(e) => {
                                  e.preventDefault()
                                  navigateTo(s.categorySlug, s.productSlug)
                                }}
                              >
                                <div className="flex items-center space-x-3">
                                  <img
                                    src={s.image}
                                    alt={s.name}
                                    className="w-8 h-8 object-cover rounded"
                                    loading="lazy"
                                  />
                                  <span className="text-gray-800">{s.name}</span>
                                </div>
                              </Link>
                            )
                          })
                        )}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

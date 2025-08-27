"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("")
  const [showSearchSuggest, setShowSearchSuggest] = useState(false)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue.trim() === "") {
      alert("Please enter a search term")
      return false
    }
    console.log("Searching for:", searchValue)
    return true
  }

  const handleSearchClear = () => {
    setSearchValue("")
    setShowSearchSuggest(false)
  }

  const handleSearchBlur = () => {
    setTimeout(() => setShowSearchSuggest(false), 150)
  }

  const downloadBrochure = () => {
    window.open("/Product List.pdf", "_blank")
  }

  const downloadProductList = () => {
    window.open("/Product List.pdf", "_blank")
  }

  return (
    <div className="navbar-wrapper fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="top-header bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Left side - Logo and Company Info */}
            <div className="flex items-center space-x-6">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p4U2jnF8kzNoJzD7zD54avAFLygP5H.png"
                  alt="PuraVida Natural Logo"
                  className="h-12 w-auto"
                />
              </div>

              {/* Company Info */}
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
              {/* Call Button */}
              <div className="flex items-center bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
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
              </div>

              {/* Send Email Button */}
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="font-semibold text-lg tracking-wider">Send Email</span>
              </button>
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
                                onClick={downloadBrochure}
                                className="cp block hover:text-green-800 py-2 text-left w-full cursor-pointer"
                              >
                                Download Brochure
                              </button>
                            </li>
                            <li className="mega-menu__column w-full">
                              <button
                                onClick={downloadProductList}
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

            {/* Right Navigation - Search */}
            <div className="ps-navigation__right mr-10">
              <div className="ps-header__search header__search22">
                <form onSubmit={handleSearchSubmit} id="cse-search-box" method="get" name="frm">
                  <div className="ps-search-table">
                    <div className="input-group flex">
                      <input
                        className="form-control ps-input bg-white text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        style={{ width: "304px" }}
                        type="text"
                        id="ss"
                        placeholder="Search Products/Services"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onBlur={handleSearchBlur}
                        size={5}
                        autoComplete="off"
                        onMouseDown={handleSearchClear}
                      />
                      <div className="input-group-append d-flex justify-content-center cp">
                        <button
                          type="submit"
                          className="search-btn bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
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
                      <div
                        id="SearchSuggest"
                        className="position-absolute absolute top-full left-0 right-0 bg-white shadow-lg z-50"
                        style={{ display: showSearchSuggest ? "block" : "none" }}
                      ></div>
                    </div>
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

"use client"

import type React from "react"

const ProductCategoriesSection: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: "STANDARDIZED HERBAL",
      description: "Premium quality standardized herbal extracts",
      image: "/plant-extract-powder.png",
      badge: "GMP Certified",
      badgeColor: "bg-green-100 text-green-800",
      features: ["99%+ Active Compounds", "Powder Extract", "Pharmaceutical Grade"],
    },
    {
      id: 2,
      name: "EXTRACTS",
      description: "Pure botanical extracts for various applications",
      image: "/green-tea-extract-powder.png",
      badge: "ISO Certified",
      badgeColor: "bg-emerald-100 text-emerald-800",
      features: ["Advanced Extraction", "Pharmaceutical Grade", "Pure & Natural"],
    },
    {
      id: 3,
      name: "ESSENTIAL OILS",
      description: "Therapeutic grade essential oils",
      image: "/black-pepper-essential-oil-bottle.png",
      badge: "100% Pure",
      badgeColor: "bg-blue-100 text-blue-800",
      features: ["Steam Distillation", "Therapeutic Grade", "Aromatic"],
    },
    {
      id: 4,
      name: "OLEORESINS",
      description: "Concentrated spice oleoresins",
      image: "/black-pepper-oleoresin-bottle.png",
      badge: "High Potency",
      badgeColor: "bg-orange-100 text-orange-800",
      features: ["Liquid Extract", "Food & Pharma", "Concentrated"],
    },
    {
      id: 5,
      name: "FRUIT JUICE POWDERS",
      description: "Natural fruit juice concentrates",
      image: "/orange-juice-powder.png",
      badge: "100% Natural",
      badgeColor: "bg-yellow-100 text-yellow-800",
      features: ["Spray Dried", "Instant Soluble", "Natural Source"],
    },
    {
      id: 6,
      name: "PHYTOCHEMICALS",
      description: "Isolated plant compounds",
      image: "/curcumin-powder-yellow.png",
      badge: "High Purity",
      badgeColor: "bg-purple-100 text-purple-800",
      features: ["Isolated Compounds", "Analytical Standard", "Research Grade"],
    },
    {
      id: 7,
      name: "AMINO ACIDS",
      description: "Essential amino acids",
      image: "/l-arginine-powder-white.png",
      badge: "USP Grade",
      badgeColor: "bg-teal-100 text-teal-800",
      features: ["Crystalline Powder", "Essential & Non-Essential", "Pure"],
    },
    {
      id: 8,
      name: "NUTRACEUTICALS",
      description: "Health supplements",
      image: "/coenzyme-q10-powder.png",
      badge: "Premium Grade",
      badgeColor: "bg-indigo-100 text-indigo-800",
      features: ["Health & Wellness", "Premium Quality", "Supplements"],
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Premium Natural Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Product <span className="text-green-600">Categories</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of premium herbal extracts and natural supplements
          </p>
        </div>

        {/* Featured Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col"
            >
              {/* Image Section with White Background */}
              <div className="relative h-32 bg-gray-50 p-4 flex items-center justify-center flex-shrink-0">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="max-h-20 max-w-20 object-contain drop-shadow-sm"
                />
                {/* Quality Badge */}
                <div className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${category.badgeColor}`}>
                  {category.badge}
                </div>
              </div>

              {/* Content Section - Flexible to fill remaining space */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 mb-2 text-sm leading-tight group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {category.description}
                </p>
                
                {/* Features - Fixed height container */}
                <div className="flex flex-wrap gap-1 mb-4 min-h-[2.5rem] items-start">
                  {category.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button - Pushed to bottom */}
                <div className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm font-semibold shadow-sm">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Section */}
        <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 rounded-2xl p-8 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">Complete Product Portfolio</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Download our comprehensive product catalog with detailed specifications, 
              certifications, and technical data sheets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg flex items-center gap-2"
                onClick={() => window.open("/Product List.pdf", "_blank")}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Catalog
              </button>
              
              <div className="flex items-center gap-4 text-sm text-green-100">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  500+ Products
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  GMP Certified
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Global Export
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
          {[
            { icon: "🏆", label: "25+ Years", desc: "Experience" },
            { icon: "🌱", label: "500+", desc: "Natural Products" },
            { icon: "🔬", label: "ISO", desc: "Certified Labs" },
            { icon: "🌍", label: "50+", desc: "Countries" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-bold text-gray-900">{item.label}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategoriesSection

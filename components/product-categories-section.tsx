"use client"

import type React from "react"

const ProductCategoriesSection: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Plant Extract Powder",
      price: "₹ 5,000",
      unit: "/Kg",
      image: "/plant-extract-powder.png",
      details: [
        { label: "Packaging Type", value: "Packet" },
        { label: "Brand", value: "Vital Herbs" },
        { label: "Pack Size", value: "1 kg" },
      ],
    },
    {
      id: 2,
      name: "Yeast Extract Powder",
      price: "₹ 1,200",
      unit: "/Kg",
      image: "/yeast-extract-powder.png",
      details: [
        { label: "Packaging Size", value: "1Kg" },
        { label: "Packaging Type", value: "Packet" },
        { label: "Brand", value: "Vital Herbs" },
      ],
    },
    {
      id: 3,
      name: "Green Tea Extract",
      price: "₹ 250",
      unit: "/Kilogram",
      image: "/green-tea-extract-powder.png",
      details: [
        { label: "Color", value: "Green" },
        { label: "Packaging Type", value: "Packet" },
        { label: "Packaging Size", value: "1 Kg" },
      ],
    },
    {
      id: 4,
      name: "Stevia Leaf Extract",
      price: "₹ 1,500",
      unit: "/Kg",
      image: "/stevia-leaf-extract-white-powder.png",
      details: [
        { label: "Packaging Type", value: "Packet" },
        { label: "Packaging Size", value: "1 kg" },
        { label: "Appearance", value: "White or off-White Crystalline Powder" },
      ],
    },
    {
      id: 5,
      name: "Griffonia Seed Extract",
      price: "₹ 9,000",
      unit: "/Kg",
      image: "/griffonia-seed-extract-brown-powder.png",
      details: [
        { label: "Brand", value: "Vital Herbs" },
        { label: "Packaging Type", value: "Packet" },
        { label: "Pack Size", value: "1 Kg" },
      ],
    },
    {
      id: 6,
      name: "Guduchi Giloy Extract",
      price: "₹ 250",
      unit: "/Kilogram",
      image: "/guduchi-giloy-extract-green-powder.png",
      details: [
        { label: "Brand", value: "Vital Herbs" },
        { label: "Form", value: "Powder" },
        { label: "Color", value: "Green" },
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Product Categories</h2>
          <p className="text-gray-600 text-lg">Premium quality herbal extracts and natural supplements</p>
        </div>

        {/* Top Featured Products */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {products.slice(0, 2).map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="text-2xl font-bold text-green-800 mb-4">
                      <span className="text-orange-500">{product.price}</span>
                      <span className="text-sm text-gray-600 font-normal">{product.unit}</span>
                    </div>
                    <ul className="space-y-1 mb-4">
                      {product.details.map((detail, index) => (
                        <li key={index} className="text-sm">
                          <span className="text-gray-600 font-medium">{detail.label}:</span>
                          <span className="text-gray-800 ml-1">{detail.value}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors font-semibold">
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View Complete Range */}
          <div className="bg-green-800 text-white rounded-lg p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
              <img
                src="/natural-cocoa-powder.png"
                alt="Natural Cocoa Powder"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">View Complete Range of products</h2>
              <div className="flex items-center space-x-2">
                <span className="text-lg">Explore Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 9H0V7H8V0L16 8L8 16V9Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(2).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="text-xl font-bold text-green-800 mb-3">
                  <span className="text-orange-500">{product.price}</span>
                  <span className="text-xs text-gray-600 font-normal">{product.unit}</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {product.details.slice(0, 3).map((detail, index) => (
                    <li key={index} className="text-xs">
                      <span className="text-gray-600 font-medium">{detail.label}:</span>
                      <span className="text-gray-800 ml-1">{detail.value}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-500 text-white py-2 px-3 rounded hover:bg-orange-600 transition-colors font-semibold text-sm">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductCategoriesSection

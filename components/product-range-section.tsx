"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const productCategories = [
  {
    title: "Standardized Herbal Extracts",
    products: [
      {
        name: "Ashwagandha Extract",
        price: "₹1,200",
        unit: "/Kg",
        image: "/ashwagandha-extract-powder-brown.png",
        specs: [
          { label: "Active Ingredient", value: "Withanolides 1.5%-10%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Stress Relief, Adaptogen" },
        ],
      },
      {
        name: "Turmeric Extract",
        price: "₹800",
        unit: "/Kg",
        image: "/turmeric-extract-powder-yellow.png",
        specs: [
          { label: "Active Ingredient", value: "Curcuminoids 95%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Anti-inflammatory, Antioxidant" },
        ],
      },
      {
        name: "Bacopa Extract",
        price: "₹1,500",
        unit: "/Kg",
        image: "/bacopa-extract-powder-green.png",
        specs: [
          { label: "Active Ingredient", value: "Bacosides 20%-50%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Memory Support" },
        ],
      },
      {
        name: "Green Tea Extract",
        price: "₹900",
        unit: "/Kg",
        image: "/green-tea-extract-powder.png",
        specs: [
          { label: "Active Ingredient", value: "Polyphenols 98%, EGCG 40%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Antioxidant, Metabolism" },
        ],
      },
      {
        name: "Garcinia Cambogia Extract",
        price: "₹1,100",
        unit: "/Kg",
        image: "/garcinia-cambogia-extract-powder.png",
        specs: [
          { label: "Active Ingredient", value: "HCA 50%-60%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Appetite, Weight" },
        ],
      },
    ],
  },
  {
    title: "Essential Oils",
    products: [
      {
        name: "Turmeric Oil",
        price: "₹2,500",
        unit: "/Kg",
        image: "/turmeric-essential-oil-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "Turmerone 40%-50%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Anti-inflammatory, Aromatherapy" },
        ],
      },
      {
        name: "Black Pepper Oil",
        price: "₹3,200",
        unit: "/Kg",
        image: "/black-pepper-essential-oil-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "β-Caryophyllene 25%-35%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Digestive Aid, Aromatherapy" },
        ],
      },
      {
        name: "Ginger Oil",
        price: "₹2,800",
        unit: "/Kg",
        image: "/ginger-essential-oil-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "Zingiberene 30%-35%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Digestive Aid, Anti-inflammatory" },
        ],
      },
      {
        name: "Eucalyptus Oil",
        price: "₹1,800",
        unit: "/Kg",
        image: "/eucalyptus-essential-oil-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "Eucalyptol 70%-85%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Respiratory Support, Antiseptic" },
        ],
      },
      {
        name: "Clove Leaf Oil",
        price: "₹2,200",
        unit: "/Kg",
        image: "/clove-essential-oil-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "Eugenol 80%-85%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Oral Care, Antiseptic" },
        ],
      },
    ],
  },
  {
    title: "Oleoresins",
    products: [
      {
        name: "Black Pepper Oleoresin",
        price: "₹4,500",
        unit: "/Kg",
        image: "/black-pepper-oleoresin-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "Piperine 70%-80%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Flavoring, Bioavailability Enhancer" },
        ],
      },
      {
        name: "Capsicum Oleoresin",
        price: "₹3,800",
        unit: "/Kg",
        image: "/capsicum-oleoresin-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "Capsaicinoids 60%-90%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Spice, Pharmaceutical, Topical Analgesic" },
        ],
      },
      {
        name: "Turmeric Oleoresin",
        price: "₹2,200",
        unit: "/Kg",
        image: "/turmeric-oleoresin-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "Curcuminoids 10%-20%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Natural Coloring, Anti-inflammatory" },
        ],
      },
      {
        name: "Ginger Oleoresin",
        price: "₹3,200",
        unit: "/Kg",
        image: "/ginger-oleoresin-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "Gingerols 15%-25%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Flavoring, Digestive Aid" },
        ],
      },
      {
        name: "Cinnamon Oleoresin",
        price: "₹4,200",
        unit: "/Kg",
        image: "/cinnamon-oleoresin-bottle.png",
        specs: [
          { label: "Active Ingredient", value: "Cinnamaldehyde 50%-65%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Flavoring, Antimicrobial" },
        ],
      },
    ],
  },
  {
    title: "Fruit Juice Powders",
    products: [
      {
        name: "Amla Juice Powder",
        price: "₹600",
        unit: "/Kg",
        image: "/amla-juice-powder-green.png",
        specs: [
          { label: "Active Ingredient", value: "Tannins, Vitamin C" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Rejuvenation, Skin & Hair Care" },
        ],
      },
      {
        name: "Pomegranate Juice Powder",
        price: "₹1,200",
        unit: "/Kg",
        image: "/pomegranate-juice-powder-red.png",
        specs: [
          { label: "Active Ingredient", value: "Ellagic Acid, Polyphenols" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Antioxidant, Heart Support" },
        ],
      },
      {
        name: "Beetroot Juice Powder",
        price: "₹800",
        unit: "/Kg",
        image: "/beetroot-juice-powder-red.png",
        specs: [
          { label: "Active Ingredient", value: "Betanin, Nitrates" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Cardiovascular Health, Energy" },
        ],
      },
      {
        name: "Orange Juice Powder",
        price: "₹700",
        unit: "/Kg",
        image: "/orange-juice-powder.png",
        specs: [
          { label: "Active Ingredient", value: "Vitamin C, Flavonoids" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Immunity Support, Flavoring" },
        ],
      },
      {
        name: "Mango Juice Powder",
        price: "₹900",
        unit: "/Kg",
        image: "/mango-juice-powder-yellow.png",
        specs: [
          { label: "Active Ingredient", value: "Carotenoids, Vitamin C" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Immune Health, Flavoring" },
        ],
      },
    ],
  },
  {
    title: "Phytochemicals",
    products: [
      {
        name: "Berberine HCL",
        price: "₹6,500",
        unit: "/Kg",
        image: "/berberine-hcl-powder.png",
        specs: [
          { label: "Active Ingredient", value: "Berberine" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Blood Sugar & Lipid Regulation" },
        ],
      },
      {
        name: "Curcumin",
        price: "₹4,200",
        unit: "/Kg",
        image: "/curcumin-powder-yellow.png",
        specs: [
          { label: "Active Ingredient", value: "Curcuminoids" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Antioxidant, Anti-inflammatory" },
        ],
      },
      {
        name: "Quercetin Dihydrate",
        price: "₹8,500",
        unit: "/Kg",
        image: "/quercetin-powder-yellow.png",
        specs: [
          { label: "Active Ingredient", value: "Quercetin" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Antioxidant, Allergy Relief" },
        ],
      },
      {
        name: "Resveratrol",
        price: "₹12,000",
        unit: "/Kg",
        image: "/resveratrol-powder-white.png",
        specs: [
          { label: "Active Ingredient", value: "Resveratrol" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Anti-aging, Cardiovascular Support" },
        ],
      },
      {
        name: "Natural Caffeine",
        price: "₹3,500",
        unit: "/Kg",
        image: "/natural-caffeine-powder.png",
        specs: [
          { label: "Active Ingredient", value: "Caffeine" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Energy, Alertness, Thermogenic" },
        ],
      },
    ],
  },
  {
    title: "Amino Acids",
    products: [
      {
        name: "L-Arginine HCL",
        price: "₹2,800",
        unit: "/Kg",
        image: "/l-arginine-powder-white.png",
        specs: [
          { label: "Active Ingredient", value: "L-Arginine" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Nitric Oxide Booster, Circulation" },
        ],
      },
      {
        name: "BCAA Blend",
        price: "₹3,200",
        unit: "/Kg",
        image: "/bcaa-powder-white.png",
        specs: [
          { label: "Active Ingredient", value: "Leucine, Isoleucine, Valine" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Muscle Recovery, Endurance" },
        ],
      },
      {
        name: "L-Glutathione Reduced",
        price: "₹15,000",
        unit: "/Kg",
        image: "/glutathione-powder-white.png",
        specs: [
          { label: "Active Ingredient", value: "Glutathione" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Antioxidant, Detox" },
        ],
      },
      {
        name: "L-Theanine",
        price: "₹8,500",
        unit: "/Kg",
        image: "/l-theanine-powder-white.png",
        specs: [
          { label: "Active Ingredient", value: "L-Theanine" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Relaxation, Cognitive Clarity" },
        ],
      },
      {
        name: "Creatine Monohydrate",
        price: "₹1,800",
        unit: "/Kg",
        image: "/creatine-powder-white.png",
        specs: [
          { label: "Active Ingredient", value: "Creatine" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Strength, Muscle Volume" },
        ],
      },
    ],
  },
  {
    title: "Nutraceuticals",
    products: [
      {
        name: "Coenzyme Q10",
        price: "₹8,500",
        unit: "/Kg",
        image: "/coenzyme-q10-powder.png",
        specs: [
          { label: "Active Ingredient", value: "CoQ10" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Heart Health, Energy Production" },
        ],
      },
      {
        name: "Resveratrol 98%",
        price: "₹12,000",
        unit: "/Kg",
        image: "/resveratrol-powder-white.png",
        specs: [
          { label: "Active Ingredient", value: "Resveratrol 98%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Anti-aging, Cardiovascular Support" },
        ],
      },
      {
        name: "Astaxanthin 10%",
        price: "₹15,000",
        unit: "/Kg",
        image: "/astaxanthin-powder-red.png",
        specs: [
          { label: "Active Ingredient", value: "Astaxanthin 10%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Eye Health, Anti-aging" },
        ],
      },
      {
        name: "Lutein 20%",
        price: "₹6,500",
        unit: "/Kg",
        image: "/lutein-powder-orange.png",
        specs: [
          { label: "Active Ingredient", value: "Lutein 20%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Eye Health, Blue Light Protection" },
        ],
      },
      {
        name: "Lycopene 10%",
        price: "₹4,200",
        unit: "/Kg",
        image: "/lycopene-powder-red.png",
        specs: [
          { label: "Active Ingredient", value: "Lycopene 10%" },
          { label: "Packaging Size", value: "1 kg" },
          { label: "Application", value: "Prostate Health, Antioxidant" },
        ],
      },
    ],
  },
]

export default function ProductRangeSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Product Range</h2>
          <Button
            variant="outline"
            className="hidden sm:flex items-center gap-2 text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
          >
            <span>View All Categories</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Product categories */}
        {productCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category heading */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-gray-700">{category.title}</h3>
              <Button variant="ghost" className="flex items-center gap-2 text-green-600 hover:text-green-700">
                <span>View All</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {category.products.map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
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
                    <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">{product.name}</h4>

                    <div className="text-lg font-bold text-green-600 mb-3">
                      <span className="text-sm">₹</span>
                      {product.price.replace("₹", "")}
                      <span className="text-sm text-gray-500 font-medium">{product.unit}</span>
                    </div>

                    {/* Product specifications */}
                    <div className="space-y-1 mb-4">
                      {product.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="text-sm">
                          <span className="font-medium text-gray-600">{spec.label}:</span>
                          <span className="text-gray-500 ml-1">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Get Quote button */}
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium" size="sm">
                      Get Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

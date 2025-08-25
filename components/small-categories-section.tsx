import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Herbal Extract",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/295894096/KB/UL/KY/44441454/stevia-leaf-extract-125x125.jpg",
    href: "/herbal-extract",
  },
  {
    name: "Herbal Powder",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/530406893/DA/OV/CX/44441454/red-chilli-powder-125x125.jpg",
    href: "/herbal-powder",
  },
  {
    name: "Medicinal Herbal Extracts",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/530075361/UY/EH/PB/44441454/uva-ursi-extract-125x125.jpg",
    href: "/medicinal-herbal-extracts",
  },
  {
    name: "Spray Dried Powders",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/295896064/FA/CG/YO/44441454/spray-dried-lemon-powder-125x125.jpg",
    href: "/spray-dried-powders",
  },
  {
    name: "Natural Herbal Extracts",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/3/295511252/JS/BU/VX/44441454/plant-extract-125x125.png",
    href: "/natural-herbal-extracts",
  },
  {
    name: "Nutraceuticals Raw Materials",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/295898267/LA/RG/CT/44441454/griffonia-seed-extract-125x125.jpg",
    href: "/nutraceuticals-raw-materials",
  },
  {
    name: "Pure Herbal Extracts",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/530010150/BS/PN/HP/44441454/pine-bark-extract-125x125.jpg",
    href: "/pure-herbal-extracts",
  },
  {
    name: "Organic Herbal Extracts",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/6/AQ/RC/XR/44441454/guduchi-giloy-extract-125x125.jpg",
    href: "/organic-herbal-extracts",
  },
  {
    name: "Essential Oil",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/422739227/SA/AE/PC/44441454/amla-powder-without-seed-125x125.jpg",
    href: "/essential-oil",
  },
]

export default function SmallCategoriesSection() {
  return (
    <section className="py-8 hidden md:block bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-9 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <Link href={category.href} className="block group">
                <div className="flex items-center justify-center overflow-hidden rounded-full w-20 h-20 mx-auto mb-2 bg-gray-50 group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-300 line-clamp-2 leading-tight">
                  {category.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SmallCategoriesSection from "@/components/small-categories-section"
import CompanyInfoSection from "@/components/company-info-section"
import ReadMoreSection from "@/components/read-more-section"
import ProductCategoriesSection from "@/components/product-categories-section"
import Footer from "@/components/footer"
import ProductRangeSection from "@/components/product-range-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32">
        <HeroSection />
        <SmallCategoriesSection />
        <ProductCategoriesSection />
        <ProductRangeSection />
        <CompanyInfoSection />
        <ReadMoreSection />
        <Footer />
      </div>
    </main>
  )
}

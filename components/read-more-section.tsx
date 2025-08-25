import type React from "react"

const ReadMoreSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
              <img
                src="/ayurvedic-herbs-and-natural-ingredients.png"
                alt="Ayurvedic Herbs and Natural Ingredients"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl font-bold text-green-800 mb-6">About PuraVida</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Pura Vida established in India, the country of Ayurveda, is dedicated to manufacturing, commercialization
              and distribution of natural botanical extracts, Herb Powders, Essential Oils from all over the world.
              High-quality ingredient selection along with cooperative manufacturing presence in various Indian natural
              resource rich states is our core competency. Quality, responsibility, commitment, consistency and great
              service are among other values that set the standard of action to build long term business relationships.
              We'll do everything under the law of country, to satisfy our customer needs and building long term
              partnerships.
            </p>
            <div className="mt-8">
              <button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors font-semibold">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReadMoreSection

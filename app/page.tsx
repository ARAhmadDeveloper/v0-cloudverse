import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { FeatureSection } from "@/components/feature-section"
import { AboutSection } from "@/components/about-section"
import { SecondFeatureSection } from "@/components/second-feature-section"
import { SalesSection } from "@/components/sales-section"
import { MarketSection } from "@/components/market-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-[#DDEDFD]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-medium text-blue-800 mb-8">
              <span className="text-teal-500 mr-1.5">•</span>
              WELCOME TO CLOUDVERSE
              <span className="text-teal-500 ml-1.5">•</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-blue-900">
              <span className="block">Efficient Operations</span>
              <span className="block">Increased Revenue</span>
            </h1>

            {/* Subheading */}
            <p className="mt-8 text-lg text-blue-800/70 max-w-lg">
              When operations are efficient, its the way for revenue growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 flex items-center">
                GET STARTED
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="bg-white text-blue-800 hover:bg-blue-50 border-blue-200 rounded-full px-8 py-6 flex items-center"
              >
                LEARN MORE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Contact text */}
            <p className="mt-6 text-sm text-blue-700/60">Contact for free</p>
          </div>
        </div>
      </div>

      <FeatureSection />
      <AboutSection />
      <SecondFeatureSection />
      <SalesSection />
      <MarketSection />
      <CTASection />
      <Footer />
    </div>
  )
}

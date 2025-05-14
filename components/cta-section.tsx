import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-[#DDEDFD] py-24 px-4 sm:px-6 lg:px-8 rounded-3xl mx-4 sm:mx-8 lg:mx-16 my-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Seamless integration to all your best Apps
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
          Maximize your email growth with our powerful integrations, fueled by data-driven insights. Embrace the future
          of business by leveraging our cutting-edge tools to bring in more data and drive unparalleled growth for your
          company.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 flex items-center">
            GET STARTED
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Placeholder for image or additional content */}
        <div className="mt-16 bg-white rounded-xl h-80 w-full"></div>
      </div>
    </section>
  )
}

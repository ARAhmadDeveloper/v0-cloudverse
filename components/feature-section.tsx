import { ArrowDown } from "react-feather"

export function FeatureSection() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 max-w-3xl mx-auto">
            Empowering Entrepreneurs for Success
          </h2>
        </div>

        {/* Feature Cards - Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-blue-50 rounded-xl p-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tailored for Entrepreneurs</h3>
              <p className="text-gray-600 mb-6">
                Our SaaS solution is built with the unique needs of entrepreneurs in mind
              </p>
            </div>
            <div className="h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,50 C20,40 40,80 60,50 C80,20 100,60 120,50 C140,40 160,70 180,60 C200,50 220,30 240,40 C260,50 280,60 300,50"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />
                <circle cx="180" cy="60" r="5" fill="#3B82F6" />
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50 rounded-xl p-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Growth</h3>
              <p className="text-gray-600 mb-6">
                Our SaaS solution is built with the unique needs of entrepreneurs in mind
              </p>
            </div>
            <div className="h-32 relative flex items-end justify-center space-x-4">
              <div className="w-1/3 bg-blue-200 h-1/3 rounded-t-md"></div>
              <div className="w-1/3 bg-blue-300 h-2/3 rounded-t-md"></div>
              <div className="w-1/3 bg-blue-400 h-full rounded-t-md"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50 rounded-xl p-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600 mb-6">
                Our SaaS solution is built with the unique needs of entrepreneurs in mind
              </p>
            </div>
            <div className="h-32 relative bg-blue-100 rounded-md p-3">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-xs text-gray-500">user 1 • 10:00 AM</span>
              </div>
              <div className="bg-white rounded p-2 mb-4 max-w-[80%]">
                <p className="text-xs">Hi, I need your help</p>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 rounded p-2 max-w-[80%]">
                  <p className="text-xs text-white">We're here to help</p>
                </div>
              </div>
              <div className="flex items-center justify-end mt-1">
                <span className="text-xs text-gray-500">admin • 10:05 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards - Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 4 */}
          <div className="bg-blue-50 rounded-xl p-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordability</h3>
              <p className="text-gray-600 mb-6">
                Control spend, remove reporting admin, and say goodbye to broker fees
              </p>
            </div>
            <div className="h-32 relative">
              <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full" height="100" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <path d="M0,0 L400,80 L400,100 L0,100 Z" fill="#BFDBFE" opacity="0.5" />
                  <path d="M0,20 L400,100" stroke="#3B82F6" strokeWidth="3" fill="none" />
                </svg>
                <div className="absolute right-1/4 bottom-1/4 text-blue-500 flex items-center">
                  <span className="text-2xl font-bold">$$</span>
                  <ArrowDown className="h-6 w-6 ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-blue-50 rounded-xl p-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">All-in-one Place</h3>
              <p className="text-gray-600 mb-6">
                Manage policies from multiple providers in one single platform and make changes it neccessary
              </p>
            </div>
            <div className="h-32 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4 w-full">
                  <div className="aspect-square rounded-full bg-white shadow-md"></div>
                  <div className="aspect-square rounded-full bg-white shadow-md"></div>
                  <div className="aspect-square rounded-full bg-white shadow-md"></div>
                  <div className="aspect-square rounded-full bg-white shadow-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

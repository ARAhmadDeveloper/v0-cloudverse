import { ThumbsUp, Mail, FileText, MoreVertical, TrendingUp } from "lucide-react"

export function MarketSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Dashboard Cards */}
          <div className="bg-blue-50 p-8 rounded-xl relative">
            {/* Revenue Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8 relative">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-600 text-sm">This month revenue</p>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-900">$152,568.00</span>
                    <span className="ml-2 text-sm font-medium text-green-500 bg-green-50 px-2 py-1 rounded flex items-center">
                      12%
                      <TrendingUp className="h-3 w-3 ml-1" />
                    </span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>

              {/* Bar Chart */}
              <div className="h-32 flex items-end space-x-8">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-cyan-500 h-24 rounded-t-md"></div>
                  <span className="text-xs text-gray-500 mt-1">Sep</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-cyan-500 h-16 rounded-t-md"></div>
                  <span className="text-xs text-gray-500 mt-1">Oct</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-cyan-500 h-28 rounded-t-md"></div>
                  <span className="text-xs text-gray-500 mt-1">Nov</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-cyan-500 h-20 rounded-t-md"></div>
                  <span className="text-xs text-gray-500 mt-1">Dec</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-cyan-500 h-14 rounded-t-md"></div>
                  <span className="text-xs text-gray-500 mt-1">Jan</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex mt-4 text-xs">
                <div className="flex items-center mr-4">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-1"></div>
                  <span>Revenue</span>
                  <span className="ml-2 text-gray-500">154.5k</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-100 rounded-full mr-1"></div>
                  <span>Target</span>
                  <span className="ml-2 text-gray-500">144.5k</span>
                </div>
              </div>
            </div>

            {/* Performance Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-800">Top Perfomance</h3>
                <div className="bg-white border border-gray-200 rounded-md px-4 py-1 text-sm text-gray-700">
                  This week
                </div>
              </div>

              {/* Category breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mb-1"></div>
                  <span className="text-xs text-gray-600 mb-1">Furniture</span>
                  <p className="font-semibold">$55,235</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div>
                  <span className="text-xs text-gray-600 mb-1">Technology</span>
                  <p className="font-semibold">$15,235</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mb-1"></div>
                  <span className="text-xs text-gray-600 mb-1">Gaming</span>
                  <p className="font-semibold">$5,235</p>
                </div>
              </div>

              {/* Gauge Chart */}
              <div className="flex justify-center">
                <div className="relative w-48 h-24">
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    {/* Background arc */}
                    <path
                      d="M10,50 A40,40 0 0,1 90,50"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />

                    {/* Blue segment */}
                    <path
                      d="M10,50 A40,40 0 0,1 50,10"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />

                    {/* Orange segment */}
                    <path
                      d="M50,10 A40,40 0 0,1 70,20"
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />

                    {/* Green segment */}
                    <path
                      d="M70,20 A40,40 0 0,1 80,30"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Amount label */}
                  <div className="absolute top-0 left-8 text-sm text-gray-600">$24k</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Compare against the market</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Easily benchmark against local companies and create packages based on market data
            </p>

            {/* Feature List */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-2 bg-blue-50 rounded-md">
                    <ThumbsUp className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Use limited-time offers or exclusive deals to prompt immediate action.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-2 bg-blue-50 rounded-md">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Ensure emails are mobile-friendly to reach customers on-the-go
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-2 bg-blue-50 rounded-md">
                    <FileText className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Continuously test different strategies and analyze results to refine your approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

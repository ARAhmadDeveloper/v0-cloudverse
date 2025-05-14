import { ThumbsUp, Mail, FileText, Calendar } from "lucide-react"

export function SalesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automated
              <br />
              Expense Management
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Streamline the process of tracking and managing expenses by implementing robust automation features
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

          {/* Right Column - Dashboard Card */}
          <div className="bg-blue-50 rounded-xl p-8 shadow-sm">
            {/* Card Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-gray-800">Sales Data</h3>
              <div className="flex items-center bg-white rounded-md px-4 py-2 text-sm text-gray-700">
                January 2023
                <Calendar className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Revenue Display */}
            <div className="mb-8">
              <p className="text-gray-600 text-sm">Revenue</p>
              <div className="flex items-center">
                <span className="text-4xl font-bold text-gray-900">$80,300</span>
                <span className="ml-2 text-sm font-medium text-green-500 bg-green-50 px-2 py-1 rounded">+4%</span>
              </div>
            </div>

            {/* Donut Chart */}
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48">
                {/* This is a simplified donut chart - in a real app you might use a charting library */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="40" fill="white" stroke="#E5E7EB" strokeWidth="20" />

                  {/* Segments - these percentages are approximated from the image */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#FECACA"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#BBF7D0"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="188.4"
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#93C5FD"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="125.6"
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#3B82F6"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="62.8"
                    transform="rotate(-90 50 50)"
                  />
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-xs text-gray-500">Select by</p>
                  <p className="text-xs text-gray-500">category</p>
                </div>

                {/* Cursor pointer */}
                <div className="absolute bottom-0 right-4">
                  <div className="w-4 h-4 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amount labels */}
            <div className="flex justify-between text-sm text-gray-600 mb-6">
              <span>$24k</span>
              <span>$19k</span>
              <span>$11k</span>
            </div>

            {/* Category breakdown */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Furniture</span>
                </div>
                <p className="font-semibold">$55,235</p>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Tech</span>
                </div>
                <p className="font-semibold">$15,235</p>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Gaming</span>
                </div>
                <p className="font-semibold">$5,235</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

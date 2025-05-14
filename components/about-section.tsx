export function AboutSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Gray background */}
        <div className="bg-gray-200 min-h-[600px]">
          {/* This side is empty in the reference image */}
          {/* Could be used for an image or additional content */}
        </div>

        {/* Right side - Light blue background with content */}
        <div className="bg-blue-50 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          {/* Section label */}
          <p className="text-blue-500 font-medium mb-6">MARKETING</p>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Increase your sales via email marketing</h2>

          {/* Description */}
          <p className="text-gray-600 mb-16 max-w-lg">
            Streamline the process of tracking and managing expenses by implementing robust automation features
          </p>

          {/* Stats section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Stat 1 */}
            <div>
              <p className="text-5xl font-bold text-blue-900 mb-4">200+</p>
              <p className="text-gray-600">reconcile expenses, reducing manual effort and minimizing.</p>
            </div>

            {/* Stat 2 */}
            <div>
              <p className="text-5xl font-bold text-blue-900 mb-4">400K</p>
              <p className="text-gray-600">Provide real-time visibility into spending patterns and budget</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

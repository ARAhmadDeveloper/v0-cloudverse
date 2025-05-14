export function SecondFeatureSection() {
  return (
    <section className="bg-blue-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 max-w-3xl mx-auto">
            Empowering Entrepreneurs for Success
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Advanced Automation */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="h-48 mb-8 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,50 C20,40 40,80 60,50 C80,20 100,60 120,50 C140,40 160,70 180,60 C200,50 220,30 240,40 C260,50 280,60 300,50"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />
                <circle cx="180" cy="60" r="5" fill="#3B82F6" />
                <line x1="180" y1="60" x2="180" y2="20" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Advanced Automation</h3>
            <p className="text-gray-600 text-center">
              Our SaaS solution is built with the unique needs of entrepreneurs in mind
            </p>
          </div>

          {/* Card 2 - Dynamic Personalization */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="h-48 mb-8 flex items-end justify-center">
              <div className="flex items-end space-x-8 h-full w-full max-w-xs">
                <div className="w-1/3 bg-blue-200 h-1/3 rounded-t-md border-t-2 border-x-2 border-blue-400"></div>
                <div className="w-1/3 bg-blue-200 h-2/3 rounded-t-md border-t-2 border-x-2 border-blue-400"></div>
                <div className="w-1/3 bg-blue-200 h-full rounded-t-md border-t-2 border-x-2 border-blue-400"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Dynamic Personalization</h3>
            <p className="text-gray-600 text-center">Engage your audience like never before with personalized</p>
          </div>

          {/* Card 3 - Powerful Analytics */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="h-48 mb-8 flex items-center justify-center">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <path d="M90,90 L90,10 A80,80 0 0,1 160,90 Z" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1" />
                <path d="M90,90 L160,90 A80,80 0 0,1 90,170 Z" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1" />
                <path d="M90,90 L90,170 A80,80 0 0,1 20,90 Z" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1" />
                <path d="M90,90 L20,90 A80,80 0 0,1 90,10 Z" fill="#3B82F6" stroke="#3B82F6" strokeWidth="1" />
                <circle cx="90" cy="90" r="60" fill="white" />
                <circle cx="90" cy="90" r="5" fill="#3B82F6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Powerful Analytics</h3>
            <p className="text-gray-600 text-center">Knowledge is power! Gain valuable insights into the performance</p>
          </div>
        </div>
      </div>
    </section>
  )
}

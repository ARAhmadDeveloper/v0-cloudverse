import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#EBF5FF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">CloudVerse</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="relative group">
              <button className="flex items-center font-semibold text-gray-900">
                PRODUCTS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center font-semibold text-gray-900">
                PLATFORM
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center font-semibold text-gray-900">
                SOLUTION
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center font-semibold text-gray-900">
                RESOURCES
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>

        {/* Middle section - empty space */}
        <div className="h-24"></div>

        {/* Bottom section with address, social media, and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Address */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">Springfield, 8831 United States</p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-3 mb-4 md:mb-0">
            <a
              href="#"
              className="w-8 h-8 bg-blue-300 rounded flex items-center justify-center text-white hover:bg-blue-400 transition-colors"
              aria-label="Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-blue-300 rounded flex items-center justify-center text-white hover:bg-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-blue-300 rounded flex items-center justify-center text-white hover:bg-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-blue-300 rounded flex items-center justify-center text-white hover:bg-blue-400 transition-colors"
              aria-label="VK"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-gray-600">CloudVerse © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black py-10 text-gray-400 text-center border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <p className="mb-4">&copy; {new Date().getFullYear()} Corexa Labs. All rights reserved.</p>
        <nav className="flex justify-center space-x-6 text-sm">
          <Link href="#" className="hover:text-corexa-blue-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-corexa-blue-400 transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-corexa-blue-400 transition-colors">
            Sitemap
          </Link>
        </nav>
      </div>
    </footer>
  )
} 
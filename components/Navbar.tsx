import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold tracking-tight text-blue-600">
            My Gallery
          </Link>
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
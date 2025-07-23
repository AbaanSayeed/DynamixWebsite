// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        
        {/* Brand or copyright */}
        <div className="text-gray-500">
          &copy; {new Date().getFullYear()} Synap. All rights reserved.
        </div>

        {/* Navigation links */}
        <div className="flex gap-6 flex-wrap justify-center text-gray-400">
          <a href="/about" className="hover:text-white transition-colors">Synaptium</a>
          <a href="/extractor" className="hover:text-white transition-colors">Extractors</a>
          <a href="/swarms" className="hover:text-white transition-colors">Swarms</a>
        </div>

        {/* Social links or icon placeholder */}
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9 12.14 12.14 0 01-8.82-4.48 4.28 4.28 0 001.32 5.71A4.22 4.22 0 012 9.53v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.98 8.6 8.6 0 01-5.32 1.84A8.72 8.72 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0024 5.5a8.5 8.5 0 01-2.54.7z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

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
        

        {/* Social links or icon placeholder */}
        <div className="flex gap-4">
       <div className="flex gap-6 flex-wrap justify-center text-gray-400">
          <a href="/about" className="hover:text-white transition-colors">Synaptium</a>
          <a href="/extractor" className="hover:text-white transition-colors">Extractors</a>
          <a href="/swarms" className="hover:text-white transition-colors">Swarms</a>
        </div>
        </div>
      </div>
    </footer>
  );
}

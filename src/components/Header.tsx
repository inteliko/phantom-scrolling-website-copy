
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold">BD Global Technology</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/showcase" className="text-gray-600 hover:text-gray-900 text-base">Showcase</Link>
            <Link to="/talents" className="text-gray-600 hover:text-gray-900 text-base">Talents</Link>
            <Link to="/scope" className="text-gray-600 hover:text-gray-900 text-base">Scope</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 text-base">Pricing</Link>
            <Link to="/apply-talent" className="text-gray-600 hover:text-gray-900 text-base">Apply as a Talent</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/book-call">
              <Button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 text-base">
                Book a Call
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

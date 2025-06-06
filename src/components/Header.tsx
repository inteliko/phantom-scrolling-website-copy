
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
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
            <Link to="/showcase" className="text-gray-600 hover:text-gray-900">Showcase</Link>
            <Link to="/talents" className="text-gray-600 hover:text-gray-900">Talents</Link>
            <Link to="/scope" className="text-gray-600 hover:text-gray-900">Scope</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/apply-talent" className="text-gray-600 hover:text-gray-900">Apply as a Talent</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
              Book a Call
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

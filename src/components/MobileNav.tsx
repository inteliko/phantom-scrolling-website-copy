
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              to="/showcase" 
              className="text-2xl font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Showcase
            </Link>
            <Link 
              to="/talents" 
              className="text-2xl font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Talents
            </Link>
            <Link 
              to="/scope" 
              className="text-2xl font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Scope
            </Link>
            <Link 
              to="/pricing" 
              className="text-2xl font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/apply-talent" 
              className="text-2xl font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Apply as a Talent
            </Link>
            <Button 
              className="bg-black text-white px-8 py-3 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;


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
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black w-screen h-screen">
          <div className="flex flex-col items-center justify-center h-full w-full space-y-8 px-6">
            <Link 
              to="/showcase" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Showcase
            </Link>
            <Link 
              to="/talents" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Talents
            </Link>
            <Link 
              to="/scope" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Scope
            </Link>
            <Link 
              to="/pricing" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/apply-talent" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Apply as a Talent
            </Link>
            <Button 
              className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-200 transition-colors"
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


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TalentCarousel from "@/components/TalentCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-growmodo-blue/10 to-growmodo-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-growmodo-green/10 to-growmodo-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Large centered logo with enhanced hover effects */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-growmodo-blue to-growmodo-green rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-3xl group cursor-pointer">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-white transform transition-transform duration-300 group-hover:scale-110">
                <path d="M6 6h7.5c2.485 0 4.5 2.015 4.5 4.5v0c0 2.485-2.015 4.5-4.5 4.5H7.5v3h4.5c2.485 0 4.5-2.015 4.5-4.5v0c0-2.485 2.015-4.5 4.5-4.5h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="6" cy="10.5" r="1.5" fill="currentColor"/>
                <circle cx="18" cy="13.5" r="1.5" fill="currentColor"/>
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight transform transition-all duration-700 hover:text-transparent hover:bg-gradient-to-r hover:from-growmodo-blue hover:to-growmodo-green hover:bg-clip-text cursor-default">
            Hire Your Whole Design &<br />
            Dev Team With a Few Clicks
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-500 hover:text-gray-800 hover:scale-105 cursor-default">
            Get on-demand access to your own team of designers, developers & project 
            managers without the hassle of managing full-time employees.
          </p>
          
          {/* Enhanced buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/book-call" className="transform transition-all duration-300 hover:scale-105">
              <Button className="bg-gradient-to-r from-growmodo-blue to-growmodo-green text-white px-8 py-4 text-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-lg relative overflow-hidden group">
                <span className="relative z-10">Book a Discovery Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-growmodo-green to-growmodo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
            <Link to="/showcase" className="transform transition-all duration-300 hover:scale-105">
              <Button variant="outline" className="border-2 border-growmodo-blue text-growmodo-blue px-8 py-4 text-xl font-medium hover:bg-growmodo-blue hover:text-white transition-all duration-300 rounded-lg relative overflow-hidden group">
                <span className="relative z-10">See Previous Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-growmodo-blue to-growmodo-green opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
          
          {/* Enhanced features list with hover effects */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg text-gray-700">
            <div className="flex items-center gap-2 transform transition-all duration-300 hover:scale-110 hover:text-growmodo-blue cursor-pointer group">
              <Check className="w-6 h-6 text-growmodo-green transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
              <span className="font-medium">Unlimited design & dev requests</span>
            </div>
            <div className="flex items-center gap-2 transform transition-all duration-300 hover:scale-110 hover:text-growmodo-blue cursor-pointer group">
              <Check className="w-6 h-6 text-growmodo-green transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
              <span className="font-medium">Monthly flat-rate</span>
            </div>
            <div className="flex items-center gap-2 transform transition-all duration-300 hover:scale-110 hover:text-growmodo-blue cursor-pointer group">
              <Check className="w-6 h-6 text-growmodo-green transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
              <span className="font-medium">No Contract. Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Carousel Section with enhanced hover effects */}
      <div className="transform transition-all duration-500 hover:bg-gray-100">
        <TalentCarousel />
      </div>

      <Footer />
    </div>
  );
};

export default Index;

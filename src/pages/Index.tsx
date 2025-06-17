
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* Large centered logo */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-growmodo-blue to-growmodo-green rounded-full flex items-center justify-center shadow-2xl">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M6 6h7.5c2.485 0 4.5 2.015 4.5 4.5v0c0 2.485-2.015 4.5-4.5 4.5H7.5v3h4.5c2.485 0 4.5-2.015 4.5-4.5v0c0-2.485 2.015-4.5 4.5-4.5h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="6" cy="10.5" r="1.5" fill="currentColor"/>
                <circle cx="18" cy="13.5" r="1.5" fill="currentColor"/>
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Hire Your Whole Design &<br />
            Dev Team With a Few Clicks
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get on-demand access to your own team of designers, developers & project 
            managers without the hassle of managing full-time employees.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/book-call">
              <Button className="bg-gradient-to-r from-growmodo-blue to-growmodo-green text-white px-8 py-4 text-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-lg">
                Book a Discovery Call
              </Button>
            </Link>
            <Link to="/showcase">
              <Button variant="outline" className="border-2 border-growmodo-blue text-growmodo-blue px-8 py-4 text-xl font-medium hover:bg-growmodo-blue hover:text-white transition-all duration-300 rounded-lg">
                See Previous Work
              </Button>
            </Link>
          </div>
          
          {/* Features list */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg text-gray-700">
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-growmodo-green" />
              <span>Unlimited design & dev requests</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-growmodo-green" />
              <span>Monthly flat-rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-growmodo-green" />
              <span>No Contract. Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

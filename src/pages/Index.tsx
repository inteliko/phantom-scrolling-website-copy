
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-growmodo-blue/5 to-growmodo-green/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Large centered logo with enhanced hover effects */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-growmodo-blue to-growmodo-green rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-3xl group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-growmodo-green to-growmodo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-white transform transition-transform duration-300 group-hover:scale-110 relative z-10">
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

      {/* Services Preview Section */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-green-50/50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              What We <span className="text-growmodo-blue">Deliver</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we handle everything your business needs to succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-growmodo-blue to-growmodo-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Web Design</h3>
              <p className="text-gray-600">Beautiful, responsive websites that convert visitors into customers.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-growmodo-blue to-growmodo-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Development</h3>
              <p className="text-gray-600">Custom web applications built with modern technologies and best practices.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-growmodo-blue to-growmodo-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Project Management</h3>
              <p className="text-gray-600">Dedicated project managers to keep everything on track and on time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Carousel Section with enhanced hover effects */}
      <div className="transform transition-all duration-500 hover:bg-gray-100">
        <TalentCarousel />
      </div>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-growmodo-blue to-growmodo-green">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="transform transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Projects Delivered</div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Expert Talents</div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-xl opacity-90">Client Satisfaction</div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Ready to Build Something <span className="text-growmodo-blue">Amazing?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of businesses that trust us with their design and development needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-call">
              <Button className="bg-gradient-to-r from-growmodo-blue to-growmodo-green text-white px-8 py-4 text-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-lg relative overflow-hidden group">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-growmodo-green to-growmodo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-2 border-growmodo-blue text-growmodo-blue px-8 py-4 text-xl font-medium hover:bg-growmodo-blue hover:text-white transition-all duration-300 rounded-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

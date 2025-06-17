
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Users, Code, Paintbrush, Globe, Smartphone, ShoppingCart, BarChart3, Shield, Zap, Clock, Award } from "lucide-react";

const Scope = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
            What We Build &<br />
            <span className="text-growmodo-blue">What We Don't</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Crystal clear scope of work so you know exactly what to expect from your 
            dedicated design and development team.
          </p>
          
          <Link to="/book-call">
            <Button className="bg-gradient-to-r from-growmodo-blue to-growmodo-green text-white px-8 py-4 text-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-lg">
              Book a Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              What We <span className="text-green-600">Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team specializes in creating high-quality digital solutions across multiple platforms and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Custom Websites",
                description: "Responsive, fast-loading websites built with modern frameworks like React, Next.js, and Vue.js",
                features: ["Mobile-first design", "SEO optimized", "Performance focused", "Custom animations"]
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Web Applications",
                description: "Complex web apps with user authentication, databases, and real-time functionality",
                features: ["User dashboards", "Real-time updates", "Database integration", "API development"]
              },
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "E-commerce Solutions",
                description: "Full-featured online stores with payment processing and inventory management",
                features: ["Payment gateways", "Inventory tracking", "Order management", "Customer accounts"]
              },
              {
                icon: <Paintbrush className="w-8 h-8" />,
                title: "UI/UX Design",
                description: "Beautiful, user-friendly interfaces designed for optimal user experience",
                features: ["Wireframing", "Prototyping", "User research", "Design systems"]
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Business Tools",
                description: "Custom CRM systems, project management tools, and business automation",
                features: ["Workflow automation", "Data visualization", "Team collaboration", "Reporting tools"]
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "API Integration",
                description: "Seamless integration with third-party services and custom API development",
                features: ["RESTful APIs", "GraphQL", "Webhook integration", "Data synchronization"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-green-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Build Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              What We <span className="text-red-600">Don't Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To maintain our high standards and expertise, we focus on specific areas and don't work on certain types of projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Native Mobile Apps",
                description: "We don't develop native iOS or Android applications. However, we can build responsive web apps that work great on mobile devices.",
                icon: <Smartphone className="w-8 h-8" />
              },
              {
                title: "Desktop Software",
                description: "We don't create desktop applications for Windows, Mac, or Linux. Our focus is on web-based solutions.",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Blockchain/Crypto Projects",
                description: "We don't work on cryptocurrency exchanges, NFT marketplaces, or blockchain-based applications.",
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: "Gaming Applications",
                description: "We don't develop games or gaming-related applications. Our expertise is in business and productivity tools.",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Hardware Integration",
                description: "We don't work on projects requiring integration with physical hardware or IoT devices.",
                icon: <Clock className="w-8 h-8" />
              },
              {
                title: "Adult Content",
                description: "We don't work on projects involving adult content, gambling, or other restricted industries.",
                icon: <Award className="w-8 h-8" />
              }
            ].map((limitation, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-red-600 mt-1">
                    <X className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3">{limitation.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{limitation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our <span className="text-growmodo-blue">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and technical requirements through detailed discussions."
              },
              {
                step: "02", 
                title: "Planning",
                description: "Our team creates a comprehensive project plan with timelines, milestones, and technical specifications."
              },
              {
                step: "03",
                title: "Development",
                description: "We build your solution using best practices, with regular updates and feedback sessions."
              },
              {
                step: "04",
                title: "Launch",
                description: "After thorough testing, we deploy your project and provide ongoing support and maintenance."
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-growmodo-blue to-growmodo-green rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-growmodo-blue mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-growmodo-blue to-growmodo-green">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your requirements and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-call">
              <Button className="bg-white text-growmodo-blue px-8 py-4 text-xl font-medium hover:bg-gray-100 transition-all duration-300 rounded-lg">
                Book a Discovery Call
              </Button>
            </Link>
            <Link to="/showcase">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 text-xl font-medium hover:bg-white hover:text-growmodo-blue transition-all duration-300 rounded-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scope;

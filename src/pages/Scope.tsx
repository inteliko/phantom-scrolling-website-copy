import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Scope = () => {
  const services = [
    {
      category: "Design Services",
      items: [
        "UI/UX Design",
        "Web Design",
        "Mobile App Design",
        "Brand Identity",
        "Logo Design",
        "Print Design",
        "Social Media Graphics",
        "Presentations",
        "Packaging Design",
        "Illustrations"
      ]
    },
    {
      category: "Development Services",
      items: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "WordPress Development",
        "Shopify Development",
        "E-commerce Solutions",
        "API Integration",
        "Database Design",
        "Performance Optimization",
        "Maintenance & Support"
      ]
    },
    {
      category: "Digital Marketing",
      items: [
        "Content Strategy",
        "SEO Optimization",
        "Social Media Management",
        "Email Marketing",
        "PPC Campaigns",
        "Analytics & Reporting",
        "Conversion Optimization",
        "Digital Advertising",
        "Marketing Automation",
        "Brand Strategy"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Scope of Work
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From concept to completion, we handle all aspects of design and development for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">{service.category}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-growmodo-green flex-shrink-0" />
                      <span className="text-gray-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Discovery</h4>
              <p className="text-gray-600 text-base">We understand your needs and project requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Planning</h4>
              <p className="text-gray-600 text-base">We create a detailed roadmap and timeline</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Execution</h4>
              <p className="text-gray-600 text-base">Our experts bring your vision to life</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-green rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600 text-base">We deliver exceptional results on time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your project requirements and how we can help.
          </p>
          <Button className="bg-black text-white px-8 py-3 text-lg">
            Book a Discovery Call
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Scope;

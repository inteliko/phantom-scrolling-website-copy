import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Showcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All", "UI/UX Design", "Mobile", "Ad Creative", "Social Media Graphics", 
    "Presentation", "Packaging", "Illustrations", "eBook & Digital Guides", 
    "Branding", "Merch", "Print Design & Stationary", "Poster"
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "Mobile",
      title: "Mobile App Design Collection",
      image: "/lovable-uploads/68e3efce-9f90-461b-b9a4-bb323c5dc4f4.png",
      description: "Various mobile app interfaces showcasing modern design principles"
    },
    {
      id: 2,
      category: "UI/UX Design",
      title: "Web & Dashboard Designs",
      image: "/lovable-uploads/b70b02c9-6355-4086-ac6d-bea8fb03bba2.png",
      description: "Clean and functional web interfaces and dashboard designs"
    },
    {
      id: 3,
      category: "Print Design & Stationary",
      title: "Brand Identity Materials",
      image: "/lovable-uploads/36753a71-1856-4b9d-a422-e01ee181a666.png",
      description: "Complete brand identity and print design solutions"
    },
    {
      id: 4,
      category: "Branding",
      title: "Brand Guidelines & Systems",
      image: "/lovable-uploads/566bc442-6476-465a-8511-7e28ed062cf6.png",
      description: "Comprehensive brand guideline documents and design systems"
    },
    {
      id: 5,
      category: "Illustrations",
      title: "Creative Illustrations & Graphics",
      image: "/lovable-uploads/98174431-d1e5-419a-8eed-acd6cbca6716.png",
      description: "Custom illustrations and creative graphic design work"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Design & Code That Helps<br />
            Your Business Grow
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a look at some of our recent projects.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === filter
                    ? "bg-growmodo-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <span className="inline-block mt-2 text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white px-8 py-3 text-lg">
              Book a Discovery Call
            </Button>
            <Button variant="outline" className="bg-white text-black px-8 py-3 text-lg border-0">
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showcase;

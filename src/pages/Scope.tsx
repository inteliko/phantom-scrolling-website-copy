
import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Scope = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["UX Design"]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const taskCategories = [
    "UX Design",
    "UI Design", 
    "Graphic Design",
    "Video & Animation",
    "Development",
    "Maintenance",
    "SEO",
    "Hosting",
    "Automation",
    "No Code",
    "Conversion Optimization",
    "Advice"
  ];

  const projectCategories = [
    "Websites",
    "Funnels",
    "Marketplace",
    "Portal",
    "Directory Site"
  ];

  const services = {
    "UX Design": [
      {
        title: "Sitemap / Information Architecture",
        description: "Give me a 10,000-foot view of my website and map out the content sections for each page of my website or funnel to create a clear and intuitive user flow.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      },
      {
        title: "Website Wireframe", 
        description: "Create a conversion-optimized wireframe for my landing page or website.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      }
    ],
    "UI Design": [
      {
        title: "Homepage UI Design",
        description: "Create a pixel-perfect design concept for my new homepage that impresses my customers.",
        duration: "1-3 DAYS AVG. TURNAROUND", 
        platforms: ["Figma", "Adobe XD"]
      },
      {
        title: "Internal Web Page UI Design",
        description: "Design my internal web pages based on your pre-defined design guidelines or homepage concept.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      },
      {
        title: "Landing Page UI Design",
        description: "Design a high-converting landing page concept for my product or service.",
        duration: "1-3 DAYS AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      },
      {
        title: "Web App UI Design", 
        description: "Design a new user interface for my web app based on my current version or new wireframes.",
        duration: "1-4 DAYS AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      },
      {
        title: "Mobile App UI Design",
        description: "Create a user-centric design concept for my mobile app based on a wireframe.",
        duration: "1-4 DAYS AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      }
    ],
    "Graphic Design": [
      {
        title: "Brand Identity",
        description: "Create new brand guidelines for my product or company.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Canva", "Figma", "Adobe XD", "PowerPoint", "Google Slides"]
      },
      {
        title: "Logo Design",
        description: "Design a new logo for my brand or product.",
        duration: "1-2 DAYS AVG. TURNAROUND", 
        platforms: ["Adobe Photoshop", "Figma"]
      },
      {
        title: "Flyer & Brochure Design",
        description: "Create a creative flyer or brochure design for my product, service, or event.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Canva", "Figma", "Adobe XD", "Adobe Photoshop", "Illustrator", "Adobe InDesign"]
      },
      {
        title: "Book Cover & Page Design",
        description: "Design a cover for my paperback book or ebook that gets attention.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Canva", "Figma", "Adobe XD", "Adobe Photoshop", "Illustrator", "Adobe InDesign"]
      },
      {
        title: "Presentation Design",
        description: "Create presentation design or slideshow.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["PowerPoint", "Google Slides", "Canva", "Figma", "Adobe XD"]
      },
      {
        title: "Social Media Posts",
        description: "Design eye-catching social media posts for every platform and format.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Canva", "Figma", "Adobe XD", "Adobe Photoshop", "Illustrator", "Adobe InDesign"]
      }
    ],
    "Development": [
      {
        title: "Homepage Development",
        description: "Set up my new site and develop the homepage based on a predefined design concept or template.",
        duration: "1-4 DAYS AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Avada", "Divi", "Shopify", "Hubspot CMS"]
      },
      {
        title: "Internal Web Page Development", 
        description: "Develop an additional page on my website based on a predefined design concept or template.",
        duration: "1-3 DAYS AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Oxygen", "Avada", "Divi", "Shopify", "Hubspot CMS"]
      },
      {
        title: "Landing Page Development",
        description: "Build a landing page based on a design concept or template that is optimized for performance.",
        duration: "1-3 DAYS AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Oxygen", "Avada", "Divi", "ClickFunnels", "SwipePages", "Unbounce", "Shopify", "Hubspot CMS"]
      },
      {
        title: "Mega Menu Development",
        description: "Enhance navigation with feature-rich mega menus for improved engagement on websites and apps.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Oxygen", "Avada", "Divi"]
      },
      {
        title: "Product Page Development",
        description: "Craft captivating product pages that drive conversions and enhance customer satisfaction in digital environments.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Oxygen", "Avada", "Divi", "Shopify", "Hubspot CMS"]
      },
      {
        title: "Collection/Shop Page Development",
        description: "Create seamless shop pages featuring intuitive layouts for enhanced customer experience.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Oxygen", "Avada", "Divi", "Shopify", "Hubspot CMS"]
      }
    ],
    "No Code": [
      {
        title: "Membership Site Setup",
        description: "We build and configure membership platforms, granting secure access to premium content and fostering community engagement.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Memberpress", "Memberstack", "Memberful", "Memberspace"]
      },
      {
        title: "Online Course Setup",
        description: "We design and establish comprehensive courses, utilizing platforms that enable interactive and engaging education.",
        duration: "1-2 DAYS AVG. TURNAROUND", 
        platforms: ["Teachable", "Thinkific", "Kajabi"]
      },
      {
        title: "Community Tool Setup",
        description: "We configure platforms, enabling seamless interactions and discussions among members, enhancing collaboration and connections within your community.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["BuddyBoss", "Circle", "MightyNetworks", "Skool"]
      },
      {
        title: "Webinar Setup",
        description: "We create and manage webinar platforms, enabling seamless hosting, engagement, and knowledge-sharing experiences.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: ["Livestorm", "GoTo Webinar", "Circle", "Kajabi"]
      }
    ],
    "Hosting": [
      {
        title: "Fixing Hosting Issues",
        description: "Fix my hosting issues and ensure that my website is online and secure.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: ["WordPress"]
      },
      {
        title: "Site Migration",
        description: "Effortlessly migrate your digital presence. We expertly transfer data, content, and functionality while preserving SEO value and user experience.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: ["WordPress", "Webflow", "Shopify", "Hubspot CMS"]
      },
      {
        title: "DNS Setup",
        description: "Optimize domain connectivity with our DNS Setup for efficient website access and smooth online operations.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: ["WordPress", "Webflow", "Shopify", "Hubspot CMS"]
      }
    ],
    "Automation": [
      {
        title: "Workflow Setup Between Apps",
        description: "We design seamless connections, enhancing efficiency and data flow for optimized business operations.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: []
      },
      {
        title: "Email Marketing Campaign Setup",
        description: "Create templates, configure tools, and strategize, ensuring effective communication and engagement with your audience.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Calendly", "MailChimp", "ActiveCampaign", "OptinMonster"]
      }
    ],
    "Maintenance": [
      {
        title: "Website Content & Design Updates",
        description: "Update the content on my website to improve the user experience and/or search rankings.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["WordPress", "Webflow", "Shopify", "Hubspot CMS"]
      },
      {
        title: "Fixing Website Bugs",
        description: "Improve the user experience of my website by fixing errors or bugs on my website.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["WordPress", "Webflow", "Shopify", "Hubspot CMS"]
      },
      {
        title: "Plugin Updates",
        description: "Update all my WordPress Plugins in a safe way so that my site doesn't break.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: ["WordPress"]
      },
      {
        title: "Security Features Setup",
        description: "Fortify your system with advanced security measures. We implement robust solutions to safeguard data and ensure peace of mind for your operations.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Wordfence", "Sucuri", "iThemes"]
      },
      {
        title: "Fixing Malware",
        description: "We identify, isolate, and eliminate threats, safeguarding your systems, data, and user trust for uninterrupted operations.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: []
      },
      {
        title: "Integration Setup",
        description: "Integrate an external tool with my website and make it look on-brand.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["WordPress", "Webflow", "Shopify"]
      }
    ],
    "Conversion Optimization": [
      {
        title: "Opt-In Popup Design & Setup",
        description: "We craft attention-grabbing popups, integrating them seamlessly to maximize lead generation.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: []
      },
      {
        title: "Gamification Popup Setup",
        description: "We design interactive popups, integrating gamified elements to captivate audiences and drive engagement.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: []
      }
    ],
    "Advice": [
      {
        title: "Website Conversion Audit",
        description: "We analyze user behavior, pinpoint bottlenecks, and recommend enhancements to increase conversion rates and achieve goals.",
        duration: "3 DAYS AVG. TURNAROUND",
        platforms: ["Loom", "Google Meet", "Zoom"]
      },
      {
        title: "Funnel Audit & Strategy",
        description: "We analyze user journeys, identify improvements, and create data-driven strategies to optimize conversions and engagement.",
        duration: "3 DAYS AVG. TURNAROUND", 
        platforms: ["Loom", "Google Meet", "Zoom"]
      },
      {
        title: "Security Audit",
        description: "We assess vulnerabilities, identify risks, and provide actionable insights to safeguard your digital assets and data.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Google Doc"]
      },
      {
        title: "Software/Tool Suggestions",
        description: "We assess your needs and recommend tailored software solutions, enhancing productivity and performance.",
        duration: "1 DAY AVG. TURNAROUND",
        platforms: ["Google Doc"]
      },
      {
        title: "Workflow/Automation Suggestions",
        description: "We analyze processes and propose automation solutions, streamlining operations and enhancing productivity through strategic recommendations.",
        duration: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Google Doc"]
      }
    ]
  };

  const filteredServices = Object.entries(services).reduce((acc, [category, serviceList]) => {
    const filtered = serviceList.filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {} as typeof services);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-green-400 rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to The Candy Store of Design & Dev Work
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            BD Global Technology is sweeter than your grandma's cookies. Choose from our menu of tasks and projects, and let us bake your ideas into reality.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
                <div className="mb-8">
                  <h3 className="font-semibold mb-4 text-lg">TASK CATEGORIES</h3>
                  <div className="space-y-2">
                    {taskCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <span className="text-gray-700">{category}</span>
                        {expandedCategories.includes(category) ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold mb-4 text-lg">PROJECT CATEGORIES</h3>
                  <div className="space-y-2">
                    {projectCategories.map((category) => (
                      <button
                        key={category}
                        className="w-full p-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Need Help?</h4>
                  <Link to="/book-call">
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Chat With Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Search Our Services</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Type your keyword then hit enter"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-3 text-lg"
                  />
                </div>
              </div>

              {/* Services Grid */}
              <div className="space-y-12">
                {Object.entries(filteredServices).map(([category, serviceList]) => {
                  if (!expandedCategories.includes(category)) return null;
                  
                  return (
                    <div key={category}>
                      <h2 className="text-3xl font-bold mb-8">{category}</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {serviceList.map((service, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="text-sm text-blue-600 font-medium mb-2">
                              {service.duration}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {service.description}
                            </p>
                            <div>
                              <div className="text-sm font-medium text-gray-800 mb-2">Platform</div>
                              <div className="flex flex-wrap gap-2">
                                {service.platforms.map((platform, platformIndex) => (
                                  <span 
                                    key={platformIndex}
                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                  >
                                    {platform}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your project requirements and how we can help bring your vision to life.
          </p>
          <Link to="/book-call">
            <Button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-100">
              Book a Discovery Call
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Scope;

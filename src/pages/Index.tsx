import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TalentCarousel from "@/components/TalentCarousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companies = [
    "systeme", "MAXONE", "TEEMYCO", "LYFEfuel", "staffgeek", 
    "sendcloud", "assima", "podigy"
  ];

  const features = [
    {
      title: "Scalable Workforce",
      description: "Add a new team member to your projects whenever you need more hands. We make sure the additional designer or developer will be briefed on your brand and work preferences upfront."
    },
    {
      title: "Fully-Managed Team",
      description: "With more team members, there come more responsibilities that can make your working day more complex. We take care of replacing staff dropouts, skill training, team happiness, and health benefits."
    },
    {
      title: "Dedicated Project Manager",
      description: "To move projects to completion faster, you will need a person who knows your business and project requirements. Your PM briefs the talent and delivers the work."
    },
    {
      title: "Flexible Skill-Matching",
      description: "Your projects and your needs for specific skills will change, but it takes too long to hire or train your in-house team members if you need to get things done fast."
    },
    {
      title: "No Learning Curve",
      description: "We want to make delegating work feel as natural as possible to you. That's why we manage all your tasks and projects within Asana and don't let you learn a new platform."
    },
    {
      title: "Quick Communication",
      description: "Send feedback or questions via text messages or screen-recording videos in a few minutes, so you don't get stuck writing essay-long briefings."
    },
    {
      title: "Trained for Efficiency",
      description: "We are passionate about constantly improving our processes and how our talents complete tasks. With checklists & guidelines based on best practices, we reduce errors and improve turnaround times."
    },
    {
      title: "Predictable Pricing",
      description: "Forget salary negotiations and paid vacations. We even skip the setup and recruiting fees for you. You pay a fixed monthly rate for every additional talent without any long-term commitment."
    },
    {
      title: "IP & Data Security",
      description: "Working with a global workforce requires an extra layer of protection. We use the necessary tools in the background to make sure your sites are safe against hackers and spam."
    }
  ];

  const scrollingText = [
    'UI Designs', 'Funnels', 'Automations', 'Portal', 'Graphics', 'Ecommerce Stores', 'Websites',
    'Graphic Designer', 'Webflow Developer', 'Shopify Developer', 'WordPress Developer', 'UI/UX Designer', 
    'Front-End Developer', 'Back-End Developer', 'No-Code Developer'
  ];

  const workItems = [
    {
      id: 1,
      image: "/lovable-uploads/a627bbbb-5eb8-4a39-9a23-30ba36b102a9.png",
      title: "Mobile App Design Collection",
      description: "Various mobile app interfaces showcasing modern design principles"
    },
    {
      id: 2,
      image: "/lovable-uploads/68e3efce-9f90-461b-b9a4-bb323c5dc4f4.png",
      title: "Web & Dashboard Designs",
      description: "Clean and functional web interfaces and dashboard designs"
    },
    {
      id: 3,
      image: "/lovable-uploads/b70b02c9-6355-4086-ac6d-bea8fb03bba2.png",
      title: "Brand Identity Materials",
      description: "Complete brand identity and print design solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Enhanced Vector Graphics and Hover Effects */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden group hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50 transition-all duration-700 ease-in-out">
        {/* Enhanced Background Vector Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-growmodo-blue/20 to-growmodo-green/20 rounded-full blur-xl animate-pulse group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-growmodo-green/20 to-growmodo-blue/20 rounded-full blur-xl animate-pulse delay-300 group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-growmodo-blue/30 to-transparent rounded-full blur-lg animate-pulse delay-700 group-hover:scale-200 transition-all duration-700"></div>
          <div className="absolute top-60 right-1/4 w-24 h-24 bg-gradient-to-br from-growmodo-green/15 to-growmodo-blue/15 rounded-full blur-2xl animate-pulse delay-1000 group-hover:scale-150 transition-all duration-700"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] group-hover:bg-[size:32px_32px] transition-all duration-700"></div>
          
          {/* Enhanced curved lines and shapes */}
          <svg className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-transform duration-700" viewBox="0 0 1000 800" fill="none">
            <path d="M0,400 C200,200 400,600 600,300 C800,0 1000,500 1000,400" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" className="group-hover:opacity-60 transition-opacity duration-700"/>
            <path d="M0,300 C300,100 600,500 800,200 C900,100 1000,300 1000,200" stroke="url(#gradient2)" strokeWidth="2" opacity="0.2" className="group-hover:opacity-50 transition-opacity duration-700"/>
            <circle cx="150" cy="150" r="3" fill="url(#gradient1)" opacity="0.6" className="group-hover:opacity-100 group-hover:r-6 transition-all duration-700">
              <animate attributeName="r" values="3;8;3" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="850" cy="100" r="2" fill="url(#gradient2)" opacity="0.5" className="group-hover:opacity-90 transition-opacity duration-700">
              <animate attributeName="r" values="2;6;2" dur="3s" repeatCount="indefinite"/>
            </circle>
            <polygon points="50,50 70,90 30,90" fill="url(#gradient1)" opacity="0.3" className="group-hover:opacity-70 transition-opacity duration-700">
              <animateTransform attributeName="transform" type="rotate" values="0 50 70;360 50 70" dur="10s" repeatCount="indefinite"/>
            </polygon>
            <rect x="900" y="600" width="15" height="15" fill="url(#gradient2)" opacity="0.4" className="group-hover:opacity-80 transition-opacity duration-700">
              <animateTransform attributeName="transform" type="rotate" values="0 907 607;45 907 607" dur="2s" repeatCount="indefinite"/>
            </rect>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#84cc16" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Enhanced Logo Section */}
          <div className="flex justify-center mb-8">
            <div className="relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-growmodo-blue to-growmodo-green rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-growmodo-blue to-growmodo-green p-6 rounded-full group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-white group-hover:scale-110 transition-transform duration-300">
                  <path d="M20 20h25c8.284 0 15 6.716 15 15v0c0 8.284-6.716 15-15 15H25v10h15c8.284 0 15-6.716 15-15v0c0-8.284 6.716-15 15-15h0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="20" cy="35" r="5" fill="currentColor"/>
                  <circle cx="60" cy="45" r="5" fill="currentColor"/>
                  <path d="M15 15l50 50" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-growmodo-blue group-hover:to-growmodo-green group-hover:bg-clip-text transition-all duration-700">
            Hire Your Whole Design &<br />
            Dev Team With a Few Clicks
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto group-hover:text-gray-800 transition-colors duration-500">
            Get on-demand access to your own team of designers, developers &
            project managers without the hassle of managing full-time employees.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/book-call">
              <Button className="bg-gradient-to-r from-growmodo-blue to-growmodo-green text-white px-8 py-3 text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                Book a Discovery Call
              </Button>
            </Link>
            <Link to="/showcase">
              <Button variant="outline" className="px-8 py-3 text-lg border-2 border-growmodo-blue text-growmodo-blue hover:bg-growmodo-blue hover:text-white transition-all duration-300 group-hover:border-growmodo-green group-hover:text-growmodo-green group-hover:hover:bg-growmodo-green">
                See Previous Work
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              <Check className="w-5 h-5 text-growmodo-blue group-hover:text-growmodo-green transition-colors duration-300" />
              <span>Unlimited design & dev requests</span>
            </div>
            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300 delay-100">
              <Check className="w-5 h-5 text-growmodo-blue group-hover:text-growmodo-green transition-colors duration-300" />
              <span>Monthly flat-rate</span>
            </div>
            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300 delay-200">
              <Check className="w-5 h-5 text-growmodo-blue group-hover:text-growmodo-green transition-colors duration-300" />
              <span>No Contract. Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Carousel Section */}
      <TalentCarousel />

      {/* Trust Section with Hover Effects */}
      <section className="py-16 px-6 group hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
              <h2 className="text-4xl font-bold mb-4 text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                Trusted by fast-moving<br />
                brands & agencies worldwide
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl font-bold text-growmodo-blue group-hover:text-purple-600 transition-colors duration-300">10,000+</span>
                  <span className="text-gray-600">Tasks delivered</span>
                </div>
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300 delay-100">
                  <span className="text-3xl font-bold text-growmodo-blue group-hover:text-purple-600 transition-colors duration-300">200+</span>
                  <span className="text-gray-600">Projects nailed</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {companies.map((company, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center group-hover:bg-white group-hover:shadow-lg group-hover:scale-105 transition-all duration-300" style={{transitionDelay: `${index * 50}ms`}}>
                  <span className="text-gray-400 font-medium group-hover:text-purple-600 transition-colors duration-300">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Enhanced Vector Graphics and Hover Effects */}
      <section className="bg-growmodo-dark text-white py-20 px-6 relative overflow-hidden group hover:bg-gradient-to-br hover:from-gray-900 hover:to-purple-900 transition-all duration-700">
        {/* Additional vector graphics for this section */}
        <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-700">
          <svg className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-transform duration-700" viewBox="0 0 1000 400" fill="none">
            <path d="M0,200 Q250,50 500,200 T1000,200" stroke="white" strokeWidth="1" opacity="0.3"/>
            <circle cx="100" cy="100" r="2" fill="white" opacity="0.4" className="group-hover:r-4 transition-all duration-500">
              <animate attributeName="cy" values="100;300;100" dur="8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="900" cy="300" r="3" fill="white" opacity="0.3" className="group-hover:r-6 transition-all duration-500">
              <animate attributeName="cx" values="900;100;900" dur="12s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-700">
            Frustrated with Unreliable<br />
            Freelancers, But Don't Have the<br />
            Budget for an In-House <span className="text-growmodo-green group-hover:text-yellow-400 transition-colors duration-500">All Mandatory Talents</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12 group-hover:transform group-hover:scale-105 transition-transform duration-500">
            <p className="text-xl text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
              There are more than enough places to find remote or in-house staff these days. However, finding the good ones is often time-consuming, nerve-racking, and expensive, especially when you need them now!
            </p>
            <p className="text-xl text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
              Lucky you, we can fix that.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
              <Check className="w-5 h-5 text-growmodo-green" />
              <span>No Endless Profile Scrolling</span>
            </div>
            <div className="flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300 delay-100">
              <Check className="w-5 h-5 text-growmodo-green" />
              <span>No Draining Interviews</span>
            </div>
            <div className="flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300 delay-200">
              <Check className="w-5 h-5 text-growmodo-green" />
              <span>No Recruiting Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section with Hover Effects */}
      <section className="py-20 px-6 group hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 transition-all duration-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
            The Quickest Way To Onboard<br />
            Talent To Your Team
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto group-hover:text-gray-800 transition-colors duration-300">
            BD Global Technology is a design & development subscription that takes the pain out of hiring creatives for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group-hover:transform group-hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-growmodo-blue rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500 group-hover:shadow-lg transition-all duration-300">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-green-600 transition-colors duration-300">Subscribe</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                to a plan & request your first project or task.
              </p>
            </div>

            <div className="text-center group-hover:transform group-hover:scale-105 transition-all duration-500 delay-100">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500 group-hover:shadow-lg transition-all duration-300">
                <span className="text-gray-600 group-hover:text-white text-2xl transition-colors duration-300">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors duration-300">Get matched</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                with a vetted designer or developer.
              </p>
            </div>

            <div className="text-center group-hover:transform group-hover:scale-105 transition-all duration-500 delay-200">
              <div className="w-16 h-16 bg-growmodo-green rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:bg-purple-500 group-hover:shadow-lg transition-all duration-300">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-purple-600 transition-colors duration-300">Receive</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                a project update or finished task within 24-48 hrs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Made Super Simple Section */}
      <section className="py-20 px-6 bg-gray-50 group hover:bg-gradient-to-br hover:from-gray-100 hover:to-purple-100 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-500">
              Made <span className="text-growmodo-blue">Super</span> Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto group-hover:text-gray-800 transition-colors duration-300">
              We work as an extension of your in-house team and assemble the right team members for every task and project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-growmodo-blue rounded-2xl p-8 text-white group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-600 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4">
                Fast Hiring in<br />24-48 Hrs
              </h3>
              <p className="mb-6">
                Add an additional team member with a click of a button.
              </p>
              <div className="flex -space-x-2 mb-4">
                <div className="w-12 h-12 bg-white rounded-full group-hover:bg-yellow-300 transition-colors duration-300"></div>
                <div className="w-12 h-12 bg-growmodo-green rounded-full group-hover:bg-pink-300 transition-colors duration-300"></div>
                <div className="w-12 h-12 bg-white rounded-full group-hover:bg-blue-300 transition-colors duration-300"></div>
              </div>
            </div>

            <div className="group-hover:transform group-hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-purple-600 transition-colors duration-300">Rigorously Vetted Experts</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                We find, manage & keep training the best talents we can find.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gray-200 rounded-full group-hover:bg-purple-300 transition-colors duration-300"></div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Roel F. Developer ⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex items-center gap-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  <div className="w-8 h-8 bg-gray-200 rounded-full group-hover:bg-blue-300 transition-colors duration-300"></div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">PJ A. UI/UX Designer ⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="group-hover:transform group-hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-green-600 transition-colors duration-300">Fully-Managed Teams</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                Your dedicated PM matches you with the right team members.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-growmodo-green rounded-full group-hover:bg-green-500 transition-colors duration-300"></div>
                  <span className="text-sm">Dave | Web Design Project</span>
                </div>
                <div className="text-xs text-gray-500">📱 Apply the changes based on request</div>
              </div>
            </div>

            <div className="group-hover:transform group-hover:scale-105 transition-transform duration-500 delay-100">
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors duration-300">Daily Progress Reports</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                Stay in the loop on everything we worked on and completed for you.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-growmodo-green rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
                  <span className="text-sm">Dave | Web Design Project: Finished</span>
                </div>
                <div className="text-xs text-gray-500">✅ Finished the home page</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section with Auto-scrolling and Hover Effects */}
      <section className="bg-growmodo-dark py-20 px-6 group hover:bg-gradient-to-br hover:from-gray-900 hover:to-indigo-900 transition-all duration-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
            Build Whatever You Want,<br />
            With the Tools You Love
          </h2>
          
          <div className="overflow-hidden mb-8">
            <div className="flex animate-[scroll-left_30s_linear_infinite] gap-4 group-hover:animate-[scroll-left_20s_linear_infinite]">
              {['UI Designs', 'Funnels', 'Automations', 'Portal', 'Graphics', 'Ecommerce Stores', 'Websites', 'UI Designs', 'Funnels', 'Automations', 'Portal'].map((tool, index) => (
                <span key={index} className="text-gray-400 text-sm px-3 py-1 bg-gray-800 rounded-full whitespace-nowrap group-hover:bg-indigo-800 group-hover:text-cyan-300 transition-all duration-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-8 gap-6 mt-12 group-hover:scale-105 transition-transform duration-500">
            <img src="/lovable-uploads/42bc35cf-64cd-49d8-a36c-b34ac31583a3.png" alt="Tool icons" className="col-span-8 w-full group-hover:brightness-110 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* Testimonial Section with Hover Effects */}
      <section className="py-20 px-6 group hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 bg-gray-200 rounded-lg group-hover:bg-gradient-to-br group-hover:from-yellow-300 group-hover:to-orange-300 group-hover:scale-110 transition-all duration-500"></div>
            <div className="group-hover:transform group-hover:scale-105 transition-transform duration-500">
              <p className="text-xl mb-4 group-hover:text-gray-800 transition-colors duration-300">
                "We're extremely happy with BD Global Technology. Our project manager has been exceptional. She's always very prompt with replies and communicating how things are going."
              </p>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-growmodo-green group-hover:text-yellow-500 group-hover:scale-125 transition-all duration-300" style={{transitionDelay: `${i * 100}ms`}}>⭐</span>
                ))}
              </div>
              <p className="font-semibold group-hover:text-orange-600 transition-colors duration-300">Lauren Gilmore</p>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">VP Media, Hyperfocal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section with Carousel and Hover Effects */}
      <section className="py-20 px-6 bg-gray-50 group hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
              Selected Work<br />
              From Our Talents
            </h2>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full group-hover:scale-105 transition-transform duration-500"
          >
            <CarouselContent className="-ml-4">
              {workItems.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg aspect-[4/3] hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4 group-hover:transform group-hover:translate-y-1 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex group-hover:bg-pink-100 group-hover:border-pink-300 transition-colors duration-300" />
            <CarouselNext className="hidden md:flex group-hover:bg-pink-100 group-hover:border-pink-300 transition-colors duration-300" />
          </Carousel>
        </div>
      </section>

      {/* Benefits Section with Hover Effects */}
      <section className="py-20 px-6 group hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-500">What You Get From BD Global Technology</h2>
            <p className="text-xl text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Meet your new team members minus the Recruiting, HR, Operations, and Admin work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group-hover:transform group-hover:scale-105 transition-all duration-500" style={{transitionDelay: `${index * 50}ms`}}>
                <div className="w-12 h-12 bg-growmodo-blue rounded-lg mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-cyan-500 group-hover:shadow-lg transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen On Section with Hover Effects */}
      <section className="py-12 px-6 bg-white group hover:bg-gradient-to-r hover:from-slate-50 hover:to-gray-50 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm mb-6 group-hover:text-gray-700 transition-colors duration-300">As seen on:</p>
            <div className="flex justify-center items-center gap-8 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-sm text-gray-500 group-hover:text-gray-700 group-hover:scale-110 transition-all duration-300">Product Hunt</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700 group-hover:scale-110 transition-all duration-300 delay-100">BetaList</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700 group-hover:scale-110 transition-all duration-300 delay-200">Landbook</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700 group-hover:scale-110 transition-all duration-300 delay-300">UPlabs</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700 group-hover:scale-110 transition-all duration-300 delay-500">DesignMunk</span>
            </div>
          </div>
          
          {/* Flowing Text Animation */}
          <div className="relative overflow-hidden h-32 bg-white group-hover:bg-gray-50 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 group-hover:from-gray-50 group-hover:to-gray-50 transition-colors duration-500"></div>
            <div className="flex animate-[scroll-left_40s_linear_infinite] items-center h-full group-hover:animate-[scroll-left_30s_linear_infinite]">
              {scrollingText.map((text, index) => (
                <span key={index} className="text-gray-400 text-lg mx-8 whitespace-nowrap group-hover:text-gray-600 transition-colors duration-300">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Enhanced Graphics and Hover Effects */}
      <section className="bg-growmodo-blue py-20 px-6 relative overflow-hidden group hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-700">
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <div className="flex animate-[scroll-left_50s_linear_infinite] items-center h-full group-hover:animate-[scroll-left_40s_linear_infinite]">
            {scrollingText.map((text, index) => (
              <span key={index} className="text-white text-sm mx-6 whitespace-nowrap opacity-30">
                {text}
              </span>
            ))}
          </div>
        </div>
        
        {/* Additional vector graphics for CTA section */}
        <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
          <svg className="absolute top-0 left-0 w-full h-full group-hover:scale-110 transition-transform duration-700" viewBox="0 0 1000 400" fill="none">
            <circle cx="200" cy="100" r="4" fill="white" opacity="0.3" className="group-hover:r-8 transition-all duration-500">
              <animate attributeName="r" values="4;12;4" dur="6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="300" r="6" fill="white" opacity="0.2" className="group-hover:r-12 transition-all duration-500">
              <animate attributeName="r" values="6;2;6" dur="4s" repeatCount="indefinite"/>
            </circle>
            <path d="M0,200 C200,100 400,300 600,150 C800,50 1000,250 1000,200" stroke="white" strokeWidth="1" opacity="0.4" className="group-hover:opacity-80 transition-opacity duration-500"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center -space-x-2 mb-6 group-hover:scale-110 transition-transform duration-500">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-12 h-12 bg-white rounded-full group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-pink-300 transition-all duration-300" style={{transitionDelay: `${i * 100}ms`}}></div>
            ))}
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-500">
            Scale Your Design & Dev Operations<br />
            Without The Complexity
          </h2>
          <p className="text-xl text-white/90 mb-8 group-hover:text-white transition-colors duration-300">
            Why would you chase random freelancers if you could have your own creative dream team today?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-call">
              <Button className="bg-black text-white px-8 py-3 text-lg group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-pink-700 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                Book a Discovery Call
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="bg-white text-black px-8 py-3 text-lg border-0 group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-orange-300 group-hover:text-gray-800 group-hover:scale-105 transition-all duration-300">
                Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

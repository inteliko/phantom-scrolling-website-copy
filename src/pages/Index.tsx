import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TalentCarousel from "@/components/TalentCarousel";

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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Vector Graphics */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Vector Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-growmodo-blue/20 to-growmodo-green/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-growmodo-green/20 to-growmodo-blue/20 rounded-full blur-xl animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-growmodo-blue/30 to-transparent rounded-full blur-lg animate-pulse delay-700"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Curved lines */}
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 800" fill="none">
            <path d="M0,400 C200,200 400,600 600,300 C800,0 1000,500 1000,400" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3"/>
            <path d="M0,300 C300,100 600,500 800,200 C900,100 1000,300 1000,200" stroke="url(#gradient2)" strokeWidth="2" opacity="0.2"/>
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-growmodo-blue to-growmodo-green rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-growmodo-blue to-growmodo-green p-6 rounded-full">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-white">
                  <path d="M20 20h25c8.284 0 15 6.716 15 15v0c0 8.284-6.716 15-15 15H25v10h15c8.284 0 15-6.716 15-15v0c0-8.284 6.716-15 15-15h0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="20" cy="35" r="5" fill="currentColor"/>
                  <circle cx="60" cy="45" r="5" fill="currentColor"/>
                  <path d="M15 15l50 50" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-growmodo-blue to-growmodo-green bg-clip-text text-transparent">
            Hire Your Whole Design &<br />
            Dev Team With a Few Clicks
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get on-demand access to your own team of designers, developers &
            project managers without the hassle of managing full-time employees.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/book-call">
              <Button className="bg-gradient-to-r from-growmodo-blue to-growmodo-green text-white px-8 py-3 text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Book a Discovery Call
              </Button>
            </Link>
            <Link to="/showcase">
              <Button variant="outline" className="px-8 py-3 text-lg border-2 border-growmodo-blue text-growmodo-blue hover:bg-growmodo-blue hover:text-white transition-all duration-300">
                See Previous Work
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-growmodo-blue" />
              <span>Unlimited design & dev requests</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-growmodo-blue" />
              <span>Monthly flat-rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-growmodo-blue" />
              <span>No Contract. Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Carousel Section */}
      <TalentCarousel />

      {/* Trust Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-4">
                Trusted by fast-moving<br />
                brands & agencies worldwide
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-growmodo-blue">10,000+</span>
                  <span className="text-gray-600">Tasks delivered</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-growmodo-blue">200+</span>
                  <span className="text-gray-600">Projects nailed</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {companies.map((company, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <span className="text-gray-400 font-medium">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-growmodo-dark text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Frustrated with Unreliable<br />
            Freelancers, But Don't Have the<br />
            Budget for an In-House <span className="text-growmodo-green">UI/UX Designer</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-gray-300 mb-6">
              There are more than enough places to find remote or in-house staff these days. However, finding the good ones is often time-consuming, nerve-racking, and expensive, especially when you need them now!
            </p>
            <p className="text-xl text-gray-300">
              Lucky you, we can fix that.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full">
              <Check className="w-5 h-5 text-growmodo-green" />
              <span>No Endless Profile Scrolling</span>
            </div>
            <div className="flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full">
              <Check className="w-5 h-5 text-growmodo-green" />
              <span>No Draining Interviews</span>
            </div>
            <div className="flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full">
              <Check className="w-5 h-5 text-growmodo-green" />
              <span>No Recruiting Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Quickest Way To Onboard<br />
            Talent To Your Team
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            BD Global Technology is a design & development subscription that takes the pain out of hiring creatives for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-blue rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Subscribe</h3>
              <p className="text-gray-600">
                to a plan & request your first project or task.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-600 text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Get matched</h3>
              <p className="text-gray-600">
                with a vetted designer or developer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-green rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Receive</h3>
              <p className="text-gray-600">
                a project update or finished task within 24-48 hrs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Made Super Simple Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Made <span className="text-growmodo-blue">Super</span> Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work as an extension of your in-house team and assemble the right team members for every task and project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-growmodo-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Fast Hiring in<br />24-48 Hrs
              </h3>
              <p className="mb-6">
                Add an additional team member with a click of a button.
              </p>
              <div className="flex -space-x-2 mb-4">
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <div className="w-12 h-12 bg-growmodo-green rounded-full"></div>
                <div className="w-12 h-12 bg-white rounded-full"></div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Rigorously Vetted Experts</h3>
              <p className="text-gray-600 mb-6">
                We find, manage & keep training the best talents we can find.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span className="text-sm text-gray-600">Roel F. Developer ⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span className="text-sm text-gray-600">PJ A. UI/UX Designer ⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Fully-Managed Teams</h3>
              <p className="text-gray-600 mb-6">
                Your dedicated PM matches you with the right team members.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-growmodo-green rounded-full"></div>
                  <span className="text-sm">Dave | Web Design Project</span>
                </div>
                <div className="text-xs text-gray-500">📱 Apply the changes based on request</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Daily Progress Reports</h3>
              <p className="text-gray-600 mb-6">
                Stay in the loop on everything we worked on and completed for you.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-growmodo-green rounded-full"></div>
                  <span className="text-sm">Dave | Web Design Project: Finished</span>
                </div>
                <div className="text-xs text-gray-500">✅ Finished the home page</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section with Auto-scrolling */}
      <section className="bg-growmodo-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Build Whatever You Want,<br />
            With the Tools You Love
          </h2>
          
          <div className="overflow-hidden mb-8">
            <div className="flex animate-[scroll-left_30s_linear_infinite] gap-4">
              {['UI Designs', 'Funnels', 'Automations', 'Portal', 'Graphics', 'Ecommerce Stores', 'Websites', 'UI Designs', 'Funnels', 'Automations', 'Portal'].map((tool, index) => (
                <span key={index} className="text-gray-400 text-sm px-3 py-1 bg-gray-800 rounded-full whitespace-nowrap">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-8 gap-6 mt-12">
            <img src="/lovable-uploads/42bc35cf-64cd-49d8-a36c-b34ac31583a3.png" alt="Tool icons" className="col-span-8 w-full" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
            <div>
              <p className="text-xl mb-4">
                "We're extremely happy with BD Global Technology. Our project manager has been exceptional. She's always very prompt with replies and communicating how things are going."
              </p>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-growmodo-green">⭐</span>
                ))}
              </div>
              <p className="font-semibold">Lauren Gilmore</p>
              <p className="text-gray-600">VP Media, Hyperfocal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Selected Work<br />
              From Our Talents
            </h2>
          </div>
          
          <div className="relative">
            <img src="/lovable-uploads/a627bbbb-5eb8-4a39-9a23-30ba36b102a9.png" alt="Selected Work" className="w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You Get From BD Global Technology</h2>
            <p className="text-xl text-gray-600">
              Meet your new team members minus the Recruiting, HR, Operations, and Admin work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-growmodo-blue rounded-lg mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen On Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm mb-6">As seen on:</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <span className="text-sm text-gray-500">Product Hunt</span>
              <span className="text-sm text-gray-500">BetaList</span>
              <span className="text-sm text-gray-500">Landbook</span>
              <span className="text-sm text-gray-500">UPlabs</span>
              <span className="text-sm text-gray-500">DesignMunk</span>
            </div>
          </div>
          
          {/* Flowing Text Animation */}
          <div className="relative overflow-hidden h-32 bg-white">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10"></div>
            <div className="flex animate-[scroll-left_40s_linear_infinite] items-center h-full">
              {scrollingText.map((text, index) => (
                <span key={index} className="text-gray-400 text-lg mx-8 whitespace-nowrap">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flex animate-[scroll-left_50s_linear_infinite] items-center h-full">
            {scrollingText.map((text, index) => (
              <span key={index} className="text-white text-sm mx-6 whitespace-nowrap opacity-30">
                {text}
              </span>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center -space-x-2 mb-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-12 h-12 bg-white rounded-full"></div>
            ))}
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Scale Your Design & Dev Operations<br />
            Without The Complexity
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Why would you chase random freelancers if you could have your own creative dream team today?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-call">
              <Button className="bg-black text-white px-8 py-3 text-lg">
                Book a Discovery Call
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="bg-white text-black px-8 py-3 text-lg border-0">
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

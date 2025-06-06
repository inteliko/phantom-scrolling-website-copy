import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import MobileNav from "@/components/MobileNav";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const talents = [
    { name: "Russell W.", role: "Graphic Designer", color: "bg-growmodo-green" },
    { name: "Kristian L.", role: "WordPress Developer", color: "bg-growmodo-green" },
    { name: "Aira L.", role: "Shopify Developer", color: "bg-growmodo-blue" },
    { name: "Alden M.", role: "Developer", color: "bg-growmodo-blue" },
    { name: "Mel R.", role: "Creative Director", color: "bg-gray-100" },
    { name: "Joshua B.", role: "UI/UX Designer", color: "bg-growmodo-blue" },
  ];

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

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold">BD Global Technology</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/showcase" className="text-gray-600 hover:text-gray-900">Showcase</Link>
              <Link to="/talents" className="text-gray-600 hover:text-gray-900">Talents</Link>
              <Link to="/scope" className="text-gray-600 hover:text-gray-900">Scope</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link to="/apply-talent" className="text-gray-600 hover:text-gray-900">Apply as a Talent</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <Button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                Book a Call
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hire Your Whole Design &<br />
            Dev Team With a Few Clicks
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get on-demand access to your own team of designers, developers &
            project managers without the hassle of managing full-time employees.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-black text-white px-8 py-3 text-lg">
              Book a Discovery Call
            </Button>
            <Link to="/showcase">
              <Button variant="outline" className="px-8 py-3 text-lg border-2">
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

      {/* Auto-scrolling Talents Section */}
      <section className="py-12 overflow-hidden">
        <div className="scrolling-wrapper">
          <div className="scrolling-content">
            <div className="flex gap-6">
              {[...talents, ...talents].map((talent, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="h-48 bg-gray-300"></div>
                  <div className={`p-4 ${talent.color} text-white`}>
                    <h3 className="font-semibold text-lg">{talent.name}</h3>
                    <p className="text-sm opacity-90">{talent.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* Tools Section */}
      <section className="bg-growmodo-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Build Whatever You Want,<br />
            With the Tools You Love
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['UI Designs', 'Funnels', 'Automations', 'Portal', 'Graphics', 'Ecommerce Stores', 'Websites', 'UI Designs', 'Funnels', 'Automations', 'Portal'].map((tool, index) => (
              <span key={index} className="text-gray-400 text-sm px-3 py-1 bg-gray-800 rounded-full">
                {tool}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mt-12">
            {Array.from({ length: 32 }).map((_, index) => (
              <div key={index} className="w-12 h-12 bg-gray-700 rounded-full"></div>
            ))}
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
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-growmodo-green rounded-xl h-80"></div>
            <div className="space-y-4">
              <div className="bg-gray-200 rounded-xl h-36"></div>
              <div className="bg-growmodo-blue rounded-xl h-40"></div>
            </div>
            <div className="bg-growmodo-dark rounded-xl h-80 p-6 grid grid-cols-2 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-orange-400 rounded-lg"></div>
              ))}
            </div>
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

      {/* Final CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
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
            <Button className="bg-black text-white px-8 py-3 text-lg">
              Book a Discovery Call
            </Button>
            <Link to="/pricing">
              <Button variant="outline" className="bg-white text-black px-8 py-3 text-lg border-0">
                Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-growmodo-dark text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Recruiting & Delivery Platform</h3>
            <h4 className="text-xl">for Top Remote Talent</h4>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold">BD Global Technology</span>
            </div>
            
            <Button className="bg-white text-black px-6 py-2 rounded-lg">
              Book a Discovery Call
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/talents" className="hover:text-white">Talents</Link></li>
                <li><Link to="/showcase" className="hover:text-white">Showcase</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/apply-talent" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Guides</li>
                <li>Products</li>
                <li><Link to="/scope" className="hover:text-white">Scope of work</Link></li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <div className="text-gray-400 text-sm space-y-2">
                <p>10114 102nd Street Floor 3</p>
                <p>Ozone Park, NY, 11416</p>
                <p>+1 929 3938 698</p>
                <p>sales@bdglobaltech.com</p>
                <p>Mon-Fri 10am-6pm</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>Copyright © 2025 BD Global Technology. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
              <span>Data Preferences</span>
              <span>Imprint</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

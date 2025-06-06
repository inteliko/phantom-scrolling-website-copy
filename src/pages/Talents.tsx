
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Talents = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const talents = [
    {
      name: "Sarah Johnson",
      role: "Senior UI/UX Designer",
      experience: "5+ years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      rating: 4.9,
      projects: 120
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer",
      experience: "7+ years",
      skills: ["React", "Node.js", "Python", "PostgreSQL"],
      rating: 5.0,
      projects: 95
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Designer",
      experience: "4+ years",
      skills: ["Brand Identity", "Logo Design", "Print Design", "Typography"],
      rating: 4.8,
      projects: 80
    },
    {
      name: "David Kim",
      role: "Frontend Developer",
      experience: "6+ years",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      rating: 4.9,
      projects: 110
    },
    {
      name: "Lisa Wang",
      role: "Motion Graphics Designer",
      experience: "5+ years",
      skills: ["After Effects", "Cinema 4D", "Lottie", "Video Editing"],
      rating: 4.7,
      projects: 65
    },
    {
      name: "James Wilson",
      role: "Product Designer",
      experience: "8+ years",
      skills: ["Product Strategy", "Design Systems", "User Testing", "Wireframing"],
      rating: 5.0,
      projects: 140
    }
  ];

  const screeningProcess = [
    {
      title: "Skill Review",
      description: "Every applicant completes a questionnaire, rates their skills in various design or coding disciplines, and provides a link to previous projects that our team checks before moving forward."
    },
    {
      title: "Intro Call",
      description: "Our recruitment manager schedules a first intro call to get to know the applicant, dive deeper into technical knowledge, and evaluates communication skills and culture fit."
    },
    {
      title: "Trial Project",
      description: "We give the applicant a first test project to see how they work, their attention to detail, and ability to follow guidelines and meet deadlines."
    },
    {
      title: "Expert Panel",
      description: "Collaboration is a crucial part of our talent community at BD Global Technology. Therefore, we also believe that other core team members should have a say in the hiring process."
    },
    {
      title: "5-Day Bootcamp",
      description: "Before letting a talent work on customer projects, the new hire goes through interactive onboarding training and completes online courses and 1-to-1 coaching with our quality manager."
    },
    {
      title: "Ongoing Peer-to-Peer Training",
      description: "A crucial part of our success is that we don't only try to find the best designers & developers but also raw diamonds and make them bling. PS: Isn't everybody a raw diamond?"
    }
  ];

  const benefits = [
    {
      title: "Long-Term Engagement",
      description: "We don't work with random freelancers who we pull in for a project and then let go. We believe that people work best when they have a stable work environment with a clear path for their careers."
    },
    {
      title: "Fair Wages",
      description: "Most of our talents live in countries with lower living costs than the US or Europe. However, we also make sure that they get paid fairly and have the opportunity to increase their rates with improved performance."
    },
    {
      title: "Health Benefits",
      description: "Taking care of our talents is as important as providing excellent service to our customers. Therefore, we give long-term contractors the chance to receive health benefits and ensure their well-being."
    },
    {
      title: "Remote Social Events",
      description: "Working from home has a lot of benefits but also apparent drawbacks, like loneliness. For us, we make it a priority that our talents feel part of a community where they can reach out for support and fun interactions."
    },
    {
      title: "8.6 eNPS Score",
      description: "A big part of our talent community growth happened thanks to referrals from our current team members. It turns out that A-players tend to attract more A-players, and our monthly team surveys reflect that."
    },
    {
      title: "<1% Turnover",
      description: "Our applicant screening and skill development process, as well as the community platform, helped us to build strong relationships with talents that used to jump from one client to the next."
    }
  ];

  const faqs = [
    {
      question: "How do you vet and select your talents?",
      answer: "Our rigorous screening process includes skill assessments, portfolio reviews, technical interviews, trial projects, expert panel evaluations, and comprehensive onboarding. Only the top 3% of applicants make it through our process."
    },
    {
      question: "What types of designers and developers do you have?",
      answer: "We have specialists in UI/UX design, web development, mobile app development, brand design, motion graphics, product design, frontend/backend development, and more. All our talents are carefully matched to project requirements."
    },
    {
      question: "How quickly can I get matched with a talent?",
      answer: "Most clients are matched with suitable talents within 24-48 hours. We maintain a ready pool of pre-vetted professionals to ensure quick turnaround times without compromising quality."
    },
    {
      question: "Can I work with the same talent for multiple projects?",
      answer: "Absolutely! We encourage long-term relationships. Once you find a talent that works well with your team and understands your brand, you can continue working with them on future projects."
    },
    {
      question: "What if I'm not satisfied with the work quality?",
      answer: "We offer unlimited revisions and have a satisfaction guarantee. If you're not happy with the initial match, we'll find you a different talent at no extra cost. Our project managers ensure quality control throughout."
    },
    {
      question: "Do your talents work in specific time zones?",
      answer: "Our global talent pool spans multiple time zones. We can match you with talents who have overlapping working hours with your team to ensure smooth communication and collaboration."
    },
    {
      question: "What's included in the talent management?",
      answer: "We handle all HR responsibilities, training, performance management, benefits, and administrative tasks. You get access to top talent without the overhead of managing full-time employees."
    },
    {
      question: "How do you ensure IP and data security?",
      answer: "All our talents sign comprehensive NDAs and security agreements. We use secure collaboration tools and have strict protocols for handling sensitive information and intellectual property."
    }
  ];

  const stats = [
    { number: "1,000+", label: "Professionals in Talent Pool" },
    { number: "155+", label: "Design & Tech Skill Categories" },
    { number: "1", label: "All-In-One Subscription" },
    { number: "24-48hrs", label: "Average Matching Time" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "3%", label: "Talent Acceptance Rate" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-growmodo-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Great Designers & Developers<br />
            Don't Grow on Trees.<br />
            <span className="text-growmodo-green">They Grow at BD Global Technology.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            BD Global Technology uses a community-first approach to find & manage great talents 
            and keep investing in their skill development to help them accelerate their 
            career while working with progressive brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-100">
              Join Talent Community
            </Button>
            <Button variant="outline" className="border-white text-white px-8 py-3 text-lg hover:bg-white hover:text-black">
              See Plans & Pricing
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-growmodo-green mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Talent Showcase */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {Array.from({ length: 24 }).map((_, index) => (
              <div key={index} className="relative">
                <div className="w-full aspect-square bg-gray-200 rounded-lg"></div>
                {index % 3 === 0 && (
                  <div className="absolute inset-0 bg-growmodo-blue bg-opacity-90 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">70%</div>
                      <div className="text-xs">Growth</div>
                    </div>
                  </div>
                )}
                {index % 5 === 0 && (
                  <div className="absolute inset-0 bg-growmodo-green bg-opacity-90 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-sm font-bold">Chart Data</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screening Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Screening &<br />
              Talent Development Process
            </h2>
            <Button className="bg-growmodo-blue text-white px-8 py-3">
              Join Talent Community
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screeningProcess.map((step, index) => (
              <div key={index} className="text-left">
                <div className="w-12 h-12 bg-growmodo-blue rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-growmodo-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Cherry-Pick Skills On-Demand</h2>
          <p className="text-xl text-gray-300 mb-12">
            Your PM delegates work on a task-by-task basis and ensures a qualified 
            expert gets the job done, even if you need these skills only for one day.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              'Presentation Design', 'No-Code Apps', 'Elementor Website', 'Landing Pages', 
              'Custom CSS', 'Shopify Development', 'Vue.js', 'Presentation', 'Logo Design', 
              'Google Analytics', 'Sales Funnels', 'Motion Graphics', 'UI/UX Design', 
              'Membership Sites', 'Tailwind CSS', 'Logo Design', 'Email Templates', 'HTML', 
              'Mobile App Design', 'WordPress', 'Figma', 'Automation', 'Email Templates', 
              'HTML', 'Branding', 'Online Course Setup', 'Sitemap Creation', 'Web App Design',
              'Zapier', 'Site Speed Optimisation', 'Branding'
            ].map((skill, index) => (
              <span key={index} className="text-gray-300 text-sm px-3 py-1 bg-gray-800 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Maps Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-growmodo-green text-sm mb-2">📈 Monthly Growth Movement</div>
                <div className="space-y-2">
                  <div className="h-2 bg-growmodo-blue rounded w-3/4"></div>
                  <div className="h-2 bg-growmodo-blue rounded w-full"></div>
                  <div className="h-2 bg-growmodo-blue rounded w-1/2"></div>
                  <div className="h-2 bg-growmodo-blue rounded w-5/6"></div>
                </div>
                <div className="mt-4 bg-white p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-semibold">Design Review</div>
                      <div className="text-sm text-gray-500">Join Meeting</div>
                    </div>
                  </div>
                  <div className="bg-growmodo-blue text-white p-3 rounded">
                    <div className="text-2xl font-bold">86%</div>
                    <div className="text-sm">Skill Performance</div>
                    <div className="text-xs">Current Position: Advanced UI Designer</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">
                We Develop Growth Maps Instead of Believing the Talent Myth
              </h2>
              <p className="text-gray-600 mb-8">
                In a fast-moving industry like ours, recruiting great talent is not enough anymore. 
                We have to invest in the development of new skills and give our designers & developers 
                a clear path for their careers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-growmodo-green" />
                  <span>Monthly tracked skill and work quality improvements</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-growmodo-green" />
                  <span>Weekly peer-to-peer coaching sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-growmodo-green" />
                  <span>Access to the latest online courses to learn new tech and trends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Outsource <span className="text-growmodo-blue">Sustainably</span><br />
            Without the Bad Taste
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            BD Global Technology aims to connect fast-growing companies with ambitious 
            remote talent while creating win-win situations and a great work 
            experience for both parties.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-left p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-growmodo-blue rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Way Section */}
      <section className="py-20 px-6 bg-growmodo-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            The Traditional Way of Hiring<br />
            Creative Freelancers is Broken
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Company needs are often not aligned anymore with what their 
            remote contractors want. The misalignment can lead to a bad 
            experience for both parties. It's time to rethink outsourcing.
          </p>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              "You Want Flexibility. They Want Security",
              "You Want Expertise. They Want to Learn",
              "You Want Quick Dialogue. They Want to Focus",
              "You Want to Pay Less. They Want Appreciation",
              "You Want Finished Projects. They Want More Hours",
              "You Want Consistency. They Want Variety"
            ].map((point, index) => (
              <div key={index} className="border border-gray-600 rounded-lg p-4 text-left">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-mono">0{index + 1}</span>
                  <span className="text-lg">{point}</span>
                </div>
                {index === 2 && (
                  <div className="mt-4 bg-growmodo-green text-black p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      <span className="font-semibold">Solution: Dedicated project managers</span>
                    </div>
                    <p className="text-sm mt-2">
                      Communication is probably the most common reason for a frustrating 
                      experience with remote freelancers. Nevertheless, responding to every 
                      little client message on time while trying to get things done is tough.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talents */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Expert Talents</h2>
            <p className="text-xl text-gray-600">
              Work with vetted designers and developers who are passionate about delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talents.map((talent, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-center mb-2">{talent.name}</h3>
                <p className="text-growmodo-blue text-center font-medium mb-2">{talent.role}</p>
                <p className="text-gray-600 text-center text-sm mb-4">{talent.experience} experience</p>
                
                <div className="flex justify-center items-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-growmodo-green">{talent.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-growmodo-blue">{talent.projects}</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {talent.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our talent community and process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-growmodo-green rounded-lg mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-2xl">🎯</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet Your New Team Member Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Finally, you can hire vetted designers & developers on a 
            budget without sacrificing quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white px-8 py-3 text-lg">
              See Plans & Pricing
            </Button>
            <Button variant="outline" className="bg-white text-black px-8 py-3 text-lg border-0">
              Join Talent Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Talents;

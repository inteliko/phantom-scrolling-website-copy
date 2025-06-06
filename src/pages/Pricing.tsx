
import { Check, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Predictable Pricing.<br />
            No Surprises.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the number of active talents working<br />
            on your requests at the same time:
          </p>
          
          {/* Talent Scale Selector */}
          <div className="flex items-center justify-center mb-8">
            <span className="text-blue-500 mr-4 text-lg">Scale up<br />and down</span>
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mb-2"></div>
                <span className="text-base">1</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mb-2"></div>
                <span className="text-base">2</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full mb-2"></div>
                <span className="text-base text-gray-400">4</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full mb-2"></div>
                <span className="text-base text-gray-400">5</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full mb-2"></div>
                <span className="text-base text-gray-400">More</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-3xl p-12 relative">
            <div className="absolute top-8 right-8 text-green-400">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-8 right-12 text-gray-400">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-4xl font-bold mb-6">All Inclusive</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md">
                  For fast-moving agencies, marketing teams & scale-ups who need 
                  access to reliable on-demand design & dev talents to move even faster.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Design Requests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Development Requests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Revisions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Brands</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⚡</span>
                      </div>
                      <span className="text-base">Dedicated Project Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">📊</span>
                      </div>
                      <span className="text-base">Daily Updates & Progress Reports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⏸️</span>
                      </div>
                      <span className="text-base">Pause or Cancel Anytime</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🔄</span>
                      </div>
                      <span className="text-base">Upgrade or Downgrade Anytime</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="text-6xl font-bold mb-4">$3990<span className="text-2xl">/m</span></div>
                <Button className="bg-blue-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-600 mb-4">
                  Subscribe Now →
                </Button>
                <p className="text-sm text-gray-500">100% Satisfaction Guarantee</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚙️</span>
              </div>
              <span className="text-base text-gray-600">Need a Maintenance Plan?</span>
              <button className="text-blue-500 ml-2">↓</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-bold mb-2">7x</div>
              <p className="text-lg text-gray-600">Faster Than Hiring<br />In-House</p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">66%</div>
              <p className="text-lg text-gray-600">Less Employment<br />Cost per Month</p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">9.4</div>
              <p className="text-lg text-gray-600">Average<br />Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            We Help You Grow Your Business<br />
            Without Growing Your Team
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            BD Global Technology makes outsourcing design and development tasks a no-brainer by 
            eliminating the most common pain points of the industry.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">Scalable Remote Workforce</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">Top 3% Designers & Developers</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">You Own 100% of Everything We Do</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">Dedicated Project Manager</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">Daily Updates (Monday to Friday)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">No Contract. Cancel Anytime.</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Long Hiring Process</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Disappearing Remote Workers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Dependency on Your Agency for Updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Big Lump-sum Payment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Long-Term Commitment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Endless Waiting for a Response by Your Web Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">What is BD Global Technology?</h4>
                <button className="text-gray-400">↓</button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">How do I request a new task or project?</h4>
                <button className="text-gray-400">↓</button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">Do I communicate directly with the designer and developer?</h4>
                <button className="text-gray-400">↓</button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">Can we communicate via Slack or MS Teams?</h4>
                <button className="text-gray-400">↓</button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">How does your pricing work?</h4>
                <button className="text-gray-400">↓</button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3 text-lg">
              See All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Not Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a call with our experts and find out if we<br />
            are a great match for each other.
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

export default Pricing;

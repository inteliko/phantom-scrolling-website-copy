
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,995",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "1 dedicated designer",
        "Unlimited design requests",
        "24-48 hour turnaround",
        "Figma file access",
        "Email support",
        "Monthly 1-on-1 call"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,995",
      period: "/month",
      description: "Ideal for growing companies with multiple projects",
      features: [
        "2 dedicated team members",
        "Design + development",
        "Unlimited requests",
        "24-48 hour turnaround",
        "Project management",
        "Priority support",
        "Weekly strategy calls",
        "Source code access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Full dedicated team",
        "Custom workflow",
        "Dedicated project manager",
        "24/7 support",
        "Advanced integrations",
        "Custom reporting",
        "SLA guarantee",
        "On-site visits available"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? "bg-growmodo-blue text-white transform scale-105" 
                  : "bg-gray-50 border border-gray-200"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-growmodo-green text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-growmodo-green" : "text-growmodo-green"
                      }`} />
                      <span className={`text-sm ${plan.popular ? "text-white" : "text-gray-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full py-3 ${
                  plan.popular 
                    ? "bg-white text-growmodo-blue hover:bg-gray-100" 
                    : "bg-growmodo-blue text-white hover:bg-growmodo-blue/90"
                }`}>
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Can I pause my subscription?</h4>
              <p className="text-gray-600">Yes, you can pause your subscription at any time and resume when you're ready.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">What if I'm not satisfied?</h4>
              <p className="text-gray-600">We offer unlimited revisions until you're 100% satisfied with the work.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">How fast will I receive my designs?</h4>
              <p className="text-gray-600">Most requests are completed within 24-48 hours on average.</p>
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
            Book a call to discuss which plan is right for your business.
          </p>
          <Button className="bg-black text-white px-8 py-3 text-lg">
            Book a Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

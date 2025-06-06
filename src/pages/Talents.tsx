
import { Button } from "@/components/ui/button";

const Talents = () => {
  const talents = [
    {
      name: "Sarah Johnson",
      role: "Senior UI/UX Designer",
      experience: "5+ years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer",
      experience: "7+ years",
      skills: ["React", "Node.js", "Python", "PostgreSQL"],
      image: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Designer",
      experience: "4+ years",
      skills: ["Brand Identity", "Logo Design", "Print Design", "Typography"],
      image: "/placeholder.svg"
    },
    {
      name: "David Kim",
      role: "Frontend Developer",
      experience: "6+ years",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Wang",
      role: "Motion Graphics Designer",
      experience: "5+ years",
      skills: ["After Effects", "Cinema 4D", "Lottie", "Video Editing"],
      image: "/placeholder.svg"
    },
    {
      name: "James Wilson",
      role: "Product Designer",
      experience: "8+ years",
      skills: ["Product Strategy", "Design Systems", "User Testing", "Wireframing"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our Expert Talents
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Work with vetted designers and developers who are passionate about delivering exceptional results.
          </p>
        </div>
      </section>

      {/* Talents Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talents.map((talent, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-center mb-2">{talent.name}</h3>
                <p className="text-growmodo-blue text-center font-medium mb-2">{talent.role}</p>
                <p className="text-gray-600 text-center text-sm mb-4">{talent.experience} experience</p>
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

      {/* CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get matched with the perfect talent for your project in 24-48 hours.
          </p>
          <Button className="bg-black text-white px-8 py-3 text-lg">
            Book a Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Talents;

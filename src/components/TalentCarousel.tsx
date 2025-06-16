
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TalentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const talents = [
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      rating: 5,
      image: "/lovable-uploads/af5c552b-0743-40a7-8e07-9df37d3a60d9.png",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping"],
      experience: "5+ years"
    },
    {
      name: "Marcus Rodriguez",
      role: "Frontend Developer",
      rating: 5,
      image: "/lovable-uploads/e383dc5c-710e-4e15-9281-7bf5270162e8.png",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      experience: "4+ years"
    },
    {
      name: "Emily Watson",
      role: "Graphic Designer",
      rating: 5,
      image: "/lovable-uploads/f2793d4b-075c-40b3-b1f0-373bd0944fa0.png",
      skills: ["Brand Identity", "Print Design", "Illustration"],
      experience: "6+ years"
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      rating: 5,
      image: "/lovable-uploads/58083057-84a1-473f-adfe-c44f63d68016.png",
      skills: ["Node.js", "React", "Database Design"],
      experience: "7+ years"
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      rating: 5,
      image: "/lovable-uploads/be5f29b5-34d7-41b8-8ff4-a7e867bf2770.png",
      skills: ["Agile", "Team Leadership", "Client Relations"],
      experience: "8+ years"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === talents.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [talents.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === talents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? talents.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTalents = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % talents.length;
      visible.push(talents[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Meet Your Future<br />
            <span className="text-growmodo-blue">Team Members</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Our rigorously vetted talents are ready to join your team and deliver exceptional results from day one.
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-growmodo-blue text-growmodo-blue hover:bg-growmodo-blue hover:text-white transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex gap-8 overflow-hidden">
              {getVisibleTalents().map((talent, index) => (
                <div key={`${talent.name}-${currentIndex}-${index}`} className="flex-shrink-0 w-80 animate-fade-in">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-square mb-6 rounded-xl overflow-hidden bg-gray-100">
                      <img 
                        src={talent.image} 
                        alt={talent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-black mb-2">{talent.name}</h3>
                      <p className="text-lg text-growmodo-blue font-semibold mb-3">{talent.role}</p>
                      <div className="flex items-center justify-center gap-1 mb-3">
                        {Array.from({ length: talent.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 font-semibold mb-4">{talent.experience} experience</p>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-bold text-gray-900 text-center">Key Skills:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {talent.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-growmodo-blue/10 text-growmodo-blue text-sm font-semibold rounded-full border border-growmodo-blue/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-growmodo-blue text-growmodo-blue hover:bg-growmodo-blue hover:text-white transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-2">
            {talents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-growmodo-blue scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentCarousel;

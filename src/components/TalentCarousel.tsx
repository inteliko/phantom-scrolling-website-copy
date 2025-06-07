
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const TalentCarousel = () => {
  const [api, setApi] = useState<any>();

  const talents = [
    {
      image: "/lovable-uploads/af5c552b-0743-40a7-8e07-9df37d3a60d9.png",
      name: "Russell W.",
      role: "Graphic Designer",
      color: "bg-growmodo-green"
    },
    {
      image: "/lovable-uploads/be5f29b5-34d7-41b8-8ff4-a7e867bf2770.png",
      name: "Kristian L.",
      role: "WordPress Developer",
      color: "bg-growmodo-green"
    },
    {
      image: "/lovable-uploads/cee08128-65ac-48c0-aefd-fbded1d6f292.png",
      name: "Aira L.",
      role: "Shopify Developer",
      color: "bg-growmodo-blue"
    },
    {
      image: "/lovable-uploads/0bb5d39a-0f1c-405f-8d5b-fbc8f34bc3a0.png",
      name: "Alden M.",
      role: "Developer",
      color: "bg-growmodo-blue"
    },
    {
      image: "/lovable-uploads/4e1fc28b-dfb1-4db8-91a0-a2e0d51b1d2b.png",
      name: "Mel R.",
      role: "Creative Director",
      color: "bg-gray-100"
    },
    {
      image: "/lovable-uploads/e3679983-32c7-4d6f-bd01-bc7873910659.png",
      name: "Joshua B.",
      role: "UI/UX Designer",
      color: "bg-growmodo-blue"
    },
    {
      image: "/lovable-uploads/58083057-84a1-473f-adfe-c44f63d68016.png",
      name: "Sarah K.",
      role: "Frontend Developer",
      color: "bg-growmodo-green"
    },
    {
      image: "/lovable-uploads/7596d42d-8ba8-4fc6-84e7-e0b36f5fd049.png",
      name: "Maya P.",
      role: "Product Designer",
      color: "bg-growmodo-blue"
    },
    {
      image: "/lovable-uploads/e383dc5c-710e-4e15-9281-7bf5270162e8.png",
      name: "Alex M.",
      role: "Full Stack Developer",
      color: "bg-growmodo-green"
    }
  ];

  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 4 seconds (much slower than before)
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {talents.map((talent, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="flex-shrink-0 w-full bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="h-64 bg-gray-300 overflow-hidden">
                    <img 
                      src={talent.image} 
                      alt={talent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-4 ${talent.color} text-white`}>
                    <h3 className="font-semibold text-lg">{talent.name}</h3>
                    <p className="text-sm opacity-90">{talent.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TalentCarousel;

import React, { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clientData = [
  { name: "", logo: "/client/client1.png" },
  { name: "", logo: "/client/client2.png" },
  { name: "", logo: "/client/client3.png" },
  { name: "", logo: "/client/client4.jpeg" },
  { name: "", logo: "/client/client5.png" },
  { name: "", logo: "/client/client6.png" },
  { name: "", logo: "/client/client7.png" },
  { name: "", logo: "/client/client8.png" },
  { name: "", logo: "/client/client9.png" },
  { name: "", logo: "/client/client10.jpeg" },
  { name: "" ,logo: "/client/client11.png",  },
  { name: "" ,logo: "/client/client12.png",  },
  { name: "" ,logo: "/client/client13.png",  },
  { name: "" ,logo: "/client/client14.jpg",  },
  { name: "" ,logo: "/client/client15.png",  },
  { name: "" ,logo: "/client/client16.png",  },
  { name: "" ,logo: "/client/client17.png",  },
  { name: "" ,logo: "/client/client18.png",  },
  { name: "" ,logo: "/client/client19.png",  },
  { name: "" ,logo: "/client/client20.png",  },
  { name: "" ,logo: "/client/client21.png",  },
  { name: "" ,logo: "/client/client22.png",  },
  { name: "" ,logo: "/client/client23.png",  },
  { name: "" ,logo: "/client/client24.png",  },
  { name: "" ,logo: "/client/client25.png",  },
  { name: "" ,logo: "/client/client26.png",  },
  { name: "" ,logo: "/client/client27.png",  },
  { name: "" ,logo: "/client/client28.png",  },
  { name: "" ,logo: "/client/client29.png",  },
  { name: "" ,logo: "/client/client30.png",  },
  { name: "" ,logo: "/client/client31.png",  },
  { name: "" ,logo: "/client/client32.png",  },
  { name: "" ,logo: "/client/client33.png",  },
  { name: "" ,logo: "/client/client34.png",  },
  { name: "" ,logo: "/client/client35.png",  },
  { name: "" ,logo: "/client/client36.png",  },
  { name: "" ,logo: "/client/client37.png",  },
  { name: "" ,logo: "/client/client38.png",  },
  { name: "" ,logo: "/client/client39.png",  },
  { name: "" ,logo: "/client/client40.png",  },
  { name: "" ,logo: "/client/client41.png",  },
  { name: "" ,logo: "/client/client42.png",  },
];


const ClientLogosSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [totalSections, setTotalSections] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  // Drag to scroll functionality
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      isDragging.current = true;
      slider.style.cursor = 'grabbing';
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      setIsPaused(true);
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      slider.style.cursor = 'grab';
      setIsPaused(false);
    };

    const onMouseUp = () => {
      isDragging.current = false;
      slider.style.cursor = 'grab';
      setIsPaused(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 2;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    // Touch events for mobile
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      setIsPaused(true);
    };

    const onTouchEnd = () => {
      isDragging.current = false;
      setIsPaused(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 2;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);
    slider.addEventListener("touchstart", onTouchStart);
    slider.addEventListener("touchend", onTouchEnd);
    slider.addEventListener("touchmove", onTouchMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
      slider.removeEventListener("touchstart", onTouchStart);
      slider.removeEventListener("touchend", onTouchEnd);
      slider.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  // Calculate sections and track scroll position
  useEffect(() => {
    const updateSections = () => {
      const container = scrollRef.current;
      if (!container) return;

      const cardWidth = 256; // w-64 = 256px
      const gap = 24; // gap-6 = 24px
      const containerWidth = container.offsetWidth;
      const cardsPerView = Math.floor(containerWidth / (cardWidth + gap));
      const totalCards = clientData.length;
      const sections = Math.ceil(totalCards / cardsPerView);
      setTotalSections(sections);
    };

    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;

      const cardWidth = 256;
      const gap = 24;
      const scrollPosition = container.scrollLeft;
      const sectionWidth = (cardWidth + gap) * Math.floor(container.offsetWidth / (cardWidth + gap));
      const currentSec = Math.round(scrollPosition / sectionWidth);
      setCurrentSection(Math.min(currentSec, totalSections - 1));
    };

    updateSections();
    window.addEventListener('resize', updateSections);
    
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('resize', updateSections);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [totalSections]);

  // Auto scroll functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      if (!isDragging.current && scrollRef.current) {
        const container = scrollRef.current;
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 220, behavior: "smooth" });
        }
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Navigate to specific section
  const navigateToSection = (sectionIndex: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 256;
    const gap = 24;
    const cardsPerView = Math.floor(container.offsetWidth / (cardWidth + gap));
    const targetScrollLeft = sectionIndex * cardsPerView * (cardWidth + gap);
    
    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
    setCurrentSection(sectionIndex);
  };

  const duplicatedClients = [...clientData, ...clientData];

  return (
    <section 
      ref={sectionRef}
      className={`py-16 lg:py-24 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Our Clients
          </h3>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 rounded-full transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`} />
          <p className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            From startups to Fortune 500 companies, organizations worldwide choose MangosOrange 
            for their technology and talent needs.
          </p>
        </div>

        <div 
          className="relative overflow-hidden mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 cursor-grab select-none scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ 
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`relative flex-shrink-0 w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-card rounded-xl border-2 border-border/50 transition-all duration-500 hover:scale-105 hover:shadow-xl group overflow-hidden ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${(index % 6) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col items-center justify-center h-full p-4 relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl md:text-2xl mb-3 shadow-xl transform group-hover:scale-110 group-hover:blur-sm transition-all duration-300`}>
                    <img src={client.logo} alt={client.name} />
                    
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300 text-center leading-tight">
                    {client.name}
                  </h4>
                </div>

                <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default ClientLogosSection;
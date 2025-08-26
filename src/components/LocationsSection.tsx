import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, Landmark, Factory, Ship, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Location {
  city: string;
  icon: typeof MapPin;
}

const locations: Location[] = [
  { city: "Pune", icon: Building2 },
  { city: "Bengaluru", icon: Zap },
  { city: "Chennai", icon: Ship },
  { city: "Hyderabad", icon: Landmark },
  { city: "Kolkata", icon: Factory },
  { city: "Ahmedabad", icon: MapPin }
];

export default function LocationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-16 bg-gradient-to-b from-background to-accent/10 transition-all duration-700 ${
        isVisible ? 'fade-up visible' : 'fade-up'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Presence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're present across major Indian cities, delivering exceptional IT services 
            and staffing solutions with deep local market knowledge.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {locations.map((location) => {
            const IconComponent = location.icon;
            return (
              <Card
                key={location.city}
                className="group bg-card/70 backdrop-blur-sm border-0 shadow-lg 
                  hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="relative">
                      <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
                      </div>
                      {/* Pulse animation ring */}
                      <div className="absolute inset-0 bg-primary/20 rounded-lg animate-ping opacity-0 group-hover:opacity-75 transition-opacity"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {location.city}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-accent/30 px-4 py-2 rounded-full">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Expanding soon to Mumbai, Delhi, and Gurgaon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import { MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: MapPin,
    title: "Corp. Office",
    info: "B-47, 3rd Floor, Sector-64, Noida, U.P. - 201 301",
    link: "https://maps.google.com/?q=B-47+3rd+Floor+Sector-64+Noida+UP+201301"
  },
  {
    icon: Mail,
    title: "Email",
    info: "info@mangosorange.com",
    link: "mailto:info@mangosorange.com"
  },
  {
    icon: Phone,
    title: "Phone", 
    info: "+91 120 416 4821",
    link: "tel:+911204164821"
  }
];

export default function ReachUsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`bg-gradient-to-br from-primary to-primary-glow py-16 transition-all duration-700 ${
        isVisible ? 'fade-up visible' : 'fade-up'
      }`}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Reach Us
          </h2>
        </div>

        {/* Contact Cards Container */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl mx-auto max-w-xl">
          <div className="space-y-4">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={item.title}
                  className={`group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 
                    hover:scale-105 cursor-pointer ${
                    isVisible 
                      ? 'slide-in-left visible' 
                      : 'slide-in-left'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <CardContent className="p-5 text-center">
                    <div className="flex flex-col items-center space-y-3">
                      {/* Icon Circle */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-primary to-primary-glow p-4 rounded-full 
                          group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping 
                          opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-primary group-hover:text-primary-glow 
                          transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium group-hover:text-foreground 
                          transition-colors duration-300">
                          {item.info}
                        </p>
                      </div>

                      {/* Hover Indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-12 transition-all duration-700 ${
          isVisible ? 'fade-up visible' : 'fade-up'
        }`} style={{ transitionDelay: '600ms' }}>
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl overflow-hidden 
            hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-0">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 p-6 border-b border-primary/20">
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    MangosOrange Group
                  </h3>
                </div>
              </div>
              
              {/* Map Container */}
              <div className="map relative w-full h-96 md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0523899873588!2d77.37535917495657!3d28.628191884278802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c6cd24b04e5a09%3A0x25046598a1a8d72f!2sMangosOrange%20Group!5e0!3m2!1sen!2sin!4v1708155739955!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MangosOrange Group Location - H-87 Sector-63 Noida"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                  opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <p className="text-sm font-medium text-foreground">
                        📍 Visit our office in Noida
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-8 transition-all duration-700 ${
          isVisible ? 'fade-up visible' : 'fade-up'
        }`} style={{ transitionDelay: '800ms' }}>
          <p className="text-white/90 text-lg">
            Ready to get started? We're here to help! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
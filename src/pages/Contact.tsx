import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationsSection from "@/components/LocationsSection";
import ContactStatsSection from "@/components/ContactStatsSection";
import ReachUsSection from "@/components/ReachUsSection";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  robotCheck: z.boolean().refine(val => val === true, "Please confirm you are not a robot"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      robotCheck: false,
    },
  });

  useEffect(() => {
    // Auto-scroll to message section when page loads
    const timer = setTimeout(() => {
      const messageSection = document.getElementById('message-section');
      if (messageSection) {
        messageSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // cconnect from here
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <Header />
      
      <div className="pt-16 lg:pt-20">
        <ContactStatsSection />
      
      <div id="message-section" className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fb923c' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with the right technology and talent? 
              Let's start a conversation about how we can help you succeed.
            </p>
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Contact Form */}
            <Card className="bg-white backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 relative z-20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Send us a message
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-30">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field}
                                className="bg-white border border-gray-200 focus:border-primary focus:ring-primary relative z-40"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+91 98765 43210" 
                                type="tel" 
                                {...field}
                                className="bg-white border border-gray-200 focus:border-primary focus:ring-primary relative z-40"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@company.com" 
                              type="email" 
                              {...field}
                              className="bg-white border border-gray-200 focus:border-primary focus:ring-primary relative z-40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="How can we help you?" 
                              {...field}
                              className="bg-white border border-gray-200 focus:border-primary focus:ring-primary relative z-40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project, goals, or how we can help..." 
                              className="min-h-[120px] bg-white border border-gray-200 focus:border-primary focus:ring-primary relative z-40"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="robotCheck"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-medium">
                              I am not a robot *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-black hover:bg-black/90 text-white font-semibold py-3 rounded-lg
                        transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 relative z-40"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Reach Us Section - Replacing Quick Contact */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-8 h-full shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Reach Us
                </h2>
                
                <div className="space-y-6">
                  {/* Address Card */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer group"
                       onClick={() => window.open('https://maps.google.com/?q=H-87+Sector-63+Noida+UP+201301', '_blank')}>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="relative">
                        <div className="bg-gradient-to-br from-primary to-primary-glow p-3 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-primary mb-1">Corp. Address</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          H-87 Sector-63 Noida U.P 201301
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer group"
                       onClick={() => window.open('mailto:info@mangosorange.com', '_blank')}>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="relative">
                        <div className="bg-gradient-to-br from-primary to-primary-glow p-3 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-primary mb-1">Email Us</h3>
                        <p className="text-muted-foreground text-xs">
                          info@mangosorange.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer group"
                       onClick={() => window.open('tel:+911204164821', '_blank')}>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="relative">
                        <div className="bg-gradient-to-br from-primary to-primary-glow p-3 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Phone className="h-5 w-5 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-primary mb-1">Call Us</h3>
                        <p className="text-muted-foreground text-xs">
                          +91-120-416 4821
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Location Card with Map */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
                       onClick={() => window.open('https://maps.google.com/?q=H-87+Sector-63+Noida+UP+201301', '_blank')}>
                    <div className="p-4">
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <div className="bg-gradient-to-br from-primary to-primary-glow p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary">Our Location</h3>
                      </div>
                    </div>
                    
                    {/* Mini Map */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0523899873588!2d77.37535917495657!3d28.628191884278802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c6cd24b04e5a09%3A0x25046598a1a8d72f!2sMangosOrange%20Group!5e0!3m2!1sen!2sin!4v1708155739955!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="MangosOrange Group Location"
                        className="grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                      ></iframe>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2 text-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-md px-2 py-1">
                            <p className="text-xs font-medium text-foreground">
                              📍 View on Maps
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-8">
                  <p className="text-white/90 text-sm">
                    Ready to get started? We're here to help! 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      </div>
    </div>
  );
}
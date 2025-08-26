import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-primary mb-4">
              MangosOrange
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Bridging the gap between cutting-edge technology and exceptional talent. 
              We know tech, we care about people.
            </p>
            <div className="flex gap-4">
              <Link to="https://www.linkedin.com/company/mangosorange/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/web-development" className="text-background/80 hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/app-development" className="text-background/80 hover:text-primary transition-colors">App Development</Link></li>
              <li><Link to="/open-source" className="text-background/80 hover:text-primary transition-colors">Open Source</Link></li>
              <li><Link to="/custom-software" className="text-background/80 hover:text-primary transition-colors">Custom Software</Link></li>
              <li><Link to="/ecommerce" className="text-background/80 hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link to="/cloud-strategy" className="text-background/80 hover:text-primary transition-colors">Cloud Infrastructure</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-background/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-background/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/terms-and-conditions" className="text-background/80 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/careers" className="text-background/80 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-background/80 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <Link to="mailto:info@mangosorange.com" className="text-background/80 hover:text-primary transition-colors">
                  info@mangosorange.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <Link to="tel:+911204164821" className="text-background/80 hover:text-primary transition-colors">
                  +91 120 416 4821
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-background/80">
                  B-47, 3rd Floor, Sector-64<br />
                  Noida, U.P. - 201 301
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2025 MangosOrange. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/terms-and-conditions" className="text-background/60 hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
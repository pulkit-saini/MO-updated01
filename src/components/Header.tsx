import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Building2 } from 'lucide-react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useScrollToSection } from '@/utils/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import navLogo from '@/assets/c6935172-f978-4b7f-a28c-db62025bfe9b.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useScrollToSection();
  const location = useLocation();
  const navigate = useNavigate();
  const isITActive = ['/it-services','/web-development','/app-development','/open-source','/custom-software','/ecommerce'].some(p => location.pathname.startsWith(p));
  const isCloudActive = ['/cloud-strategy','/data-migration','/managed-services'].some(p => location.pathname.startsWith(p));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
        : 'bg-background/80 backdrop-blur-sm shadow-md'
    }`}>
      <div className="w-full px-4 lg:px-6">
        <nav className="flex items-center justify-between h-16 lg:h-20 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center group">
            <div className="p-1 rounded-xl">
              <img src={navLogo} alt="MangosOrange Logo" className="h-10 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-foreground hover:text-primary transition-colors duration-300 font-medium relative group ${isActive ? 'text-primary' : ''}`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 ${location.pathname === '/' ? 'w-full' : 'w-0'} h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}></span>
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `text-foreground hover:text-primary transition-colors duration-300 font-medium relative group ${isActive ? 'text-primary' : ''}`}
            >
              About
              <span className={`absolute -bottom-1 left-0 ${location.pathname.startsWith('/about') ? 'w-full' : 'w-0'} h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}></span>
            </NavLink>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => navigate('/it-services')} className={`text-foreground bg-transparent hover:bg-transparent font-medium data-[state=open]:text-primary px-0 ${isITActive ? 'text-primary' : ''}`}>
                    IT Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-6 bg-background/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl">
                      <div className="row-span-3">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-foreground mb-2">IT Services</h4>
                          <p className="text-sm text-muted-foreground">Custom web solutions and modern frameworks</p>
                        </div>
                        <div className="grid gap-2">
                          <Link to="/web-development">
                            <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group">
                              <div className="text-sm font-medium leading-none group-hover:translate-x-1 transition-transform duration-300">Web Development</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Custom web solutions and modern frameworks
                              </p>
                            </NavigationMenuLink>
                          </Link>
                          <Link to="/app-development">
                            <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group">
                              <div className="text-sm font-medium leading-none group-hover:translate-x-1 transition-transform duration-300">App Development</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Mobile and desktop applications
                              </p>
                            </NavigationMenuLink>
                          </Link>
                          <Link to="/open-source">
                            <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group">
                              <div className="text-sm font-medium leading-none group-hover:translate-x-1 transition-transform duration-300">Open Source</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Open source solutions and contributions
                              </p>
                            </NavigationMenuLink>
                          </Link>
                          <Link to="/custom-software">
                            <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group">
                              <div className="text-sm font-medium leading-none group-hover:translate-x-1 transition-transform duration-300">Custom Software</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Tailored software solutions for your business
                              </p>
                            </NavigationMenuLink>
                          </Link>
                          <Link to="/ecommerce">
                            <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group">
                              <div className="text-sm font-medium leading-none group-hover:translate-x-1 transition-transform duration-300">E-commerce</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Online store and e-commerce platforms
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>


            <NavigationMenu className="-ml-2">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-foreground bg-transparent hover:bg-transparent font-medium data-[state=open]:text-primary px-0 ${isCloudActive ? 'text-primary' : ''}`}>
                    Cloud Infrastructure
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[350px] gap-3 p-6 bg-background/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-foreground mb-2">Cloud Infrastructure</h4>
                        <p className="text-sm text-muted-foreground">Enterprise cloud solutions and management</p>
                      </div>
                      <Link to="/cloud-strategy">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group">
                          <div className="text-sm font-medium leading-none group-hover:translate-x-1 transition-transform duration-300">Cloud Strategy & Consulting</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Strategic planning and consulting for cloud adoption
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/data-migration">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group">
                          <div className="text-sm font-medium leading-none group-hover:translate-x-1 transition-transform duration-300">Data Migration Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Seamless migration of data to cloud platforms
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/managed-services">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group">
                          <div className="text-sm font-medium leading-none group-hover:translate-x-1 transition-transform duration-300">Managed Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Complete cloud infrastructure management and support
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <NavLink 
              to="/staffing" 
              className={({ isActive }) => `text-foreground hover:text-primary transition-colors duration-300 font-medium relative group ${isActive ? 'text-primary' : ''}`}
            >
              Staffing
              <span className={`absolute -bottom-1 left-0 ${location.pathname.startsWith('/staffing') ? 'w-full' : 'w-0'} h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}></span>
            </NavLink>
            
            <NavLink 
              to="/hmis" 
              className={({ isActive }) => `text-foreground hover:text-primary transition-colors duration-300 font-medium relative group ${isActive ? 'text-primary' : ''}`}
            >
              HMIS
              <span className={`absolute -bottom-1 left-0 ${location.pathname.startsWith('/hmis') ? 'w-full' : 'w-0'} h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}></span>
            </NavLink>
            
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 px-6 py-2 rounded-full font-medium"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden p-2 hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
            <div className="container mx-auto px-6 py-8 space-y-6">
            <Link to="/" className="block text-foreground hover:text-primary transition-colors py-2 font-medium">Home</Link>
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors py-2 font-medium">About</Link>
            
            <div className="space-y-3">
              <div className="text-sm font-semibold text-primary uppercase tracking-wide">IT Services</div>
              <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                <Link to="/web-development" className="block text-foreground hover:text-primary transition-colors py-1 text-sm">Web Development</Link>
                <Link to="/app-development" className="block text-foreground hover:text-primary transition-colors py-1 text-sm">App Development</Link>
                <Link to="/open-source" className="block text-foreground hover:text-primary transition-colors py-1 text-sm">Open Source</Link>
                <Link to="/custom-software" className="block text-foreground hover:text-primary transition-colors py-1 text-sm">Custom Software</Link>
                <Link to="/ecommerce" className="block text-foreground hover:text-primary transition-colors py-1 text-sm">E-commerce</Link>
              </div>
            </div>
            
            
            <div className="space-y-3">
              <div className="text-sm font-semibold text-primary uppercase tracking-wide">Cloud Infrastructure</div>
              <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                <Link to="/cloud-strategy" className="block text-foreground hover:text-primary transition-colors py-1 text-sm">Cloud Strategy & Consulting</Link>
                <Link to="/data-migration" className="block text-foreground hover:text-primary transition-colors py-1 text-sm">Data Migration Services</Link>
                <Link to="/managed-services" className="block text-foreground hover:text-primary transition-colors py-1 text-sm">Managed Services</Link>
              </div>
            </div>
            
            <Link to="/staffing" className="block text-foreground hover:text-primary transition-colors py-2 font-medium">Staffing</Link>
            <Link to="/hmis" className="block text-foreground hover:text-primary transition-colors py-2 font-medium">HMIS</Link>
            
            <div className="pt-4 border-t border-border/50">
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 rounded-full font-medium"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
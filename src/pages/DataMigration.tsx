import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Database, Server, RefreshCw, ArrowRight, Shield, Clock } from 'lucide-react';
import dataMigrationHero from '@/assets/data-migration-hero.jpg';

const DataMigration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="page-top-spacing pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Data Migration Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                MangosOrange offers specialized Migration Services, ensuring seamless transitions from data 
                centers to the cloud. Their expertise in application modernization and refactoring helps businesses 
                enhance performance and scalability. Additionally, MangosOrange provides comprehensive database migration 
                services, ensuring that your data is securely and efficiently transferred to the new environment, 
                minimizing downtime and maximizing efficiency.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Data center to cloud migration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Application modernization and refactoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Database migration services</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img 
                src={dataMigrationHero} 
                alt="Data Migration Services" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Data Center to Cloud Migration</h3>
              <p className="text-muted-foreground">
                Seamless migration of your entire infrastructure from traditional data centers to modern cloud platforms.
              </p>
            </div>

            <div className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale" style={{animationDelay: '0.1s'}}>
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <RefreshCw className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Modernization</h3>
              <p className="text-muted-foreground">
                Our expertise in application modernization and refactoring helps businesses enhance performance and scalability.
              </p>
            </div>

            <div className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale" style={{animationDelay: '0.2s'}}>
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Database Migration Services</h3>
              <p className="text-muted-foreground">
                Comprehensive database migration services, ensuring that your data is securely and efficiently transferred to the new environment.
              </p>
            </div>
          </div>

          {/* Migration Process */}
          <div className="bg-card rounded-2xl p-12 shadow-xl mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Migration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Assessment</h4>
                <p className="text-muted-foreground">Analyze current infrastructure and data</p>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Planning</h4>
                <p className="text-muted-foreground">Create detailed migration roadmap</p>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Execution</h4>
                <p className="text-muted-foreground">Migrate data with minimal downtime</p>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Validation</h4>
                <p className="text-muted-foreground">Ensure data integrity and performance</p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-card rounded-2xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-center mb-12">Migration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 animate-fade-in">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Minimal Downtime</h4>
                  <p className="text-muted-foreground">Our proven migration strategies ensure business continuity with minimal disruption.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Data Security</h4>
                  <p className="text-muted-foreground">End-to-end encryption and security measures throughout the migration process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Data Integrity</h4>
                  <p className="text-muted-foreground">Complete validation processes ensure no data loss during migration.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <ArrowRight className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Performance Enhancement</h4>
                  <p className="text-muted-foreground">Optimized cloud infrastructure for improved application performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <RefreshCw className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-6">Ready to Migrate to the Cloud?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our migration experts help you transition to the cloud seamlessly and securely.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-4 hover-scale">
              Start Your Migration
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataMigration;
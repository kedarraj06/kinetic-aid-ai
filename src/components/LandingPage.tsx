import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain, Users, Shield, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-rehab.jpg";
import therapistImage from "@/assets/therapist-dashboard.jpg";
import aiImage from "@/assets/ai-feedback.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">RehabAI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button variant="default">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Rehabilitation
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Powered by AI
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Transform your recovery journey with AI-powered exercise guidance and real-time feedback. 
                  Connect with therapists and track your progress from the comfort of home.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Start Your Recovery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  For Therapists
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>AI-Powered Feedback</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Remote Monitoring</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Patient doing rehabilitation exercises at home with AI guidance"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Everything You Need for Recovery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform combines cutting-edge AI technology with expert medical guidance 
              to accelerate your rehabilitation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">AI-Powered Analysis</CardTitle>
                <CardDescription className="text-base">
                  Real-time pose estimation and movement analysis provides instant feedback on your exercise form.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={aiImage} 
                  alt="AI pose estimation technology" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Therapist Connection</CardTitle>
                <CardDescription className="text-base">
                  Stay connected with your healthcare team through our secure messaging and monitoring system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={therapistImage} 
                  alt="Therapist monitoring patient progress" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-success" />
                </div>
                <CardTitle className="text-xl">Progress Tracking</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive analytics and progress visualization help you and your therapist monitor recovery.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Weekly Progress</span>
                    <span className="text-success font-medium">+23%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-success to-secondary h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">24</p>
                    <p className="text-sm text-muted-foreground">Sessions</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-secondary">87%</p>
                    <p className="text-sm text-muted-foreground">Accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Revolutionizing Rehabilitation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RehabAI combines advanced computer vision, machine learning, and medical expertise to create 
                a personalized rehabilitation experience. Our platform helps stroke and injury patients recover 
                faster and more effectively through intelligent guidance and continuous monitoring.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">HIPAA Compliant</h3>
                    <p className="text-muted-foreground">Your health data is protected with enterprise-grade security.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Evidence-Based</h3>
                    <p className="text-muted-foreground">Built on proven rehabilitation methodologies and clinical research.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Activity className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Accessible Design</h3>
                    <p className="text-muted-foreground">Large fonts, high contrast, and intuitive interface for all users.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-secondary">40%</p>
                  <p className="text-sm text-muted-foreground">Faster Recovery</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-success">1000+</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-warning">24/7</p>
                  <p className="text-sm text-muted-foreground">AI Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Trusted by Patients and Therapists
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from people whose lives have been transformed by RehabAI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "After my stroke, RehabAI helped me regain confidence in my movements. 
                    The AI feedback is so encouraging and precise."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">MP</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Maria P.</p>
                      <p className="text-sm text-muted-foreground">Stroke Recovery Patient</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "As a physical therapist, RehabAI has revolutionized how I monitor my patients' 
                    progress between sessions."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-semibold">DK</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Dr. Kevin</p>
                      <p className="text-sm text-muted-foreground">Physical Therapist</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "The progress tracking features keep me motivated every day. 
                    I can see my improvement in real-time!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                      <span className="text-success font-semibold">JS</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">John S.</p>
                      <p className="text-sm text-muted-foreground">Sports Injury Recovery</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Transform Your Recovery?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of patients and therapists who trust RehabAI for better rehabilitation outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-6 w-6" />
                <span className="text-xl font-bold">RehabAI</span>
              </div>
              <p className="text-sm opacity-80">
                Transforming rehabilitation through AI-powered guidance and remote monitoring.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Features</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Security</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Documentation</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2 text-sm opacity-80">
                <p>support@rehabai.com</p>
                <p>1-800-REHAB-AI</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 RehabAI. All rights reserved. HIPAA Compliant.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Rocket, Users, Lightbulb, Cog, Globe } from "lucide-react";

const MissionVision = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Our Mission & Vision
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Guided by innovation. Driven by results.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-accent py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To deliver innovative, intelligent digital solutions that merge design, 
              development, and strategy—empowering businesses to succeed in a tech-driven world.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact-us">Let's Work Together</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Rocket className="w-24 h-24 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become a globally trusted AI-first digital agency, known for driving 
              impact, embracing change, and building the future of digital experiences.
            </p>
          </div>
          <div className="md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                <Globe className="w-24 h-24 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-full animate-pulse opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-accent py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">We challenge norms and build what's next.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-muted-foreground">Great outcomes start with great teams.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Creativity</h3>
                <p className="text-muted-foreground">We connect logic with imagination.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Execution</h3>
                <p className="text-muted-foreground">Ideas become impactful only when executed well.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Global Thinking</h3>
                <p className="text-muted-foreground">Solutions built for reach and relevance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Ready to explore the next big thing in tech? Let's talk about your vision.
          </p>
          <Button asChild className="bg-background text-foreground hover:bg-background/90 shadow-lg">
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
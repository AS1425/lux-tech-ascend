
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3, Brain, MessageSquare, TrendingUp, Users, Zap, Target, CheckCircle, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ConversationalAnalytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Conversational Analytics Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Leverage AI-driven conversational analytics to gain deeper insights into customer interactions and optimize your business strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass glow-purple hover:scale-105 transition-all duration-300">
                Start Optimizing Your Conversations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-accent transition-all duration-300">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                What is Conversational Analytics?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Conversational analytics uses AI and natural language processing (NLP) to analyze customer interactions, whether through voice, text, or chat. By extracting valuable insights from conversations, businesses can understand customer needs, improve engagement, and optimize operations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With conversational analytics, you can track sentiment, measure customer satisfaction, identify key pain points, and predict future customer behaviors. Our conversational analytics services help businesses uncover actionable insights that drive better decision-making and more effective customer interactions.
              </p>
            </div>
            <div className="animate-fade-left">
              <div className="relative">
                <div className="glass p-8 rounded-2xl border-2 border-primary/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold">Chat Analysis</h3>
                    </div>
                    <div className="text-center">
                      <Brain className="h-12 w-12 text-secondary mx-auto mb-4" />
                      <h3 className="font-semibold">AI Processing</h3>
                    </div>
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold">Data Insights</h3>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                      <h3 className="font-semibold">Growth Trends</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Essential Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why Conversational Analytics is Critical for Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              As customer interactions increasingly shift to digital channels, understanding the context, tone, and intent behind these conversations becomes crucial for business success. Conversational analytics allows businesses to gain a deeper understanding of customer behavior, optimize customer service, and drive more personalized experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover glass border-primary/20">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Customer Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gain deeper insights into customer behavior and preferences through conversation analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover glass border-secondary/20">
              <CardHeader>
                <Target className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Personalized Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deliver tailored interactions based on conversation patterns and customer intent.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover glass border-primary/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Business Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identify trends and opportunities to improve services and business strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Conversational Analytics Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our conversational analytics services follow a structured process to ensure that you gain actionable insights from every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="glass p-6 rounded-xl border-2 border-primary/20 mb-4">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Consultation & Discovery</h3>
                <p className="text-muted-foreground">
                  Understanding your business needs, customer touchpoints, and data collection goals.
                </p>
              </div>
            </div>

            <div className="text-center animate-scale-in">
              <div className="glass p-6 rounded-xl border-2 border-secondary/20 mb-4">
                <MessageSquare className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                <p className="text-muted-foreground">
                  Gathering data from chatbots, voice assistants, customer support, and social media.
                </p>
              </div>
            </div>

            <div className="text-center animate-scale-in">
              <div className="glass p-6 rounded-xl border-2 border-primary/20 mb-4">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI & NLP Processing</h3>
                <p className="text-muted-foreground">
                  Analyzing conversations with AI models to extract sentiment, intent, and topics.
                </p>
              </div>
            </div>

            <div className="text-center animate-scale-in">
              <div className="glass p-6 rounded-xl border-2 border-secondary/20 mb-4">
                <BarChart3 className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Insights & Reporting</h3>
                <p className="text-muted-foreground">
                  Providing detailed analytics reports highlighting trends and actionable insights.
                </p>
              </div>
            </div>

            <div className="text-center animate-scale-in">
              <div className="glass p-6 rounded-xl border-2 border-primary/20 mb-4">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Optimization & Recommendations</h3>
                <p className="text-muted-foreground">
                  Offering actionable recommendations to improve customer service and strategies.
                </p>
              </div>
            </div>

            <div className="text-center animate-scale-in">
              <div className="glass p-6 rounded-xl border-2 border-secondary/20 mb-4">
                <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ongoing Monitoring</h3>
                <p className="text-muted-foreground">
                  Continuously monitoring and updating analytics models for ongoing optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Key Benefits of Conversational Analytics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 animate-fade-right">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer Insight</h3>
                  <p className="text-muted-foreground">
                    Gain a deep understanding of customer needs, behavior, and satisfaction levels based on their interactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-right">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Improved Decision-Making</h3>
                  <p className="text-muted-foreground">
                    Use data-driven insights to inform business strategies, improve service offerings, and optimize marketing efforts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-right">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enhanced Customer Engagement</h3>
                  <p className="text-muted-foreground">
                    Personalize customer interactions by identifying patterns and preferences, improving retention and satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 animate-fade-left">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                  <p className="text-muted-foreground">
                    Track conversations in real-time, enabling businesses to address issues as they arise and make immediate improvements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-left">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Increased Operational Efficiency</h3>
                  <p className="text-muted-foreground">
                    Automate analysis and reporting, saving time and resources while improving accuracy.
                  </p>
                </div>
              </div>

              <div className="animate-fade-left">
                <div className="glass p-6 rounded-xl border-2 border-primary/20 text-center">
                  <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                  <p className="text-muted-foreground">
                    Leverage cutting-edge AI and machine learning for comprehensive conversation analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Partner with Us for Conversational Analytics?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team specializes in providing advanced conversational analytics solutions that turn your data into actionable insights. With expertise in AI, machine learning, and NLP, we are equipped to analyze your customer conversations at scale and provide the insights needed to drive business improvement.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We work closely with your team to ensure that our solutions align with your objectives, and we continuously optimize our models to meet your evolving needs. Partner with us to unlock the full potential of your conversational data and gain a competitive advantage.
              </p>
              <Button size="lg" className="pulse-glow">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="animate-fade-left">
              <div className="grid grid-cols-2 gap-6">
                <Card className="glass border-primary/20 text-center p-6">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">AI Expertise</h3>
                  <p className="text-sm text-muted-foreground">Advanced AI and ML capabilities</p>
                </Card>
                <Card className="glass border-secondary/20 text-center p-6">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Customer Focus</h3>
                  <p className="text-sm text-muted-foreground">Tailored solutions for your needs</p>
                </Card>
                <Card className="glass border-secondary/20 text-center p-6">
                  <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">Track record of success</p>
                </Card>
                <Card className="glass border-primary/20 text-center p-6">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Continuous Support</h3>
                  <p className="text-sm text-muted-foreground">Ongoing optimization and updates</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Unlock Insights with Conversational Analytics?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your customer conversations into valuable business insights. Let our experts help you implement a conversational analytics solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cta-ripple glow-purple">
              Unlock Insights with Conversational Analytics
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-accent">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConversationalAnalytics;

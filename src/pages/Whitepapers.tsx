import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Brain, Zap, Users, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';

const Whitepapers = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Marketing Automation', 'Product Innovation', 'Digital Transformation', 'Industry Insights'];

  const whitepapers = [
    {
      id: 1,
      title: 'Accelerating Business Growth with Automation',
      description: 'A comprehensive 12-page guide to using AI and automation for scaling your business operations efficiently.',
      category: 'Marketing Automation',
      tags: ['AI', 'Automation', 'Growth'],
      icon: <Zap className="h-8 w-8" />,
      featured: false
    },
    {
      id: 2,
      title: 'Building Scalable AI Systems',
      description: 'Learn the architecture patterns and best practices for developing AI systems that grow with your business.',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Architecture', 'Scalability'],
      icon: <Brain className="h-8 w-8" />,
      featured: true
    },
    {
      id: 3,
      title: 'Digital Transformation Strategy Guide',
      description: 'Navigate the complexities of digital transformation with proven frameworks and real-world case studies.',
      category: 'Digital Transformation',
      tags: ['Strategy', 'Digital', 'Framework'],
      icon: <TrendingUp className="h-8 w-8" />,
      featured: false
    },
    {
      id: 4,
      title: 'Customer Experience Innovation',
      description: 'Discover how leading companies are revolutionizing customer experience through innovative technology.',
      category: 'Product Innovation',
      tags: ['CX', 'Innovation', 'Technology'],
      icon: <Users className="h-8 w-8" />,
      featured: false
    },
    {
      id: 5,
      title: 'Marketing Automation ROI Report 2024',
      description: 'Industry research showing how businesses achieve 300%+ ROI through strategic marketing automation.',
      category: 'Industry Insights',
      tags: ['ROI', 'Marketing', 'Research'],
      icon: <FileText className="h-8 w-8" />,
      featured: false
    },
    {
      id: 6,
      title: 'AI-Powered Analytics Playbook',
      description: 'Transform your data into actionable insights with AI-powered analytics tools and methodologies.',
      category: 'AI & Machine Learning',
      tags: ['Analytics', 'AI', 'Data'],
      icon: <Brain className="h-8 w-8" />,
      featured: false
    }
  ];

  const filteredWhitepapers = selectedCategory === 'All' 
    ? whitepapers 
    : whitepapers.filter(wp => wp.category === selectedCategory);

  const featuredWhitepaper = whitepapers.find(wp => wp.featured);
  const regularWhitepapers = filteredWhitepapers.filter(wp => !wp.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-background">{/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-primary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Insights & Whitepapers
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access our exclusive insights, best practices, and industry research on AI, automation, digital transformation, and more.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 
                  "bg-gradient-to-r from-primary to-purple-600 text-white" : 
                  "hover:bg-primary/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Whitepaper */}
      {featuredWhitepaper && selectedCategory === 'All' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-32 h-40 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {featuredWhitepaper.icon}
                  </div>
                </div>
                <div>
                  <Badge className="mb-4 bg-primary/20 text-primary">Featured Resource</Badge>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {featuredWhitepaper.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredWhitepaper.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredWhitepaper.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download the Full Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Resource Grid */}
      <section id="resources" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">{regularWhitepapers.map((whitepaper) => (
              <Card key={whitepaper.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/10 hover:border-primary/30">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {whitepaper.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {whitepaper.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {whitepaper.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {whitepaper.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get notified about new whitepapers, industry insights, and exclusive research reports delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
              Subscribe to Updates
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact Our Team
            </Button>
          </div>
        </div>
        </section>
      </div>
    </Layout>
  );
};

export default Whitepapers;
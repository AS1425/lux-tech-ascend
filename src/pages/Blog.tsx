import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Search, Calendar, User, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const categories = [
    'All',
    'AI & Machine Learning',
    'Web Development',
    'Digital Marketing',
    'SEO & Growth',
    'Automation & Tools',
    'Company Culture',
    'Case Studies'
  ];

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: '5 Ways AI Agents are Transforming eCommerce',
      excerpt: 'Discover how businesses are using AI agents to boost automation, personalization, and customer service.',
      category: 'AI & Machine Learning',
      author: 'Mohit Chaudhary',
      date: 'July 20, 2025',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications with React and TypeScript',
      excerpt: 'Learn best practices for developing robust, maintainable web applications using modern frameworks.',
      category: 'Web Development',
      author: 'Ankit Kumar',
      date: 'July 18, 2025',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'The Future of Conversational AI in Customer Support',
      excerpt: 'Explore how advanced chatbots and AI assistants are revolutionizing customer service experiences.',
      category: 'AI & Machine Learning',
      author: 'Janvi Anand',
      date: 'July 15, 2025',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'SEO Strategies for AI-Powered Websites',
      excerpt: 'Master the art of optimizing AI-driven websites for search engines and improved visibility.',
      category: 'SEO & Growth',
      author: 'Yogesh Kaushik',
      date: 'July 12, 2025',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Digital Marketing Automation: Tools and Techniques',
      excerpt: 'Streamline your marketing efforts with the latest automation tools and proven strategies.',
      category: 'Digital Marketing',
      author: 'Prabhat Singh',
      date: 'July 10, 2025',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Building Remote-First Culture at Foreignerds',
      excerpt: 'Insights into how we maintain team collaboration and innovation in a distributed work environment.',
      category: 'Company Culture',
      author: 'Ajit Pal Singh',
      date: 'July 8, 2025',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Case Study: AI Chatbot Implementation for Healthcare',
      excerpt: 'How we helped a healthcare provider reduce response time by 80% with intelligent automation.',
      category: 'Case Studies',
      author: 'Mohit Chaudhary',
      date: 'July 5, 2025',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      title: 'Essential Development Tools for Modern Teams',
      excerpt: 'A comprehensive guide to tools that enhance productivity and code quality in software development.',
      category: 'Automation & Tools',
      author: 'Ankit Kumar',
      date: 'July 3, 2025',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    },
    {
      id: 9,
      title: 'Machine Learning Models in Production: Best Practices',
      excerpt: 'Learn how to deploy and maintain ML models at scale with reliability and performance in mind.',
      category: 'AI & Machine Learning',
      author: 'Janvi Anand',
      date: 'June 30, 2025',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    }
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const recentPosts = blogPosts.slice(0, 5);
  const popularTags = ['AI', 'Machine Learning', 'React', 'TypeScript', 'SEO', 'Automation', 'Chatbots', 'Development'];

  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Explore Insights from the{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Frontier
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stay updated with expert insights, industry trends, and practical strategies in AI, Development, and Digital Marketing.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Category Filters */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold text-foreground">Filter by Category</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => handleCategoryChange(category)}
                    className="rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/90 text-primary-foreground font-medium"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>By {post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                      className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80 flex items-center"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10 p-0"
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 space-y-8">
              {/* Search */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search..." className="pl-10" />
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-foreground line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-white/90 text-sm mb-4">
                  Get the latest insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input 
                    placeholder="Your email address" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
import Link from 'next/link';
import { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog — Insights on AI, Web & Growth | Oktuv',
  description: 'Actionable strategies and deep dives into AI automation, performance marketing, web development, and business growth for modern founders.',
  alternates: {
    canonical: 'https://www.oktuvglobal.com/blog/',
  },
};

export default function BlogListingPage() {
  const targetFeaturedSlug = 'reduce-customer-acquisition-cost-ai';
  const featuredPost = blogPosts.find(p => p.slug === targetFeaturedSlug) || blogPosts[0];
  const remainingPosts = blogPosts
    .filter(p => p.slug !== featuredPost.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: 'var(--surface)' }}>
      <Navbar />

      <main className="flex-1 relative pb-32">
        {/* Background Effects */}
        <div className="mesh-bg">
          <div className="mesh-orb-1" style={{ opacity: 0.5 }} />
          <div className="mesh-orb-2" style={{ opacity: 0.4 }} />
        </div>
        <div className="hero-glass-overlay" />

        <div className="wrap relative z-10 pt-24 lg:pt-32">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20" style={{ animation: 'fadeUp 0.6s ease forwards' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full" style={{ background: 'var(--brand-light)', border: '1px solid rgba(255,92,0,0.2)' }}>
              <Sparkles size={14} color="var(--brand)" />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--brand)' }}>Oktuv Insights</span>
            </div>
            <h1 className="h-display mb-6">Thoughts on Growth, AI & Building.</h1>
            <p className="lead mx-auto">No fluff. Just actionable strategies and deep dives into performance marketing, AI automation, and product engineering for ambitious founders.</p>
          </div>

          {/* Featured Post */}
          <div className="mb-20" style={{ animation: 'fadeUp 0.8s ease forwards' }}>
            <h2 className="text-sm font-semibold tracking-wider uppercase mb-6" style={{ color: 'var(--ink3)' }}>Featured Article</h2>
            
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="glass rounded-[24px] lg:rounded-[32px] overflow-hidden spotlight-container hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,92,0,0.2)]" style={{ padding: '2px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <div className="spotlight-card rounded-[22px] lg:rounded-[30px] p-8 lg:p-12 h-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center" style={{ background: 'rgba(10,10,11,0.6)' }}>
                  
                  {/* Text Content (Left Side) */}
                  <div className="w-full lg:w-7/12 flex flex-col">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink2)' }}>{featuredPost.category}</span>
                      <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--ink3)' }}>
                        <Calendar size={13} /> {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--ink3)' }}>
                        <Clock size={13} /> {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--ink)', lineHeight: 1.25, letterSpacing: '-0.5px' }}>
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-[15px] lg:text-[16px] mb-8 line-clamp-3" style={{ color: 'var(--ink3)', lineHeight: 1.6 }}>
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-2 text-[14px] font-semibold" style={{ color: 'var(--brand)' }}>
                      Read full article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Image Area (Right Side) */}
                  <div className="w-full lg:w-5/12 aspect-[4/3] rounded-2xl relative overflow-hidden group-hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, rgba(255,92,0,0.15) 0%, rgba(20,20,22,1) 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={featuredPost.image || "/blog/featured-acquisition.webp"} 
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                </div>
              </div>
            </Link>
          </div>

          {/* Grid of Remaining Posts */}
          <h2 className="text-sm font-semibold tracking-wider uppercase mb-8" style={{ color: 'var(--ink3)' }}>Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {remainingPosts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group h-full" style={{ animation: `fadeUp 0.8s ease forwards ${(i+1)*0.1}s`, opacity: 0 }}>
                <div className="glass rounded-[20px] overflow-hidden spotlight-container h-full flex flex-col hover:-translate-y-1 hover:bg-white/5" style={{ padding: '2px', transition: 'all 0.3s ease' }}>
                  <div className="spotlight-card rounded-[18px] p-6 lg:p-8 h-full flex flex-col" style={{ background: 'rgba(10,10,11,0.6)' }}>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)', border: '1px solid rgba(255,92,0,0.2)' }}>
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-[19px] font-bold mb-3 line-clamp-3" style={{ color: 'var(--ink)', lineHeight: 1.3, letterSpacing: '-0.3px' }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-[13.5px] mb-6 line-clamp-3" style={{ color: 'var(--ink3)', lineHeight: 1.6 }}>
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between text-[12px] font-medium" style={{ color: 'var(--ink3)' }}>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

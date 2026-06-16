import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';
import { getPostData, getSortedPostsData } from '@/lib/markdown';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Generate static params for all blog slugs at build time
export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

// Generate unique SEO metadata for each blog post
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return { title: 'Post Not Found | Oktuv' };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.oktuvglobal.com/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    }
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: 'var(--surface)' }}>
      <Navbar />

      <main className="flex-1 relative pb-32">
        {/* Background Effects */}
        <div className="mesh-bg">
          <div className="mesh-orb-1" style={{ opacity: 0.3 }} />
        </div>
        <div className="hero-glass-overlay" />

        <article className="relative z-10 pt-16 lg:pt-24">
          
          {/* Post Header */}
          <header className="max-w-3xl mx-auto px-6 mb-16 text-center" style={{ animation: 'fadeUp 0.6s ease forwards' }}>
            <Link href="/blog" className="inline-flex items-center gap-2 mb-10 text-[13px] font-semibold transition-colors text-[var(--ink3)] hover:text-[var(--brand)]">
              <ArrowLeft size={16} /> Back to all articles
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)', border: '1px solid rgba(255,92,0,0.2)' }}>
                {post.category}
              </span>
            </div>

            <h1 className="h-display mb-8" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-1px' }}>
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-[13px] font-medium" style={{ color: 'var(--ink3)' }}>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="max-w-[720px] mx-auto px-6" style={{ animation: 'fadeUp 0.8s ease forwards 0.2s', opacity: 0 }}>
            {/* Custom styles just for blog content typography to ensure readability and beauty */}
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <style dangerouslySetInnerHTML={{__html: `
              .blog-content {
                color: var(--ink2);
                font-size: 17px;
                line-height: 1.8;
                font-weight: 400;
              }
              .blog-content p {
                margin-bottom: 28px;
              }
              .blog-content h2 {
                color: var(--ink);
                font-size: 28px;
                font-weight: 700;
                letter-spacing: -0.5px;
                margin-top: 56px;
                margin-bottom: 24px;
                line-height: 1.3;
              }
              .blog-content h3 {
                color: var(--ink);
                font-size: 22px;
                font-weight: 600;
                letter-spacing: -0.3px;
                margin-top: 40px;
                margin-bottom: 16px;
              }
              .blog-content ul, .blog-content ol {
                margin-bottom: 28px;
                padding-left: 24px;
              }
              .blog-content li {
                margin-bottom: 10px;
              }
              .blog-content strong {
                color: var(--ink);
                font-weight: 600;
              }
              .blog-content em {
                color: var(--ink3);
              }
            `}} />

            {/* CTA Block */}
            <div className="mt-16 p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--border)' }}>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ready to scale your digital growth?</h3>
                <p className="text-[15px]" style={{ color: 'var(--ink3)' }}>Book a free strategy audit to identify bottlenecks and accelerate your business.</p>
              </div>
              <Link href="/audit" className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold transition-all text-white hover:opacity-90" style={{ background: 'var(--brand)' }}>
                Book Your Audit <ArrowRight size={16} />
              </Link>
            </div>

            {/* Share / Footer of post */}
            <div className="mt-12 pt-8 flex items-center justify-between border-t" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black font-bold">O</div>
                <div>
                  <div className="text-[14px] font-semibold" style={{ color: 'var(--ink)' }}>Oktuv Growth Team</div>
                  <div className="text-[12px]" style={{ color: 'var(--ink3)' }}>Authors</div>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-colors bg-white/5 text-[var(--ink2)] hover:bg-white/10">
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}

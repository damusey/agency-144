import React from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';
import { ArrowRight, Calendar } from 'lucide-react';

export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const allPosts = getSortedPostsData();
  
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
  
  // Grab the first 3 recent posts
  const related = otherPosts.slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '32px' }}>
        Read Next
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {related.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <div
              className="service-card"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                <span style={{ color: 'var(--brand)', fontWeight: 500 }}>{post.category}</span>
                <span>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '12px', lineHeight: 1.4 }}>
                {post.title}
              </h4>
              <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand)', fontSize: '14px', fontWeight: 500 }}>
                Read article <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

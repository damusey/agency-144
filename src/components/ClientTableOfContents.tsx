'use client';

import React, { useEffect, useState } from 'react';

interface TocHeading {
  id: string;
  text: string;
  level: number;
}

export default function ClientTableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // We want to observe all headings in the blog content
    const elements = headings.map(heading => document.getElementById(heading.id));
    
    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting heading
        const intersecting = entries.find(entry => entry.isIntersecting);
        if (intersecting) {
          setActiveId(intersecting.target.id);
        }
      },
      {
        rootMargin: '0px 0px -80% 0px', // Trigger when heading is in the top 20% of the viewport
      }
    );

    elements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <>
      {/* Desktop Table of Contents Sidebar */}
      <aside className="hidden xl:block w-[280px] shrink-0 sticky top-32 mt-2">
        <div className="p-6 rounded-[20px] glass" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4 text-white">Table of Contents</h3>
          <ul className="space-y-3 relative">
            {/* Active indicator line on the left */}
            <div 
              className="absolute left-[-12px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full"
            />
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <li key={heading.id} style={{ marginLeft: heading.level === 3 ? '12px' : '0' }} className="relative">
                  {/* Highlight bar for active item */}
                  {isActive && (
                    <div 
                      className="absolute left-[-12px] top-[4px] bottom-[4px] w-[2px] bg-[var(--brand)] rounded-full transition-all duration-300"
                    />
                  )}
                  <a 
                    href={`#${heading.id}`}
                    className="text-[14px] font-medium transition-colors line-clamp-2"
                    style={{ 
                      color: isActive ? 'var(--brand)' : 'var(--ink3)',
                      fontWeight: isActive ? 600 : 500
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Mobile TOC */}
      <div className="xl:hidden w-full mb-8 p-6 rounded-[20px] glass" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4 text-white">Table of Contents</h3>
          <ul className="space-y-2 relative">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <li key={heading.id} style={{ marginLeft: heading.level === 3 ? '12px' : '0' }}>
                  <a 
                    href={`#${heading.id}`}
                    className="text-[14px] transition-colors"
                    style={{ 
                      color: isActive ? 'var(--brand)' : 'var(--ink3)',
                      fontWeight: isActive ? 600 : 500
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
      </div>
    </>
  );
}

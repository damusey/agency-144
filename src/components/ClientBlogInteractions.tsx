'use client';

import React, { useEffect, useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface Props {
  title: string;
  url: string;
}

export default function ClientBlogInteractions({ title, url }: Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Native share or fallback to copy
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Reading Progress Bar — fixed to viewport top */}
      <div className="fixed top-0 left-0 w-full h-1 z-[9999] pointer-events-none" style={{ position: 'fixed' }}>
        <div 
          className="h-full bg-[var(--brand)] transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Share Button */}
      <button 
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-colors bg-white/5 text-[var(--ink2)] hover:bg-white/10"
      >
        {copied ? <Check size={14} className="text-green-500" /> : <Share2 size={14} />}
        {copied ? 'Copied!' : 'Share'}
      </button>
    </>
  );
}

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, MapPin, Terminal, ChevronDown, Briefcase, BarChart } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FinalCTA from './FinalCTA';
import TechComparison from './TechComparison';

interface DynamicSEOPageProps {
  type: 'tech' | 'location' | 'industry';
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  featuresList: string[];
  breadcrumb: { name: string; url: string }[];
  locationDetails?: { city: string; hubs: string[]; marketLandscape: string; localChallenges: string; faqs?: { question: string; answer: string }[] };
  techDetails?: { 
    slug: string;
    longDescription: string; 
    faqs: { question: string; answer: string }[]; 
    developmentProcess: { title: string; description: string }[] 
  };
  industryDetails?: {
    painPoints: string[];
    caseStudyMetrics: { metric: string; description: string }[];
    pricingModel: { title: string; description: string };
    faqs: { question: string; answer: string }[];
  };
  relatedLinks?: { name: string; url: string }[];
}

export default function DynamicSEOPage({
  type,
  title,
  subtitle,
  description,
  benefits,
  featuresList,
  breadcrumb,
  locationDetails,
  techDetails,
  industryDetails,
  relatedLinks
}: DynamicSEOPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Helper to determine the FAQs array to map
  const activeFaqs = type === 'tech' ? techDetails?.faqs : type === 'industry' ? industryDetails?.faqs : type === 'location' ? locationDetails?.faqs : null;

  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-24 overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,92,0,0.08) 0%, rgba(10,10,11,0) 70%)', filter: 'blur(60px)' }} />
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(10,10,11,0) 70%)', filter: 'blur(60px)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }} />
        </div>

        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Breadcrumbs (Crucial for SEO) */}
          <nav className="flex items-center gap-2 text-[12px] font-medium mb-12" style={{ color: 'var(--ink3)' }}>
            {breadcrumb.map((crumb, idx) => (
              <React.Fragment key={crumb.url}>
                {idx > 0 && <ChevronRight size={14} className="opacity-50" />}
                <Link href={crumb.url} className="hover:text-[var(--brand)] transition-colors">
                  {crumb.name}
                </Link>
              </React.Fragment>
            ))}
          </nav>

          {/* Hero Section (Answer-First Block) */}
          <div className="max-w-4xl mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-8" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)', border: '1px solid rgba(255,92,0,0.2)' }}>
              {type === 'tech' ? <Terminal size={14} /> : type === 'industry' ? <Briefcase size={14} /> : <MapPin size={14} />}
              {subtitle}
            </div>
            
            <h1 className="h-display mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60" style={{ fontSize: 'clamp(48px, 6vw, 72px)', letterSpacing: '-1.5px' }}>
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-2xl font-light" style={{ color: 'var(--ink2)', lineHeight: '1.6' }}>
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/book/" className="btn btn-primary" style={{ fontSize: '16px', padding: '18px 36px', borderRadius: '100px', boxShadow: '0 8px 30px rgba(255,92,0,0.3)' }}>
                Book Your Free Strategy Call
              </Link>
              {type === 'industry' && (
                 <Link href="/work/" className="btn btn-secondary" style={{ fontSize: '16px', padding: '18px 36px', borderRadius: '100px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                   View Case Studies
                 </Link>
              )}
            </div>
          </div>

          {/* Deep Content / Pain Points Section */}
          <div className="mb-24 p-10 md:p-16 rounded-[32px] border relative overflow-hidden glass">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,92,0,0.05) 0%, rgba(10,10,11,0) 70%)', filter: 'blur(60px)' }} />
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
               <div>
                 <h2 className="text-3xl font-bold mb-6 tracking-tight">
                   {type === 'tech' ? 'Technical Expertise' : type === 'location' ? `The ${locationDetails?.city} Tech Landscape` : 'Industry Challenges We Solve'}
                 </h2>
                 
                 {type === 'industry' && industryDetails?.painPoints ? (
                    <ul className="space-y-6">
                      {industryDetails.painPoints.map((point, i) => (
                        <li key={i} className="flex gap-4">
                          <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[rgba(255,92,0,0.1)] text-[var(--brand)]">
                            <span className="font-bold text-sm">{i+1}</span>
                          </div>
                          <p className="text-[17px] leading-relaxed pt-1" style={{ color: 'var(--ink2)' }}>{point}</p>
                        </li>
                      ))}
                    </ul>
                 ) : (
                   <>
                     <p className="text-[17px] leading-relaxed mb-6" style={{ color: 'var(--ink3)' }}>
                       {type === 'tech' ? techDetails?.longDescription : locationDetails?.marketLandscape}
                     </p>
                     {type === 'location' && locationDetails?.localChallenges && (
                       <p className="text-[17px] leading-relaxed" style={{ color: 'var(--ink3)' }}>
                         {locationDetails.localChallenges}
                       </p>
                     )}
                   </>
                 )}
               </div>
               
               <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-6">Core Capabilities</h3>
                  <ul className="space-y-4">
                    {featuresList.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[16px] font-medium text-white">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                          <ArrowRight size={14} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
               </div>
             </div>
          </div>

          {/* Tech Comparison Block */}
          {type === 'tech' && techDetails?.slug && (
            <TechComparison techSlug={techDetails.slug} techName={subtitle} />
          )}

          {/* Industry Proof Block (Case Study Metrics) */}
          {type === 'industry' && industryDetails?.caseStudyMetrics && (
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">Proven Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {industryDetails.caseStudyMetrics.map((metric, i) => (
                   <div key={i} className="glass rounded-[24px] p-10 text-center spotlight-container border" style={{ borderColor: 'var(--border)' }}>
                     <div className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[var(--brand)] to-[var(--brand-light)]">
                       {metric.metric}
                     </div>
                     <p className="text-[18px] text-white font-medium">{metric.description}</p>
                   </div>
                ))}
              </div>
            </div>
          )}

          {/* Industry Pricing Block */}
          {type === 'industry' && industryDetails?.pricingModel && (
            <div className="mb-24 p-12 rounded-[24px] text-center" style={{ background: 'rgba(255,92,0,0.03)', border: '1px solid rgba(255,92,0,0.1)' }}>
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)' }}>
                <BarChart size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-4">{industryDetails.pricingModel.title}</h2>
              <p className="text-[18px] max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--ink2)' }}>
                {industryDetails.pricingModel.description}
              </p>
            </div>
          )}

          {/* Benefits Grid */}
          {type !== 'industry' && (
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 tracking-tight">Why Partner With Oktuv?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="glass rounded-[24px] p-8 spotlight-container hover:-translate-y-1" style={{ transition: 'all 0.3s ease' }}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)' }}>
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                        <p className="text-[15px]" style={{ color: 'var(--ink3)', lineHeight: '1.6' }}>
                          We implement industry best practices to ensure your platform is scalable, secure, and built for massive growth.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Methodology Timeline (If Tech) */}
          {type === 'tech' && techDetails?.developmentProcess && (
            <div className="mb-24">
               <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">Our Development Methodology</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {techDetails.developmentProcess.map((step, idx) => (
                    <div key={idx} className="relative pt-8">
                       <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: 'linear-gradient(90deg, var(--brand) 0%, rgba(255,92,0,0) 100%)' }} />
                       <div className="absolute top-[-4px] left-0 w-[10px] h-[10px] rounded-full" style={{ background: 'var(--brand)', boxShadow: '0 0 10px var(--brand)' }} />
                       <h3 className="text-xl font-bold text-white mb-4">0{idx + 1}. {step.title}</h3>
                       <p className="text-[15px]" style={{ color: 'var(--ink3)', lineHeight: '1.6' }}>{step.description}</p>
                    </div>
                 ))}
               </div>
            </div>
          )}

          {/* Dynamic FAQ Accordion */}
          {activeFaqs && (
            <div className="mb-24 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {activeFaqs.map((faq, idx) => (
                  <div key={idx} className="glass rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-[rgba(255,255,255,0.02)]"
                    >
                      <span className="font-semibold text-[16px] text-white pr-4">{faq.question}</span>
                      <ChevronDown 
                        size={20} 
                        className="shrink-0 transition-transform duration-300"
                        style={{ color: 'var(--ink3)', transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>
                    <div 
                      className="px-6 overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ 
                        maxHeight: openFaq === idx ? '500px' : '0px',
                        opacity: openFaq === idx ? 1 : 0,
                        paddingBottom: openFaq === idx ? '24px' : '0px'
                      }}
                    >
                      <p className="text-[15px] pt-2" style={{ color: 'var(--ink3)', lineHeight: '1.6' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Pages for Topical Clustering */}
          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mb-24 p-8 rounded-[24px] glass" style={{ border: '1px solid var(--border)' }}>
               <h3 className="text-xl font-bold mb-6 text-white">Explore Related Services</h3>
               <div className="flex flex-wrap gap-4">
                 {relatedLinks.map((link, idx) => (
                   <Link key={idx} href={link.url} className="px-4 py-2 rounded-full text-[14px] font-medium transition-all" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink2)', border: '1px solid rgba(255,255,255,0.1)' }}
                     onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,92,0,0.1)'; e.currentTarget.style.color = 'var(--brand)'; e.currentTarget.style.borderColor = 'rgba(255,92,0,0.2)' }}
                     onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--ink2)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}>
                     {link.name}
                   </Link>
                 ))}
               </div>
            </div>
          )}
          
        </div>
      </main>
      
      <FinalCTA />
      <Footer />
    </>
  );
}

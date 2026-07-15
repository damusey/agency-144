import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
import { techStacks } from '@/data/seo/tech-stacks';
import { topLocations, coreServices } from '@/data/seo/locations';
import { targetIndustries } from '@/data/seo/industries';

export default function RelatedServices() {
  // Create a curated list of high-value internal links
  const links = [
    {
      name: `Hire ${techStacks[0]?.name} Developers`,
      url: `/hire/${techStacks[0]?.slug}-developers/`
    },
    {
      name: `${coreServices[1]?.name} in ${topLocations[0]?.city}`,
      url: `/locations/${topLocations[0]?.slug}/${coreServices[1]?.slug}/`
    },
    {
      name: `${coreServices[2]?.name} for ${targetIndustries[0]?.name}`,
      url: `/industries/${targetIndustries[0]?.slug}/${coreServices[2]?.slug}/`
    },
    {
      name: `Hire ${techStacks[1]?.name} Developers`,
      url: `/hire/${techStacks[1]?.slug}-developers/`
    }
  ];

  return (
    <div className="max-w-[720px] mx-auto px-6 mt-16 pt-16 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center gap-2 mb-8">
        <Layers size={18} style={{ color: 'var(--brand)' }} />
        <h3 className="text-xl font-bold text-white">Explore Engineering Solutions</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link, i) => (
          <Link 
            key={i}
            href={link.url}
            className="group flex items-center justify-between p-4 rounded-xl glass transition-all duration-300 hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <span className="text-[14px] font-medium text-[var(--ink2)] group-hover:text-white transition-colors">
              {link.name}
            </span>
            <ArrowRight size={14} className="text-[var(--ink3)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

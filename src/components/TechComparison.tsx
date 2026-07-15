import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface TechComparisonProps {
  techSlug: string;
  techName: string;
}

export default function TechComparison({ techSlug, techName }: TechComparisonProps) {
  // Database of comparisons
  const comparisons: Record<string, { alt: string; ourPros: string[]; altCons: string[] }> = {
    'react': {
      alt: 'Angular',
      ourPros: ['Virtual DOM for sub-second rendering', 'Massive global talent pool', 'Component reusability across React Native'],
      altCons: ['Steep learning curve', 'Heavy, monolithic architecture', 'Two-way data binding causes performance bottlenecks']
    },
    'nextjs': {
      alt: 'Create React App (CRA)',
      ourPros: ['Server-Side Rendering (SSR) for perfect SEO', 'Sub-second initial page loads', 'Built-in API routes for full-stack capability'],
      altCons: ['Client-side rendering ruins SEO', 'Slow initial load times for users', 'Requires external backend routing']
    },
    'nodejs': {
      alt: 'PHP / Laravel',
      ourPros: ['Asynchronous event-driven architecture', 'Single language (JS) across entire stack', 'Massive scalability for microservices'],
      altCons: ['Synchronous blocking architecture', 'Requires context switching for frontend devs', 'Struggles with high-concurrency real-time apps']
    },
    'python': {
      alt: 'Java',
      ourPros: ['Rapid iteration and prototyping', 'Undisputed king of AI and Machine Learning', 'Clean, highly readable syntax'],
      altCons: ['Extremely verbose boilerplate code', 'Slower development velocity', 'Over-engineered for modern agile startups']
    },
    'ai-automation': {
      alt: 'Traditional RPA (Robotic Process Automation)',
      ourPros: ['Cognitive reasoning and contextual understanding', 'Adapts to unstructured data inputs', 'Learns and improves over time via LLMs'],
      altCons: ['Rigid, rule-based logic breaks easily', 'Cannot handle unstructured natural language', 'Requires constant manual maintenance']
    }
  };

  const data = comparisons[techSlug];

  if (!data) return null;

  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Architecture Comparison</h3>
        <p className="text-[16px] text-[var(--ink3)]">Why enterprise teams choose {techName} over legacy alternatives.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Our Tech */}
        <div className="glass p-8 rounded-2xl relative overflow-hidden border border-[var(--brand)]/30">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand)]/10 rounded-full blur-3xl" />
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-[var(--brand)]" />
            {techName}
          </h4>
          <ul className="space-y-4">
            {data.ourPros.map((pro, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] mt-2 shrink-0" />
                <span className="text-[15px] text-[var(--ink2)] leading-relaxed">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Alternative */}
        <div className="glass p-8 rounded-2xl relative overflow-hidden border border-white/5 opacity-70">
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <XCircle className="text-red-500/80" />
            Legacy {data.alt}
          </h4>
          <ul className="space-y-4">
            {data.altCons.map((con, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                <span className="text-[15px] text-[var(--ink2)] leading-relaxed">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

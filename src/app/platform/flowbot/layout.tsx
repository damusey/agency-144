import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FlowBot — AI Chatbot & Relationship Agent',
  description: 'Deploy intelligent chatbots that sell, support, and convert 24/7. FlowBot handles WhatsApp, web chat, and social DMs with human-like conversations.',
  keywords: ['AI chatbot', 'WhatsApp bot', 'customer support bot', 'conversational AI', 'FlowBot', 'relationship agent'],
  alternates: { canonical: '/platform/flowbot/' },
  openGraph: {
    title: 'FlowBot — AI Chatbot Studio',
    description: 'Deploy intelligent chatbots that sell, support, and convert 24/7 across WhatsApp, web, and social.',
  },
};

export default function FlowBotLayout({ children }: { children: React.ReactNode }) {
  return children;
}

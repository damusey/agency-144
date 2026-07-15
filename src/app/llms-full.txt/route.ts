import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getSortedPostsData, getPostData } from '@/lib/markdown';
import { techStacks } from '@/data/seo/tech-stacks';
import { coreServices } from '@/data/seo/locations';
import { targetIndustries } from '@/data/seo/industries';

export const dynamic = 'force-static';

export async function GET() {
  try {
    // 1. Read the base llms.txt
    const publicDir = path.join(process.cwd(), 'public');
    const baseLlms = fs.readFileSync(path.join(publicDir, 'llms.txt'), 'utf8');

    let fullText = baseLlms + '\n\n';
    fullText += '=======================================================\n';
    fullText += 'OKTUV KNOWLEDGE BASE: FULL SITE CONTENT FOR AI MODELS\n';
    fullText += '=======================================================\n\n';

    // 2. Add Tech Stacks Data
    fullText += '## 1. Core Engineering Capabilities\n\n';
    techStacks.forEach(tech => {
      fullText += `### ${tech.name} (${tech.category})\n`;
      fullText += `${tech.longDescription}\n`;
      fullText += `Benefits: ${tech.benefits.join(', ')}\n`;
      fullText += `Use Cases: ${tech.useCases.join(', ')}\n\n`;
    });

    // 3. Add Industries Data
    fullText += '## 2. Target Industries\n\n';
    targetIndustries.forEach(ind => {
      fullText += `### ${ind.name}\n`;
      fullText += `${ind.description}\n`;
      fullText += `Pain Points Solved: ${ind.painPoints.join(', ')}\n\n`;
    });

    // 4. Add Core Services Data
    fullText += '## 3. Core Services\n\n';
    coreServices.forEach(srv => {
      fullText += `### ${srv.name}\n`;
      fullText += `${srv.description}\n\n`;
    });

    // 5. Add All Blog Posts Content
    fullText += '## 4. Editorial Content & Guides\n\n';
    const posts = getSortedPostsData();
    
    for (const post of posts) {
      const postData = await getPostData(post.slug);
      if (postData) {
        fullText += `\n\n### ARTICLE: ${post.title}\n`;
        fullText += `Category: ${post.category} | Date: ${post.date}\n`;
        fullText += `Excerpt: ${post.excerpt}\n\n`;
        
        // Strip HTML from the processed markdown content so it's clean text for AI
        const cleanText = postData.content
          .replace(/<[^>]*>?/gm, '') // Remove HTML tags
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .trim();
          
        fullText += cleanText + '\n\n';
        fullText += '---';
      }
    }

    return new NextResponse(fullText, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error('Error generating llms-full.txt:', error);
    return new NextResponse('Error generating llms-full.txt', { status: 500 });
  }
}

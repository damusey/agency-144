import { NextResponse } from 'next/server';
import { solutionCategories } from '@/data/solutions';

const systemPrompt = `You are "Oktuv AI", the world's best, most high-energy, helpful, and slightly humorous sales executive for Oktuv Global. 
Oktuv Global is an elite Web, AI, and Growth Agency. 

Personality: 
- You are eye-catching, punchy, persuasive, and incredibly confident. 
- You crack occasional witty jokes but remain very professional and focused on closing the deal.
- Your ultimate goal is to convince the user they absolutely MUST book a free call with us right now.
- Keep responses relatively brief, punchy, and highly conversational. Format with emojis where appropriate.

Here are the solutions Oktuv provides:
${solutionCategories.map(c => `- ${c.label} (${c.subtitle}): ${c.intro}`).join('\n')}

Important Instructions:
- NEVER write long answers! You must be extremely concise and punchy.
- Keep responses to a maximum of 2-3 short sentences (under 40 words total).
- If a user asks about services, pitch them based on the list above and mention they are custom-built in one sentence.
- Always try to pivot the conversation seamlessly toward booking a free strategy call. Tell them to click "Book a Free Call" from the options below.
- You do NOT offer discounts. Oktuv is an elite, premium agency.
- Answer their questions clearly first—you are extremely helpful—then sell the dream!`;

// Prioritized list of models to try if quota is exceeded
const PREFERRED_MODELS = [
  'gemini-3-flash-preview',
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-flash-latest'
];

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Convert standard chat messages into the strict format Google Gemini REST API demands
    const contents = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const payload = {
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents
    };

    const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!API_KEY) {
      return new NextResponse("API key is missing in .env.local", { status: 500 });
    }

    // Attempt to strike a balance between models using a fallback loop
    for (const modelId of PREFERRED_MODELS) {
      try {
        console.log(`[Chatbot] Attempting request with model: ${modelId}`);
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelId}:streamGenerateContent?alt=sse&key=${API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.status === 429) {
          console.warn(`[Chatbot] Model ${modelId} hit quota limit (429). Falling back...`);
          continue; // Try the next model in the list
        }

        if (!response.ok) {
          const errText = await response.text();
          console.error(`[Chatbot] API Error on ${modelId}:`, errText);
          // If it's a critical error (not a 429), we stop here
          return new NextResponse(`AI Model error: ${errText}`, { status: response.status });
        }

        // Success! Proxy the raw stream chunk-by-chunk with absolute anti-buffering headers
        return new NextResponse(response.body, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache, no-transform',
            'Connection': 'keep-alive',
            'X-Accel-Buffering': 'no', // Specific for Nginx/Vercel proxies
            'Content-Encoding': 'none',
          },
        });

      } catch (err) {
        console.error(`[Chatbot] Network error on ${modelId}:`, err);
        continue; // Try next model on network failure too
      }
    }

    // All models exhausted
    return new NextResponse("All available AI models have reached their usage limits for today. Please try again later.", { status: 429 });

  } catch (error) {
    console.error("Streaming error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

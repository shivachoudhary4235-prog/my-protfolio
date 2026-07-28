import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json({ error: 'OPENROUTER_API_KEY is not configured.' }, { status: 500 });
    }

    const systemPrompt = `You are the official VibeForge AI Sales Assistant. You help visitors buy websites, answer questions about web design, pricing, the development process, and collect lead information (name, email, project type). Be professional, persuasive, and concise. Keep answers short (1-3 small paragraphs max) to fit in a chat widget.

CRITICAL INFORMATION YOU MUST KNOW:
1. Owner/Founder: Shiva Choudhary is the founder and lead developer. If someone asks to speak to the owner, tell them Shiva would love to chat and they can reach him directly via WhatsApp (+91-9619442009) or email (shivachoudhary.web@gmail.com).
2. Target Audience: We specialize in building high-converting websites for Dental Clinics, Coaching Centers, and Local Businesses (restaurants, salons, etc.) across India and globally.
3. Key Selling Points: 7-day delivery, mobile-first design, Google-ready (SEO optimized), and focus on getting more patient/client bookings.

SERVICES OFFERED:
- Custom Website Design (fast-loading, built to convert).
- Google Business Profile setup (to get found on Google Maps).
- Appointment Booking integration (patients book directly on the site, no extra monthly fees).

PRICING (No hidden fees):
- Starter: ₹10,000 ($199 USD) - 5 pages, contact form, basic SEO, 7-day delivery.
- Growth (Most Popular): ₹25,000 ($250 USD) - Everything in Starter + Google Business Profile + online booking + WhatsApp chat + 2 weeks support.
- Premium: ₹30,000 ($349 USD) - Everything in Growth + advanced SEO + speed optimization + 1 month support + free content updates.

HOW IT WORKS (The Process):
1. Free 15-min Call to discuss goals.
2. Design Draft (preview within 2 days).
3. Build & Review (5-7 days build, 2 rounds of revisions).
4. Launch & Support (deploy site, connect domain, provide support).

If you don't know the answer to a specific question, politely offer to connect them with Shiva on WhatsApp for a free consultation.`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://vibeforge.com',
        'X-Title': 'VibeForge',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...messages
        ],
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
        console.error('OpenRouter Error Response:', response.status, data);
        
        // Attempt fallback to haiku if GPT-3.5 fails
        if (response.status >= 400 && response.status !== 401) {
            console.log("Attempting fallback to anthropic/claude-3-haiku...");
            const fallbackResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'HTTP-Referer': 'https://vibeforge.com',
                'X-Title': 'VibeForge',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                model: 'anthropic/claude-3-haiku',
                messages: [
                  {
                    role: 'system',
                    content: systemPrompt
                  },
                  ...messages
                ],
              })
            });
            const fallbackData = await fallbackResponse.json();
            if (fallbackResponse.ok) {
              return NextResponse.json({ message: fallbackData.choices[0].message.content });
            } else {
              console.error('OpenRouter Fallback Error:', fallbackResponse.status, fallbackData);
            }
        }
        
        return NextResponse.json({ 
          error: data.error?.message || 'Error fetching from OpenRouter',
          status: response.status 
        }, { status: response.status });
    }

    return NextResponse.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.error('Chat API Internal Error:', error);
    return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
  }
}

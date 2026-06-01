# Nexphoria AI Protocol Advisor — Build Spec

## Architecture: Hybrid (Scripted Opening → AI Recommendation)

### UI/UX
- **Component:** Slide-in chat panel, bottom-right floating bubble
- **Bubble:** Gold-accented circle with Nexphoria logo or stethoscope icon
- **Panel:** Dark background (#0a0a0a) with gold accents (#B8A44C), matches site design
- **Trigger behavior:**
  - Homepage + /products: Auto-opens after 2-second delay with first message visible
  - All other pages: Quiet bubble only, user-initiated
- **Mobile:** Full-screen takeover when opened (slide up from bottom)
- **Close:** X button + click-outside to dismiss

### Personality
- **Name:** Protocol Advisor
- **Tone:** Clinical, confident, concise. Not salesy. Like a knowledgeable research consultant.
- **Voice:** "I recommend..." / "Based on what you've described..." / "Your protocol includes..."
- **Never:** Exclamation marks, urgency language, discount mentions, emoji

### Conversation Flow (Scripted Phase — First 2-3 exchanges)

**Message 1 (auto):**
"First time exploring peptides, or looking to optimize an existing protocol?"

**Branch A: First time**
→ "What's your primary research focus?"
  - Recovery & healing (injury, joint, tissue)
  - Body composition (fat loss, muscle)
  - Anti-aging & longevity
  - Cognitive & mood
  - Sleep & recovery
  - Sexual health

**Branch B: Experienced**
→ "What compounds have you worked with before, and what are you looking to add or change?"
  (Free-text input — AI handles from here)

**After goal selection (Branch A):**
→ "Are you looking for a focused single-compound approach or a full multi-compound protocol?"
  - Single compound (focused)
  - Full protocol (comprehensive)

**Then (subtle intake):**
→ "What should I call you?" → captures name
→ "And your email — I'll send your protocol summary there for reference." → captures email

### AI Phase (Recommendation Generation)
- **Model:** GPT-4o-mini or Claude Haiku (cheapest that's good enough)
- **System prompt contains:**
  - Full product catalog with prices, dosages, categories
  - Dosing protocols per product
  - Stacking rules (which products complement each other)
  - Cycle duration recommendations per goal
  - Compliance guardrails: "research purposes only", never say "treatment" or "cure"
  - Brand voice rules
- **AI generates:** Personalized recommendation with reasoning
- **If user asks questions mid-flow:** AI handles naturally (e.g., "what's the difference between BPC and TB-500?")
- **Fallback:** If AI fails/times out, show a pre-built recommendation based on goal + single/multi selection

### Output: Research Protocol Rx Card

After recommendation is ready, render a branded card IN the chat panel:

```
┌─────────────────────────────────────────────┐
│  ⬡ NEXPHORIA                                │
│  ───────────────────────────────────────    │
│  RESEARCH PROTOCOL Rx                        │
│                                              │
│  Prepared for: {firstName}                   │
│  Date: {today}                               │
│  Protocol Duration: {recommended} months     │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │ 1. {Product Name} ({size})    ${X}/mo│    │
│  │    {One-line reason}                  │    │
│  │    {Dose + frequency}                 │    │
│  │    [View Full Protocol →]             │    │
│  ├──────────────────────────────────────┤    │
│  │ 2. {Product Name} ({size})    ${X}/mo│    │
│  │    {One-line reason}                  │    │
│  │    {Dose + frequency}                 │    │
│  │    [View Full Protocol →]             │    │
│  └──────────────────────────────────────┘    │
│                                              │
│  Monthly Investment: ${total}                │
│  Ships: 1st of each month, cold-chain        │
│                                              │
│  EXPECTED TIMELINE                           │
│  Week 1-2: {phase 1 description}             │
│  Week 3-6: {phase 2 description}             │
│  Week 8-12: {phase 3 description}            │
│                                              │
│  ───────────────────────────────────────     │
│  ● Recommended: {3 or 6}-Month Cycle         │
│                                              │
│  [Start 3-Month Protocol]  ← highlighted if rec│
│  [Start 6-Month Protocol]  ← highlighted if rec│
│                                              │
│  (Adds full protocol to cart as subscription)│
└─────────────────────────────────────────────┘
```

- Gold border/accent on the card
- Nexphoria watermark/logo subtle in background
- "View Full Protocol →" links to existing /products/{slug} protocol pages
- Buttons: recommended cycle gets gold fill, other gets gold outline
- Clicking either button → adds all products to cart with selected subscription cadence
- After adding: "Your protocol has been added. Ready when you are." + link to /cart

### Email Delivery
- After Rx is generated, send a styled email copy to captured email
- Subject: "Your Nexphoria Research Protocol"
- Same Rx card content, formatted for email (HTML)
- Include direct link to cart with products pre-loaded (URL params or session)

### Technical Implementation
- **Framework:** React component in existing Next.js app
- **State:** Zustand store (like existing cart)
- **AI endpoint:** Cloudflare Worker (or Next.js API route if not static export)
  - POST /api/concierge with conversation history
  - Returns structured JSON: { products: [...], cycle: 3|6, reasoning: "..." }
- **Product data:** Import from existing src/lib/products.ts
- **Cart integration:** Use existing useCart() hook to add items
- **Email:** Trigger via existing Cloudflare Worker (nexphoria-checkout worker)
- **Analytics:** Track: opened, messages_sent, rx_generated, rx_added_to_cart, email_captured

### Compliance Guardrails
- Never use: "treatment", "cure", "prescribe", "patient", "diagnose", "medical advice"
- Always frame as: "research protocol", "research compound", "preclinical data suggests"
- Disclaimer at bottom of Rx card: "For research purposes only. Not for human consumption."
- AI system prompt enforces this strictly

### Files to Create/Modify
1. `src/components/concierge/ConciergePanel.tsx` — main panel component
2. `src/components/concierge/ConciergeBubble.tsx` — floating trigger button
3. `src/components/concierge/ProtocolRxCard.tsx` — the Rx output card
4. `src/components/concierge/ChatMessage.tsx` — individual message bubbles
5. `src/lib/concierge.ts` — conversation state, logic tree, AI call
6. `src/lib/concierge-prompts.ts` — system prompts, product mapping
7. `src/app/api/concierge/route.ts` — API endpoint (or CF Worker)
8. Modify `src/app/layout.tsx` — add ConciergePanel globally
9. Modify `src/app/page.tsx` — auto-open trigger on homepage
10. Modify `src/app/products/page.tsx` — auto-open trigger on products

### Design Tokens
- Background: #0a0a0a (matches site)
- Gold accent: #B8A44C
- Text: #fffff3 (Ceramic)
- Card background: #1a1a1a
- Card border: #B8A44C at 30% opacity
- Font: Cormorant Garamond for headings, system sans for body
- Bubble size: 56px diameter
- Panel width: 420px (desktop), 100vw (mobile)

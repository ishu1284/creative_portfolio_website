const portfolio = {
  name: "Ishwari Kokane",
  email: "12kokane@gmail.com", // Replace with your actual email
  linkedin: "https://www.linkedin.com/",
  X: "https://x.com/IshwariKokane12",
  projects: [
    {
      image: "parshkothar/images/logo.png",
      title: "Think School",
      category: "Personal Branding / Visual Identity / Content Strategy",
      visualTitle: "THINK<br>SCHOOL",
      visualStyle: "sans",
      label: "MAKE COMPLEX, CLICK",
      corner: "↗",
      summary:
        "Shaping Parsh Kothari's personal brand and Think School's visual identity—turning dense business and geopolitical case studies into scroll-stopping thumbnails, editorial carousels, and a cohesive feed.",
      isRichCaseStudy: true,
      sections: {
        // PAGE 01: Homepage & Overview
        homepage: {
          tag: "01 / THE PLATFORM",
          heading: "Think School — Making India's Business Education Visual",
          description:
            "Think School simplifies complex business strategies, economics, and geopolitics for millions of learners. My role focused on translating heavy, information-dense narratives into an unmistakably recognizable visual system.",
        },
        // PAGE 02: Inspired by your Canva Slide 5
        collaboration: {
          tag: "02 / CREATIVE COLLABORATION",
          roleBadge: "THINK SCHOOL CEO / PERSONAL BRAND",
          personName: "PARSH KOTHARI",
          rightCopy:
            "Working with Parsh Kothari gave me the opportunity to shape his personal brand's visual identity, from thumbnails and editorial carousels to the overall design language. My focus was on making complex ideas visually engaging, recognisable, and easier to understand.",
          leftCopy:
            "My contribution went beyond designing individual posts. I worked on building a consistent visual style, experimenting with creative concepts, and turning information-heavy content into compelling visuals that could stop the scroll and spark conversations.",
          skills:
            "Graphic Design · Thumbnail Design · Carousel Design · Visual Identity",
          portraitImage: "parshkothar/images/Parsh kothari profile.png",
        },
        // PAGE 02.5: Profile of Parsh Kothari
        profile: {
          tag: "02.5 / LEADERSHIP PROFILE",
          name: "Parsh Kothari",
          title: "Co-Founder & CEO, Think School",
          bio: "Educator, business storyteller, and content creator breaking down Indian startups, policy, and global economics. The personal brand needed to balance executive authority with approachable, high-retention visual storytelling.",
          avatarImage: "parshkothar/images/profile page.jpg",
          stats: [
            { value: "39K → 61K", label: "Audience Growth" },
            { value: "11M+", label: "Organic Content Views" },
            { value: "4+", label: "Core Visual Formats Built" },
          ],
        },
        // PAGE 03: Before & After Feed
        transformation: {
          tag: "03 / BREAKOUT REDESIGN · 3.5M+ VIEWS",
          title: "How Redesigning 'The Sugar Lobby' Drove 3.5M+ Views",
          before: {
            label: "BEFORE",
            image: "parshkothar/images/Sugarmills.png",
            caption:
              "Generic yellow brush highlight, harsh white sticker outline around the speaker, and empty beige space that blended into standard creator reels.",
          },
          after: {
            label: "AFTER · 3.5M+ VIEWS",
            image: "parshkothar/images/Sugar Lobby Thumbnail.jpg",
            caption:
              "Deep terracotta backdrop, torn editorial newsprint collage, high-contrast ivory serif title, and a directional arrow guiding the eye straight to the speaker.",
          },
          strategyPillars: [
            {
              num: "01",
              title: "Editorial Newsprint Collage",
              detail:
                "Replaced literal stock cutouts with torn-paper industrial engravings (ethanol nozzle, mills, sugarcane) to signal investigative depth.",
            },
            {
              num: "02",
              title: "Terracotta & Ivory Contrast",
              detail:
                "Swapped flat beige and yellow highlights for a saturated terracotta-orange field so the ivory serif title pops on mobile screens.",
            },
            {
              num: "03",
              title: "Clean Subject Integration",
              detail:
                "Removed the artificial white sticker outline and used a curved hand-drawn arrow to connect the hook directly to Parsh's expression.",
            },
          ],
        },
        // PAGE 04: Most Liked Carousel
        featuredCarousel: {
          tag: "04 / HERO CONTENT FORMAT",
          heading: "The Most-Liked Editorial Carousel",
          description:
            "Designed around progressive disclosure—each slide resolves one micro-tension while pulling the reader to swipe for the payoff. High contrast, scannable callouts, and structured data visuals drove peak saves and shares.",
          metrics: "Top Performing Format · High Save-to-Impression Ratio",
          slides: [
            "parshkothar/images/Carousel 1.jpg",
            "parshkothar/images/carousel 2.jpg",
            "parshkothar/images/carousel 3.jpg",
            "parshkothar/images/carousel 4.jpg",
            "parshkothar/images/carousel 5.jpg",
          ],
        },
        // PAGE 05: Challenge, Purpose, Color Palette & Typography
        brandSystem: {
          tag: "05 / BRAND IDENTITY SYSTEM",
          challenge:
            "How might an education-led personal brand make serious business and current-affairs topics feel clear, relevant, and impossible to scroll past—without dumbing down the insight?",
          purpose:
            "To build a repeatable, high-trust visual language that reduces cognitive load on complex topics and turns casual scrollers into loyal followers.",
          colors: [
            {
              name: "Warm Ivory",
              hex: "#f5efe4",
              role: "Primary Dark Canvas / Authority",
            },
            {
              name: "Deep Cocoa Brown",
              hex: "#3b241c",
              role: "Light Reading Surface / Clarity",
            },
            {
              name: "Terracotta Orange",
              hex: "#c85a2e",
              role: "Key Stat & Hook Highlights",
            },
            {
              name: "Muted Sand",
              hex: "#e9c59a",
              role: "Tension & Contrast Accents",
            },
          ],
          typography: [
            {
              role: "DISPLAY & HOOK HEADLINES",
              fontName:
                "Bold Geometric Sans (e.g., Montserrat / Inter ExtraBold)",
              usage:
                "Tight tracking, high-impact uppercase or sentence hooks built for 0.5-second mobile legibility.",
            },
            {
              role: "EDITORIAL BODY & DATA CALLOUTS",
              fontName:
                "Clean Humanist Sans (e.g., DM Sans / Plus Jakarta Sans)",
              usage:
                "Generous line-height for effortless multi-slide carousel reading and chart annotations.",
            },
          ],
        },
        // PAGE 06: Extra — Repeatable Content Architecture
        systemPillars: {
          tag: "06 / VISUAL PLAYBOOK",
          heading: "Repeatable Creative Frameworks",
          pillars: [
            {
              title: "01. 3-Second Thumbnail Hook",
              detail:
                "Expressive subject cutout + single visual metaphor + max 4-word curiosity gap.",
            },
            {
              title: "02. Modular Carousel Grid",
              detail:
                "Standardized safe zones, consistent header badges, and visual pacing across 7–10 slides.",
            },
            {
              title: "03. Data-to-Visual Translation",
              detail:
                "Converting dense financial reports and timelines into clean, custom vector diagrams.",
            },
          ],
        },
        featuredReels: {
          tag: "07 / HIGH-RETENTION VIDEO COVERS",
          heading: "Most-Viewed Reel Thumbnails",
          description:
            "High-contrast 9:16 cover frames engineered to stop the scroll on the Reels grid—combining expressive speaker cutouts, bold 3–4 word curiosity hooks, and clear visual tension.",
          metrics: "11M+ Organic Reel Views · High Grid CTR",
          slides: [
            "parshkothar/images/Sugar Lobby Thumbnail.png",
            "parshkothar/images/India's secret king 01.png",
            "parshkothar/images/1800 cr.jpg",
            "parshkothar/images/Indian Bank.png",
            "parshkothar/images/India's pseudo.png",
          ],
        },
      },
    },
    {
      number: "02",
      image: "meesho/images/cover-hero.png",
      title: "Meesho Growth",
      category:
        "Growth Creative Strategy / Full-Funnel Lifecycle / Motion & UI",
      visualTitle: "FROM SCROLL<br>TO SHOPPING",
      visualStyle: "serif",
      label: "EVERYDAY STYLE, ZERO OVERPAY",
      corner: "✳",
      summary:
        "A full-funnel growth creative case study for Meesho—bridging the gap between high-appeal editorial discovery and Tier-2/Tier-3 price confidence across Acquisition, Activation, Motion, and Habit-Loop Retention.",
      isMeesho: true,
      sections: {
        // 01. COVER — FROM SCROLL TO SHOPPING
        cover: {
          pillTag: "01 • GROWTH CREATIVE CASE STUDY",
          metaText: "Consumer E-Commerce • Bharat / Tier-2 & Tier-3",
          heading: "From Scroll to Shopping.",
          subhead:
            "Designing a cohesive, full-funnel growth creative system for Meesho—connecting scroll-stopping editorial acquisition ads with a zero-friction onboarding flow, first-purchase trust architecture, and post-delivery habit loops.",
          specs: [
            {
              label: "ROLE",
              value: "Growth Creative & Product Visual Designer",
            },
            {
              label: "SCOPE",
              value: "Acquisition, Activation, Retention & Motion",
            },
            {
              label: "METHODOLOGY",
              value: "Research-Backed Hypotheses + A/B Plan",
            },
          ],
          rigorNote:
            "Because this is an independent growth case study without internal Meesho telemetry, every claim is explicitly labeled:",
          blueprint: {
            kicker: "SYSTEM BLUEPRINT",
            title: "Connected Lifecycle Architecture",
            count: "11 Chapters",
            stages: [
              {
                num: "01 • ACQUISITION",
                channel: "Meta / Shorts / Motion →",
                title: "Editorial Aesthetics + Instant ₹249–₹499 Price Anchors",
              },
              {
                num: "02 • ACTIVATION",
                channel: "3-Screen Flow →",
                title: "Lookbook Entry, Feed Curation & MEESHO100 COD Trust",
              },
              {
                num: "03 • RETENTION",
                channel: "CRM & Habit Loop →",
                title:
                  "Cart Recovery, Rate-to-Unlock ₹75 & Cross-Sell Pairings",
              },
            ],
          },
        },

        // 02. THE BRIEF — BUSINESS OBJECTIVE & GROWTH CHALLENGE
        brief: {
          tag: "02 • THE BRIEF",
          epistemic: "• Research-Backed Market Context",
          heading: "Business Objective & Growth Challenge",
          leftCard: {
            title:
              "The Core Tension: Aspirational Discovery vs. Mass-Market Price Anxiety",
            body: "Meesho has unlocked massive e-commerce adoption across India’s Tier-2, Tier-3, and Tier-4 markets by offering zero-commission, factory-direct pricing with an average order value (AOV) hovering around ₹300–₹350. However, as Meesho expands into younger, trend-conscious cohorts (Gen-Z and millennial women shopping for ethnic wear, western co-ords, and everyday beauty), creative execution faces a sharp two-sided trap:",
            trapA: {
              label: "TRAP A: CLUTTERED DISCOUNT FLYERS",
              desc: "Loud, overcrowded discount banners signal “cheap” rather than “smart value,” causing fashion-conscious scrollers to swipe past or doubt fabric quality.",
            },
            trapB: {
              label: "TRAP B: PURE HIGH-FASHION EDITORIALS",
              desc: "Minimalist luxury layouts without upfront price anchors or Cash on Delivery cues make value-first shoppers assume items cost ₹1,500+, triggering immediate bounce.",
            },
          },
          mandateCard: {
            pill: "✦ DESIGN MANDATE",
            headline:
              "Bridge editorial visual polish with unmissable affordability & doorstep trust.",
            body: "Every asset across the user journey—from the first Instagram Reel impression to the 3-screen onboarding flow and post-delivery rating card—must work as a single continuous conversation rather than disconnected promotional blasts.",
            footer: [
              {
                label: "Target Audience",
                value: "Value-First Bharat Shoppers",
              },
              { label: "Primary Hook", value: "₹249–₹499" },
            ],
          },
        },

        // 05. CREATIVE STRATEGY — THE BIG IDEA
        strategy: {
          tag: "05 / CREATIVE STRATEGY",
          epistemic: "DESIGN HYPOTHESIS",
          conceptName: "Big Idea: “Everyday Style, Zero Overpay.”",
          thesis:
            "Treat ₹249–₹499 everyday clothes like a fashion magazine—clean layouts, breathing room, and real models—while keeping the low price and Cash on Delivery impossible to miss.",
          pillars: [
            {
              title: "01. Show the Exact Price Early",
              detail:
                "Don't hide prices or use confusing 'Up to 80% Off' math. Show the real price (₹249 or ₹349) so shoppers know they can afford it.",
            },
            {
              title: "02. Make Trust Impossible to Miss",
              detail:
                "Put 'Cash on Delivery', '7-Day Easy Returns', and 'Free Delivery' front and center so first-time buyers feel completely safe.",
            },
            {
              title: "03. Match the Ad to the App",
              detail:
                "When someone taps an ad for a ₹349 kurti, show that exact same lookbook style on the very first app screen so nothing feels jarring.",
            },
          ],
        },

        // 03. USER INSIGHT — WHAT PREVENTS USERS FROM INSTALLING, BUYING, OR RETURNING?
        userInsight: {
          tag: "03 • USER INSIGHT",
          heading: "What Prevents Users from Installing, Buying, or Returning?",
          badges: [
            { text: "• Research-Backed Insight", type: "res" },
            { text: "✦ Design Hypothesis", type: "hyp" },
          ],
          barriers: [
            {
              num: "01",
              accent: "jamuni",
              badge: "• Research-Backed Insight",
              title: "Install & Ad-Click Barriers",
              points: [
                {
                  lead: "Storage & Data Sensitivity:",
                  text: "Users on entry-level Android devices hesitate to install a new shopping app unless the ad proves immediate, tangible savings over local markets.",
                },
                {
                  lead: "“Too Good to Be True” Skepticism:",
                  text: "Seeing a stylish co-ord set or kurti without a clear landed price creates doubt around hidden delivery fees.",
                },
              ],
              hypothesis:
                "Pairing clean editorial photography with explicit <b>₹249 / ₹349 / ₹499</b> price pills and <b>₹0 Delivery</b> badges will lift click-to-install intent without cheapening brand perception.",
            },
            {
              num: "02",
              accent: "magenta",
              badge: "• Research-Backed Insight",
              title: "First-Purchase Friction (Order 1)",
              points: [
                {
                  lead: "Mandatory Login Walls:",
                  text: "Forcing phone/OTP registration before letting a value shopper browse products causes early onboarding drop-off.",
                },
                {
                  lead: "Prepaid & Return Anxiety:",
                  text: "Over 75%+ of Tier-2/3 first orders rely on Cash on Delivery (COD) because buyers fear getting stuck with ill-fitting apparel.",
                },
              ],
              hypothesis:
                "Offering a <b>Browse as Guest</b> escape hatch on Screen 1, 1-tap category curation on Screen 2, and foregrounding <b>COD + 7-Day Easy Returns</b> beside a <b>MEESHO100</b> voucher on Screen 3 will reduce first-order hesitation.",
            },
            {
              num: "03",
              accent: "amber",
              badge: "• Research-Backed Insight",
              title: "Repeat-Purchase Drop-Off (Order 2+)",
              points: [
                {
                  lead: "Post-Subsidy Cliff:",
                  text: "Once a user spends their first-order discount, generic promotional notifications fail to re-trigger purchase intent.",
                },
                {
                  lead: "Single-Category Tunnel Vision:",
                  text: "Many buyers purchase one kurti and never discover Meesho’s high-margin accessories, beauty, or home essentials.",
                },
              ],
              hypothesis:
                "Tying a post-delivery 1-tap rating card to a <b>₹75 Repeat Wallet Credit</b> and pairing Order 1 with “Complete the Look” low-ticket add-ons will create a sustainable 3-order habit loop.",
            },
          ],
        },

        // 04. GROWTH FUNNEL ARCHITECTURE — ACQUISITION -> ACTIVATION -> RETENTION
        funnel: {
          tag: "04 • GROWTH FUNNEL ARCHITECTURE",
          epistemic: "✦ Full-Funnel Creative Mapping",
          heading: "Acquisition → Activation → Retention",
          stages: [
            {
              stage: "STAGE 01",
              timing: "Top of Funnel",
              title: "Acquisition",
              summary: "Paid Social Statics, Carousels & 15s Motion Reels",
              job: "Stop the scroll in 1.5s & prove ₹249–₹499 affordability without looking cheap.",
              lever: "Price-Anchor Contrast + Editorial Aspiration",
              metric: "Thumb-Stop Rate, CTR & Click-to-Install Conversion",
            },
            {
              stage: "STAGE 02",
              timing: "First 24–72 Hours",
              title: "Activation",
              summary: "3-Screen Onboarding, MEESHO100 Voucher & Cart Recovery",
              job: "Remove sign-up walls, personalize the feed in 2 taps, and eliminate first-order payment anxiety.",
              lever: "Guest Escape Hatch + COD & 7-Day Return Reassurance",
              metric: "Onboarding Completion & Install-to-Order 1 Rate",
            },
            {
              stage: "STAGE 03",
              timing: "Days 1–30+",
              title: "Retention",
              summary:
                "Post-Delivery Rating Reward, Cross-Sell & 3-Order Streak",
              job: "Turn one-time welcome-coupon buyers into multi-category repeat shoppers without deep subsidies.",
              lever:
                "Endowed Progress (₹75 Credit) + Complete-the-Look Pairings",
              metric: "D30 Repeat Purchase Rate & Order 2+ Conversion",
            },
          ],
        },

        // 05. CREATIVE STRATEGY — MESSAGE ARCHITECTURE & VISUAL SYSTEM
        strategy: {
          tag: "05 • CREATIVE STRATEGY",
          epistemic: "✦ Core Concept: “Everyday Style, Zero Overpay”",
          heading: "Message Architecture & Visual System",
          leftCard: {
            title: "3-Tier Message Architecture (Applied Across Every Asset)",
            tiers: [
              {
                variant: "jamuni",
                label: "TIER 1 • PRIMARY HOOK (0–1.5 SECONDS)",
                headline: "“A Little More Style. A Lot Less Spend.”",
                detail:
                  "Editorial headline paired with an immediate starting price anchor (e.g., Starting at ₹349).",
              },
              {
                variant: "rose",
                label: "TIER 2 • LANDED-COST PROOF (1.5–3 SECONDS)",
                headline:
                  "Flat ₹100 OFF First Order (Code: MEESHO100) + ₹0 Delivery",
                detail:
                  "Shows the exact out-of-pocket price (₹349 → ₹249) so there is zero checkout surprise.",
              },
              {
                variant: "amber",
                label: "TIER 3 • RISK-REVERSAL SAFETY NET",
                headline:
                  "Cash on Delivery Available • 7-Day Easy Doorstep Returns",
                detail:
                  "Positioned right beside the CTA button to neutralize quality and sizing hesitation.",
              },
            ],
          },
          rightCard: {
            title: "Visual & Typographic System",
            subtitle:
              "Designed to modernize Meesho’s signature plum palette with editorial breathing room and high-contrast conversion pills.",
            swatches: [
              {
                name: "Deep Jamuni (Primary Brand)",
                hex: "#4A154B",
                bg: "#4a154b",
                text: "#ffffff",
              },
              {
                name: "Meesho Magenta (Action & Accent)",
                hex: "#F43397",
                bg: "#f43397",
                text: "#ffffff",
              },
              {
                name: "Warm Amber (Voucher & Price Pop)",
                hex: "#FF9F1C",
                bg: "#ff9f1c",
                text: "#191917",
              },
              {
                name: "Editorial Warm Ivory (Canvas)",
                hex: "#FAF7F2",
                bg: "#faf7f2",
                text: "#191917",
                border: true,
              },
            ],
            typographyNote:
              "<strong>Typography Pairing:</strong> <em>Playfair Display</em> for editorial aspiration + <em>DM Sans</em> for crisp numerals and mobile UI legibility.",
          },
        },

        // 06. ACQUISITION EXECUTION — PAID SOCIAL & PERFORMANCE AD CONCEPTS
        acquisition: {
          tag: "06 • ACQUISITION EXECUTION",
          heading: "Paid Social & Performance Ad Concepts",
          toggleLabel: "Show Creative Anatomy Notes",
          assets: [
            {
              src: "meesho/images/Performance ad 1.png",
              title: "Concept A: Price-Anchor Ethnic",
              format: "4:5 Feed / Carousel",
              caption:
                "Pairs warm festive tones with a direct ₹299 price anchor and stacked kurti clarity for instant 1-second scroll-stop.",
              anatomy:
                "01. Top Meesho brand mark · 02. High-contrast amber ₹299 hero numeral · 03. Folded fabric stack showing print & embroidery quality · 04. High-contrast ivory Shop pill.",
            },
            {
              src: "meesho/images/meesho-kurta-499.png",
              title: "Concept B: Editorial Discovery",
              format: "4:5 Lifestyle Static",
              caption:
                "High-street editorial aesthetic ('Looks expensive. Isn't.') paired with social proof to attract fashion-first shoppers at ₹499.",
              anatomy:
                "01. Playfair Display serif contrast hook · 02. 'India's Most Loved Shopping App' gold trust seal · 03. Natural studio portrait · 04. Bold ₹499 anchor + Jamuni CTA.",
            },
            {
              src: "meesho/images/meesho-look-349.png",
              title: "Concept C: Studio Lookbook Hook",
              format: "2:3 & 4:5 Performance",
              caption:
                "Full-length studio styling starting at ₹349 engineered to showcase complete outfit silhouette with zero sizing doubt.",
              anatomy:
                "01. Soft blush editorial canvas · 02. Full-body seated silhouette showing drape & footwear pairing · 03. Scalloped ₹349 price burst · 04. Clean bottom-right Shop Now CTA.",
            },
          ],
        },

        // 07. ACTIVATION EXECUTION — 3-SCREEN ONBOARDING & FIRST-PURCHASE EXPERIENCE
        activation: {
          tag: "07 • ACTIVATION EXECUTION",
          epistemic: "✦ Interactive Prototype — Click Inside Screens Below",
          heading: "3-Screen Onboarding & First-Purchase Experience",
          description:
            "To eliminate post-install bounce, Screen 1 pairs an editorial lookbook crossfade with upfront <b>₹249–₹499</b> price anchors, 1-tap Mobile/WhatsApp OTP, and a <b>Browse as Guest</b> option. Screen 2 builds feed ownership via 2+ style picks, and Screen 3 unlocks the <b>MEESHO100</b> voucher alongside COD trust pillars.",
          screens: [
            {
              src: "meesho/images/onboarding screen 1.png",
              label: "Screen 01 • Editorial Hook & Entry",
              sub: "Lookbook + Guest Skip",
            },
            {
              src: "meesho/onboarding screen 2.png",
              label: "Screen 02 • Style Personalization",
              sub: "Endowment Effect",
            },
            {
              src: "meesho/images/onboarding screen 3.png",
              label: "Screen 03 • Trust & ₹100 Nudge",
              sub: "COD + Easy Returns",
            },
          ],
        },

        // 08. RETENTION & CRM EXECUTION — INTERACTIVE 4-TOUCHPOINT HUB
        retention: {
          tag: "08 • RETENTION & CRM EXECUTION",
          epistemic: "✦ Switch Tabs Below to Test Each Touchpoint",
          heading: "Push, In-App Banners, Cart Recovery & Repeat Habit Loop",
          tabs: [
            {
              label: "1. Rich Push Notification",
              badge: "✦ Touchpoint 01 • Lock-Screen Rich Push",
              title: "Converting Install-Only Users in the First 4–48 Hours",
              description:
                "Instead of generic “We miss you” blasts, the rich push notification attaches a landed-price preview card showing the exact ₹349 → ₹249 savings and deep-links straight into checkout with MEESHO100 auto-applied.",
              src: "meesho/images/Push Notification.png",
              cropMode: "lockscreen",
              cadence: [
                {
                  time: "T + 4 Hours",
                  note: "Price-anchor hook (₹249 + ₹0 Delivery)",
                },
                {
                  time: "T + 24 Hours",
                  note: "Social proof (4.6★ by 12k+ buyers + 7d returns)",
                },
                {
                  time: "T + 48 Hours",
                  note: "Loss-aversion midnight expiry nudge",
                },
              ],
            },
            {
              label: "2. In-App Promotional Banners (2 Variants)",
              badge: "✦ Touchpoint 02 • Home Feed & Sticky Checkout Nudge",
              title: "Reinforcing MEESHO100 & Doorstep Trust Inside the App",
              description:
                "Two coordinated in-app placements keep the welcome offer visible without blocking browsing: a top-of-feed editorial hero banner and a persistent bottom checkout bar tracking ₹100 voucher unlock.",
              src: "meesho/images/in app banners.png",
              cropMode: "phone",
              cadence: [
                {
                  time: "Top Hero Slot",
                  note: "“Everyday Style, Zero Overpay” + MEESHO100 ticket",
                },
                {
                  time: "Sticky Footer",
                  note: "Live cart progress bar + 1-tap COD checkout",
                },
                {
                  time: "Trust Anchor",
                  note: "Cash on Delivery & 7-Day Returns above fold",
                },
              ],
            },
            {
              label: "3. Cart Abandonment Reminder",
              badge: "✦ Touchpoint 03 • High-Intent Cart Recovery",
              title: "Recovering Shoppers Who Paused Before COD Checkout",
              description:
                "Combines a 15-minute bag reservation timer with size scarcity (‘Only 3 left in Size M’) across Lock-Screen Push and WhatsApp Business rich templates.",
              src: "meesho/images/whatsapp cart nudge.png",
              cropMode: "mockup-transparent",
              cadence: [
                {
                  time: "T + 15 Mins",
                  note: "Size M bag reservation + countdown timer",
                },
                {
                  time: "T + 2 Hours",
                  note: "WhatsApp rich card with 1-tap COD button",
                },
                {
                  time: "Zero Friction",
                  note: "Auto-applies MEESHO100 at checkout",
                },
              ],
            },
            {
              label: "4. Post-Delivery Repeat Loop (₹75)",
              badge: "✦ Touchpoint 04 • Order 2+ Habit Formation",
              title: "Turning First-Time Buyers Into a 3-Order VIP Streak",
              description:
                "Replaces the post-subsidy cliff with an instant 1-tap fit & quality rating card that unlocks ₹75 in Meesho Wallet credit paired with ‘Complete the Look’ low-ticket add-ons.",
              src: "meesho/images/repeat purchase campaign strategy.png",
              cropMode: "phone-crop",
              cadence: [
                {
                  time: "Delivery + 2h",
                  note: "1-tap star & fit rating unlocks ₹75 credit",
                },
                {
                  time: "Cross-Sell",
                  note: "Complete-the-Look Jhumkas & Flats under ₹225",
                },
                {
                  time: "Order 3 Goal",
                  note: "3-Order VIP Streak unlocks free surprise gift",
                },
              ],
            },
          ],
        },
        // 09. PHOTOSHOP CRAFT & HIGH-CONVERTING AD COMPOSITING
        motion: {
          tag: "09 • PHOTOSHOP CRAFT & COMPOSITING",
          epistemic: "✦ High-Resolution Raster Production • Adobe Photoshop",
          heading: "Beauty & Fragrance Performance Ads + PS Layer Proof",
          description:
            "Designed in Adobe Photoshop to pair studio-grade product compositing, custom lighting, and grounded contact shadows with high-contrast ₹199–₹249 price anchors and 4.3★ COD social proof.",
          ads: [
            {
              src: "meesho/images/Performance ad 2.png",
              badge: "AD 01 • FRAGRANCE HOOK",
              title: "Vanilla Elixir — Luxury Anchor @ ₹249",
              format: "4:5 Paid Social Static",
              caption:
                "Warm radial studio lighting, raw vanilla pods, brown sugar cubes, and soft Multiply contact shadows paired with an editorial Playfair Display price-contrast headline.",
              layers: [
                "Warm radial studio gradient + soft floor plane",
                "Vanilla bean & brown sugar foreground depth compositing",
                "4.3★ (12K+ Ratings) • Free Delivery • COD trust pill",
              ],
            },
            {
              src: "meesho/images/performance 3.png",
              badge: "AD 02 • SKINCARE CALLOUTS",
              title: "Glowvera Vitamin C Serum @ ₹199",
              format: "4:5 Ingredient-Led Static",
              caption:
                "Natural wood-slice pedestal grounding, glass dropper highlights, and clean ingredient callout pointers (10% Pure Vitamin C, Hyaluronic Acid, Non-Sticky Gel).",
              layers: [
                "Wood pedestal grounding + soft contact shadow",
                "4-point ingredient callout lines for 2-second scan",
                "Entry ₹199 price pop + 4.3★ COD social proof bar",
              ],
            },
          ],
          psProof: {
            badge: "BEHIND THE SCENES • ADOBE PHOTOSHOP WORKSPACE (2 FILES)",
            title:
              "Non-Destructive Layer Stack, Lighting & Shadow Architecture",
            subtitle:
              "Built with organized Smart Objects, Curves/Color Balance adjustment layers, custom radial studio gradients, and soft Multiply contact shadows so both SKUs sit naturally on their surfaces.",
            highlights: [
              {
                label: "COMPOSITING",
                value: "Smart Objects + Hairline Callout Paths",
              },
              {
                label: "LIGHT & DEPTH",
                value: "Radial Glows + Soft Multiply Contact Shadows",
              },
              {
                label: "CONVERSION UI",
                value: "Meesho Magenta Pills + ₹199 / ₹249 Anchors",
              },
            ],
            screens: [
              {
                label: "PSD 01 • VANILLA ELIXIR COMPOSITE & LAYER STACK",
                src: "meesho/images/Screenshot (1135).png",
                alt: "Adobe Photoshop Workspace Screenshot for Vanilla Elixir Perfume Ad",
              },
              {
                label: "PSD 02 • GLOWVERA VITAMIN C SERUM & CALLOUT LAYERS",
                src: "meesho/images/Screenshot (1141).png",
                alt: "Adobe Photoshop Workspace Screenshot for Glowvera Vitamin C Serum Ad",
              },
            ],
          },
        },

        // 10. CREATIVE TESTING STRATEGY — PROPOSED EXPERIMENTS, A/B MATRIX & MEASUREMENT PLAN
        testing: {
          tag: "10 • CREATIVE TESTING STRATEGY",
          epistemic:
            "▲ Proposed Experiment Framework (Zero Fabricated Results)",
          heading: "Proposed Experiments, A/B Matrix & Measurement Plan",
          description:
            "Rather than inventing post-launch metrics, this section defines how the three acquisition creative angles would be validated through single-variable A/B tests across Meta Reels/Feeds and Google App Campaigns over a 14-day learning window.",
          angles: [
            {
              tag: "ACQUISITION ANGLE A",
              title: "Price-Anchor & Utility Hook",
              desc: "Leads with “Everyday Style Under ₹399” (Anarkali Kurti at ₹349 / Net ₹249) to eliminate price hesitation in the first 1.5 seconds.",
            },
            {
              tag: "ACQUISITION ANGLE B",
              title: "Editorial Discovery Hook",
              desc: "Leads with “The Co-ord You’ll Live In” (₹499 editorial lookbook) to attract trend-conscious shoppers seeking wardrobe upgrades.",
            },
            {
              tag: "ACQUISITION ANGLE C",
              title: "Zero-Risk Trust Hook",
              desc: "Leads with Cash on Delivery + 7-Day Easy Returns alongside low-sizing-risk beauty staples (Vanilla Elixir at ₹249).",
            },
          ],
          matrix: [
            {
              test: "A/B Test 1",
              variable: "Price-led vs. discovery-led hook",
              control:
                "Bold Starting ₹349 / Net ₹249 price badge in primary focal zone.",
              challenger:
                "Editorial headline (“The Co-ord You’ll Live In”) with secondary price tag.",
              hypothesis:
                "Tests whether explicit price anchors drive higher CTR or if discovery hooks attract higher-AOV cohorts.",
            },
            {
              test: "A/B Test 2",
              variable: "Product collage vs. lifestyle image",
              control:
                "Multi-SKU grid displaying 3–4 silhouettes + prices on warm ivory.",
              challenger:
                "Single-model studio lifestyle shot (matching Onboarding Screen 1).",
              hypothesis:
                "Evaluates whether catalog breadth density beats single-hero visual aspiration on mobile feeds.",
            },
            {
              test: "A/B Test 3",
              variable: "COD trust badge placement",
              control: "Standard “Shop Now” CTA without doorstep payment cues.",
              challenger:
                "Explicit “Pay Cash on Delivery • 7-Day Easy Returns” badge beside CTA.",
              hypothesis:
                "Measures impact on click-to-install and first-order completion among Tier-2/3 first-time buyers.",
            },
          ],
        },

        // 11. FINAL CAMPAIGN SYSTEM — UNIFIED MULTI-CHANNEL ECOSYSTEM
        ecosystem: {
          tag: "11 • FINAL CAMPAIGN SYSTEM",
          epistemic: "7 Connected Touchpoints • 1 Visual Language",
          heading: "Unified Multi-Channel Ecosystem",
          description:
            "Seen together, every touchpoint shares identical color codes (Jamuni, Magenta, Warm Amber), typography, and landed-price framing—ensuring a user who clicks an Instagram ad experiences zero visual disconnect through onboarding, checkout, and repeat delivery.",
          topCards: [
            {
              tag: "01 • PAID SOCIAL STATIC",
              title: "Ethnic & Co-ord Feed Ads",
              src: "meesho/images/Performance ad 1.png",
              alt: "Ethnic Kurti Feed Ad @ ₹299",
              footer: "4:5 Meta Feed & Carousel Acquisition",
            },
            {
              tag: "02 • PHOTOSHOP COMPOSITING",
              title: "Fragrance & Skincare Ads",
              src: "meesho/images/Performance ad 2.png",
              alt: "Vanilla Elixir Fragrance Ad @ ₹249",
              footer: "Studio Lighting + PS Layer Stack",
            },
            {
              tag: "03 • PRODUCT ACTIVATION",
              title: "3-Screen Editorial Onboarding",
              src: "meesho/images/onboarding screen 1.png",
              alt: "Onboarding Screen 1 Editorial Hook",
              footer: "First-Time App Open Experience",
            },
            {
              tag: "04 • IN-APP MERCHANDISING",
              title: "Split-Ticket & Sticky Dock",
              src: "meesho/images/In app banners.png",
              alt: "In-App Hero Banner and Sticky Dock",
              footer: "Home Feed Hero & Persistent Footer",
            },
          ],
          bottomCards: [
            {
              tag: "05 • LOCK-SCREEN CRM",
              title: "Lock-Screen Rich Push",
              src: "meesho/images/Push Notification.png",
              alt: "Lock-Screen Rich Push Notification",
            },
            {
              tag: "06 • BAG RECOVERY",
              title: "WhatsApp Cart Nudge",
              src: "meesho/images/whatsapp cart nudge.png",
              alt: "WhatsApp Business Cart Recovery Nudge",
            },
          ],
          finale: {
            tag: "07 • POST-DELIVERY RETENTION LOOP",
            title: "Rate & Unlock ₹75 + Complete the Look",
            desc: "Turns Order 1 delivery delight into 1-tap fit reviews, ₹75 repeat wallet credit, and cross-category add-on purchases (Jhumkas @ ₹124, Flats @ ₹224).",
            src: "meesho/images/repeat purchase campaign strategy.png",
            alt: "Post-Delivery Retention Loop & Complete the Look UI",
            ctaLabel: "Back to Top ↑",
          },
        },
      },
    },
    {
      image: "After hours/extra 5.png",
      title: "After Hours",
      category: "Luxury Fragrance / Campaign Direction / Art & Packaging World",
      visualTitle: "AFTER<br>HOURS",
      visualStyle: "sans",
      label: "SOME JOURNEYS BEGIN WHEN THE DAY ENDS",
      corner: "☾",
      summary:
        "An executive campaign direction and luxury packaging world for After Hours—translating the quiet transition from golden dusk into nocturnal ritual through architectural travertine, etched Mediterranean landscapes, and warm amber glass.",
      isAfterHours: true,
      sections: {
        // PAGE 01: Hero Campaign Key Visual & Strategic Thesis
        hero: {
          tag: "01 / CAMPAIGN KEY VISUAL & POSITIONING",
          heading: "Some Journeys Begin When the Day Ends.",
          tagline: "FRAGRANCES FOR WHAT COMES NEXT",
          description:
            "Rather than relying on dark, neon-lit nightlife clichés, After Hours captures the sensory threshold of dusk—warm wind through sheer linen, sun-baked limestone arches, and the lingering warmth of vanilla, amber, jasmine, and aged woods.",
          heroImage: "After hours/After Hours by the Sea.png",
          caption:
            "Hero Campaign Key Visual — Eau de Parfum 50 ml (Vanilla · Amber · Jasmine · Woods)",
        },
        // PAGE 02: Strategic Challenge & Creative Territory
        strategy: {
          tag: "02 / STRATEGIC CHALLENGE & CREATIVE TERRITORY",
          challenge:
            "Modern luxury fragrance campaigns often polarize into sterile clinical minimalism or loud, over-saturated club aesthetics. How do you craft an evening fragrance world that feels intimate, architectural, and timelessly wearable?",
          territory:
            "Golden-Hour Escapism & Tactile Heritage: Pairing classical engraved architectural illustrations on textured cotton paper with weighty walnut-wood caps, gold collars, and glowing amber flacons.",
          pillars: [
            {
              title: "Visual Language",
              detail:
                "Sun-drenched travertine stone, billowing silk drapery, and chiaroscuro dusk shadows.",
            },
            {
              title: "Tactile Packaging",
              detail:
                "Debossed espresso & sand cartons featuring fine-line Mediterranean villa engravings.",
            },
            {
              title: "Verbal Identity",
              detail:
                "Poetic, unhurried copy lines: 'Different moments. Same After Hours.' & 'For every journey ahead.'",
            },
          ],
        },
        // PAGE 03: Complete Product Line & Discovery Architecture
        productLine: {
          tag: "03 / PRODUCT ARCHITECTURE & PACKAGING SYSTEM",
          heading: "A Cohesive Multi-Format Fragrance Wardrobe",
          description:
            "Engineered a unified packaging architecture scaling from the flagship 50 ml Extrait & Eau de Parfum to travel and layering formats—anchored by the 5-scent Discovery Set (01 The Original, 02 The Escape, 03 The Midnight, 04 The Oasis, 05 The Noir).",
          featuredSet: {
            src: "After hours/discovery-set.png",
            caption:
              "Eau de Parfum Discovery Set — 'Different moments. Same After Hours.' (5 × 10 ml curated vials)",
          },
          skus: [
            {
              src: "After hours/Perfume 1.png",
              title: "Extrait de Parfum (50 ml)",
              desc: "Deep espresso textured carton with gold foil serif typography and walnut cap.",
            },
            {
              src: "After hours/travel-spray.png",
              title: "Eau de Parfum Travel Spray (10 ml)",
              desc: "Slim cylindrical amber flacon with brushed gold atomizer and walnut cap.",
            },
            {
              src: "After hours/body-mist.png",
              title: "Fine Body Mist (100 ml)",
              desc: "Elongated glass silhouette styled with botanical olive leaves on porous limestone.",
            },
          ],
        },
        // PAGE 04: Olfactory & Botanical Still-Life Direction
        sensory: {
          tag: "04 / OLFACTORY & BOTANICAL STILL LIFE",
          heading: "Visualizing Notes of Vanilla, Amber & Driftwood",
          description:
            "Macro ingredient compositions translate invisible scent notes into visceral textures—from raw Madagascar vanilla pods dripping golden resin and white orchid blooms to weathered driftwood and sun-refracted glass.",
          items: [
            {
              src: "After hours/vanilla-elixir.png",
              caption:
                "Key Note Study: Raw vanilla bean, golden nectar, white jasmine & spiced pods",
            },
            {
              src: "After hours/driftwood.png",
              caption:
                "Base Note Study: Sculptural aged driftwood & warm amber refraction",
            },
            {
              src: "After hours/bottle-angled.png",
              caption:
                "Architectural Light Study: Travertine corner shadow & caustic glass glow",
            },
            {
              src: "After hours/bottle-hero.png",
              caption:
                "Signature Flacon Portrait: Heavy square glass, gold neck & fluted walnut cap",
            },
          ],
        },
        // PAGE 05: Retail Boutique, Print Collateral & OOH Rollout
        brandWorld: {
          tag: "05 / RETAIL EXPERIENCE & OOH ROLLOUT",
          heading: "From Boutique Architecture to Street-Level OOH",
          description:
            "Extending the campaign across physical touchpoints—including monolithic limestone retail displays, illuminated arched shelving, debossed stationery cards, ribboned shopping bags, and evening street posters.",
          boardImage: "After hours/brand-universe.png",
          caption:
            "360° Brand Ecosystem — Flagship Boutique Interior, Packaging Collateral, Engraved Cap Detail & Evening OOH",
        },
        // PAGE 06: Extended Campaign Rollout (Slots for your remaining 7–8 images)
        extendedGallery: {
          tag: "06 / EXTENDED CAMPAIGN & EDITORIAL ASSETS",
          heading: "Additional Campaign Frames & Art Direction",
          items: [
            {
              src: "After hours/extra 1.png",
              caption: "Campaign Frame 01",
            },
            {
              src: "After hours/extra 2.png",
              caption: "Campaign Frame 02",
            },
            {
              src: "After hours/extra 3.png",
              caption: "Campaign Frame 03",
            },
            {
              src: "After hours/extra 4.png",
              caption: "Campaign Frame 04",
            },
            {
              src: "After hours/extra 5.png",
              caption: "Campaign Frame 05",
            },
            {
              src: "After hours/extra 6.png",
              caption: "Campaign Frame 06",
            },
          ],
        },
      },
    },
    {
      number: "04",
      title: "Roam Coffee Co.",
      category: "Brand Identity / Mascot Design / Packaging & Print World",
      visualTitle: "ROAM<br>COFFEE CO.",
      visualStyle: "serif",
      label: "COFFEE FOR THE RESTLESS",
      corner: "⌁",
      summary:
        "A warm, character-led brand identity for Roam Coffee Co.—built around an adventurous backpacker mascot, earthy kraft textures, and the belief that great coffee should go wherever life takes you.",
      isRoam: true,
      sections: {
        // PAGE 01: Brand Overview & Primary Mascot Lockup
        hero: {
          tag: "01 / BRAND WORLD & IDENTITY",
          heading: "Good Coffee. Anywhere. For the Restless.",
          description:
            "Roam is specialty coffee designed for movers, thinkers, and doers who don't stand still. Rather than leaning on sterile minimalist café tropes, the identity pairs a rounded, nostalgic display wordmark with a hand-drawn explorer mascot—creating an approachable, soulful brand built to travel across cups, carriers, storefronts, and pop-ups.",
          logoImage: "roam/images/logo-mascot.png",
          conceptBoard: "roam/images/brand-concept.png",
        },
        // PAGE 02: Strategy, Essence & Personality (Extracted directly from your Brand Concept board)
        strategy: {
          tag: "02 / BRAND STRATEGY & PERSONALITY",
          challenge:
            "How do you position a single-origin, ethically sourced coffee brand so it feels grounded and artisanal without becoming pretentious or intimidating?",
          idea: "Coffee that fuels your journey — wherever you roam.",
          essence:
            "Warm. Grounded. Comforting. Familiar. Your pause in the middle of the chaos.",
          pillars: ["The Outdoors", "The Journey", "The Moments", "The Craft"],
          personality: [
            {
              trait: "Adventurous",
              desc: "We're curious by nature and love exploring more.",
            },
            {
              trait: "Friendly",
              desc: "Warm, approachable and easy to connect with.",
            },
            {
              trait: "Mindful",
              desc: "We care — about people, planet and every bean.",
            },
            {
              trait: "Authentic",
              desc: "No pretense. Just honest coffee done right.",
            },
          ],
        },
        // PAGE 03: Exact Color Palette & Visual Direction
        colorSystem: {
          tag: "03 / EARTHY COLOR & VISUAL DIRECTION",
          description:
            "A warm, earthy and calm palette inspired by nature, roasted coffee, and unbleached kraft packaging—paired with hand-drawn line illustrations and bold rounded typography.",
          boardImage: "assets/roam/color-palette.png",
          swatches: [
            {
              name: "ROAM GREEN",
              hex: "#2E3D22",
              rgb: "46 61 34",
              cmyk: "75 50 85 55",
            },
            {
              name: "SAGE",
              hex: "#A5AE8D",
              rgb: "165 174 141",
              cmyk: "37 20 51 0",
            },
            {
              name: "WARM BEIGE",
              hex: "#F1E6D2",
              rgb: "241 230 210",
              cmyk: "6 9 20 0",
            },
            {
              name: "KRAFT BROWN",
              hex: "#D6BA8C",
              rgb: "214 186 140",
              cmyk: "16 27 50 0",
            },
            {
              name: "COFFEE BROWN",
              hex: "#6B4526",
              rgb: "107 69 38",
              cmyk: "41 69 87 33",
            },
            {
              name: "ESPRESSO BLACK",
              hex: "#1E1E1E",
              rgb: "30 30 30",
              cmyk: "75 68 87 77",
            },
          ],
        },
        // PAGE 04: Packaging & Physical Touchpoints
        packaging: {
          tag: "04 / PACKAGING & PHYSICAL EXPERIENCE",
          heading: "Tactile Kraft Packaging & Storefront Presence",
          description:
            "Designed for movement—from die-cut two-cup carriers and stacked unbleached takeaway cups to frosted window decals that welcome passersby into the café.",
          items: [
            {
              src: "roam/images/packaging-carrier.png",
              caption:
                "Die-cut kraft 2-cup carrier with twin mascot illustrations",
            },
            {
              src: "roam/images/cups-stacked.png",
              caption:
                "Unbleached takeaway cups & 'Sip · Roam · Repeat' sleeve system",
            },
            {
              src: "roam/images/storefront.png",
              caption:
                "Café glass storefront vinyl decal & operating hours lockup",
            },
          ],
        },
        // PAGE 05: Posters, Print Collateral & Stickers
        campaigns: {
          tag: "05 / CAMPAIGN POSTERS & COLLATERAL",
          heading: "Editorial Posters, Postcards & Die-Cut Stickers",
          description:
            "Extending the mascot into retail storytelling—combining iced latte product posters, café table cards ('Pure comfort' & 'Baked cookies'), and collectible sticker packs.",
          items: [
            {
              src: "roam/images/poster-latte.png",
              caption: "Cafe Latte product poster — layered display typography",
            },
            {
              src: "roam/images/poster-restless.png",
              caption: "'Good coffee. Anywhere.' brand manifesto poster",
            },
            {
              src: "roam/images/stationery.png",
              caption: "Café hospitality postcards & die-cut vinyl stickers",
            },
          ],
        },
        // PAGE 06: Extended Brand Applications (Slots for your remaining 4 images)
        extendedGallery: {
          tag: "06 / EXTENDED BRAND APPLICATIONS",
          heading: "Merchandise, Menu & Digital Rollout",
          items: [
            {
              src: "roam/images/Brand Application 1.png",
              caption: "Brand Application 01",
            },
            {
              src: "roam/images/Brand Application 2.png",
              caption: "Brand Application 02",
            },
            {
              src: "roam/images/Brand Application 3.png",
              caption: "Brand Application 03",
            },
            {
              src: "roam/images/Brand Application 4.png",
              caption: "Brand Application 04",
            },
          ],
        },
      },
    },
    {
      number: "05",
      title: "Brief Roulette",
      category: "Product Design / Creative Tooling / Frontend Build",
      visualTitle: "SPIN.<br>THINK.<br>MAKE.",
      visualStyle: "sans",
      label: "NO SAFE IDEAS ALLOWED",
      corner: "↻",
      summary:
        "A live browser-based creative workout tool that turns four random constraints into structured, pitch-ready brand and campaign directions—in five minutes or fifty.",
      liveUrl: "https://brief-roulette-ruby.vercel.app/",
      isBriefRoulette: true,
      sections: {
        // PAGE 01: Live Product Overview
        overview: {
          tag: "01 / THE SHIPPED PRODUCT",
          heading: "Stuck? Spin Something.",
          tagline: "YOUR NEXT GOOD IDEA STARTS WITH A WEIRD BRIEF",
          description:
            "Designed and built as an interactive creative workout for designers and storytellers. Instead of staring at a blank canvas, users spin a four-slot constraint machine and immediately develop a pitchable direction inside a local-first idea workspace.",
          image: "assets/brief-roulette/preview.png",
          caption:
            "Live web application deployed on Vercel — brief-roulette-ruby.vercel.app",
        },
        // PAGE 02: Problem & Product Thesis
        problemThesis: {
          tag: "02 / THE PROBLEM & THESIS",
          problemTitle: "Blank-Page Paralysis",
          problem:
            "Traditional creative prompts are either too vague ('design a coffee brand') or overly rigid, causing designers to fall back on safe, predictable tropes instead of lateral problem-solving.",
          thesisTitle: "Forced Collision + Instant Capture",
          thesis:
            "Creativity accelerates when unlikely constraints collide—and when the friction between getting a prompt, drafting a concept, and saving a reusable brand direction is zero.",
        },
        // PAGE 03: How It Works (The 3 Core Modules from the Live App)
        modules: {
          tag: "03 / PRODUCT WORKFLOW",
          heading: "Three Modules, One Continuous Loop",
          steps: [
            {
              step: "01 / THE BRIEF MACHINE",
              title: "4-Constraint Randomizer",
              detail:
                "Generates a unique creative challenge by pairing four distinct variables—Product (📦), Audience (🎯), Mood (🎭), and Surprise Twist (⚡)—with live accessible status updates.",
              tags: ["📦 Product", "🎯 Audience", "🎭 Mood", "⚡ Twist"],
            },
            {
              step: "02 / YOUR IDEA LAB",
              title: "Frictionless Pitch Workspace",
              detail:
                "A structured scratchpad right beside the generator so users can translate the prompt into a real pitch direction immediately, with automatic local browser draft persistence.",
              tags: ["Zero-Signup", "Auto-Saved Locally"],
            },
            {
              step: "03 / SAVE YOUR BRAND DESIGN",
              title: "Reusable Direction Presets",
              detail:
                "Lets creators save a strong brand direction once and reload it anytime from a preset selector to stress-test it against brand-new challenges.",
              tags: ["Preset Library", "Device-Private Storage"],
            },
          ],
        },
        // PAGE 04: UX & Visual System Decisions
        designSystem: {
          tag: "04 / UI & INTERACTION DESIGN",
          heading: "Tactile Editorial Utility",
          principles: [
            {
              title: "Warm Editorial Surface",
              detail:
                "Avoided sterile developer-tool dark modes in favor of warm paper tones, crisp 1px borders, and high-contrast ink typography that feels like a physical sketchbook.",
            },
            {
              title: "Privacy-First Local Persistence",
              detail:
                "Engineered with browser local storage so drafts and saved brand directions persist automatically on the user's device without accounts, databases, or paywalls.",
            },
            {
              title: "Accessible Micro-Interactions",
              detail:
                "Built with semantic landmarks, ARIA live regions for screen-reader prompt announcements, and clear status indicators for saved states.",
            },
          ],
        },
      },
    },
  ],
};

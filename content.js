const portfolio = {
  name: "Ishwari Kokane",
  email: "12kokane@gmail.com", // Replace with your actual email
  linkedin: "https://www.linkedin.com/",
  X: "https://x.com/IshwariKokane12",
  projects: [
    {
      number: "01",
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
          image: "assets/think-school/homepage.png",
          caption: "Think School digital ecosystem & content flagship overview",
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
          portraitImage: "parshkothar/images/Parsh Kothari profile.png",
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
        feedTransformation: {
          tag: "03 / FEED TRANSFORMATION",
          heading: "From Scattered Posts to an Editorial Grid",
          before: {
            label: "BEFORE",
            image: "parshkothar/images/Before.PNG",
            notes:
              "Inconsistent typography, cluttered text overlays, and varying color temperatures made individual posts blend into the feed without strong brand recall.",
          },
          after: {
            label: "AFTER",
            image: "parshkothar/images/After.PNG",
            notes:
              "Introduced strict grid rhythm, high-contrast focal hierarchy, recurring editorial frames, and unified color anchors—making every post instantly identifiable as Parsh Kothari.",
          },
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
      title: "Meesho Growth",
      category: "Growth strategy / Creative strategy",
      visualTitle: "GROWTH<br>IS A<br>PEOPLE THING",
      visualStyle: "serif",
      label: "MAKE EVERYDAY FEEL BIG",
      corner: "✳",
      summary:
        "A creative growth lens for making value, discovery and everyday wins feel worth sharing.",
      challenge:
        "How can a value-first commerce brand build stronger emotional relevance while helping more people discover what is possible on the platform?",
      approach:
        "Start with real shopping behaviours and everyday motivations. Turn product breadth, affordability and small moments of delight into clear creative territories that can travel across the funnel.",
      deliverables:
        "Audience insight · Growth territories · Messaging directions · Campaign ideas",
      outcome: "A growth story rooted in people, not just performance metrics.",
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
            { src: "roam/images/Brand Application 1.png", caption: "Brand Application 01" },
            { src: "roam/images/Brand Application 2.png", caption: "Brand Application 02" },
            { src: "roam/images/Brand Application 3.png", caption: "Brand Application 03" },
            { src: "roam/images/Brand Application 4.png", caption: "Brand Application 04" },
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

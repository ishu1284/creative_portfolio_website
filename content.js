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
      category: "Growth Creative Strategy / Full-Funnel Lifecycle / Motion & UI",
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
          tag: "01 / COVER — FROM SCROLL TO SHOPPING",
          heading: "From Scroll to Shopping: Designing a High-Trust Value Funnel for Meesho",
          subhead:
            "How editorial visual hierarchy, zero-friction mobile onboarding, and post-delivery habit loops turn passive social scrollers into repeat Meesho buyers.",
          heroImage: "meesho/images/cover-hero.png",
          specs: {
            role: "Growth & Visual Designer",
            scope: "Paid Social Ads · 3-Screen Onboarding · CRM · 15s Motion · A/B Plan",
            palette: [
              { name: "Jamuni", hex: "#4A154B" },
              { name: "Magenta", hex: "#D81B60" },
              { name: "Amber", hex: "#F59E0B" }
            ]
          }
        },

        // 02. THE BRIEF — WHAT WE WANT TO SOLVE
        brief: {
          tag: "02 / THE BRIEF",
          epistemic: "RESEARCH-BACKED INSIGHT",
          heading: "How do we make ₹300 shopping look stylish and trustworthy?",
          anchors: [
            { num: "~₹300", label: "Typical Order Price", sub: "Everyday clothes & home items people actually buy" },
            { num: "Small Towns", label: "Where Growth Comes From", sub: "Shoppers who check price and trust before buying" },
            { num: "1st → 2nd", label: "The Real Goal", sub: "Getting first-time buyers to come back and shop again" }
          ],
          objectiveTitle: "01 / WHAT WE WANT TO DO",
          objective:
            "Get more people to download Meesho, place their first order with confidence, and come back for a second order—without relying on huge discounts every single time.",
          tensionTitle: "02 / THE DESIGN PROBLEM",
          leftPole: {
            label: "TOO LOUD & MESSY",
            outcome: "Looks cheap, so people worry the cloth or quality will be bad"
          },
          sweetSpot: {
            label: "OUR SWEET SPOT",
            outcome: "Clean, stylish photos + honest ₹249–₹499 prices right upfront"
          },
          rightPole: {
            label: "TOO FANCY & LUXURY",
            outcome: "Looks expensive, so shoppers leave thinking they can't afford it"
          }
        },

        // 03. USER INSIGHT — WHY PEOPLE HESITATE
        userInsight: {
          tag: "03 / USER INSIGHT",
          epistemic: "RESEARCH-BACKED INSIGHT",
          heading: "What Stops People From Installing, Buying, or Coming Back?",
          barriers: [
            {
              stage: "01 / BEFORE INSTALLING",
              title: "“Will the quality actually be good?”",
              insight:
                "When ads are covered in loud discount stickers, people assume the clothes are low quality and scroll right past."
            },
            {
              stage: "02 / BEFORE FIRST ORDER",
              title: "“Why do I have to sign up before looking?”",
              insight:
                "Forcing people to log in immediately—or hiding Cash on Delivery and easy returns—makes new users quit before buying anything."
            },
            {
              stage: "03 / AFTER FIRST ORDER",
              title: "“Now that my ₹100 coupon is gone, why come back?”",
              insight:
                "If someone only joined for a big welcome discount, they stop shopping once regular prices return unless we give them a fun reason to return."
            }
          ]
        },

        // 04. GROWTH FUNNEL — STEP-BY-STEP JOURNEY
        funnel: {
          tag: "04 / GROWTH FUNNEL",
          epistemic: "DESIGN HYPOTHESIS",
          heading: "See Ad → Try App → Come Back Again",
          stages: [
            {
              step: "STEP 01 · GET ATTENTION (ACQUISITION)",
              goal: "Stop the scroll with clean outfit photos and clear prices",
              mechanism:
                "Show real, wearable outfits with the exact price right on the image (₹349 Kurtis, ₹499 Co-ord Sets, ₹249 Perfume).",
              kpi: "What we measure: Ad clicks & app installs"
            },
            {
              step: "STEP 02 · FIRST ORDER (ACTIVATION)",
              goal: "Make buying the first item fast and worry-free",
              mechanism:
                "Let people browse without a forced login, pick 2 styles they like, and unlock ₹100 off with Cash on Delivery.",
              kpi: "What we measure: New users who buy within 7 days"
            },
            {
              step: "STEP 03 · REPEAT ORDERS (RETENTION)",
              goal: "Turn one-time shoppers into regular buyers",
              mechanism:
                "Send helpful cart reminders, give ₹75 wallet cash for rating their delivery, and suggest matching items under ₹250.",
              kpi: "What we measure: Buyers who place a 2nd & 3rd order"
            }
          ]
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
                "Don't hide prices or use confusing 'Up to 80% Off' math. Show the real price (₹249 or ₹349) so shoppers know they can afford it."
            },
            {
              title: "02. Make Trust Impossible to Miss",
              detail:
                "Put 'Cash on Delivery', '7-Day Easy Returns', and 'Free Delivery' front and center so first-time buyers feel completely safe."
            },
            {
              title: "03. Match the Ad to the App",
              detail:
                "When someone taps an ad for a ₹349 kurti, show that exact same lookbook style on the very first app screen so nothing feels jarring."
            }
          ]
        },

        // 03. USER INSIGHT — BARRIERS TO INSTALLING, BUYING & RETURNING
        userInsight: {
          tag: "03 / USER INSIGHT",
          epistemic: "RESEARCH-BACKED INSIGHT",
          heading: "What Prevents Users From Installing, Buying, or Returning?",
          barriers: [
            {
              stage: "01 / INSTALL BARRIER",
              title: "Visual Fatigue & Quality Doubt",
              insight:
                "Loud, starburst-heavy discount ads create banner blindness and make shoppers question fabric, stitching, and print accuracy before tapping Install."
            },
            {
              stage: "02 / FIRST-ORDER BARRIER",
              title: "Login Walls & Payment Hesitation",
              insight:
                "Forcing immediate account creation before letting users browse deals—or failing to surface Cash on Delivery (COD) and 7-day returns early—causes sharp drop-off before Order 1."
            },
            {
              stage: "03 / REPEAT-PURCHASE BARRIER",
              title: "Subsidy Cliff After Order 1",
              insight:
                "Users acquired purely via deep ₹100 welcome coupons churn once full prices return unless post-delivery delight and low-ticket cross-sells establish a shopping habit."
            }
          ]
        },

        // 04. GROWTH FUNNEL — ACQUISITION -> ACTIVATION -> RETENTION
        funnel: {
          tag: "04 / GROWTH FUNNEL ARCHITECTURE",
          epistemic: "DESIGN HYPOTHESIS",
          heading: "Acquisition → Activation → Retention",
          stages: [
            {
              step: "STAGE 01 · ACQUISITION",
              goal: "Stop the scroll with editorial clarity + instant price anchor",
              mechanism:
                "Pair clean studio lookbook photography with transparent landed prices (₹349 Ethnic Kurtis, ₹499 Co-ord Sets, ₹249 Vanilla Elixir).",
              kpi: "Target KPIs: Thumb-Stop Rate, CTR, Click-to-Install Rate"
            },
            {
              step: "STAGE 02 · ACTIVATION",
              goal: "Convert installs into Order 1 within 7 days",
              mechanism:
                "Sosh-inspired animated lookbook entry + Guest Skip, 2-tap style curation, and a Cash-on-Delivery MEESHO100 trust screen.",
              kpi: "Target KPIs: Onboarding Completion, Install-to-Order 1 CR"
            },
            {
              step: "STAGE 03 · RETENTION",
              goal: "Build a subsidy-light 3-order habit loop",
              mechanism:
                "24-hr COD cart recovery, Post-Delivery 'Rate & Unlock ₹75' wallet delight, and 'Complete the Look' low-ticket accessory pairings.",
              kpi: "Target KPIs: D30 Repeat Rate, Order 2+ Conversion"
            }
          ]
        },

        // 05. CREATIVE STRATEGY — MESSAGE ARCHITECTURE & CAMPAIGN CONCEPT
        strategy: {
          tag: "05 / CREATIVE STRATEGY",
          epistemic: "DESIGN HYPOTHESIS",
          conceptName: "Campaign Platform: “Everyday Style, Zero Overpay.”",
          thesis:
            "Instead of hiding affordable prices behind luxury minimalism or shouting discounts with visual clutter, treat ₹249–₹499 everyday fashion and fragrance with editorial magazine hierarchy—letting generous negative space, crisp Playfair + DM Sans typography, and trust badges carry the persuasion.",
          pillars: [
            {
              title: "01. Editorial Price Anchoring",
              detail:
                "Lead with aspirational styling, then resolve price anxiety immediately with a high-contrast ₹249 / ₹349 landed-cost pill."
            },
            {
              title: "02. Doorstep Trust Architecture",
              detail:
                "Elevate Cash on Delivery, 7-Day Easy Returns, and ₹0 Delivery from fine-print footnotes into primary visual trust badges."
            },
            {
              title: "03. Continuous Visual Thread",
              detail:
                "Carry the exact model lookbooks and price tags from Meta/Reels ads directly into Onboarding Screen 1 so users feel zero context-switch."
            }
          ]
        },

        // 06. ACQUISITION EXECUTION — AD CONCEPTS & CREATIVE VARIATIONS
        acquisition: {
          tag: "06 / ACQUISITION EXECUTION",
          epistemic: "DESIGN HYPOTHESIS",
          heading: "Paid Social Ad Concepts & Category Variations",
          description:
            "Three category-specific performance creatives built for Meta Feeds, Stories, and Google App Campaigns—testing price-led hooks against editorial wardrobe storytelling.",
          assets: [
            {
              src: "meesho/images/ad-ethnic-kurti.png",
              badge: "ANGLE A · PRICE-LED UTILITY",
              title: "Ethnic Wear — “A Little More Style. A Lot Less Spend.”",
              caption:
                "1200×500 & 4:5 Feed unit anchored at ₹349 (Net ₹249 with MEESHO100) with warm editorial framing and COD badge."
            },
            {
              src: "meesho/images/ad-coord-set.png",
              badge: "ANGLE B · EDITORIAL DISCOVERY",
              title: "Western Co-ords — “The Co-ord You'll Live In.”",
              caption:
                "Clean studio styling starting at ₹499—designed to attract younger, trend-driven shoppers who usually browse high-street apps."
            },
            {
              src: "meesho/images/ad-vanilla-elixir.png",
              badge: "ANGLE C · IMPULSE BEAUTY & GIFTING",
              title: "Fragrance — “Vanilla Elixir @ ₹249”",
              caption:
                "High-contrast sensory product visual positioned as an effortless low-ticket first order with zero delivery fee."
            }
          ]
        },

        // 07. ACTIVATION EXECUTION — ONBOARDING & FIRST-PURCHASE EXPERIENCE
        activation: {
          tag: "07 / ACTIVATION EXECUTION",
          epistemic: "DESIGN HYPOTHESIS",
          heading: "3-Screen Onboarding & First-Purchase Conversion Flow",
          description:
            "Adapted the full-bleed glassmorphic aesthetic of modern social-shopping apps for Meesho's mass-market user psychology—pairing an animated lookbook background with low-friction WhatsApp/OTP entry and a Skip escape hatch.",
          screens: [
            {
              src: "meesho/images/onboarding-1.png",
              step: "SCREEN 01 · HOOK & ENTRY",
              title: "Animated Lookbook + Low-Friction OTP",
              detail:
                "Crossfading everyday looks with floating ₹249–₹499 price pills behind a dark glassmorphic bottom sheet, 1-tap Mobile/WhatsApp OTP, and top-right Skip."
            },
            {
              src: "meesho/images/onboarding-2.png",
              step: "SCREEN 02 · INTENT CURATION",
              title: "2-Tap Style & Category Selector",
              detail:
                "Zero-typing visual chips (Ethnic Kurtis, Western Co-ords, Home & Decor, Beauty) with clear starting price anchors to personalize the home feed immediately."
            },
            {
              src: "meesho/images/onboarding-3.png",
              step: "SCREEN 03 · TRUST & VOUCHER",
              title: "COD Assurance + MEESHO100 Unlock",
              detail:
                "Stacks Cash on Delivery, 7-Day Easy Returns, and Lowest Price Guarantee above a perforated ₹100 welcome ticket before entering the feed."
            }
          ]
        },

        // 08. RETENTION EXECUTION — PUSH, BANNERS & CRM CREATIVES
        retention: {
          tag: "08 / RETENTION & CRM EXECUTION",
          epistemic: "DESIGN HYPOTHESIS",
          heading: "Lifecycle Touchpoints: Push, In-App Banners, Cart Recovery & Habit Loop",
          description:
            "Connected CRM and in-app surfaces engineered to recover abandoned carts without margin-killing coupons and turn Order 1 buyers into 3-order VIP regulars.",
          touchpoints: [
            {
              src: "meesho/images/crm-push.png",
              channel: "LOCK-SCREEN RICH PUSH",
              title: "T+4h / T+24h / T+48h Welcome Nudge",
              detail:
                "Rich media notification displaying the exact ₹349 → ₹249 landed price preview and dual quick-actions ('Claim ₹100 Off' / 'Browse Under ₹299')."
            },
            {
              src: "meesho/images/crm-inapp-banners.png",
              channel: "IN-APP MERCHANDISING",
              title: "Home Feed Hero + Sticky Checkout Nudge",
              detail:
                "Editorial top-of-feed welcome banner paired with a persistent bottom-bar progress tracker showing real-time ₹100 voucher eligibility."
            },
            {
              src: "meesho/images/crm-cart-reminder.png",
              channel: "CART ABANDONMENT RECOVERY",
              title: "Size-Lock + 1-Tap COD Checkout Deep Link",
              detail:
                "3-stage cadence (+15m size reservation, +6h COD & easy-return reassurance, +24h voucher expiry) routing directly to 1-tap COD confirmation."
            },
            {
              src: "meesho/images/crm-repeat-loop.png",
              channel: "POST-DELIVERY HABIT LOOP",
              title: "“Rate & Unlock ₹75” + Complete the Look",
              detail:
                "Turns post-delivery satisfaction into an instant ₹75 wallet credit usable on curated Order 1 pairings (Oxidised Jhumkas @ ₹124, Kolhapuri Flats @ ₹224)."
            }
          ]
        },

        // 09. MOTION DESIGN — STORYBOARD & FINAL ANIMATION
        motion: {
          tag: "09 / MOTION DESIGN",
          epistemic: "DESIGN HYPOTHESIS",
          heading: "15-Second First-Purchase Explainer Reel (9:16)",
          description:
            "Built for Instagram Reels, YouTube Shorts, and Paid Social Stories—engineered with a 1.5-second visual hook and silent-autoplay kinetic typography.",
          reelPreview: "meesho/images/motion-reel-preview.png",
          beats: [
            {
              time: "00.0s – 04.5s",
              beat: "BEAT 01 · EDITORIAL PRICE-ANCHOR HOOK",
              visual:
                "Full-bleed studio lookbook zoom matching Onboarding Screen 1; bold ₹249 scroll-stopper badge snaps in within the first 36 frames."
            },
            {
              time: "04.5s – 10.0s",
              beat: "BEAT 02 · VOUCHER DROP & PRICE SLASH",
              visual:
                "Kinetic strikethrough animates ₹349 → ₹249 landed cost as the perforated MEESHO100 welcome ticket drops into frame."
            },
            {
              time: "10.0s – 15.0s",
              beat: "BEAT 03 · DOORSTEP TRUST & FINAL CTA",
              visual:
                "Cash on Delivery, 7-Day Easy Returns, and ₹0 Delivery stack cleanly above a pulsing 'Order COD @ ₹249' CTA."
            }
          ]
        },

        // 10. TESTING PLAN — HYPOTHESES, VARIANTS & KPIs
        testingPlan: {
          tag: "10 / CREATIVE TESTING PLAN",
          epistemic: "PROPOSED EXPERIMENT",
          heading: "Controlled A/B Testing Matrix & Full-Funnel KPIs",
          note:
            "All tests below are proposed single-variable experiments held at equal budget and audience targeting over a 7–14 day learning window. No internal Meesho results are assumed or fabricated.",
          matrix: [
            {
              test: "A/B Test 1",
              variable: "Price first vs. Style first",
              variantA: "Big 'Starting ₹349 / Net ₹249' price badge at the top",
              variantB: "Fashion headline ('The Co-ord You'll Live In') with smaller price",
              hypothesis:
                "See whether showing the low price immediately gets more clicks, or if leading with style brings in bigger orders."
            },
            {
              test: "A/B Test 2",
              variable: "Many outfits vs. One hero outfit",
              variantA: "Grid showing 3–4 different outfits and prices at once",
              variantB: "One clean model photo matching the app's welcome screen",
              hypothesis:
                "Test if showing more variety helps more people spot something they like, or if one clear photo works better."
            },
            {
              test: "A/B Test 3",
              variable: "Still image vs. 15-second video",
              variantA: "Clean static ad card with bold price and outfit photo",
              variantB: "15-second animated reel showing ₹349 dropping to ₹249",
              hypothesis:
                "Check if movement and a live price-drop animation stop more people from scrolling past."
            },
            {
              test: "A/B Test 4",
              variable: "Direct button vs. Curious button",
              variantA: "'Claim ₹100 Off & Shop' / 'Order COD @ ₹249'",
              variantB: "'See Styles Under ₹399' / 'Unlock Your Welcome Box'",
              hypothesis:
                "Find out if new shoppers prefer an immediate discount button or a low-pressure button to browse first."
            }
          ],
          kpis: [
            {
              stage: "GETTING USERS (ACQUISITION)",
              metrics: "How many people stop scrolling · Ad click rate (CTR) · App installs"
            },
            {
              stage: "FIRST PURCHASE (ACTIVATION)",
              metrics: "People who finish the 3 welcome screens · First orders placed within 7 days"
            },
            {
              stage: "COMING BACK (RETENTION)",
              metrics: "Shoppers who place a 2nd order within 30 days · People who claim the ₹75 rating reward"
            }
          ]
        },

        // 11. FINAL CAMPAIGN SYSTEM — ALL ASSETS TOGETHER ACROSS CHANNELS
        finalSystem: {
          tag: "11 / FINAL CAMPAIGN SYSTEM",
          epistemic: "DESIGN HYPOTHESIS",
          heading: "Unified Multi-Channel Growth System",
          summary:
            "Every creative artifact shares one cohesive typographic scale (Playfair Display + DM Sans), one color language (Jamuni, Magenta, Amber on warm ivory), and one uninterrupted value promise from first impression to third order.",
          boardImage: "meesho/images/final-campaign-system.png",
          channels: [
            "01. Paid Social Static Ads (Meta / Google)",
            "02. 15s Motion Explainer Reel (9:16)",
            "03. 3-Screen Mobile Onboarding Prototype",
            "04. In-App Hero & Sticky Checkout Banners",
            "05. Lock-Screen Rich Push Notifications",
            "06. 3-Stage COD Cart Abandonment Flow",
            "07. Post-Delivery Rate-to-Unlock ₹75 Habit Loop"
          ]
        }
      }
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

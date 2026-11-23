const grid = document.getElementById("project-grid");
const dialog = document.getElementById("project-dialog");
const dialogContent = dialog.querySelector(".dialog-content");

function renderProjects() {
  const workSection = document.getElementById("work");
  const grid =
    document.getElementById("projects-grid") ||
    document.getElementById("work-grid") ||
    document.getElementById("project-grid") ||
    workSection?.querySelector("[id*='grid'], [class*='grid']");
  if (!grid || !portfolio?.projects) return;

  grid.classList.add("proj-accordion");
  grid.innerHTML = portfolio.projects
    .map((p, i) => {
      const num = String(i + 1).padStart(2, "0");
      // Grab best preview image available on each project
      const thumb =
      p.coverImage ||
      p.image ||
      p.sections?.hero?.logoImage ||
      p.sections?.hero?.portraitImage ||
      p.sections?.showcase?.image ||
      p.assets?.[0]?.image ||
      p.gallery?.[0] ||
      "";

      return `
      <article class="pa-panel ${i === 0 ? "is-expanded" : ""}" data-index="${i}">
        <div class="pa-top">
          <span class="pa-num">${num}</span>
          <span class="pa-tag">${p.category || p.tag || "CASE STUDY"}</span>
        </div>

        <div class="pa-body">
          <div class="pa-info">
            <h3>${p.title}</h3>
            <p>${p.summary || p.description || ""}</p>
            <button type="button" class="pa-open-btn" data-open="${i}">
              OPEN CASE STUDY ↗
            </button>
          </div>

          <div class="pa-visual">
            ${
              thumb
                ? `<img src="${thumb}" alt="${p.title}" loading="lazy">`
                : `<div class="pa-placeholder"><span>${num}</span><small>${p.title}</small></div>`
            }
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  const panels = Array.from(grid.querySelectorAll(".pa-panel"));

  panels.forEach((panel, idx) => {
    // Expand smoothly on hover (desktop) or tap
    panel.addEventListener("mouseenter", () => {
      panels.forEach((p) => p.classList.remove("is-expanded"));
      panel.classList.add("is-expanded");
    });

    panel.addEventListener("click", (e) => {
      // If already expanded or user clicked the button, open the full modal
      if (
        panel.classList.contains("is-expanded") ||
        e.target.closest(".pa-open-btn")
      ) {
        showProject(idx);
      } else {
        panels.forEach((p) => p.classList.remove("is-expanded"));
        panel.classList.add("is-expanded");
      }
    });
  });
}

function showProject(index) {
  const p = portfolio.projects[index];

  // 01. THINK SCHOOL CASE STUDY
  if (p.isRichCaseStudy && p.sections) {
    const s = p.sections;
    dialogContent.innerHTML = `
      <div class="cs-header">
        <p class="eyebrow">${p.number} / CASE STUDY · ${p.category}</p>
        <h2>${p.title}</h2>
        <p class="dialog-summary">${p.summary}</p>
      </div>

      <section class="cs-block">
        <span class="cs-tag">${s.homepage.tag}</span>
        <h3>${s.homepage.heading}</h3>
        <p class="dialog-body">${s.homepage.description}</p>
        <figure class="cs-browser-frame">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <img src="${s.homepage.image}" alt="Think School Homepage" onerror="this.style.display='none'">
          <figcaption>${s.homepage.caption}</figcaption>
        </figure>
      </section>

      <section class="cs-block cs-collab-card">
        <span class="cs-tag">${s.collaboration.tag}</span>
        <div class="collab-grid">
          <div class="collab-left">
            <p>${s.collaboration.leftCopy}</p>
            <span class="collab-skills">${s.collaboration.skills}</span>
          </div>
          <div class="collab-center">
            <img src="${s.collaboration.portraitImage}" alt="${s.collaboration.personName}" onerror="this.style.display='none'">
          </div>
          <div class="collab-right">
            <div class="collab-arrow">↳</div>
            <h4>${s.collaboration.personName}</h4>
            <span class="collab-badge">${s.collaboration.roleBadge}</span>
            <p>${s.collaboration.rightCopy}</p>
          </div>
        </div>
      </section>

      <section class="cs-block cs-profile-card">
        <span class="cs-tag">${s.profile.tag}</span>
        <div class="profile-proof-grid">
          <div class="profile-info">
            <h3>${s.profile.name}</h3>
            <p class="profile-role">${s.profile.title}</p>
            <p class="dialog-body">${s.profile.bio}</p>
            <div class="profile-stats">
              ${s.profile.stats
                .map(
                  (st) => `
                <div class="stat-pill">
                  <strong>${st.value}</strong>
                  <span>${st.label}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
          <figure class="profile-proof-shot">
            <img src="${s.profile.avatarImage}" alt="@parsh_kothari Verified Profile Proof (62.6K Followers)">
            <figcaption>@parsh_kothari · Verified Profile Snapshot (62.6K Followers)</figcaption>
          </figure>
        </div>
      </section>

      <section class="cs-block">
        <span class="cs-tag">${s.feedTransformation.tag}</span>
        <h3>${s.feedTransformation.heading}</h3>
        <div class="ba-grid">
          <div class="ba-card">
            <span class="ba-badge">${s.feedTransformation.before.label}</span>
            <div class="ba-img-wrap"><img src="${s.feedTransformation.before.image}" alt="Feed Before" onerror="this.style.display='none'"></div>
            <p>${s.feedTransformation.before.notes}</p>
          </div>
          <div class="ba-card ba-after">
            <span class="ba-badge accent">${s.feedTransformation.after.label}</span>
            <div class="ba-img-wrap"><img src="${s.feedTransformation.after.image}" alt="Feed After" onerror="this.style.display='none'"></div>
            <p>${s.feedTransformation.after.notes}</p>
          </div>
        </div>
      </section>

      <section class="cs-block">
        <div class="cs-flex-head">
          <div>
            <span class="cs-tag">${s.featuredCarousel.tag}</span>
            <h3>${s.featuredCarousel.heading}</h3>
          </div>
          <span class="cs-pill">${s.featuredCarousel.metrics}</span>
        </div>
        <p class="dialog-body">${s.featuredCarousel.description}</p>
        <div class="carousel-strip">
          ${s.featuredCarousel.slides
            .map(
              (src, i) => `
            <div class="carousel-slide">
              <span class="slide-num">0${i + 1}</span>
              <img src="${src}" alt="Carousel Slide ${i + 1}" onerror="this.style.display='none'">
            </div>
          `,
            )
            .join("")}
        </div>
      </section>

      <section class="cs-block">
        <span class="cs-tag">${s.brandSystem.tag}</span>
        <div class="cp-grid">
          <div class="cp-box">
            <h4>THE CHALLENGE</h4>
            <p>${s.brandSystem.challenge}</p>
          </div>
          <div class="cp-box purpose">
            <h4>BRAND PURPOSE</h4>
            <p>${s.brandSystem.purpose}</p>
          </div>
        </div>

        <h4 class="sub-label">COLOR PALETTE</h4>
        <div class="swatch-grid">
          ${s.brandSystem.colors
            .map(
              (c) => `
            <div class="swatch-card">
              <div class="swatch-color" style="background:${c.hex}"></div>
              <div class="swatch-meta">
                <strong>${c.name}</strong>
                <code>${c.hex}</code>
                <span>${c.role}</span>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>

        <h4 class="sub-label">TYPOGRAPHY SYSTEM</h4>
        <div class="type-grid">
          ${s.brandSystem.typography
            .map(
              (t) => `
            <div class="type-card">
              <span class="type-role">${t.role}</span>
              <div class="type-specimen">Aa Bb Cc — 0123</div>
              <strong>${t.fontName}</strong>
              <p>${t.usage}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </section>

      <section class="cs-block">
        <span class="cs-tag">${s.systemPillars.tag}</span>
        <h3>${s.systemPillars.heading}</h3>
        <div class="pillars-grid">
          ${s.systemPillars.pillars
            .map(
              (pl) => `
            <div class="pillar-card">
              <strong>${pl.title}</strong>
              <p>${pl.detail}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </section>

      <section class="cs-block">
        <div class="cs-flex-head">
          <div>
            <span class="cs-tag">${s.featuredReels.tag}</span>
            <h3>${s.featuredReels.heading}</h3>
          </div>
          <span class="cs-pill">${s.featuredReels.metrics}</span>
        </div>
        <p class="dialog-body">${s.featuredReels.description}</p>
        <div class="carousel-strip">
          ${s.featuredReels.slides
            .map(
              (src, i) => `
            <div class="carousel-slide">
              <span class="slide-num">0${i + 1}</span>
              <img src="${src}" alt="Reel Thumbnail ${i + 1}" onerror="this.closest('.carousel-slide').style.display='none'">
            </div>
          `,
            )
            .join("")}
        </div>
      </section>
    `;

    dialog.scrollTop = 0;
    dialog.showModal();
    return;
  }
  // 04. ROAM COFFEE CO. CASE STUDY
  if (p.isRoam && p.sections) {
    const s = p.sections;
    dialogContent.innerHTML = `
      <div class="cs-header">
        <p class="eyebrow">${p.number} / CASE STUDY · ${p.category}</p>
        <h2>${p.title}</h2>
        <p class="dialog-summary">${p.summary}</p>
      </div>

      <!-- PAGE 01: HERO MASCOT LOCKUP -->
      <section class="cs-block">
        <div class="roam-intro-split">
          <div>
            <span class="cs-tag">${s.hero.tag}</span>
            <h3>${s.hero.heading}</h3>
            <p class="dialog-body">${s.hero.description}</p>
          </div>
          <figure class="roam-frame roam-logo-box">
            <img src="${s.hero.logoImage}" alt="Roam Coffee Co. Primary Mascot Logo">
            <figcaption>Primary Mascot & Display Wordmark Lockup</figcaption>
          </figure>
        </div>
      </section>

      <!-- PAGE 02: BRAND CONCEPT & STRATEGY -->
      <section class="cs-block">
        <span class="cs-tag">02 / BRAND CONCEPT & STRATEGY</span>

        <!-- Story + Idea + Essence -->
        <div class="roam-strategy-top">
          <div class="roam-story-card">
            <span class="rcb-mini-head">THE MANIFESTO</span>
            <h4>GOOD COFFEE. ANYWHERE. FOR THE RESTLESS.</h4>
            <p>Roam is for the movers, thinkers and doers who find inspiration in every place they go. We believe great coffee should go wherever life takes you — to new places, new people and new ideas.</p>
            <p>Simple, soulful and made to keep you roaming.</p>
          </div>

          <div class="roam-idea-stack">
            <div class="cp-box">
              <h4>THE IDEA</h4>
              <p>Coffee that fuels your journey — wherever you roam.</p>
            </div>
            <div class="cp-box purpose">
              <h4>THE ESSENCE</h4>
              <p>Warm. Grounded. Comforting. Familiar. Your pause in the middle of the chaos.</p>
            </div>
          </div>
        </div>

        <!-- Inspired By Pills -->
        <div class="roam-pillars-bar">
          <span class="cs-tag" style="margin:0;">INSPIRED BY:</span>
          <span><strong>The Outdoors</strong></span>
          <span><strong>The Journey</strong></span>
          <span><strong>The Moments</strong></span>
          <span><strong>The Craft</strong></span>
        </div>

        <!-- 4 Personality Cards -->
        <span class="cs-tag" style="margin-top:20px;">OUR PERSONALITY</span>
        <div class="roam-personality-grid">
          <div class="roam-trait-card">
            <strong>Adventurous</strong>
            <p>We're curious by nature and love exploring more.</p>
          </div>
          <div class="roam-trait-card">
            <strong>Friendly</strong>
            <p>Warm, approachable and easy to connect with.</p>
          </div>
          <div class="roam-trait-card">
            <strong>Mindful</strong>
            <p>We care — about people, planet and every bean.</p>
          </div>
          <div class="roam-trait-card">
            <strong>Authentic</strong>
            <p>No pretense. Just honest coffee done right.</p>
          </div>
        </div>

        <!-- Visual Direction & In A Nutshell -->
        <div class="roam-strategy-bottom">
          <div class="roam-vd-box">
            <span class="rcb-mini-head">VISUAL DIRECTION</span>
            <p>Playful yet grounded. Illustrations that feel hand-drawn, nostalgic and full of character. Earthy colors, bold shapes and a tone that feels like a good conversation over coffee.</p>
          </div>
          <div class="roam-nutshell-card">
            <span class="rcb-mini-head">IN A NUTSHELL</span>
            <p>Roam is more than coffee — it's a mindset. A reminder to keep moving, keep dreaming and enjoy the journey. One cup at a time.</p>
            <blockquote>“Good coffee, wherever you roam.”</blockquote>
          </div>
        </div>
      </section>

      <!-- PAGE 03: COLOR PALETTE SYSTEM -->
      <section class="cs-block">
        <span class="cs-tag">${s.colorSystem.tag}</span>
        <h3>Color System & Tactile Palette</h3>
        <p class="dialog-body">${s.colorSystem.description}</p>
        <figure class="roam-frame" style="margin:20px 0">
        </figure>
        <div class="roam-swatch-grid">
          ${s.colorSystem.swatches
            .map(
              (c) => `
            <div class="swatch-card">
              <div class="swatch-color" style="background:${c.hex}"></div>
              <div class="swatch-meta">
                <strong>${c.name}</strong>
                <code>${c.hex}</code>
                <span>RGB ${c.rgb}</span>
                <span>CMYK ${c.cmyk}</span>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </section>

      <!-- PAGE 04: PACKAGING & STOREFRONT -->
      <section class="cs-block">
        <span class="cs-tag">${s.packaging.tag}</span>
        <h3>${s.packaging.heading}</h3>
        <p class="dialog-body">${s.packaging.description}</p>
        <div class="roam-gallery-3">
          ${s.packaging.items
            .map(
              (item) => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `,
            )
            .join("")}
        </div>
      </section>

      <!-- PAGE 05: POSTERS & COLLATERAL -->
      <section class="cs-block">
        <span class="cs-tag">${s.campaigns.tag}</span>
        <h3>${s.campaigns.heading}</h3>
        <p class="dialog-body">${s.campaigns.description}</p>
        <div class="roam-gallery-3">
          ${s.campaigns.items
            .map(
              (item) => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `,
            )
            .join("")}
        </div>
      </section>

      <!-- PAGE 06: EXTENDED GALLERY (FOR REMAINING 4 IMAGES) -->
      <section class="cs-block roam-extra-section">
        <span class="cs-tag">${s.extendedGallery.tag}</span>
        <h3>${s.extendedGallery.heading}</h3>
        <div class="roam-gallery-2">
          ${s.extendedGallery.items
            .map(
              (item) => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}" onerror="this.closest('figure').style.display='none'">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `,
            )
            .join("")}
        </div>
      </section>
    `;
    dialog.scrollTop = 0;
    dialog.showModal();
    return;
  }

  // 05. BRIEF ROULETTE CASE STUDY
  if (p.isBriefRoulette && p.sections) {
    const s = p.sections;
    dialogContent.innerHTML = `
      <div class="cs-header">
        <p class="eyebrow">${p.number} / CASE STUDY · ${p.category}</p>
        <div class="cs-flex-head">
          <h2>${p.title}</h2>
          <a class="button button-dark" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">Launch Live App <span>↗</span></a>
        </div>
        <p class="dialog-summary">${p.summary}</p>
      </div>

      <section class="cs-block">
        <span class="cs-tag">${s.overview.tag}</span>
        <h3>${s.overview.heading}</h3>
        <p class="dialog-body">${s.overview.description}</p>
        <div class="br-live-box">
          <div class="browser-dots">
            <span></span><span></span><span></span>
            <small class="browser-url">brief-roulette-ruby.vercel.app</small>
          </div>
          <iframe src="${p.liveUrl}" title="Brief Roulette Live Preview" loading="lazy"></iframe>
        </div>
      </section>

      <section class="cs-block">
        <span class="cs-tag">${s.problemThesis.tag}</span>
        <div class="cp-grid">
          <div class="cp-box">
            <h4>${s.problemThesis.problemTitle.toUpperCase()}</h4>
            <p>${s.problemThesis.problem}</p>
          </div>
          <div class="cp-box purpose">
            <h4>${s.problemThesis.thesisTitle.toUpperCase()}</h4>
            <p>${s.problemThesis.thesis}</p>
          </div>
        </div>
      </section>

      <section class="cs-block">
        <span class="cs-tag">${s.modules.tag}</span>
        <h3>${s.modules.heading}</h3>
        <div class="pillars-grid">
          ${s.modules.steps
            .map(
              (m) => `
            <div class="pillar-card br-module-card">
              <div>
                <span class="cs-tag">${m.step}</span>
                <strong>${m.title}</strong>
                <p>${m.detail}</p>
              </div>
              <div class="br-tags">
                ${m.tags.map((t) => `<span>${t}</span>`).join("")}
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </section>

      <section class="cs-block">
        <span class="cs-tag">${s.designSystem.tag}</span>
        <h3>${s.designSystem.heading}</h3>
        <div class="pillars-grid">
          ${s.designSystem.principles
            .map(
              (pr) => `
            <div class="pillar-card" style="background:#fff;border:1px solid var(--line)">
              <strong>${pr.title}</strong>
              <p>${pr.detail}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </section>
    `;
    dialog.scrollTop = 0;
    dialog.showModal();
    return;
  }
  // 03. AFTER HOURS LUXURY FRAGRANCE CASE STUDY
  if (p.isAfterHours && p.sections) {
    const s = p.sections;
    dialogContent.innerHTML = `
      <div class="cs-header">
        <p class="eyebrow">${p.number} / CASE STUDY · ${p.category}</p>
        <h2>${p.title}</h2>
        <p class="dialog-summary">${p.summary}</p>
      </div>

      <!-- PAGE 01: HERO CAMPAIGN KEY VISUAL -->
      <section class="cs-block">
        <div class="cs-flex-head">
          <div>
            <span class="cs-tag">${s.hero.tag}</span>
            <h3>${s.hero.heading}</h3>
          </div>
          <span class="cs-pill" style="background:#e9e6dc">${s.hero.tagline}</span>
        </div>
        <p class="dialog-body">${s.hero.description}</p>
        <figure class="roam-frame" style="margin-top:20px">
          <img src="${s.hero.heroImage}" alt="After Hours Sunset in Amber Campaign">
          <figcaption>${s.hero.caption}</figcaption>
        </figure>
      </section>

      <!-- PAGE 02: STRATEGIC CHALLENGE & TERRITORY -->
      <section class="cs-block">
        <span class="cs-tag">${s.strategy.tag}</span>
        <div class="cp-grid">
          <div class="cp-box">
            <h4>THE BRIEF & CHALLENGE</h4>
            <p>${s.strategy.challenge}</p>
          </div>
          <div class="cp-box ah-amber-box">
            <h4>CREATIVE TERRITORY</h4>
            <p>${s.strategy.territory}</p>
          </div>
        </div>
        <div class="pillars-grid">
          ${s.strategy.pillars
            .map(
              (pl) => `
            <div class="pillar-card" style="background:#fff;border:1px solid var(--line)">
              <strong>${pl.title}</strong>
              <p>${pl.detail}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </section>

      <!-- PAGE 03: PRODUCT LINE & DISCOVERY SET -->
      <section class="cs-block">
        <span class="cs-tag">${s.productLine.tag}</span>
        <h3>${s.productLine.heading}</h3>
        <p class="dialog-body">${s.productLine.description}</p>
        <figure class="roam-frame" style="margin-top:20px">
          <img src="${s.productLine.featuredSet.src}" alt="After Hours Discovery Set" style="max-height:460px;object-fit:cover">
          <figcaption>${s.productLine.featuredSet.caption}</figcaption>
        </figure>
        <div class="roam-gallery-3">
          ${s.productLine.skus
            .map(
              (sku) => `
            <figure class="roam-frame">
              <img src="${sku.src}" alt="${sku.title}">
              <figcaption><strong>${sku.title}</strong><br>${sku.desc}</figcaption>
            </figure>
          `,
            )
            .join("")}
        </div>
      </section>

      <!-- PAGE 04: OLFACTORY & BOTANICAL STILL LIFE -->
      <section class="cs-block">
        <span class="cs-tag">${s.sensory.tag}</span>
        <h3>${s.sensory.heading}</h3>
        <p class="dialog-body">${s.sensory.description}</p>
        <div class="roam-gallery-2">
          ${s.sensory.items
            .map(
              (item) => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}" style="aspect-ratio:4/5;object-fit:cover">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `,
            )
            .join("")}
        </div>
      </section>

      <!-- PAGE 05: 360 RETAIL & OOH ROLLOUT -->
      <section class="cs-block">
        <span class="cs-tag">${s.brandWorld.tag}</span>
        <h3>${s.brandWorld.heading}</h3>
        <p class="dialog-body">${s.brandWorld.description}</p>
        <figure class="roam-frame" style="margin-top:20px">
          <img src="${s.brandWorld.boardImage}" alt="After Hours Golden Hour Collection Rollout">
          <figcaption>${s.brandWorld.caption}</figcaption>
        </figure>
      </section>

      <!-- PAGE 06: EXTENDED GALLERY (FOR REMAINING 7-8 IMAGES) -->
      <section class="cs-block">
        <span class="cs-tag">${s.extendedGallery.tag}</span>
        <h3>${s.extendedGallery.heading}</h3>
        <div class="roam-gallery-2">
          ${s.extendedGallery.items
            .map(
              (item) => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}" onerror="this.closest('figure').style.display='none'">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `,
            )
            .join("")}
        </div>
      </section>
    `;
    dialog.scrollTop = 0;
    dialog.showModal();
    return;
  }

  // DEFAULT STANDARD CASE STUDY
  dialogContent.innerHTML = `
    <p class="eyebrow">${p.number} / CASE STUDY · ${p.category}</p>
    <h2>${p.title}</h2>
    <p class="dialog-summary">${p.summary}</p>
    <h4>THE CHALLENGE</h4><p class="dialog-body">${p.challenge || ""}</p>
    <h4>THE CREATIVE APPROACH</h4><p class="dialog-body">${p.approach || ""}</p>
    <h4>WHAT'S IN THE WORK</h4><p class="dialog-body">${p.deliverables || ""}</p>
    <div class="outcome">${p.outcome || ""}</div>`;
  dialog.scrollTop = 0;
  dialog.showModal();
}

document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".topbar nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
}

document
  .querySelectorAll('a[href^="mailto:"]')
  .forEach((el) => (el.href = `mailto:${portfolio.email}`));
const linkedinEl = document.getElementById("linkedin-link");
if (linkedinEl) linkedinEl.href = portfolio.linkedin;
const instagramEl = document.getElementById("instagram-link");
if (instagramEl) instagramEl.href = portfolio.instagram;
document.querySelectorAll(".wordmark").forEach(
  (mark) =>
    (mark.innerHTML = `${portfolio.name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()}<span>✳</span>`),
);

renderProjects();

// 00 / THE CREATIVE ARC — PERSONAL BRAND ARCHITECTURE
(() => {
  const nodes = Array.from(document.querySelectorAll(".arc-node"));
  const actBtns = Array.from(document.querySelectorAll(".arf-act"));
  const prevBtn = document.getElementById("arc-prev");
  const nextBtn = document.getElementById("arc-next");
  const stagePill = document.getElementById("arc-stage-pill");
  const actEl = document.getElementById("ald-act");
  const titleEl = document.getElementById("ald-title");
  const descEl = document.getElementById("ald-desc");
  const gridEl = document.getElementById("ald-grid");
  const progressPath = document.getElementById("arc-progress-path");

  if (!nodes.length || !titleEl || !gridEl) return;

  const stages = [
    {
      act: "ACT I · DISCOVERY",
      actIndex: 0,
      title: "01. Understand the Person",
      desc: "Dig past the resume and surface credentials to uncover the founder's real instincts, quirks, and lived perspective.",
      progress: 0.14,
      deliverables: [
        { icon: "◎", name: "Founder audit", sub: "Strengths & blind spots" },
        { icon: "◈", name: "Audience lens", sub: "Who actually cares" },
        { icon: "✦", name: "Core values", sub: "Non-negotiable beliefs" },
        { icon: "▤", name: "Story bank", sub: "Real moments & proof" }
      ]
    },
    {
      act: "ACT I · DISCOVERY",
      actIndex: 0,
      title: "02. Find Their Position",
      desc: "Carve out an unmistakable lane in a noisy feed so people know immediately why this voice is worth following.",
      progress: 0.33,
      deliverables: [
        { icon: "⌖", name: "Category gap", sub: "Where others sound identical" },
        { icon: "⚡", name: "Value hook", sub: "One-line reason to follow" },
        { icon: "❖", name: "Niche framing", sub: "Authority without jargon" },
        { icon: "↗", name: "Growth angle", sub: "High-leverage topics" }
      ]
    },
    {
      act: "ACT II · STRATEGY & CRAFT",
      actIndex: 1,
      title: "03. Define Their Narrative",
      desc: "Turn their expertise into a clear, compelling story people want to follow — with the right point of view, content pillars and storytelling formats.",
      progress: 0.54,
      deliverables: [
        { icon: "◎", name: "Point of view", sub: "What they stand for" },
        { icon: "❖", name: "Content pillars", sub: "What they talk about" },
        { icon: "〰", name: "Voice & tone", sub: "How they sound" },
        { icon: "▷", name: "Story formats", sub: "How they communicate" }
      ]
    },
    {
      act: "ACT II · STRATEGY & CRAFT",
      actIndex: 1,
      title: "04. Build Their Identity",
      desc: "Translate that voice into a repeatable visual language—typography, thumbnails, carousels, and templates people recognise before reading the handle.",
      progress: 0.76,
      deliverables: [
        { icon: "Aa", name: "Type & palette", sub: "Signature visual codes" },
        { icon: "▣", name: "Carousel system", sub: "Scannable editorial grids" },
        { icon: "▶", name: "Thumbnail craft", sub: "High-CTR packaging" },
        { icon: "⚙", name: "Design kit", sub: "Fast repeatable templates" }
      ]
    },
    {
      act: "ACT III · GROWTH",
      actIndex: 2,
      title: "05. Create Recognition",
      desc: "Ship consistently, track what hooks attention, and compound small creative wins into lasting brand recall and inbound opportunities.",
      progress: 1.0,
      deliverables: [
        { icon: "📈", name: "Retention loops", sub: "Formats that bring fans back" },
        { icon: "✦", name: "Signature series", sub: "Repeatable hero franchises" },
        { icon: "↺", name: "Creative iteration", sub: "Refining from CTR & views" },
        { icon: "★", name: "Brand equity", sub: "Inbound trust at scale" }
      ]
    }
  ];

  let current = 2; // Start on Stage 03 ("Define Their Narrative")
  const totalLen = progressPath ? progressPath.getTotalLength() : 0;
  if (progressPath && totalLen) {
    progressPath.style.strokeDasharray = totalLen;
  }

  function renderStage(idx) {
    current = (idx + stages.length) % stages.length;
    const s = stages[current];

    nodes.forEach((n, i) => n.classList.toggle("is-active", i === current));
    actBtns.forEach((b, i) => b.classList.toggle("is-active", i === s.actIndex));

    if (stagePill) stagePill.textContent = `STAGE 0${current + 1} / 05`;
    if (actEl) actEl.textContent = s.act;
    if (titleEl) titleEl.textContent = s.title;
    if (descEl) descEl.textContent = s.desc;

    if (progressPath && totalLen) {
      progressPath.style.strokeDashoffset = totalLen * (1 - s.progress);
    }

    gridEl.innerHTML = s.deliverables
      .map(
        (d) => `
        <div class="ald-item">
          <span class="ald-icon">${d.icon}</span>
          <div>
            <strong>${d.name}</strong>
            <span>${d.sub}</span>
          </div>
        </div>`
      )
      .join("");
  }

  nodes.forEach((btn, i) => btn.addEventListener("click", () => renderStage(i)));
  actBtns.forEach((btn) =>
    btn.addEventListener("click", () => renderStage(Number(btn.dataset.actStep || 0)))
  );
  if (prevBtn) prevBtn.addEventListener("click", () => renderStage(current - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => renderStage(current + 1));

  renderStage(2);
})();

// 3D ROLL & POP CARD UNIVERSE
(() => {
  const section = document.getElementById("intro-burst");
  const stage = document.getElementById("ib-stage");
  const centerBtn = document.getElementById("ib-center-btn");
  if (!section || !stage || !centerBtn) return;

  function triggerRollAndPop() {
    stage.classList.remove("is-exploded");
    centerBtn.classList.remove("is-rolling");
    void centerBtn.offsetWidth; // force reflow so roll restarts cleanly
    centerBtn.classList.add("is-rolling");
    requestAnimationFrame(() => {
      stage.classList.add("is-exploded");
    });
  }

  // Run roll + pop on page load
  triggerRollAndPop();

  // Click center card to roll & pop again (or collapse if already open)
  centerBtn.addEventListener("click", () => {
    if (stage.classList.contains("is-exploded")) {
      stage.classList.remove("is-exploded");
    } else {
      triggerRollAndPop();
    }
  });

  // Smooth 3D tilt across the entire hero intro area
  section.addEventListener("mousemove", (e) => {
    const rect = section.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -22;
    stage.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  section.addEventListener("mouseleave", () => {
    stage.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
})();
// 8-THUMBNAIL STACKED COVERFLOW CAROUSEL
(() => {
  const stage = document.getElementById("td-stage");
  const cards = Array.from(document.querySelectorAll(".td-card"));
  const prevBtn = document.getElementById("td-prev");
  const nextBtn = document.getElementById("td-next");
  const counterEl = document.getElementById("td-counter");
  const captionEl = document.getElementById("td-caption");

  if (!stage || !cards.length) return;

  let active = 0;
  const total = cards.length;
  let timer = null;

  function renderDeck() {
    const prev1 = (active - 1 + total) % total;
    const prev2 = (active - 2 + total) % total;
    const next1 = (active + 1) % total;
    const next2 = (active + 2) % total;

    cards.forEach((card, i) => {
      card.classList.remove("is-center", "is-prev-1", "is-prev-2", "is-next-1", "is-next-2");
      if (i === active) card.classList.add("is-center");
      else if (i === prev1) card.classList.add("is-prev-1");
      else if (i === next1) card.classList.add("is-next-1");
      else if (i === prev2) card.classList.add("is-prev-2");
      else if (i === next2) card.classList.add("is-next-2");
    });

    if (counterEl) {
      counterEl.textContent = `${String(active + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    }
    if (captionEl) {
      captionEl.textContent = cards[active].dataset.title || "";
    }
  }

  function goTo(index) {
    active = (index + total) % total;
    renderDeck();
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => goTo(active + 1), 3000);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  cards.forEach((card, i) => {
    card.addEventListener("click", () => {
      if (i !== active) {
        goTo(i);
        startAuto();
      }
    });
  });

  if (prevBtn) prevBtn.addEventListener("click", () => { goTo(active - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { goTo(active + 1); startAuto(); });

  stage.addEventListener("mouseenter", stopAuto);
  stage.addEventListener("mouseleave", startAuto);

  renderDeck();
  startAuto();
})();

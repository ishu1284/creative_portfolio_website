const grid = document.getElementById("project-grid");
const dialog = document.getElementById("project-dialog");
const dialogContent = dialog.querySelector(".dialog-content");

function renderProjects() {
  grid.innerHTML = portfolio.projects.map((project, index) => `
    <article class="project-card" tabindex="0" role="button" aria-label="Open ${project.title}" data-index="${index}">
      <div class="project-visual">
        <span class="visual-label">${project.label}</span>
        <div class="visual-shape"></div>
        <div class="visual-type ${project.visualStyle === "serif" ? "serif" : ""}">${project.visualTitle}</div>
        <span class="visual-corner">${project.corner}</span>
      </div>
      <div class="project-info">
        <div><h3>${project.title}</h3><p>${project.category}</p><span class="project-open">VIEW CASE STUDY ↗</span></div>
        <span class="project-number">${project.number} / 05</span>
      </div>
    </article>`).join("");

  document.querySelectorAll(".project-card").forEach(card => {
    const open = () => showProject(Number(card.dataset.index));
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
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
              ${s.profile.stats.map(st => `
                <div class="stat-pill">
                  <strong>${st.value}</strong>
                  <span>${st.label}</span>
                </div>
              `).join("")}
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
          ${s.featuredCarousel.slides.map((src, i) => `
            <div class="carousel-slide">
              <span class="slide-num">0${i + 1}</span>
              <img src="${src}" alt="Carousel Slide ${i + 1}" onerror="this.style.display='none'">
            </div>
          `).join("")}
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
          ${s.brandSystem.colors.map(c => `
            <div class="swatch-card">
              <div class="swatch-color" style="background:${c.hex}"></div>
              <div class="swatch-meta">
                <strong>${c.name}</strong>
                <code>${c.hex}</code>
                <span>${c.role}</span>
              </div>
            </div>
          `).join("")}
        </div>

        <h4 class="sub-label">TYPOGRAPHY SYSTEM</h4>
        <div class="type-grid">
          ${s.brandSystem.typography.map(t => `
            <div class="type-card">
              <span class="type-role">${t.role}</span>
              <div class="type-specimen">Aa Bb Cc — 0123</div>
              <strong>${t.fontName}</strong>
              <p>${t.usage}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="cs-block">
        <span class="cs-tag">${s.systemPillars.tag}</span>
        <h3>${s.systemPillars.heading}</h3>
        <div class="pillars-grid">
          ${s.systemPillars.pillars.map(pl => `
            <div class="pillar-card">
              <strong>${pl.title}</strong>
              <p>${pl.detail}</p>
            </div>
          `).join("")}
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
          ${s.featuredReels.slides.map((src, i) => `
            <div class="carousel-slide">
              <span class="slide-num">0${i + 1}</span>
              <img src="${src}" alt="Reel Thumbnail ${i + 1}" onerror="this.closest('.carousel-slide').style.display='none'">
            </div>
          `).join("")}
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
          ${s.colorSystem.swatches.map(c => `
            <div class="swatch-card">
              <div class="swatch-color" style="background:${c.hex}"></div>
              <div class="swatch-meta">
                <strong>${c.name}</strong>
                <code>${c.hex}</code>
                <span>RGB ${c.rgb}</span>
                <span>CMYK ${c.cmyk}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- PAGE 04: PACKAGING & STOREFRONT -->
      <section class="cs-block">
        <span class="cs-tag">${s.packaging.tag}</span>
        <h3>${s.packaging.heading}</h3>
        <p class="dialog-body">${s.packaging.description}</p>
        <div class="roam-gallery-3">
          ${s.packaging.items.map(item => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <!-- PAGE 05: POSTERS & COLLATERAL -->
      <section class="cs-block">
        <span class="cs-tag">${s.campaigns.tag}</span>
        <h3>${s.campaigns.heading}</h3>
        <p class="dialog-body">${s.campaigns.description}</p>
        <div class="roam-gallery-3">
          ${s.campaigns.items.map(item => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <!-- PAGE 06: EXTENDED GALLERY (FOR REMAINING 4 IMAGES) -->
      <section class="cs-block roam-extra-section">
        <span class="cs-tag">${s.extendedGallery.tag}</span>
        <h3>${s.extendedGallery.heading}</h3>
        <div class="roam-gallery-2">
          ${s.extendedGallery.items.map(item => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}" onerror="this.closest('figure').style.display='none'">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `).join("")}
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
          ${s.modules.steps.map(m => `
            <div class="pillar-card br-module-card">
              <div>
                <span class="cs-tag">${m.step}</span>
                <strong>${m.title}</strong>
                <p>${m.detail}</p>
              </div>
              <div class="br-tags">
                ${m.tags.map(t => `<span>${t}</span>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="cs-block">
        <span class="cs-tag">${s.designSystem.tag}</span>
        <h3>${s.designSystem.heading}</h3>
        <div class="pillars-grid">
          ${s.designSystem.principles.map(pr => `
            <div class="pillar-card" style="background:#fff;border:1px solid var(--line)">
              <strong>${pr.title}</strong>
              <p>${pr.detail}</p>
            </div>
          `).join("")}
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
          ${s.strategy.pillars.map(pl => `
            <div class="pillar-card" style="background:#fff;border:1px solid var(--line)">
              <strong>${pl.title}</strong>
              <p>${pl.detail}</p>
            </div>
          `).join("")}
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
          ${s.productLine.skus.map(sku => `
            <figure class="roam-frame">
              <img src="${sku.src}" alt="${sku.title}">
              <figcaption><strong>${sku.title}</strong><br>${sku.desc}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <!-- PAGE 04: OLFACTORY & BOTANICAL STILL LIFE -->
      <section class="cs-block">
        <span class="cs-tag">${s.sensory.tag}</span>
        <h3>${s.sensory.heading}</h3>
        <p class="dialog-body">${s.sensory.description}</p>
        <div class="roam-gallery-2">
          ${s.sensory.items.map(item => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}" style="aspect-ratio:4/5;object-fit:cover">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `).join("")}
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
          ${s.extendedGallery.items.map(item => `
            <figure class="roam-frame">
              <img src="${item.src}" alt="${item.caption}" onerror="this.closest('figure').style.display='none'">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `).join("")}
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

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".topbar nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("email-link").href = `mailto:${portfolio.email}`;
document.getElementById("email-link").innerHTML = `${portfolio.email} <span>↗</span>`;
document.getElementById("linkedin-link").href = portfolio.linkedin;
document.getElementById("instagram-link").href = portfolio.instagram;
document.querySelectorAll(".wordmark").forEach(mark => mark.innerHTML = `${portfolio.name.split(" ").map(word => word[0]).join("").slice(0,2).toUpperCase()}<span>✳</span>`);

renderProjects();

// INTERACTIVE CREATIVE JOURNEY CURVE
(() => {
  const stage = document.getElementById('journey-stage');
  const line = document.getElementById('journey-active-line');
  const marker = document.getElementById('journey-marker');
  const nodes = document.querySelectorAll('.journey-node');
  if (!stage || !line || !nodes.length) return;

  const totalLength = line.getTotalLength();
  line.style.strokeDasharray = totalLength;
  line.style.strokeDashoffset = totalLength; // starts hidden until scrolled into view

  function activateNode(node) {
    nodes.forEach(n => n.classList.remove('is-active'));
    node.classList.add('is-active');

    const progress = parseFloat(node.dataset.progress || '0.5');
    line.style.strokeDashoffset = totalLength * (1 - progress);

    if (marker) {
      marker.style.left = `${node.dataset.x}%`;
      marker.style.top = `${node.dataset.y}%`;
    }
  }

  nodes.forEach(node => {
    node.addEventListener('click', () => activateNode(node));
  });

  // Trigger smooth line draw when user scrolls to this section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const defaultNode = document.querySelector('.journey-node.is-active') || nodes[2];
        activateNode(defaultNode);
        observer.disconnect();
      }
    });
  }, { threshold: 0.35 });

  observer.observe(stage);
})();
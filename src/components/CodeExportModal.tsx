import React, { useState } from 'react';
import { Copy, Check, Download, Code, FileText, CheckCircle2 } from 'lucide-react';

export const CodeExportModal: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css'>('html');
  const [copied, setCopied] = useState(false);

  const sampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vaidehi Dhumal — Architectural Portfolio</title>
  <meta name="description" content="Architecture Graduate & Junior Architect. Selected works in healthcare wellness retreats, technical working drawings, joinery, and physical form studies." />
  <meta name="keywords" content="Vaidehi Dhumal, Architect, Architectural Portfolio, Working Drawings, BIM, Pune" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Mono&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
  
  <!-- Schema.org JSON-LD for Search Engine Optimization -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vaidehi Dhumal",
    "jobTitle": "Junior Architect",
    "worksFor": { "@type": "Organization", "name": "Yashoda Joshi Architects" },
    "alumniOf": { "@type": "EducationalOrganization", "name": "Marathwada Mitra Mandal's College of Architecture" },
    "email": "vaidehidhumal04@gmail.com",
    "telephone": "+918007019966"
  }
  </script>
</head>
<body class="light-theme">
  <!-- Top Navigation Bar -->
  <header class="header">
    <div class="header-container">
      <a href="#home" class="brand">VAIDEHI DHUMAL <span class="brand-sub">· ARCHITECT</span></a>
      <nav class="nav">
        <a href="#portfolio" class="nav-link">Portfolio</a>
        <a href="#resume" class="nav-link">Resume</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
      <div class="actions">
        <button id="theme-toggle" class="theme-btn" aria-label="Toggle theme">◐</button>
        <a href="#contact" class="btn btn-primary">Get in Touch</a>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="container">
        <div class="kicker">Architectural Portfolio · Selected Works 2020–2025 · Pune, India</div>
        <h1 class="headline">Versatile spatial design rooted in vernacular context & construction rigor.</h1>
        <p class="lead-text">
          Architecture graduate & Junior Architect at Yashoda Joshi Architects. Specializing in climate-responsive
          wellness retreats, technical working documentation, interior joinery, and physical model experimentation.
        </p>
        <div class="metrics-grid">
          <div class="metric-item"><div class="metric-num">04</div><div class="metric-label">Core Typologies</div></div>
          <div class="metric-item"><div class="metric-num">35+</div><div class="metric-label">Technical Drawings</div></div>
          <div class="metric-item"><div class="metric-num">MMCOA</div><div class="metric-label">B.Arch 2020–2025</div></div>
          <div class="metric-item"><div class="metric-num">YJA</div><div class="metric-label">Junior Architect</div></div>
        </div>
      </div>
    </section>

    <!-- Project Gallery with Filter System -->
    <section id="portfolio" class="portfolio-section">
      <div class="container">
        <div class="section-header">
          <h2>Selected Architectural Works</h2>
          <div class="filter-bar">
            <button class="filter-btn active" data-filter="all">All Works</button>
            <button class="filter-btn" data-filter="thesis">Thesis Retreat</button>
            <button class="filter-btn" data-filter="details">Working Drawings</button>
            <button class="filter-btn" data-filter="renovation">Adaptive Reuse</button>
            <button class="filter-btn" data-filter="models">Physical Models</button>
          </div>
        </div>

        <div class="portfolio-grid">
          <!-- 01: Visava Wellness Center -->
          <article class="project-card featured" data-category="thesis">
            <div class="card-media">
              <img src="assets/portfolio/p02.jpg" alt="Visava Wellness Center" />
              <div class="card-badge">20 Sheets</div>
            </div>
            <div class="card-body">
              <div class="card-meta">Thesis / Wellness & Hospitality · Diveagar, Maharashtra</div>
              <h3 class="card-title">Visava : The Wellness Center</h3>
              <p class="card-desc">Comprehensive coastal wellness sanctuary utilizing passive cooling, central courtyard daylighting, and exposed red brick vernacular architecture.</p>
              <div class="card-tools">Tools: AutoCAD · SketchUp · Enscape · Blue Moon AI</div>
            </div>
          </article>

          <!-- 02: Amravati Bungalow -->
          <article class="project-card" data-category="residential">
            <div class="card-media">
              <img src="assets/portfolio/p33.jpg" alt="Amravati Bungalow Renders" />
              <div class="card-badge">3 Sheets</div>
            </div>
            <div class="card-body">
              <div class="card-meta">Residential Planning & 3D · Amravati, Maharashtra</div>
              <h3 class="card-title">Amravati Bungalow</h3>
              <p class="card-desc">Multi-level contemporary bungalow featuring staggered cantilevered balconies, terracotta boundary accents, open terrace lounges, and detailed functional zoning.</p>
              <div class="card-tools">Tools: AutoCAD · SketchUp · Enscape 3D</div>
            </div>
          </article>

          <!-- 03: Swan Lake Apartment Renovation -->
          <article class="project-card" data-category="renovation">
            <div class="card-media">
              <img src="assets/portfolio/p40.jpg" alt="Swan Lake Flat Renovation" />
              <div class="card-badge">6 Sheets</div>
            </div>
            <div class="card-body">
              <div class="card-meta">Interior Renovation & Execution · Pune</div>
              <h3 class="card-title">Swan Lake Apartment Renovation</h3>
              <p class="card-desc">Full residential flat renovation with 1:25 sanitary details (Jaquar, Kajaria tiles), electrical switchboard layouts (SB 01 to 10), and completed site photos.</p>
              <div class="card-tools">Tools: AutoCAD · Electrical Layouts · Site Photos</div>
            </div>
          </article>

          <!-- 04: Krushnakunj Toilet Detailing -->
          <article class="project-card" data-category="details">
            <div class="card-media">
              <img src="assets/portfolio/p34.jpg" alt="Krushnakunj Toilet Working Drawing" />
              <div class="card-badge">2 Sheets</div>
            </div>
            <div class="card-body">
              <div class="card-meta">Sanitary Detailing · Yashoda Joshi Architects</div>
              <h3 class="card-title">Krushnakunj Toilet Detailing</h3>
              <p class="card-desc">Millimeter-precise 1:25 scale toilet layouts and cross sections specifying slope gradients, Kajaria salmon tile layout, and Parryware wall-hung sanitary ware.</p>
              <div class="card-tools">Tools: AutoCAD 1:25 · Plumbing Sections</div>
            </div>
          </article>

          <!-- 05: Kitchen Renovation & Balcony Metalwork -->
          <article class="project-card" data-category="details">
            <div class="card-media">
              <img src="assets/portfolio/p37.jpg" alt="Kitchen Renovation Site Photos" />
              <div class="card-badge">2 Sheets</div>
            </div>
            <div class="card-body">
              <div class="card-meta">Joinery & Metalwork · Maharashtra</div>
              <h3 class="card-title">Kitchen Renovation & Balcony Metalwork</h3>
              <p class="card-desc">Custom balcony MS grill door with integrated pleated aluminium mesh alongside completed site execution photos of a modern modular kitchen and custom cabinetry.</p>
              <div class="card-tools">Tools: Joinery Drawings · MS Fabrication · Site Supervision</div>
            </div>
          </article>

          <!-- 06: Kalashree Villa Details -->
          <article class="project-card" data-category="residential">
            <div class="card-media">
              <img src="assets/portfolio/p23.jpg" alt="Kalashree Railing Details" />
              <div class="card-badge">4 Sheets</div>
            </div>
            <div class="card-body">
              <div class="card-meta">Technical Details · Yashoda Joshi Architects</div>
              <h3 class="card-title">Kalashree Villa — Architectural Details</h3>
              <p class="card-desc">Millimeter-precise fabrication drawings for MS terrace railings, staircase construction, brick jali elevations, and urban streetscape 3D visualization.</p>
              <div class="card-tools">Tools: AutoCAD · Working Drawings · Site Supervision</div>
            </div>
          </article>

          <!-- 07: Vaishwik Arts Renovation -->
          <article class="project-card" data-category="renovation">
            <div class="card-media">
              <img src="assets/portfolio/p30.jpg" alt="Vaishwik Arts Gallery" />
              <div class="card-badge">4 Sheets</div>
            </div>
            <div class="card-body">
              <div class="card-meta">Adaptive Reuse · Pune</div>
              <h3 class="card-title">Vaishwik Arts & Environment</h3>
              <p class="card-desc">Commercial building retrofit into an art gallery, including structural demolition plans, external red steel elevator tower, and timber terrace canopy.</p>
              <div class="card-tools">Tools: AutoCAD · SketchUp · Sections</div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="resume-section">
      <div class="container">
        <h2>Curriculum Vitae</h2>
        <div class="resume-grid">
          <div class="resume-sidebar">
            <div class="info-block">
              <h3>Education</h3>
              <p><strong>B.Arch (2020 – 2025)</strong><br>Marathwada Mitra Mandal's College of Architecture (MMCOA), Pune</p>
            </div>
            <div class="info-block">
              <h3>Software Skills</h3>
              <p>AutoCAD · SketchUp · Revit (BIM) · Enscape · Blue Moon AI · Adobe Creative Suite · MS Office</p>
            </div>
            <div class="info-block">
              <h3>Core Competencies</h3>
              <p>Technical Drawings · Construction Docs · 3D Modeling · Space Planning · Material Selection · Site Coordination</p>
            </div>
            <a href="assets/Resume_b9b07854.pdf" class="btn btn-secondary" download>Download PDF Resume</a>
          </div>
          <div class="resume-content">
            <h3>Professional Experience</h3>
            <div class="experience-card">
              <div class="exp-title">Junior Architect — Yashoda Joshi Architects</div>
              <div class="exp-date">Present · Pune</div>
              <ul class="exp-list">
                <li>Residential renovation and toilet construction from foundation stage.</li>
                <li>Prepared technical documentation, architectural drawings, and 3D visualization.</li>
                <li>Conducted regular site visits and contractor coordination for material execution.</li>
                <li>Prepared quantity estimates, BOQs, and material calculations.</li>
              </ul>
            </div>
            <div class="experience-card">
              <div class="exp-title">Architectural Intern — Yashoda Joshi Architects</div>
              <div class="exp-date">June 2024 – November 2024</div>
              <ul class="exp-list">
                <li>Drafted architectural working drawings for Vaishwik Art Gallery and Kalashree Villa.</li>
                <li>Produced detailed joinery schedules, railings, and structural retrofit drawings.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section with Functional Email Form -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Let's Collaborate</h2>
            <p>Open to innovative architectural positions, spatial design collaborations, and technical drawing consultations.</p>
            <div class="contact-item"><strong>Email:</strong> vaidehidhumal04@gmail.com</div>
            <div class="contact-item"><strong>Phone:</strong> +91 8007019966</div>
            <div class="contact-item"><strong>Location:</strong> Pune, Maharashtra, India</div>
          </div>
          <form class="contact-form" action="mailto:vaidehidhumal04@gmail.com" method="POST" enctype="text/plain">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="Ar. Rajesh Mehta" />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="rajesh@studio.com" />
            </div>
            <div class="form-group">
              <label for="subject">Project Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="Residential Villa Design" />
            </div>
            <div class="form-group">
              <label for="message">Message & Specifications</label>
              <textarea id="message" name="message" rows="4" required placeholder="Describe your project typology, scope, and timeline..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Send Architectural Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-content">
      <div>© 2026 Vaidehi Dhumal · All architectural drawings and photographs copyright.</div>
      <div>Designed with minimalist precision.</div>
    </div>
  </footer>

  <!-- Theme Toggle & Filter JavaScript -->
  <script>
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  </script>
</body>
</html>`;

  const sampleCss = `/* ==========================================================================
   Vaidehi Dhumal — Architectural Minimalist CSS
   Domain: Architectural Portfolio & Grid Gallery
   Zero-pill discipline, crisp typographic hierarchy, responsive layout
   ========================================================================== */

:root {
  --font-display: 'Outfit', -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono: 'Space Mono', monospace;
  
  /* Light Theme Variables */
  --bg-primary: #fcfcfc;
  --bg-surface: #ffffff;
  --bg-muted: #f4f4f5;
  --border-color: #e4e4e7;
  --text-primary: #09090b;
  --text-secondary: #52525b;
  --text-muted: #71717a;
  --accent: #18181b;
  --accent-contrast: #ffffff;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.dark-theme {
  --bg-primary: #09090b;
  --bg-surface: #121215;
  --bg-muted: #18181b;
  --border-color: #27272a;
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  --accent: #f4f4f5;
  --accent-contrast: #09090b;
  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: var(--font-body);
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header & Top Bar Contract */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(var(--bg-primary), 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.brand {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  text-decoration: none;
  white-space: nowrap;
}

.brand-sub {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}

.nav {
  display: flex;
  gap: 1.75rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.15s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.theme-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.btn-primary {
  background-color: var(--accent);
  color: var(--accent-contrast);
  border: 1px solid transparent;
}

.btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-primary:hover {
  opacity: 0.9;
}

/* Hero Section */
.hero-section {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--border-color);
}

.kicker {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.headline {
  font-family: var(--font-display);
  font-size: 2.75rem;
  line-height: 1.15;
  font-weight: 700;
  max-width: 900px;
  margin-bottom: 1.5rem;
}

.lead-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 720px;
  line-height: 1.6;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.metric-num {
  font-family: var(--font-mono);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
}

.metric-label {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Portfolio Grid */
.portfolio-section {
  padding: 4rem 0;
}

.section-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.filter-bar {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.25rem;
}

.filter-btn {
  background: var(--bg-muted);
  border: none;
  color: var(--text-secondary);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.filter-btn.active {
  background: var(--accent);
  color: var(--accent-contrast);
  font-weight: 600;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  border-color: var(--text-muted);
  transform: translateY(-2px);
}

.card-media {
  position: relative;
  aspect-ratio: 16 / 10;
  background-color: var(--bg-muted);
  overflow: hidden;
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.project-card:hover .card-media img {
  transform: scale(1.03);
}

.card-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.card-body {
  padding: 1.5rem;
}

.card-meta {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.card-tools {
  font-size: 0.75rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border-color);
  padding-top: 0.75rem;
}

/* Resume & Contact Sections */
.resume-section, .contact-section {
  padding: 4rem 0;
  border-top: 1px solid var(--border-color);
}

.resume-grid, .contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-top: 2rem;
}

.info-block, .experience-card {
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.exp-title {
  font-weight: 700;
  font-size: 1rem;
}

.exp-date {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.exp-list {
  padding-left: 1.25rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: var(--bg-surface);
  padding: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.form-group label {
  display: block;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  color: var(--text-secondary);
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.75rem;
  background: var(--bg-muted);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.875rem;
}

.btn-block {
  width: 100%;
}

.footer {
  border-top: 1px solid var(--border-color);
  padding: 2rem 0;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 768px) {
  .headline { font-size: 2rem; }
  .resume-grid, .contact-grid { grid-template-columns: 1fr; }
  .nav { display: none; }
}
`;

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadHtml = () => {
    const fullBundle = `<!--
=============================================================================
  Vaidehi Dhumal — Architectural Portfolio & Resume
  Self-contained HTML5 & CSS3 Template
=============================================================================
-->
${sampleHtml}
`;
    const blob = new Blob([fullBundle], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vaidehi-dhumal-portfolio.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadCss = () => {
    const blob = new Blob([sampleCss], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'style.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6">
      {/* Header */}
      <div className="pb-6 border-b border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            <span>Developer Resource</span>
            <span aria-hidden="true">·</span>
            <span>Clean Standalone HTML & CSS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-neutral-900 dark:text-neutral-50">
            Source HTML & CSS Code
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
            Here is the complete, self-contained semantic HTML5 and modern CSS codebase for Vaidehi Dhumal's architectural website. Ready for deployment on GitHub Pages, Netlify, or any static host.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleDownloadHtml}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .html</span>
          </button>
          <button
            onClick={handleDownloadCss}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .css</span>
          </button>
        </div>
      </div>

      {/* Code Viewer Panel */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-neutral-100 overflow-hidden shadow-lg">
        {/* Sub Navigation Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800 bg-neutral-900/60">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveCodeTab('html')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                activeCodeTab === 'html'
                  ? 'bg-neutral-800 text-white border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              index.html
            </button>
            <button
              onClick={() => setActiveCodeTab('css')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                activeCodeTab === 'css'
                  ? 'bg-neutral-800 text-white border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              style.css
            </button>
          </div>

          <button
            onClick={() => handleCopyCode(activeCodeTab === 'html' ? sampleHtml : sampleCss)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy {activeCodeTab.toUpperCase()} Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Box */}
        <div className="p-4 sm:p-6 overflow-x-auto max-h-[600px] text-xs font-mono text-neutral-300 leading-relaxed">
          <pre className="whitespace-pre">
            {activeCodeTab === 'html' ? sampleHtml : sampleCss}
          </pre>
        </div>
      </div>
    </div>
  );
};

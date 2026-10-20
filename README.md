* {
  box-sizing: border-box;
}

:root {
  --bg: #07141f;
  --bg-soft: #0d1e2a;
  --panel: rgba(12, 23, 32, 0.92);
  --panel-alt: rgba(19, 30, 41, 0.95);
  --line: rgba(143, 169, 190, 0.2);
  --text: #edf5ff;
  --muted: #9bb0c2;
  --primary: #66d9ef;
  --primary-strong: #24b7d8;
  --accent: #b1ffad;
  --warning: #ffd979;
  --danger: #ff8b8b;
  --shadow: rgba(9, 14, 18, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(102, 217, 239, 0.15), transparent 32%),
    linear-gradient(180deg, #040d16 0%, #081922 100%);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

button {
  font: inherit;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px 64px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px 0 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #7ed0ff);
  color: #01223a;
  font-weight: 800;
}

.brand h1,
.hero-copy h2,
.section-heading h3 {
  margin: 0;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 11px;
  font-weight: 700;
}

.eyebrow.alt {
  color: var(--accent);
}

.nav {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 600;
}

.hero {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 28px;
  align-items: center;
  margin-top: 12px;
}

.hero-copy {
  background: rgba(7, 20, 31, 0.65);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: clamp(24px, 4vw, 42px);
  box-shadow: var(--shadow) 0 12px 40px;
}

.kicker {
  margin: 0 0 10px;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 11px;
  font-weight: 800;
}

.hero-copy h2 {
  max-width: 620px;
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.05;
}

.lede {
  margin: 18px 0 0;
  max-width: 620px;
  color: var(--muted);
  font-size: 1.04rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 26px;
}

.primary-btn,
.secondary-btn,
.filter-btn {
  border: none;
  border-radius: 999px;
  padding: 12px 18px;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #032433;
  font-weight: 700;
}

.secondary-btn {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--text);
}

.primary-btn:hover,
.secondary-btn:hover,
.filter-btn:hover {
  transform: translateY(-1px);
}

.hero-panel,
.panel,
.stat-card,
.bill-card {
  background: rgba(9, 20, 29, 0.82);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow) 0 14px 32px;
}

.hero-panel {
  padding: 24px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  color: var(--muted);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}

.status-pill.positive {
  background: rgba(177, 255, 173, 0.12);
  color: var(--accent);
}

.snapshot-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;
}

.snapshot-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid var(--line);
}

.label {
  color: var(--muted);
}

.snapshot-list strong {
  font-size: 1.35rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 28px;
}

.stat-card {
  padding: 22px 20px;
}

.stat-card.accent {
  background: linear-gradient(135deg, rgba(102, 217, 239, 0.17), rgba(9, 20, 29, 0.82));
}

.stat-label {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.stat-card strong {
  display: block;
  margin-top: 10px;
  font-size: clamp(2rem, 2vw, 2.5rem);
}

.stat-card small {
  display: block;
  margin-top: 10px;
  color: var(--muted);
  line-height: 1.5;
}

.tracker-section {
  margin-top: 42px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  margin-bottom: 18px;
}

.section-heading.compact {
  align-items: center;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--muted);
}

.filter-btn.active {
  background: rgba(102, 217, 239, 0.14);
  border-color: rgba(102, 217, 239, 0.38);
  color: var(--text);
}

.bill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.bill-card {
  padding: 22px;
}

.card-topline {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-bottom: 14px;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(102, 217, 239, 0.12);
  color: var(--primary);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.chip {
  display: inline-flex;
  padding: 6px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.chip.high {
  background: rgba(255, 139, 139, 0.1);
  color: #ffb0b0;
}

.chip.medium {
  background: rgba(255, 217, 121, 0.1);
  color: #ffd876;
}

.chip.low {
  background: rgba(177, 255, 173, 0.12);
  color: #c7ffbe;
}

.bill-card h4 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  line-height: 1.35;
}

.bill-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.9rem;
}

.split-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
  margin-top: 42px;
}

.panel {
  padding: 22px;
}

.agenda-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;
}

.agenda-list li {
  display: grid;
  grid-template-columns: 12px 1fr;
  gap: 14px;
  align-items: start;
}

.timeline-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 0 0 6px rgba(102, 217, 239, 0.09);
  margin-top: 9px;
}

.agenda-list h4 {
  margin: 0 0 8px;
  font-size: 1.1rem;
}

.agenda-list p,
.committee-item small {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.committee-list {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.committee-item {
  display: grid;
  gap: 8px;
  padding: 18px 16px;
  background: rgba(14, 24, 33, 0.8);
  border: 1px solid var(--line);
  border-radius: 16px;
}

.committee-item strong {
  font-size: 1.02rem;
}

@media (max-width: 900px) {
  .hero,
  .split-layout,
  .bill-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .topbar,
  .section-heading {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .page-shell {
    padding-left: 16px;
    padding-right: 16px;
  }

  .nav {
    gap: 12px;
  }

  .card-meta {
    flex-direction: column;
  }
}

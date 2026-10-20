* {
  box-sizing: border-box;
}

:root {
  --bg: #07141f;
  --bg-soft: #0d1e2a;
  --panel: rgba(10, 21, 30, 0.88);
  --panel-alt: rgba(15, 27, 39, 0.92);
  --line: rgba(150, 177, 195, 0.1);
  --text: #edf5ff;
  --muted: #9ab1c2;
  --primary: #66d9ef;
  --primary-strong: #2eb7d8;
  --accent: #b9f7b2;
  --warning: #ffd979;
  --danger: #ff8a8a;
  --shadow: rgba(3, 8, 12, 0.42);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(102, 217, 239, 0.15), transparent 30%),
    linear-gradient(180deg, #040d13 0%, #091b28 100%);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

button {
  font: inherit;
}

.dashboard-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 22px 64px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding-bottom: 24px;
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
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), #8ad5ff);
  color: #02263d;
  font-weight: 800;
}

.brand h1,
.hero-copy h2,
.section-heading h3,
.bill-card h4,
.policy-card h4,
.committee-card h4,
.agenda-list h4 {
  margin: 0;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--primary);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.eyebrow.alt {
  color: var(--accent);
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 600;
}

.hero {
  display: grid;
  grid-template-columns: 1.4fr 0.75fr;
  gap: 24px;
  margin-top: 10px;
}

.hero-copy,
.hero-panel,
.panel,
.bid-card,
.stat-card,
.bill-card,
.policy-card,
.committee-card {
  border: 1px solid var(--line);
  background: rgba(10, 20, 30, 0.8);
  border-radius: 24px;
  box-shadow: var(--shadow) 0 14px 28px;
}

.hero-copy {
  padding: clamp(24px, 4vw, 42px);
}

.kicker {
  margin: 0 0 12px;
  color: var(--primary);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 800;
}

.hero-copy h2 {
  max-width: 700px;
  font-size: clamp(2.3rem, 4vw, 4rem);
  line-height: 1.05;
}

.lede {
  margin: 18px 0 0;
  color: var(--muted);
  max-width: 650px;
  font-size: 1.04rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.primary-btn,
.secondary-btn,
.filter-btn {
  border: none;
  border-radius: 999px;
  padding: 12px 18px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #052737;
  font-weight: 700;
}

.secondary-btn {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--line);
}

.primary-btn:hover,
.secondary-btn:hover,
.filter-btn:hover {
  transform: translateY(-1px);
}

.hero-panel {
  padding: 22px 20px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  margin-bottom: 10px;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.status-pill.positive {
  background: rgba(185, 247, 178, 0.12);
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
  padding-top: 14px;
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
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
  margin-top: 28px;
}

.stat-card {
  padding: 20px 18px;
}

.stat-card.accent {
  background: linear-gradient(135deg, rgba(102, 217, 239, 0.12), rgba(10, 20, 30, 0.88));
}

.stat-label {
  display: block;
  color: var(--muted);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.stat-card strong {
  display: block;
  margin-top: 10px;
  font-size: clamp(1.7rem, 2vw, 2.3rem);
}

.stat-card small {
  display: block;
  margin-top: 10px;
  color: var(--muted);
  line-height: 1.5;
}

.tracker-section,
.committees-section {
  margin-top: 42px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
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
  color: var(--muted);
  border: 1px solid var(--line);
}

.filter-btn.active {
  background: rgba(102, 217, 239, 0.12);
  border-color: rgba(102, 217, 239, 0.32);
  color: var(--text);
}

.bill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.bill-card {
  padding: 22px;
}

.card-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.tag,
.policy-tag {
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
  background: rgba(255, 138, 138, 0.12);
  color: #ffb1b1;
}

.chip.medium {
  background: rgba(255, 217, 121, 0.12);
  color: #ffd472;
}

.chip.low {
  background: rgba(185, 247, 178, 0.1);
  color: #ccefc0;
}

.bill-card h4 {
  font-size: 1.2rem;
  line-height: 1.35;
  margin-bottom: 12px;
}

.bill-card p,
.policy-card p,
.committee-card p,
.agenda-list p,
.watch-item,
.committee-item small {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.9rem;
}

.two-column-layout,
.bottom-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 20px;
  margin-top: 42px;
}

.policy-grid,
.committee-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.policy-card,
.committee-card {
  padding: 18px 18px 20px;
}

.policy-card h4,
.committee-card h4 {
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 1.08rem;
}

.chamber-list {
  display: grid;
  gap: 16px;
  margin-top: 16px;
}

.chamber-row {
  display: grid;
  gap: 10px;
}

.chamber-row > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}

.mini-label {
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.meter {
  height: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 999px;
  overflow: hidden;
}

.meter span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), var(--accent));
}

.committee-card {
  min-height: 180px;
}

.agenda-list {
  list-style: none;
  padding: 0;
  margin: 0;
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
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 0 0 6px rgba(102, 217, 239, 0.08);
  margin-top: 8px;
}

.watch-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.watch-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
  background: rgba(15, 27, 39, 0.85);
  border: 1px solid var(--line);
  border-radius: 14px;
}

.watch-state {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.watch-state.live {
  background: rgba(185, 247, 178, 0.12);
  color: var(--accent);
}

.watch-state.pending {
  background: rgba(255, 217, 121, 0.12);
  color: var(--warning);
}

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .bill-grid,
  .policy-grid,
  .committee-grid,
  .two-column-layout,
  .bottom-grid,
  .hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .topbar,
  .section-heading {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .dashboard-shell {
    padding-left: 16px;
    padding-right: 16px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .card-meta,
  .watch-item,
  .chamber-row > div:first-child {
    flex-direction: column;
    align-items: flex-start;
  }
}

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Congress Pulse Dashboard</title>
    <meta
      name="description"
      content="Congress Pulse is a comprehensive congressional dashboard covering bills, votes, committees, agenda, oversight, and policy priorities."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./src/styles.css" />
  </head>
  <body>
    <div class="dashboard-shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">C</div>
          <div>
            <p class="eyebrow">National legislative command</p>
            <h1>Congress Pulse</h1>
          </div>
        </div>
        <nav class="nav" aria-label="Main navigation">
          <a href="#tracker">Tracker</a>
          <a href="#issues">Policy</a>
          <a href="#committees">Committees</a>
          <a href="#calendar">Calendar</a>
        </nav>
      </header>

      <main>
        <section class="hero">
          <div class="hero-copy">
            <p class="kicker">Congress at a glance</p>
            <h2>Everything shaping the federal agenda—from bills to budgets to oversight.</h2>
            <p class="lede">
              Monitor the legislative engine of the United States: floor activity, committee hearings,
              chamber strategy, voting dynamics, and the policy areas driving the national conversation.
            </p>
            <div class="hero-actions">
              <button class="primary-btn">Open legislative tracker</button>
              <button class="secondary-btn">Review committee watch</button>
            </div>
          </div>

          <aside class="hero-panel">
            <div class="panel-header">
              <span>Current session snapshot</span>
              <span class="status-pill positive">Activity high</span>
            </div>
            <ul class="snapshot-list">
              <li><span class="label">Active bills</span><strong>148</strong></li>
              <li><span class="label">Committee hearings</span><strong>31</strong></li>
              <li><span class="label">Scheduled votes</span><strong>12</strong></li>
              <li><span class="label">Oversight probes</span><strong>8</strong></li>
            </ul>
          </aside>
        </section>

        <section class="stats-grid" aria-label="Congress summary metrics">
          <article class="stat-card accent">
            <span class="stat-label">Legislative momentum</span>
            <strong>84%</strong>
            <small>Legislation moving in committee or negotiation.</small>
          </article>
          <article class="stat-card">
            <span class="stat-label">Floor votes</span>
            <strong>84</strong>
            <small>Votes cast so far in this session.</small>
          </article>
          <article class="stat-card">
            <span class="stat-label">Budget watch</span>
            <strong>$1.8T</strong>
            <small>Budget and appropriations in active review.</small>
          </article>
          <article class="stat-card">
            <span class="stat-label">Public attention</span>
            <strong>7.6</strong>
            <small>Average issue salience across major policy priorities.</small>
          </article>
          <article class="stat-card">
            <span class="stat-label">Committee workload</span>
            <strong>23</strong>
            <small>Hearings and markups operating concurrently.</small>
          </article>
          <article class="stat-card">
            <span class="stat-label">Leadership agenda</span>
            <strong>11</strong>
            <small>Priority initiatives led by chamber leadership.</small>
          </article>
        </section>

        <section id="tracker" class="tracker-section">
          <div class="section-heading">
            <div>
              <p class="eyebrow alt">Legislative tracker</p>
              <h3>Priority measures before Congress</h3>
            </div>
            <div class="filters" aria-label="Filter bill tracker">
              <button class="filter-btn active" data-filter="all">All</button>
              <button class="filter-btn" data-filter="House">House</button>
              <button class="filter-btn" data-filter="Senate">Senate</button>
              <button class="filter-btn" data-filter="Committee">Committee</button>
            </div>
          </div>
          <div id="bill-list" class="bill-grid" aria-live="polite"></div>
        </section>

        <section id="issues" class="two-column-layout">
          <div class="panel">
            <div class="section-heading compact">
              <div>
                <p class="eyebrow alt">Policy outlook</p>
                <h3>Issue priorities</h3>
              </div>
            </div>
            <div class="policy-grid">
              <article class="policy-card">
                <span class="policy-tag">Economy</span>
                <h4>Tax and fiscal strategy</h4>
                <p>Extending incentives, improving supply chain planning, and refining tax administration.</p>
              </article>
              <article class="policy-card">
                <span class="policy-tag">Energy</span>
                <h4>Grid modernization</h4>
                <p>Resilience investment, permitting reform, and clean-energy incentives remain central.</p>
              </article>
              <article class="policy-card">
                <span class="policy-tag">Health</span>
                <h4>Healthcare access</h4>
                <p>Rural provider support, affordability reforms, and maternal health remain active.</p>
              </article>
              <article class="policy-card">
                <span class="policy-tag">Security</span>
                <h4>National defense</h4>
                <p>Appropriations, industrial readiness, and cybersecurity oversight drive annual pacing.</p>
              </article>
            </div>
          </div>

          <div class="panel">
            <div class="section-heading compact">
              <div>
                <p class="eyebrow alt">Chamber balance</p>
                <h3>Leadership and voting dynamics</h3>
              </div>
            </div>
            <div class="chamber-list">
              <div class="chamber-row">
                <div>
                  <span class="mini-label">House</span>
                  <strong>220 / 215</strong>
                </div>
                <div class="meter"><span style="width: 62%"></span></div>
              </div>
              <div class="chamber-row">
                <div>
                  <span class="mini-label">Senate</span>
                  <strong>51 / 49</strong>
                </div>
                <div class="meter"><span style="width: 51%"></span></div>
              </div>
              <div class="chamber-row">
                <div>
                  <span class="mini-label">Committee alignment</span>
                  <strong>73%</strong>
                </div>
                <div class="meter"><span style="width: 73%"></span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="committees" class="committees-section">
          <div class="section-heading">
            <div>
              <p class="eyebrow alt">Committee watch</p>
              <h3>Where the action is happening</h3>
            </div>
          </div>
          <div class="committee-grid">
            <article class="committee-card">
              <span class="tag">Appropriations</span>
              <h4>Funding package negotiations</h4>
              <p>Discrete appropriations measures continue to move through supplemental review.</p>
            </article>
            <article class="committee-card">
              <span class="tag">Judiciary</span>
              <h4>Rulemaking and oversight</h4>
              <p>Agency accountability hearings remain central to legal and regulatory reform.</p>
            </article>
            <article class="committee-card">
              <span class="tag">Energy</span>
              <h4>Infrastructure and resilience</h4>
              <p>Transmission projects and climate adaptation remain high-priority investments.</p>
            </article>
            <article class="committee-card">
              <span class="tag">Finance</span>
              <h4>Tax administration</h4>
              <p>Budget reconciliation and tax-code updates remain under intense congressional review.</p>
            </article>
          </div>
        </section>

        <section id="calendar" class="bottom-grid">
          <div class="panel">
            <div class="section-heading compact">
              <div>
                <p class="eyebrow alt">Congressional calendar</p>
                <h3>Upcoming floor and hearing schedule</h3>
              </div>
            </div>
            <ul class="agenda-list">
              <li>
                <span class="timeline-dot"></span>
                <div>
                  <h4>Tuesday — Infrastructure markup</h4>
                  <p>Senate committee reviews final amendments and appropriations language.</p>
                </div>
              </li>
              <li>
                <span class="timeline-dot"></span>
                <div>
                  <h4>Wednesday — Budget conference</h4>
                  <p>House and Senate negotiators reconcile top-line spending benchmarks.</p>
                </div>
              </li>
              <li>
                <span class="timeline-dot"></span>
                <div>
                  <h4>Thursday — AI oversight hearing</h4>
                  <p>Committee examines privacy, security, and governance standards.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="panel">
            <div class="section-heading compact">
              <div>
                <p class="eyebrow alt">Oversight & reform</p>
                <h3>Watch list</h3>
              </div>
            </div>
            <div class="watch-list">
              <div class="watch-item">
                <span class="watch-title">Federal agency review</span>
                <span class="watch-state live">Active</span>
              </div>
              <div class="watch-item">
                <span class="watch-title">Procurement reform</span>
                <span class="watch-state pending">Pending</span>
              </div>
              <div class="watch-item">
                <span class="watch-title">Election integrity measures</span>
                <span class="watch-state pending">Pending</span>
              </div>
              <div class="watch-item">
                <span class="watch-title">Cybersecurity modernization</span>
                <span class="watch-state live">Active</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

    <script type="module" src="./src/main.js"></script>
  </body>
</html>

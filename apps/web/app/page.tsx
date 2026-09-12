import { BrandMark, GitHubIcon, OrbitGlyph } from "@five-orchestrators/ui";

const phases = ["Explore", "Design", "Build", "Verify", "Ship"];

const principles = [
  {
    number: "01",
    title: "Think in systems.",
    body: "We look past the prompt to find the architecture, constraints, and leverage that make the whole product stronger."
  },
  {
    number: "02",
    title: "Build in the open.",
    body: "Decisions become visible artifacts. Code, context, and progress stay reviewable from the first commit to the final release."
  },
  {
    number: "03",
    title: "Ship with evidence.",
    body: "A strong idea is only the start. We verify the work, measure the result, and leave a foundation the next build can trust."
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Five.Ochstrators home">
          <BrandMark />
          <span>Five.Ochstrators</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#system">System</a>
          <a href="#principles">Principles</a>
          <a href="https://github.com/FiveOchestrators" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero grid-surface" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-brand"><BrandMark /></div>
        <h1>Five.Ochstrators</h1>
        <p className="hero-copy">
          We strive for strong AI Native Development on the top of the right foundation
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="https://github.com/FiveOchestrators" target="_blank" rel="noreferrer">
            Explore our GitHub <GitHubIcon />
          </a>
          <a className="text-link" href="#system">See how we build <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="phase-strip" aria-label="Our development phases">
        {phases.map((phase, index) => (
          <div className="phase" key={phase}>
            <span>0{index + 1}</span>
            <strong>{phase}</strong>
          </div>
        ))}
      </section>

      <section className="system-section grid-surface" id="system">
        <div className="section-heading">
          <h2>Built to move from ambiguity to shipped software.</h2>
          <p>Every perspective stays distinct. Every decision moves toward the same outcome.</p>
        </div>

        <div className="orchestration-card">
          <div className="orbit-map" aria-label="Five disciplines converging into one shipped outcome">
            <OrbitGlyph />
            {phases.map((phase, index) => (
              <div className={`orbit-node node-${index + 1}`} key={phase}>
                <span>0{index + 1}</span>{phase}
              </div>
            ))}
            <div className="core">
              <BrandMark compact />
              <span>SHIP</span>
            </div>
          </div>
        </div>
      </section>

      <section className="principles-section" id="principles">
        <div className="section-heading compact-heading">
          <p className="kicker">OUR FOUNDATION</p>
          <h2>Strong AI-native development starts with the right foundation.</h2>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing grid-surface">
        <div className="closing-mark"><BrandMark compact /></div>
        <p>Five.Ochstrators</p>
        <h2>Bring the hard problem.<br />We’ll build the way through.</h2>
        <a className="button button-primary" href="https://github.com/FiveOchestrators" target="_blank" rel="noreferrer">
          Meet us on GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-layout">
          <nav className="footer-column" aria-label="Our process">
            <h2>OUR PROCESS</h2>
            <ul>{phases.map((phase) => <li key={phase}><a href="#system">{phase}</a></li>)}</ul>
          </nav>
          <nav className="footer-column" aria-label="Our foundation">
            <h2>FOUNDATION</h2>
            <ul>
              <li><a href="#principles">Think in systems</a></li>
              <li><a href="#principles">Build in the open</a></li>
              <li><a href="#principles">Ship with evidence</a></li>
            </ul>
          </nav>
          <nav className="footer-column" aria-label="Resources">
            <h2>RESOURCES</h2>
            <ul>
              <li><a href="https://github.com/FiveOchestrators/five.ochestrators">Source code ↗</a></li>
              <li><a href="https://github.com/FiveOchestrators/five.ochestrators#readme">Readme ↗</a></li>
              <li><a href="https://github.com/FiveOchestrators/five.ochestrators/issues">Issues ↗</a></li>
            </ul>
          </nav>
          <div className="footer-column footer-company">
            <h2>FIVE.OCHSTRATORS</h2>
            <div className="footer-company-content">
              <a className="footer-company-link" href="https://github.com/FiveOchestrators">Our team ↗</a>
              <a className="button button-primary" href="https://github.com/FiveOchestrators">Explore GitHub <GitHubIcon /></a>
              <a className="footer-back" href="#top">Back to top ↑</a>
              <a className="footer-contact" href="mailto:junwonkim04@outlook.com">Contact Email:<br />junwonkim04@outlook.com</a>
              <div className="footer-meta"><p>Seoul, South Korea</p><p>© {new Date().getFullYear()} Five.Ochstrators</p></div>
            </div>
          </div>
          <a className="footer-wordmark" href="#top" aria-label="Five.Ochstrators home"><BrandMark /><span>Five.Ochstrators</span></a>
        </div>
      </footer>
    </main>
  );
}

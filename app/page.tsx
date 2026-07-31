const transcript =
  "People don’t need another course. They need to leave Friday with the page live, the offer clear, and a system they can repeat.";

const outcomes = [
  {
    title: "Clarify the promise",
    body: "Find the sentence your audience can repeat.",
  },
  {
    title: "Shape the page",
    body: "Turn the strongest signal into a readable offer.",
  },
  {
    title: "Leave with momentum",
    body: "Publish the page and keep a repeatable structure.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-mark" aria-hidden="true" />
      <span>DIGITAL ALCHEMY</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a
          className="brand-link"
          href="https://digitalalchemy.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Digital Alchemy website"
        >
          <Brand />
        </a>
        <div className="nav-actions">
          <span className="nav-label">TRANSCRIPT TO PAGE</span>
          <a
            className="nav-cta"
            href="https://beacons.ai/dbcreations"
            target="_blank"
            rel="noreferrer"
          >
            Explore Digital Alchemy
          </a>
        </div>
      </header>

      <section className="hero shell" aria-labelledby="hero-heading">
        <div className="hero-copy reveal">
          <h1 id="hero-heading">
            One rough conversation.
            <span>One clear offer.</span>
          </h1>
          <p>
            A fictional transcript became this focused landing page in one pass.
          </p>
          <a className="primary-button" href="#transformation">
            See the transformation
            <ArrowIcon />
          </a>
          <div className="process-line" aria-label="Transformation process">
            <span>Raw voice</span>
            <span className="process-arrow" aria-hidden="true">→</span>
            <span>Offer signal</span>
            <span className="process-arrow" aria-hidden="true">→</span>
            <span>Launch-ready page</span>
          </div>
        </div>

        <div className="paper-wrap reveal reveal-delay">
          <article className="transcript-paper" aria-label="Fictional transcript excerpt">
            <span className="paper-clip" aria-hidden="true" />
            <div className="paper-heading">
              <span>FICTIONAL TRANSCRIPT</span>
              <span>08:42</span>
            </div>
            <blockquote>{transcript}</blockquote>
          </article>
        </div>
      </section>

      <section className="transformation shell" id="transformation" aria-labelledby="transformation-heading">
        <div className="section-heading">
          <span className="section-number">01</span>
          <h2 id="transformation-heading">The sentence was already in there.</h2>
        </div>

        <div className="transformation-grid">
          <article className="transform-step raw-step">
            <div className="step-label"><span>01</span> RAW VOICE</div>
            <blockquote>{transcript}</blockquote>
          </article>

          <div className="step-connector" aria-hidden="true"><ArrowIcon /></div>

          <article className="transform-step signal-step">
            <div className="step-label"><span>02</span> OFFER SIGNAL</div>
            <dl>
              <div><dt>Promise</dt><dd>Leave with a live page.</dd></div>
              <div><dt>Difference</dt><dd>Build it in the room.</dd></div>
              <div><dt>Repeatability</dt><dd>Reuse the system.</dd></div>
            </dl>
          </article>

          <div className="step-connector blue" aria-hidden="true"><ArrowIcon /></div>

          <article className="transform-step final-step">
            <div className="step-label"><span>03</span> FINAL PAGE</div>
            <h3>The Live Offer Lab</h3>
            <p>
              A 90-minute working session to turn the idea you keep explaining
              into a page people can act on.
            </p>
            <a href="#offer">View the sample offer <ArrowIcon /></a>
          </article>
        </div>
        <p className="demo-note">Live demo built from a fictional sample transcript.</p>
      </section>

      <section className="offer shell" id="offer" aria-labelledby="offer-heading">
        <div className="duration" aria-label="90 minutes">
          <span className="duration-number">90</span>
          <span className="duration-label">MINUTES</span>
        </div>

        <div className="offer-content">
          <h2 id="offer-heading">The Live Offer Lab</h2>
          <p className="offer-intro">
            A 90-minute working session to turn the idea you keep explaining
            into a page people can act on.
          </p>
          <ol className="outcome-list">
            {outcomes.map((outcome, index) => (
              <li key={outcome.title}>
                <span className="outcome-number">0{index + 1}</span>
                <div>
                  <h3>{outcome.title}</h3>
                  <p>{outcome.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="next-step shell" aria-label="Next steps">
        <a
          className="large-cta"
          href="https://beacons.ai/dbcreations"
          target="_blank"
          rel="noreferrer"
        >
          Explore Digital Alchemy
          <ArrowIcon />
        </a>
        <div className="distribution-note">
          <span>OPTIONAL DISTRIBUTION</span>
          <p>
            Send an approved finished page through{" "}
            <a href="https://drop.digitalalchemy.dev" target="_blank" rel="noreferrer">
              Content Drop
            </a>{" "}
            to create channel-specific launch assets.
          </p>
        </div>
      </section>

      <footer className="site-footer shell">
        <Brand />
        <span>TRANSCRIPT TO PAGE / LIVE DEMO</span>
        <span>Built from a fictional sample transcript for demonstration.</span>
      </footer>
    </main>
  );
}

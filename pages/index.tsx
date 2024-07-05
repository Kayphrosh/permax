export default function Home() {
  return (
    <div className="hero-container">
      <header className="header">
        <div>
          <div className="logo">
            {' '}
            <img src="./images/logo.svg" alt="Permax Illustration" />
          </div>
          <a
            href="https://permax-app.netlify.app"
            target="_blank"
            rel="noopener"
          >
            <button>Launch App</button>
          </a>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <span>Built on Fraxtal</span>
          <h1>Perpetual Trading Platform with Multi-Collateral Support</h1>
          <p>
            The Perpetual Trading Platform with Multi-Collateral Support offers
            a versatile and robust trading environment.
          </p>
          <div className="cta">
            <a
              href="https://permax-app.netlify.app"
              target="_blank"
              rel="noopener"
            >
              <button>Launch App</button>
            </a>
            <button className="secondary">Learn More</button>
          </div>
        </div>

        <div className="illustration">
          <img src="./images/hero-illustration.svg" alt="Permax Illustration" />
        </div>
      </main>
    </div>
  );
}

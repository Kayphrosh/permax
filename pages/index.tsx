import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="hero-container">
      <header className="header">
        <div>
          <div className="logo">
            {' '}
            <img
              src="./images/logo.svg"
              alt="Permax Illustration"
            />
          </div>
          <button>Launch App</button>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <span>Built on Fracs</span>
          <h1>
            Perpetual futures strategies built on concentrated liquidity pools
          </h1>
          <p>
            With intuitive interfaces and powerful tools, stay organised and in
            control effortlessly. Experience seamless property management like
            never before, tailored.
          </p>
          <div className="cta">
            <button>Launch App</button>
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

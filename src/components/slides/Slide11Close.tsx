import { useEffect, useState } from 'react';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide11Close({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>

      {/* Full bleed image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/images/shopify-mockup.avif"
          alt="Result"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(25%) brightness(0.85)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(232,230,230,0.97) 40%, rgba(232,230,230,0.5) 100%)' }} />
      </div>

      {/* Top nav bar */}
      <div style={{ padding: '28px 60px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div className="label-text">11 / 11 — THE DECISION</div>
        <div className="label-text">BRAND IDENTITY PRESENTATION</div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '60px', position: 'relative', zIndex: 2, maxWidth: '680px' }}>

        <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '24px' }}>
          <span className="tag-pill">THE BOTTOM LINE</span>
        </div>

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-200' : ''}`} style={{ marginBottom: '32px' }}>
          <div className="headline-lg" style={{ fontWeight: 200 }}>
            You don't have to choose between
          </div>
          <div className="headline-lg" style={{ fontWeight: 200, fontStyle: 'italic' }}>
            branding and a website.
          </div>
        </div>

        <div style={{ width: '48px', height: '1px', background: 'var(--text-light)', marginBottom: '32px' }}
          className={`opacity-0 ${visible ? 'animate-fade-up delay-300' : ''}`}
        />

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-400' : ''}`} style={{ marginBottom: '40px' }}>
          <div className="headline-md" style={{ fontWeight: 500 }}>
            One builds the other.
          </div>
        </div>

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-500' : ''}`} style={{ marginBottom: '48px' }}>
          <p className="body-text" style={{ maxWidth: '500px' }}>
            The brand system is not an add-on to the website. It <em>is</em> the foundation the website is built on.
            Every element of the Shopify theme — colors, type, layout, image style — needs to come from somewhere.
          </p>
          <br />
          <p className="body-text" style={{ maxWidth: '500px' }}>
            We can either define that together, strategically, before we build — or discover the gaps during every revision round.
          </p>
        </div>

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-600' : ''}`} style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ border: '1px solid var(--text)', padding: '14px 32px', cursor: 'pointer' }}>
            <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)' }}>
              Start with the Full Package →
            </span>
          </div>
          <p className="caption-text" style={{ fontStyle: 'italic' }}>I'm ready when you are.</p>
        </div>
      </div>

      {/* Bottom right — large ghost text */}
      <div style={{ position: 'absolute', bottom: '50px', right: '60px', zIndex: 1, opacity: 0.04, textAlign: 'right' }}>
        <div style={{ fontSize: 'clamp(60px, 8vw, 120px)', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>BRAND</div>
        <div style={{ fontSize: 'clamp(60px, 8vw, 120px)', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>FIRST.</div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="© 2025 — CONFIDENTIAL" />
    </div>
  );
}

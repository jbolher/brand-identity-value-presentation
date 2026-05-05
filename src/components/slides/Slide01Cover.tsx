import { useEffect, useState } from 'react';
import SlideFooter from '../SlideFooter';

export default function Slide01Cover() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      {/* Full bleed image - right side */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '42%',
        height: '100%',
        overflow: 'hidden',
      }}>
        <img
          src="/images/cover-editorial.webp"
          alt="Editorial"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg) 0%, transparent 20%)' }} />
      </div>

      {/* Top bar */}
      <div style={{ padding: '28px 60px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div className="label-text">CONFIDENTIAL — CLIENT PRESENTATION</div>
        <div className="label-text">BRAND STRATEGY · 2025</div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', position: 'relative', zIndex: 2, maxWidth: '65%' }}>

        {/* Eyebrow */}
        <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '32px' }}>
          <span className="tag-pill">PREPARED FOR</span>
        </div>

        {/* Main headline */}
        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-200' : ''}`} style={{ marginBottom: '16px' }}>
          <div className="headline-xl" style={{ fontWeight: 200 }}>
            Why Brand
          </div>
          <div className="headline-xl" style={{ fontStyle: 'italic', fontWeight: 200 }}>
            Identity
          </div>
          <div className="headline-xl" style={{ fontWeight: 200 }}>
            Matters.
          </div>
        </div>

        {/* Divider */}
        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-300' : ''}`} style={{ width: '48px', height: '1px', background: 'var(--text-light)', margin: '28px 0' }} />

        {/* Subtext */}
        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-400' : ''}`} style={{ maxWidth: '460px' }}>
          <p className="body-text">
            A reframe on what brand identity actually is — and why it's the most strategic decision you'll make before your website goes live.
          </p>
        </div>

        {/* Tags */}
        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-500' : ''}`} style={{ display: 'flex', gap: '10px', marginTop: '40px', flexWrap: 'wrap' }}>
          {['Branding Essentials', 'Shopify Redesign', 'Brand Strategy'].map(tag => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>

      {/* Slide number - large */}
      <div style={{ position: 'absolute', bottom: '60px', right: '60px', zIndex: 1, opacity: 0.07 }}>
        <span style={{ fontSize: 'clamp(80px, 12vw, 160px)', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>01</span>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 01 OF 11" />
    </div>
  );
}

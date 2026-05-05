import { useEffect, useState } from 'react';
import SlideHeader from '../SlideHeader';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide06System({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  const elements = [
    { num: '1', title: 'Logo System', desc: 'Primary, secondary, and simplified marks. Rules for size, placement, and spacing. Not just "a logo".' },
    { num: '2', title: 'Color Palette', desc: 'Primary, secondary, and neutral tones with exact HEX/RGB values. Proportions for use.' },
    { num: '3', title: 'Typography', desc: 'Font selection, size hierarchy, weight usage, and line-height rules. Applied consistently.' },
    { num: '4', title: 'Voice & Tone', desc: 'How the brand speaks. What words it uses. What it avoids. This guides copy on every page.' },
    { num: '5', title: 'Image Direction', desc: 'Photography style, mood, subject matter, post-processing. Visual consistency across content.' },
    { num: '6', title: 'UI Patterns', desc: 'Button styles, spacing system, grid rules. Feeds directly into the Shopify theme build.' },
  ];

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      <SlideHeader slideNumber={6} total={11} section="SYSTEM" tag="What Brand Identity Is" />

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>
        {/* Left: image */}
        <div style={{ position: 'relative', overflow: 'hidden', borderRight: '1px solid var(--border)' }}>
          <img
            src="/images/system-grid.webp"
            alt="Brand system"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(232,230,230,0.8) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px' }}>
            <div className="headline-sm" style={{ fontWeight: 200, marginBottom: '12px' }}>
              "A brand system is not a deliverable.<br />
              <em>It's a shared language."</em>
            </div>
            <span className="label-text">ART DIRECTION — DESIGN SYSTEMS</span>
          </div>
        </div>

        {/* Right: grid of elements */}
        <div style={{ padding: '48px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'auto' }}>

          <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '32px' }}>
            <p className="body-text" style={{ color: 'var(--text)' }}>
              A complete brand identity system is six interconnected components — each one feeding the next.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
            {elements.map((el, i) => (
              <div
                key={el.num}
                className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`}
                style={{
                  animationDelay: `${0.15 + i * 0.1}s`,
                  background: 'var(--bg)',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                  <span className="label-text">{el.num.padStart(2, '0')}</span>
                  <span className="caption-text" style={{ color: 'var(--text)', fontWeight: 500 }}>{el.title}</span>
                </div>
                <p className="caption-text" style={{ lineHeight: 1.65 }}>{el.desc}</p>
              </div>
            ))}
          </div>

          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-700' : ''}`} style={{ marginTop: '24px' }}>
            <p className="body-text" style={{ fontStyle: 'italic', fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
              Each element is a decision already made — so you never have to make it again.
            </p>
          </div>
        </div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 06 OF 11" />
    </div>
  );
}

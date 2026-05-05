import { useEffect, useState } from 'react';
import SlideHeader from '../SlideHeader';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide05Analogy({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  const analogies = [
    {
      icon: '◻',
      field: 'ARCHITECTURE',
      without: 'Build without blueprints. Walls go up. Then you realize the kitchen doesn\'t have plumbing.',
      with: 'Blueprints first. Every contractor works from the same plan. No surprises, no demolition.',
    },
    {
      icon: '◇',
      field: 'FASHION',
      without: 'Styling a shoot with pieces from different eras, fits, and palettes. The campaign looks scattered.',
      with: 'A mood board and art direction defined upfront. Every shot, every fabric — intentional.',
    },
    {
      icon: '○',
      field: 'PRODUCT DESIGN',
      without: 'Engineers build, then designers adapt. Retrofitting aesthetics onto function creates friction.',
      with: 'Design and function developed together. The result is cohesive because it was planned that way.',
    },
  ];

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      <SlideHeader slideNumber={5} total={11} section="ANALOGY" tag="Think of It This Way" />

      {/* Full height image strip at bottom - editorial fashion */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '32%', height: '70%', overflow: 'hidden', zIndex: 0 }}>
        <img
          src="/images/fashion-detail.webp"
          alt="Fashion detail"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg) 0%, transparent 15%)' }} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', position: 'relative', zIndex: 1, maxWidth: '72%' }}>

        <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '48px' }}>
          <div className="headline-md" style={{ fontWeight: 200 }}>
            Three fields that always<br />
            <span style={{ fontStyle: 'italic' }}>plan before they build.</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {analogies.map((item, i) => (
            <div
              key={item.field}
              className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`}
              style={{
                animationDelay: `${0.2 + i * 0.15}s`,
                display: 'grid',
                gridTemplateColumns: '120px 1fr 1fr',
                gap: '32px',
                padding: '24px 0',
                borderBottom: '1px solid var(--border)',
                alignItems: 'start',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '14px', color: 'var(--text-xlight)' }}>{item.icon}</span>
                <span className="label-text" style={{ color: 'var(--text)' }}>{item.field}</span>
              </div>
              <div>
                <div className="label-text" style={{ color: 'var(--text-xlight)', marginBottom: '6px' }}>WITHOUT →</div>
                <p className="caption-text">{item.without}</p>
              </div>
              <div>
                <div className="label-text" style={{ color: 'var(--text)', marginBottom: '6px' }}>WITH →</div>
                <p className="caption-text" style={{ color: 'var(--text)', fontWeight: 400 }}>{item.with}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-600' : ''}`} style={{ marginTop: '40px' }}>
          <p className="body-text" style={{ maxWidth: '540px' }}>
            Your brand is no different. The website is the campaign. The identity system is the art direction.
          </p>
        </div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 05 OF 11" />
    </div>
  );
}

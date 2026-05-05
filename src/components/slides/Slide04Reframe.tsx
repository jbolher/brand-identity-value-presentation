import { useEffect, useState } from 'react';
import SlideHeader from '../SlideHeader';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide04Reframe({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      <SlideHeader slideNumber={4} total={11} section="REFRAME" tag="New Perspective" />

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>

        {/* Left: large headline */}
        <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid var(--border)' }}>

          <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '16px' }}>
            <span className="label-text">STOP THINKING OF IT AS</span>
          </div>

          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-100' : ''}`} style={{ marginBottom: '40px' }}>
            <div className="headline-md" style={{ fontWeight: 200, textDecoration: 'line-through', opacity: 0.4 }}>
              Aesthetics
            </div>
            <div className="headline-md" style={{ fontWeight: 200, textDecoration: 'line-through', opacity: 0.4 }}>
              Decoration
            </div>
            <div className="headline-md" style={{ fontWeight: 200, textDecoration: 'line-through', opacity: 0.4 }}>
              A nice logo
            </div>
          </div>

          <div style={{ width: '48px', height: '1px', background: 'var(--text-light)', marginBottom: '40px' }} />

          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-300' : ''}`} style={{ marginBottom: '16px' }}>
            <span className="label-text">START THINKING OF IT AS</span>
          </div>

          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-400' : ''}`}>
            <div className="headline-md" style={{ fontWeight: 500, marginBottom: '8px' }}>
              Infrastructure
            </div>
            <div className="headline-md" style={{ fontWeight: 500, marginBottom: '8px' }}>
              A decision filter
            </div>
            <div className="headline-md" style={{ fontWeight: 500 }}>
              Your creative brief
            </div>
          </div>
        </div>

        {/* Right: explanation */}
        <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-200' : ''}`} style={{ marginBottom: '40px' }}>
            <p className="body-text" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)', lineHeight: 1.8, color: 'var(--text)', fontWeight: 300 }}>
              When you build a website without a brand system, you're not starting from zero — you're starting from chaos.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { q: 'Which shade of that color?', a: 'Brand system answers it.' },
              { q: 'Should the headline be bold or light?', a: 'Brand system answers it.' },
              { q: 'What tone should this copy feel like?', a: 'Brand system answers it.' },
              { q: 'Does this image feel right?', a: 'Brand system answers it.' },
            ].map((item, i) => (
              <div
                key={i}
                className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`}
                style={{ animationDelay: `${0.3 + i * 0.1}s`, padding: '16px 0', borderBottom: '1px solid var(--border)' }}
              >
                <div className="caption-text" style={{ color: 'var(--text-light)', marginBottom: '4px', fontStyle: 'italic' }}>"{item.q}"</div>
                <div className="caption-text" style={{ color: 'var(--text)', fontWeight: 500 }}>→ {item.a}</div>
              </div>
            ))}
          </div>

          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-700' : ''}`} style={{ marginTop: '32px' }}>
            <p className="body-text" style={{ fontStyle: 'italic' }}>
              Every question without an answer becomes a revision. Every revision costs time. Time costs money.
            </p>
          </div>
        </div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 04 OF 11" />
    </div>
  );
}

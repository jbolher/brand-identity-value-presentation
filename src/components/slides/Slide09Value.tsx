import { useEffect, useState } from 'react';
import SlideHeader from '../SlideHeader';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide09Value({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  const values = [
    {
      number: '01',
      title: 'Speed',
      detail: 'Every design decision references the system. No debates. No detours. The project moves.',
    },
    {
      number: '02',
      title: 'Clarity',
      detail: 'You always know the answer to "does this feel right?" — because the system defines what right looks like.',
    },
    {
      number: '03',
      title: 'Ownership',
      detail: 'The brand is yours — not assembled from defaults. You can apply it to any future touchpoint without starting over.',
    },
    {
      number: '04',
      title: 'Trust',
      detail: 'Consistent visual language signals reliability to customers before they read a single word.',
    },
    {
      number: '05',
      title: 'Longevity',
      detail: 'A system built correctly scales. New products, new pages, new content — all stay on-brand without extra work.',
    },
    {
      number: '06',
      title: 'ROI',
      detail: 'Less rework. Faster approvals. Stronger market positioning. The system pays for itself in the first project.',
    },
  ];

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      <SlideHeader slideNumber={9} total={11} section="VALUE" tag="What You Gain" />

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '380px 1fr', height: '100%' }}>

        {/* Left: image + headline */}
        <div style={{ position: 'relative', overflow: 'hidden', borderRight: '1px solid var(--border)' }}>
          <img
            src="/images/editorial-portrait.webp"
            alt="Editorial portrait"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(232,230,230,1) 0%, rgba(232,230,230,0.3) 50%, transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: '40px', left: '32px', right: '32px' }}>
            <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`}>
              <div className="headline-sm" style={{ fontWeight: 200, marginBottom: '8px' }}>
                Six things you get<br />
                <em>from day one.</em>
              </div>
              <span className="label-text">BRAND IDENTITY DELIVERABLES</span>
            </div>
          </div>
        </div>

        {/* Right: values grid */}
        <div style={{ padding: '48px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
            {values.map((v, i) => (
              <div
                key={v.number}
                className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`}
                style={{
                  animationDelay: `${0.1 + i * 0.1}s`,
                  background: 'var(--bg)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span className="label-text">{v.number}</span>
                  <span style={{ fontSize: 'clamp(14px, 1.2vw, 18px)', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em' }}>{v.title}</span>
                </div>
                <p className="caption-text" style={{ lineHeight: 1.7 }}>{v.detail}</p>
              </div>
            ))}
          </div>

          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-700' : ''}`} style={{ marginTop: '28px' }}>
            <p className="body-text" style={{ fontStyle: 'italic', textAlign: 'center' }}>
              These aren't deliverables. They're <strong>outcomes.</strong>
            </p>
          </div>
        </div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 09 OF 11" />
    </div>
  );
}

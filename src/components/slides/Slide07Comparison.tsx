import { useEffect, useState } from 'react';
import SlideHeader from '../SlideHeader';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide07Comparison({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  const rows = [
    { aspect: 'Design direction', without: 'Decided slide by slide', with: 'Pre-defined from day one' },
    { aspect: 'Revision rounds', without: '5–8+ rounds on each section', with: '1–2 rounds, based on clear rules' },
    { aspect: 'Typography', without: 'Mixed fonts, no hierarchy', with: 'Defined scale, consistent feel' },
    { aspect: 'Color usage', without: 'Debated per element', with: 'Applied from palette system' },
    { aspect: 'Photography', without: 'Mismatched stock or ad hoc', with: 'Directed, consistent mood' },
    { aspect: 'Copy tone', without: 'Varies page to page', with: 'Guided by brand voice rules' },
    { aspect: 'Client approval', without: 'Gut-feeling based, slow', with: 'Reference-based, fast' },
    { aspect: 'Post-launch consistency', without: 'Breaks with first update', with: 'Maintained across all touchpoints' },
  ];

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      <SlideHeader slideNumber={7} total={11} section="COMPARISON" tag="Without vs. With" />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 60px', justifyContent: 'center', overflowY: 'auto' }}>

        <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div className="headline-md" style={{ fontWeight: 200 }}>
            The same project.<br /><span style={{ fontStyle: 'italic' }}>Two very different experiences.</span>
          </div>
        </div>

        {/* Comparison table */}
        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-200' : ''}`}>
          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '0',
            borderBottom: '2px solid var(--text)',
            paddingBottom: '12px',
            marginBottom: '0',
          }}>
            <span className="label-text" style={{ color: 'var(--text)' }}>ASPECT</span>
            <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border)', paddingLeft: '24px' }}>
              <span className="label-text" style={{ color: 'var(--text-xlight)' }}>✕ WITHOUT BRAND SYSTEM</span>
            </div>
            <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border)', paddingLeft: '24px' }}>
              <span className="label-text" style={{ color: 'var(--text)' }}>✓ WITH BRAND SYSTEM</span>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.aspect}
              className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`}
              style={{
                animationDelay: `${0.25 + i * 0.06}s`,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '0',
                borderBottom: '1px solid var(--border)',
                padding: '14px 0',
              }}
            >
              <span className="caption-text" style={{ color: 'var(--text)', fontWeight: 400 }}>{row.aspect}</span>
              <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '24px' }}>
                <span className="caption-text" style={{ color: 'var(--text-xlight)' }}>{row.without}</span>
              </div>
              <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '24px' }}>
                <span className="caption-text" style={{ color: 'var(--text)', fontWeight: 500 }}>{row.with}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-700' : ''}`} style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center', maxWidth: '580px', fontStyle: 'italic' }}>
            The brand system doesn't add time to the project — it removes it from every step that follows.
          </p>
        </div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 07 OF 11" />
    </div>
  );
}

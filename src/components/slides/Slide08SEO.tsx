import { useEffect, useState } from 'react';
import SlideHeader from '../SlideHeader';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide08SEO({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      <SlideHeader slideNumber={8} total={11} section="SEO + TIME" tag="The Hidden Cost" />

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>

        {/* Left: main point */}
        <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid var(--border)' }}>

          <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '40px' }}>
            <span className="label-text" style={{ marginBottom: '20px', display: 'block' }}>THE HIDDEN COST OF STARTING WITHOUT IT</span>
            <div className="headline-md" style={{ fontWeight: 200 }}>
              Starting over<br />
              <span style={{ fontStyle: 'italic' }}>always costs more</span><br />
              than starting right.
            </div>
          </div>

          <div style={{ width: '48px', height: '1px', background: 'var(--border)', marginBottom: '40px' }} />

          {/* Timeline */}
          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-200' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { phase: 'Phase 1', label: 'WEBSITE WITHOUT BRAND SYSTEM', note: 'Launched. Inconsistent. Requires rework within months.' },
              { phase: 'Phase 2', label: 'BRAND IDENTITY ADDED RETROACTIVELY', note: 'New guidelines mean updating every page, image, copy block.' },
              { phase: 'Phase 3', label: 'REBUILD OR PARTIAL OVERHAUL', note: 'Budget re-allocated. Timeline extended. Momentum lost.' },
            ].map((item, i) => (
              <div key={item.phase} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '1px', height: i === 0 ? '0' : '20px', background: 'var(--border)' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? 'var(--text)' : 'var(--border)', border: '1px solid var(--text-light)', flexShrink: 0 }} />
                  <div style={{ width: '1px', flex: 1, background: 'var(--border)' }} />
                </div>
                <div style={{ paddingTop: '4px' }}>
                  <span className="label-text" style={{ color: 'var(--text)', display: 'block', marginBottom: '4px' }}>{item.label}</span>
                  <p className="caption-text" style={{ lineHeight: 1.6 }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: SEO point + time cost */}
        <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px' }}>

          {/* SEO block */}
          <div
            className={`opacity-0 ${visible ? 'animate-fade-up delay-300' : ''}`}
            style={{ border: '1px solid var(--border)', padding: '32px' }}
          >
            <div className="label-text" style={{ marginBottom: '16px', color: 'var(--text)' }}>A NOTE ON SEO</div>
            <p className="body-text" style={{ marginBottom: '16px' }}>
              Search engines reward consistency — in messaging, content structure, and page architecture.
            </p>
            <p className="body-text">
              A brand system established at the start shapes your page naming, heading hierarchy, metadata tone, and content strategy — all of which feed directly into how Google reads and ranks your site.
            </p>
            <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(66,66,66,0.04)', borderLeft: '2px solid var(--text-light)' }}>
              <p className="caption-text" style={{ fontStyle: 'italic', color: 'var(--text)' }}>
                Retroactively adding brand clarity means retroactively rebuilding your SEO foundation. Start early. Build once.
              </p>
            </div>
          </div>

          {/* Time cost breakdown */}
          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-400' : ''}`}>
            <div className="label-text" style={{ marginBottom: '20px', color: 'var(--text)' }}>ESTIMATED REWORK WITHOUT BRAND SYSTEM</div>
            {[
              { item: 'Design revisions (extra rounds)', cost: '+8–15 hrs' },
              { item: 'Content rewrites (inconsistent tone)', cost: '+4–6 hrs' },
              { item: 'Image resourcing (no direction)', cost: '+3–5 hrs' },
              { item: 'Post-launch corrections', cost: '+ongoing' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                <span className="caption-text">{row.item}</span>
                <span className="caption-text" style={{ color: 'var(--text)', fontWeight: 500 }}>{row.cost}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
              <span className="caption-text" style={{ color: 'var(--text)', fontWeight: 500 }}>Total avoidable cost</span>
              <span className="caption-text" style={{ color: 'var(--text)', fontWeight: 600 }}>15–26+ hrs</span>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 08 OF 11" />
    </div>
  );
}

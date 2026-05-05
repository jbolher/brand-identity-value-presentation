import { useEffect, useState } from 'react';
import SlideHeader from '../SlideHeader';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide03Insight({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      <SlideHeader slideNumber={3} total={11} section="INSIGHT" tag="Core Insight" />

      {/* Full-width centered content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px', textAlign: 'center', position: 'relative' }}>

        {/* Large quote mark */}
        <div style={{ position: 'absolute', top: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.05 }}>
          <span className="quote-mark">"</span>
        </div>

        <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '32px' }}>
          <span className="label-text">THE CORE INSIGHT</span>
        </div>

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-200' : ''}`} style={{ maxWidth: '860px', marginBottom: '32px' }}>
          <div className="headline-lg" style={{ fontWeight: 200 }}>
            Brand identity is not<br />
            <span style={{ fontStyle: 'italic' }}>what your business looks like.</span>
          </div>
        </div>

        {/* Divider */}
        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-300' : ''}`} style={{ width: '1px', height: '48px', background: 'var(--border)', margin: '0 auto 32px' }} />

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-400' : ''}`} style={{ maxWidth: '860px', marginBottom: '48px' }}>
          <div className="headline-lg" style={{ fontWeight: 600 }}>
            It's how your business<br />
            <em>makes decisions.</em>
          </div>
        </div>

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-500' : ''}`} style={{ maxWidth: '520px' }}>
          <p className="body-text" style={{ textAlign: 'center' }}>
            Every choice on your website — color, type, copy tone, image style, layout — needs to come from somewhere. Brand identity is that source.
            Without it, every decision is a negotiation.
          </p>
        </div>

        {/* Bottom row of small stats/callouts */}
        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-600' : ''}`} style={{ display: 'flex', gap: '60px', marginTop: '64px', justifyContent: 'center', borderTop: '1px solid var(--border)', paddingTop: '40px', width: '100%', maxWidth: '700px' }}>
          {[
            { label: 'DESIGN ROUNDS SAVED', value: '↓ 40%' },
            { label: 'TIME TO APPROVE', value: '↓ Faster' },
            { label: 'RESULT QUALITY', value: '↑ Significantly' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div className="headline-sm" style={{ fontWeight: 500, marginBottom: '6px' }}>{item.value}</div>
              <div className="label-text">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 03 OF 11" />
    </div>
  );
}

import { useEffect, useState } from 'react';
import SlideHeader from '../SlideHeader';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide10Offer({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  const fullPackage = [
    'Logo system (primary, secondary, icon)',
    'Color palette (primary, secondary, neutrals)',
    'Typography system (fonts, hierarchy, scale)',
    'Brand voice & tone guidelines',
    'Image direction & moodboard',
    'UI pattern system (feeds into Shopify theme)',
    'Shopify theme design & build',
    'Full UX/UI structure & navigation',
    'Mobile-first responsive layouts',
    'On-brand copy guidance',
  ];

  const limitedPackage = [
    'Shopify theme selection or adaptation',
    'Basic UX/UI structure',
    'Navigation layout',
    'Simple logo placement (box)',
    '— No color system',
    '— No typography scale',
    '— No brand voice',
    '— No image direction',
    '— No UI patterns',
    '— Higher revision risk',
  ];

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      <SlideHeader slideNumber={10} total={11} section="OFFER" tag="The Proposal" />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 60px', justifyContent: 'center', overflowY: 'auto' }}>

        <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div className="headline-md" style={{ fontWeight: 200 }}>
            Two paths forward.<br />
            <span style={{ fontStyle: 'italic' }}>One clear recommendation.</span>
          </div>
        </div>

        <div className={`opacity-0 ${visible ? 'animate-fade-up delay-200' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

          {/* Limited / what they asked for */}
          <div style={{ border: '1px solid var(--border)', padding: '36px', opacity: 0.7 }}>
            <div style={{ marginBottom: '24px' }}>
              <div className="label-text" style={{ marginBottom: '8px', color: 'var(--text-xlight)' }}>OPTION A — LIMITED SCOPE</div>
              <div className="headline-sm" style={{ fontWeight: 300, marginBottom: '8px' }}>Website Only</div>
              <p className="caption-text">What you've described wanting. Technically possible — with caveats.</p>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '24px' }} />
            {limitedPackage.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
                <span className="caption-text" style={{ color: item.startsWith('—') ? '#C0A0A0' : 'var(--text-light)', opacity: item.startsWith('—') ? 0.8 : 1 }}>{item}</span>
              </div>
            ))}
            <p className="caption-text" style={{ marginTop: '20px', fontStyle: 'italic', color: 'var(--text-xlight)' }}>
              Will require retroactive brand work. Higher probability of rework.
            </p>
          </div>

          {/* Full / recommended */}
          <div style={{ border: '1px solid var(--text)', padding: '36px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1px', left: '32px', background: 'var(--text)', padding: '4px 14px' }}>
              <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--bg)', textTransform: 'uppercase', fontWeight: 500 }}>RECOMMENDED</span>
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div className="label-text" style={{ marginBottom: '8px', color: 'var(--text)' }}>OPTION B — FULL PACKAGE</div>
              <div className="headline-sm" style={{ fontWeight: 300, marginBottom: '8px' }}>Branding Essentials + Shopify</div>
              <p className="caption-text">The complete system. Built once. Runs forever.</p>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '24px' }} />
            {fullPackage.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
                <span className="caption-text" style={{ color: 'var(--text)' }}>{item}</span>
              </div>
            ))}
            <p className="caption-text" style={{ marginTop: '20px', fontStyle: 'italic', color: 'var(--text)' }}>
              Built to avoid rework. Lower long-term cost. Stronger outcome.
            </p>
          </div>
        </div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 10 OF 11" />
    </div>
  );
}

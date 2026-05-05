import { useEffect, useState } from 'react';
import SlideHeader from '../SlideHeader';
import SlideFooter from '../SlideFooter';

interface Props { isActive: boolean; }

export default function Slide02Problem({ isActive }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }
    else setVisible(false);
  }, [isActive]);

  const problems = [
    { num: '01', text: 'Design decisions happen without a reference point.' },
    { num: '02', text: 'Every revision becomes a conversation about taste.' },
    { num: '03', text: 'The result feels generic — or like it belongs to someone else.' },
  ];

  return (
    <div className="slide" style={{ background: 'var(--bg)' }}>
      <SlideHeader slideNumber={2} total={11} section="PROBLEM" tag="The Challenge" />

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>
        {/* Left: image */}
        <div style={{ position: 'relative', overflow: 'hidden', borderRight: '1px solid var(--border)' }}>
          <img
            src="/images/chaos-desk.webp"
            alt="Without brand system"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) contrast(1.05)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(232,230,230,0.6) 0%, transparent 50%)' }} />
          <div style={{ position: 'absolute', bottom: '40px', left: '40px' }}>
            <span className="label-text" style={{ background: 'var(--bg)', padding: '6px 14px', display: 'inline-block' }}>WITHOUT A SYSTEM</span>
          </div>
        </div>

        {/* Right: content */}
        <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          <div className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`} style={{ marginBottom: '48px' }}>
            <div className="headline-md" style={{ fontWeight: 200, marginBottom: '20px' }}>
              Here's what<br />
              <span style={{ fontStyle: 'italic' }}>actually happens</span><br />
              without one.
            </div>
            <p className="body-text">
              It's not about aesthetics.<br />It's about what happens to the process.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {problems.map((item, i) => (
              <div
                key={item.num}
                className={`opacity-0 ${visible ? 'animate-fade-up' : ''}`}
                style={{
                  animationDelay: `${0.2 + i * 0.15}s`,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  padding: '20px 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span className="label-text" style={{ marginTop: '3px', minWidth: '28px' }}>{item.num}</span>
                <p className="body-text" style={{ color: 'var(--text)', fontWeight: 300 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className={`opacity-0 ${visible ? 'animate-fade-up delay-600' : ''}`} style={{ marginTop: '40px' }}>
            <p className="body-text" style={{ fontStyle: 'italic', color: 'var(--text-xlight)' }}>
              "We'll just figure it out as we go."<br />— Every project that went over budget.
            </p>
          </div>
        </div>
      </div>

      <SlideFooter leftText="BRAND IDENTITY PRESENTATION" rightText="SLIDE 02 OF 11" />
    </div>
  );
}

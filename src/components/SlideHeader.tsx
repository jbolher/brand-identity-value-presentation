interface SlideHeaderProps {
  slideNumber: number;
  total: number;
  section: string;
  tag?: string;
}

export default function SlideHeader({ slideNumber, total, section, tag }: SlideHeaderProps) {
  const num = String(slideNumber).padStart(2, '0');
  const tot = String(total).padStart(2, '0');

  return (
    <div className="slide-header">
      <div className="flex items-center gap-6">
        <span className="section-tag">{section}</span>
        {tag && (
          <>
            <span style={{ color: 'var(--border)', fontSize: '10px' }}>—</span>
            <span className="tag-pill">{tag}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-3">
        <span className="slide-number" style={{ color: 'var(--text)' }}>{num}</span>
        <span className="slide-number">/</span>
        <span className="slide-number">{tot}</span>
      </div>
    </div>
  );
}

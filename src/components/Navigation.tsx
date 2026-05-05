interface NavigationProps {
  total: number;
  active: number;
  onGoTo: (index: number) => void;
}

const slideLabels = [
  'Cover', 'Problem', 'Insight', 'Reframe', 'Analogy',
  'System', 'Compare', 'SEO', 'Value', 'Offer', 'Close'
];

export default function Navigation({ total, active, onGoTo }: NavigationProps) {
  return (
    <>
      {/* Side nav dots */}
      <div style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'center',
      }}>
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            title={slideLabels[i]}
            style={{
              background: 'none',
              border: 'none',
              padding: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: i === active ? '20px' : '5px',
                height: '5px',
                borderRadius: i === active ? '3px' : '50%',
                background: i === active ? 'var(--text)' : 'var(--text-xlight)',
                transition: 'all 0.35s ease',
              }}
            />
          </button>
        ))}
      </div>

      {/* Arrow nav */}
      <div style={{
        position: 'fixed',
        bottom: '28px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
      }}>
        <button
          onClick={() => onGoTo(Math.max(0, active - 1))}
          disabled={active === 0}
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            width: '36px',
            height: '36px',
            cursor: active === 0 ? 'default' : 'pointer',
            opacity: active === 0 ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.2s',
            fontSize: '14px',
            color: 'var(--text)',
          }}
        >
          ↑
        </button>
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--text-xlight)', textTransform: 'uppercase', minWidth: '60px', textAlign: 'center' }}>
          {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <button
          onClick={() => onGoTo(Math.min(total - 1, active + 1))}
          disabled={active === total - 1}
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            width: '36px',
            height: '36px',
            cursor: active === total - 1 ? 'default' : 'pointer',
            opacity: active === total - 1 ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.2s',
            fontSize: '14px',
            color: 'var(--text)',
          }}
        >
          ↓
        </button>
      </div>

      {/* Keyboard hint */}
      <div style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 50,
      }}>
        <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'var(--text-xlight)', textTransform: 'uppercase' }}>
          Use ↑↓ keys or scroll
        </span>
      </div>
    </>
  );
}

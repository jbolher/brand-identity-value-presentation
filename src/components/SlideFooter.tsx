interface SlideFooterProps {
  leftText?: string;
  rightText?: string;
  centerText?: string;
}

export default function SlideFooter({ leftText, rightText, centerText }: SlideFooterProps) {
  return (
    <div className="slide-footer">
      <span className="label-text">{leftText || 'BRAND IDENTITY PRESENTATION'}</span>
      {centerText && <span className="label-text">{centerText}</span>}
      <span className="label-text">{rightText || '© 2025'}</span>
    </div>
  );
}

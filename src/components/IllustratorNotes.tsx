interface IllustratorNotesProps {
  slideIndex: number;
  onClose: () => void;
}

const notes = [
  {
    slide: '01 — COVER',
    artboard: '1920 × 1080px (16:9)',
    margins: '60px all sides',
    grid: '12-column, asymmetric split: 58% left / 42% right',
    layout: 'Left: logo area top-left + stacked headline (3 lines) + divider + body text + tag pills. Right: full-height editorial portrait image with left gradient fade.',
    typography: 'Headline: Poppins Light 200, 90–110pt, tracking –3%. Tags: Poppins Regular, 9pt, tracking +20%, all-caps. Body: Poppins Light 300, 18pt, leading 1.75.',
    image: 'Full-bleed editorial portrait, B&W or desaturated, cropped right-edge. Fashion lookbook aesthetic. Strong negative space in upper portion.',
    whitespace: 'Generous — headline area breathes. No stacking of elements.',
  },
  {
    slide: '02 — PROBLEM',
    artboard: '1920 × 1080px',
    margins: '60px all sides',
    grid: '2-column equal split with 1px vertical center divider',
    layout: 'Left col: full-height image (chaotic/disorganized desk), gradient at bottom with label. Right col: section label + stacked headline (3 lines) + 3 numbered problem rows + italic closing quote.',
    typography: 'Headline: Poppins 200, 50pt. Problem items: Poppins 300, 16pt. Numbering: 9pt all-caps tracking +20%.',
    image: 'Messy designer desk — warm desaturated tones. Can use blurred/motion-style. Grayscale overlay recommended.',
    whitespace: 'Right column: airy between rows. Rows defined by thin 1px hairlines.',
  },
  {
    slide: '03 — INSIGHT',
    artboard: '1920 × 1080px',
    margins: '80px all sides',
    grid: 'Single column centered, max-width 860px',
    layout: 'Full-width centered layout. Top: small label. Large ghost quote mark in background (5% opacity). Two-part headline split by thin vertical 1px rule. Stats row at bottom in 3 equal columns.',
    typography: 'First headline: Poppins Light 200, 70pt. Second headline: Poppins SemiBold 600, 70pt italic. Stats values: Poppins Medium 500, 32pt. Labels: 9pt.',
    image: 'No main image — purely typographic slide. Ghost "quotation mark" at 150pt, 5% opacity, serves as texture.',
    whitespace: 'Maximum breathing room. This slide should feel like a full-page magazine editorial pull-quote.',
  },
  {
    slide: '04 — REFRAME',
    artboard: '1920 × 1080px',
    margins: '60px all sides',
    grid: '2-column equal split with 1px divider',
    layout: 'Left: label + strikethrough items (faded) + divider + label + bold affirmations. Right: large provocation text + 4 Q&A rows in hairline grid.',
    typography: 'Strikethrough items: Poppins 200, 48pt, 40% opacity. Bold items: Poppins 500, 48pt. Q: italic caption 13pt. A: regular 13pt.',
    image: 'No image needed — purely conceptual/typographic slide.',
    whitespace: 'Left: dramatic vertical rhythm. Right: tight rows with hairlines.',
  },
  {
    slide: '05 — ANALOGY',
    artboard: '1920 × 1080px',
    margins: '60px all sides',
    grid: '3-column content grid (120px label | 1fr | 1fr) + right image strip',
    layout: 'Main content area 70% width. Right 30%: tall editorial image strip with left gradient fade. Content: headline + 3 analogy rows each spanning all 3 columns with hairline separators.',
    typography: 'Headline: Poppins 200, 48pt. Column labels: 9pt all-caps. Row content: Poppins 300, 13pt, leading 1.65.',
    image: 'Right edge: tall cropped editorial fashion/fabric detail. Grayscale or muted. Anchored bottom-right.',
    whitespace: 'Generous row padding. Content max 70vw width for editorial feel.',
  },
  {
    slide: '06 — SYSTEM',
    artboard: '1920 × 1080px',
    margins: '48px all sides',
    grid: '2-column: 40% image | 60% content',
    layout: 'Left: full-height brand system flat-lay image with bottom gradient overlay + quote + label. Right: intro text + 2×3 grid of system elements (each with number, title, description) separated by 1px hairlines.',
    typography: 'Element titles: Poppins 500, 16pt. Descriptions: Poppins 300, 12pt, leading 1.65. Numbers: 9pt labels.',
    image: 'Brand identity system flat lay — color swatches, type samples, guidelines cards. Soft overhead light. Neutral.',
    whitespace: 'Grid cells: 24px internal padding. 1px hairline grid for structure.',
  },
  {
    slide: '07 — COMPARISON',
    artboard: '1920 × 1080px',
    margins: '40px 60px',
    grid: '3-column table: 1fr | 1fr | 1fr with column rules',
    layout: 'Centered headline above. Full-width comparison table: Aspect | Without | With. 8 data rows with hairline separators. Bold table header with 2px bottom rule. Centered italic close text below.',
    typography: 'Headline: Poppins 200, 48pt. Column headers: 9pt all-caps. Row text: Poppins 300 & 400, 13pt. "Without" column: reduced opacity. "With" column: full weight 500.',
    image: 'No image — the data IS the slide. Clean tabular layout.',
    whitespace: 'Row height: 48px minimum. Column gutters via 1px vertical rules.',
  },
  {
    slide: '08 — SEO + TIME',
    artboard: '1920 × 1080px',
    margins: '60px all sides',
    grid: '2-column equal split',
    layout: 'Left: label + large headline + thin rule + 3-step timeline with dot/line connector. Right: SEO inset box (bordered) + time cost breakdown table.',
    typography: 'Headline: Poppins 200, 48pt. Timeline labels: 9pt all-caps. Timeline body: 300, 13pt. SEO box header: 9pt. SEO body: 300, 15pt, leading 1.75.',
    image: 'No main image. Timeline uses geometric dot-line connector system. SEO box has 2px left border accent.',
    whitespace: 'Timeline rows: 20px padding each. SEO box: 32px internal padding. Bordered inset feels like a callout.',
  },
  {
    slide: '09 — VALUE',
    artboard: '1920 × 1080px',
    margins: '48px 60px',
    grid: '2-column: 380px image | remaining content',
    layout: 'Left: full-height editorial portrait with bottom gradient + floating headline + label. Right: 2×3 grid of value cards (each with number, bold title, description body) separated by 1px hairlines.',
    typography: 'Value titles: Poppins 500, 18pt. Descriptions: Poppins 300, 12pt, leading 1.7. Card numbers: 9pt all-caps.',
    image: 'Editorial portrait: confident, minimal, structured clothing, neutral BG. Slight grayscale. Bottom gradient to bg color.',
    whitespace: 'Cards: 28px internal padding. Grid hairlines define structure without visual noise.',
  },
  {
    slide: '10 — OFFER',
    artboard: '1920 × 1080px',
    margins: '40px 60px',
    grid: '2-column equal with 20px gutter',
    layout: 'Centered headline above. Two bordered cards side by side. Left (Option A): 1px border, reduced opacity, strikethrough-style feel for "no" items. Right (Option B): 1px SOLID dark border, "RECOMMENDED" tab at top, full opacity. Each card: label + title + description + divider + scrollable list + footer note.',
    typography: 'Card titles: Poppins 300, 28pt. List items: Poppins 300/400, 13pt. Recommended tab: 9pt all-caps white on dark bg. Negative items: muted #C0A0A0.',
    image: 'No image — this is the sales/decision slide. Typography does the work.',
    whitespace: 'Card internal padding: 36px. List rows: 7px vertical padding each.',
  },
  {
    slide: '11 — CLOSE',
    artboard: '1920 × 1080px',
    margins: '60px all sides',
    grid: 'Asymmetric: 680px left content zone, remaining image zone',
    layout: 'Full-bleed image background (darkened, grayscaled). Strong left-to-right gradient overlay (97% bg on left, 50% on right). Content zone left: tag + two-part headline + thin rule + bold affirmation + body text × 2 + CTA button + caption. Ghost text "BRAND / FIRST." bottom-right at 4% opacity.',
    typography: 'Main headline: Poppins 200, 72pt. Affirmation: Poppins 500, 56pt. Body: Poppins 300, 17pt, leading 1.75. CTA: 12pt, 500, tracking +12%, uppercase, bordered. Ghost: 120pt, 700.',
    image: 'Full-bleed website/product mockup or editorial fashion. Heavily overlaid. Acts as texture, not focal point.',
    whitespace: 'Maximum breathing on left content zone. Image gradient creates depth without competing.',
  },
];

export default function IllustratorNotes({ slideIndex, onClose }: IllustratorNotesProps) {
  const note = notes[slideIndex] || notes[0];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(232,230,230,0.97)',
      overflowY: 'auto',
      padding: '40px 60px',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
        <div>
          <div style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-xlight)', marginBottom: '6px' }}>ADOBE ILLUSTRATOR SPECS</div>
          <div style={{ fontSize: '24px', fontWeight: 300, color: 'var(--text)', letterSpacing: '-0.02em' }}>Slide {note.slide}</div>
        </div>
        <button
          onClick={onClose}
          style={{ background: 'none', border: '1px solid var(--border)', padding: '10px 20px', cursor: 'pointer', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)' }}
        >
          Close ✕
        </button>
      </div>

      {/* Grid of specs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {[
          { label: 'ARTBOARD SIZE', value: note.artboard },
          { label: 'MARGINS', value: note.margins },
          { label: 'GRID SYSTEM', value: note.grid },
          { label: 'IMAGE DIRECTION', value: note.image },
          { label: 'LAYOUT DESCRIPTION', value: note.layout },
          { label: 'TYPOGRAPHY', value: note.typography },
          { label: 'WHITESPACE GUIDANCE', value: note.whitespace },
        ].map((spec) => (
          <div key={spec.label} style={{ border: '1px solid var(--border)', padding: '24px' }}>
            <div style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-xlight)', marginBottom: '10px' }}>{spec.label}</div>
            <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text)' }}>{spec.value}</p>
          </div>
        ))}
      </div>

      {/* All slides nav */}
      <div style={{ marginTop: '40px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
        <div style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-xlight)', marginBottom: '16px' }}>ALL SLIDES</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {notes.map((n, i) => (
            <button
              key={i}
              onClick={() => {
                const el = document.querySelector(`[data-illustrator-slide="${i}"]`) as HTMLButtonElement;
                if (el) el.click();
              }}
              style={{
                border: `1px solid ${i === slideIndex ? 'var(--text)' : 'var(--border)'}`,
                background: i === slideIndex ? 'var(--text)' : 'none',
                color: i === slideIndex ? 'var(--bg)' : 'var(--text-light)',
                padding: '6px 14px',
                fontSize: '10px',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              {n.slide.split(' — ')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

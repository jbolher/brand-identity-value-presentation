import { useEffect, useRef, useState, useCallback } from 'react';
import Navigation from './components/Navigation';
import IllustratorNotes from './components/IllustratorNotes';
import Slide01Cover from './components/slides/Slide01Cover';
import Slide02Problem from './components/slides/Slide02Problem';
import Slide03Insight from './components/slides/Slide03Insight';
import Slide04Reframe from './components/slides/Slide04Reframe';
import Slide05Analogy from './components/slides/Slide05Analogy';
import Slide06System from './components/slides/Slide06System';
import Slide07Comparison from './components/slides/Slide07Comparison';
import Slide08SEO from './components/slides/Slide08SEO';
import Slide09Value from './components/slides/Slide09Value';
import Slide10Offer from './components/slides/Slide10Offer';
import Slide11Close from './components/slides/Slide11Close';

const TOTAL = 11;

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrolling = useRef(false);

  const goTo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const el = slideRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSlide(index);
    }
  }, []);

  // Intersection observer for active slide detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveSlide(index);
          }
        });
      },
      { threshold: 0.55, root: container }
    );

    slideRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showNotes) {
        if (e.key === 'Escape') setShowNotes(false);
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(Math.min(TOTAL - 1, activeSlide + 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(Math.max(0, activeSlide - 1));
      } else if (e.key === ' ') {
        e.preventDefault();
        goTo(Math.min(TOTAL - 1, activeSlide + 1));

    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeSlide, goTo, showNotes]);

  // Wheel / touch snap
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current || showNotes) return;
      isScrolling.current = true;

      if (e.deltaY > 30) {
        goTo(Math.min(TOTAL - 1, activeSlide + 1));
      } else if (e.deltaY < -30) {
        goTo(Math.max(0, activeSlide - 1));
      } else {
        isScrolling.current = false;
        return;
      }

      setTimeout(() => { isScrolling.current = false; }, 950);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current || showNotes) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      isScrolling.current = true;

      if (diff > 0) {
        goTo(Math.min(TOTAL - 1, activeSlide + 1));
      } else {
        goTo(Math.max(0, activeSlide - 1));
      }

      setTimeout(() => { isScrolling.current = false; }, 950);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeSlide, goTo, showNotes]);

  const setSlideRef = (i: number) => (el: HTMLDivElement | null) => {
    slideRefs.current[i] = el;
  };

  const progress = (activeSlide / (TOTAL - 1)) * 100;

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: 'var(--bg)', fontFamily: "'Poppins', sans-serif" }}>
      {/* Progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '1px',
          background: 'var(--text)',
          width: `${progress}%`,
          transition: 'width 0.5s ease',
          zIndex: 100,
        }}
      />



      {/* Slides container */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100vh',
          overflowY: 'scroll',
          overflowX: 'hidden',
          scrollSnapType: 'y mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        } as React.CSSProperties}
      >
        <style>{`.slides-scroll-container::-webkit-scrollbar { display: none; } div::-webkit-scrollbar { display: none; }`}</style>

        <div ref={setSlideRef(0)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide01Cover />
        </div>
        <div ref={setSlideRef(1)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide02Problem isActive={activeSlide === 1} />
        </div>
        <div ref={setSlideRef(2)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide03Insight isActive={activeSlide === 2} />
        </div>
        <div ref={setSlideRef(3)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide04Reframe isActive={activeSlide === 3} />
        </div>
        <div ref={setSlideRef(4)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide05Analogy isActive={activeSlide === 4} />
        </div>
        <div ref={setSlideRef(5)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide06System isActive={activeSlide === 5} />
        </div>
        <div ref={setSlideRef(6)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide07Comparison isActive={activeSlide === 6} />
        </div>
        <div ref={setSlideRef(7)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide08SEO isActive={activeSlide === 7} />
        </div>
        <div ref={setSlideRef(8)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide09Value isActive={activeSlide === 8} />
        </div>
        <div ref={setSlideRef(9)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide10Offer isActive={activeSlide === 9} />
        </div>
        <div ref={setSlideRef(10)} style={{ scrollSnapAlign: 'start', height: '100vh', width: '100vw', flexShrink: 0 }}>
          <Slide11Close isActive={activeSlide === 10} />
        </div>
      </div>

      {/* Navigation */}
      <Navigation total={TOTAL} active={activeSlide} onGoTo={goTo} />


    </div>
  );
}

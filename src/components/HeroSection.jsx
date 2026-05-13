import { useState, useEffect } from 'react';
import Wave from './Wave';
import PhoneMockup from './PhoneMockup';
import { colors, fonts } from '../styles/theme';

const QUESTIONS = [
  'What if you could leave the chaos at the door?',
  'What if your home knew you needed silence before you even asked?',
  'What if rest didn\'t feel like something you had to earn?',
  'What if switching off was as easy as walking through the door?',
];

export default function HeroSection() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setQuestionIdx(i => (i + 1) % QUESTIONS.length);
        setVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      background: `linear-gradient(155deg, ${colors.beige} 0%, ${colors.white} 55%, ${colors.lightGreen} 100%)`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '120px clamp(1.5rem, 5vw, 4rem) 0',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '8%', right: '-6%',
        width: 520, height: 520, borderRadius: '50%',
        background: `radial-gradient(circle, ${colors.softGreen}28 0%, transparent 70%)`,
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '18%', left: '-8%',
        width: 420, height: 420, borderRadius: '50%',
        background: `radial-gradient(circle, ${colors.green}12 0%, transparent 70%)`,
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 820, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Coming Soon badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: `${colors.softGreen}45`, borderRadius: 50,
          padding: '6px 18px', marginBottom: 32,
          border: `1px solid ${colors.softGreen}`,
        }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            background: colors.green, animation: 'pulse 2s infinite',
          }} />
          <span style={{ fontFamily: fonts.main, fontSize: 13, fontWeight: 700, color: colors.darkGreen }}>
            Coming Soon
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: fonts.main, fontWeight: 900,
          fontSize: 'clamp(2.6rem, 6.5vw, 4.8rem)',
          color: colors.darkGreen, lineHeight: 1.1,
          marginBottom: 24, letterSpacing: '-0.03em',
        }}>
          Your home,<br />
          <span style={{ color: colors.green }}>your safe space.</span>
        </h1>

        {/* Rotating question */}
        <div style={{ minHeight: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
          <p style={{
            fontFamily: fonts.main, fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
            color: colors.textLight, fontWeight: 500, fontStyle: 'italic',
            maxWidth: 580, lineHeight: 1.55,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}>
            "{QUESTIONS[questionIdx]}"
          </p>
        </div>

        {/* Subline */}
        <p style={{
          fontFamily: fonts.main, fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          color: colors.textLight, maxWidth: 520,
          margin: '0 auto 44px', lineHeight: 1.75,
        }}>
          An app that helps you regulate stress and anxiety by adapting your home to how you feel.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: colors.green, color: 'white', border: 'none', borderRadius: 50,
            padding: '15px 36px', fontFamily: fonts.main, fontWeight: 700, fontSize: 16,
            cursor: 'pointer', boxShadow: `0 8px 32px ${colors.green}40`,
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = `0 12px 36px ${colors.green}55`; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = `0 8px 32px ${colors.green}40`; }}
          >
            Join the waitlist
          </button>
          <button style={{
            background: 'transparent', color: colors.darkGreen,
            border: `1.5px solid ${colors.green}55`, borderRadius: 50,
            padding: '15px 36px', fontFamily: fonts.main, fontWeight: 600, fontSize: 16,
            cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.background = `${colors.softGreen}28`; e.target.style.borderColor = colors.green; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = `${colors.green}55`; }}
          >
            Discover more ↓
          </button>
        </div>
      </div>

      {/* Phone mockup */}
      <div style={{ marginTop: 72, position: 'relative', zIndex: 1 }}>
        <PhoneMockup />
      </div>

      {/* Wave transition */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Wave />
      </div>
    </section>
  );
}

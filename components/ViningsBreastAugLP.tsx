'use client'
import { Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import { useReveal } from '@/lib/useReveal'
import {
  GOLD, NAVY, NAV_BG, HEADING, BODY, CARD_BG, CARD_BORDER,
  PHONE_SURGERY, PHONE_SURGERY_HREF, LOGO_FULL, WORDMARK,
} from '@/lib/brand'

// Recreation of start.colgrove.com/breast-augmentation-meta/ (Vinings Surgery).
// This is deliberately an EDUCATIONAL page — the source neither advertises nor
// offers a surgical/invasive procedure; it discusses general breast health and
// how physicians approach patient questions. Consult-first (Layer 1) by design.
// Copy reproduced verbatim from source. HIPAA carve-out: no browser Meta pixel
// (GTM route-gated off /m/; attribution rides GhlForm params + server-side CAPI).

const Check = () => (
  <span style={{
    flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 22, height: 22, background: GOLD, borderRadius: '50%',
  }}>
    <svg width="10" height="8" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L5 9L1 5" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

export default function ViningsBreastAugLP({ formId }: { formId: string }) {
  const heroReveal = useReveal<HTMLElement>()
  const commitReveal = useReveal<HTMLElement>()
  const topicsReveal = useReveal<HTMLElement>()
  const approachReveal = useReveal<HTMLElement>()
  const focusReveal = useReveal<HTMLElement>()
  const visitReveal = useReveal<HTMLElement>()
  const doctorReveal = useReveal<HTMLElement>()
  const faqReveal = useReveal<HTMLElement>()

  const faqs = [
    ['What is the purpose of the initial consultation?', 'The consultation is an educational meeting. It allows the physician to understand your goals, review your medical history, and determine candidacy and options. It also gives you the opportunity to learn about the available options, ask questions, and discuss alternatives without any obligation to proceed.'],
    ['How should I prepare for my consultation?', 'Bring a list of questions, your medical history (including medications, and allergies), and information about your general health. Some patients find it helpful to bring photographs that illustrate their desired outcome. Wear comfortable clothing and consider bringing a supportive friend or family member for additional perspective.'],
    ['How long does a consultation typically last?', 'Consultation appointments generally last between 45 minutes and an hour, though times vary based on your questions and the complexity of your medical history. The physician will take the time needed to explain concepts thoroughly and ensure you feel comfortable.'],
  ]

  return (
    <>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* Nav */}
      <header className="site-header" style={{
        background: '#fff', borderBottom: `1px solid ${CARD_BORDER}`, display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div className="site-header-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={LOGO_FULL} alt={WORDMARK} height={44} style={{ width: 'auto' }} />
        </div>
        <div className="site-header-actions" style={{ display: 'flex', alignItems: 'center' }}>
          <a className="phone-link" href={PHONE_SURGERY_HREF} style={{ color: HEADING, fontWeight: 600, textDecoration: 'none' }}>
            {PHONE_SURGERY}
          </a>
          <a href="#hero-form" className="header-cta" style={{
            background: NAVY, color: '#fff', fontWeight: 700, borderRadius: 24,
            textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap',
          }}>
            Learn More
          </a>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroReveal.ref} className={heroReveal.className} style={{ background: '#faf8f3', padding: '56px 24px 48px' }}>
        <div className="two-col" style={{ maxWidth: 1150, margin: '0 auto', alignItems: 'start', gap: 48 }}>
          <div>
            <span style={{ display: 'inline-block', background: '#f0e8d5', color: NAVY, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 40, marginBottom: 18 }}>
              Educational Information
            </span>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: HEADING, lineHeight: 1.2, margin: '0 0 16px' }}>
              Understanding Breast Health &amp; Common Concerns
            </h1>
            <p style={{ fontSize: 16, color: BODY, margin: '0 0 28px', lineHeight: 1.65 }}>
              General educational information reviewed during medical office visits.
            </p>
            <img src="/img/m/breast-consult.webp" alt="Physician and patient during an educational office visit" style={{ width: '100%', borderRadius: 16, display: 'block' }} />
          </div>
          <div id="hero-form" style={{ background: '#fff', border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: '24px', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>Request Information</p>
            <p style={{ fontSize: 13, color: BODY, margin: '0 0 12px' }}>Ask a question or request general information about an educational office visit.</p>
            <GhlForm formId={formId} height={440} />
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section ref={commitReveal.ref} className={commitReveal.className} style={{ background: '#fff', padding: '56px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 800, color: HEADING, margin: '0 0 16px' }}>
            Commitment to Patient Understanding
          </h2>
          <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.75 }}>
            Our practice emphasizes education, clarity, and respectful communication. Information shared during
            visits is intended to support patient understanding and thoughtful decision-making. Individual
            experiences and considerations vary.
          </p>
        </div>
      </section>

      {/* Common Topics */}
      <section ref={topicsReveal.ref} className={topicsReveal.className} style={{ background: '#faf8f3', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1050, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            Common Topics Discussed During Office Visits
          </h2>
          <div className="two-col" style={{ gap: 20 }}>
            {[
              ['Anatomy', 'General breast anatomy and how natural variation occurs between individuals.'],
              ['Personal Concerns', 'Common reasons individuals seek information and how physicians listen to and evaluate patient questions.'],
              ['Changes Over Time', 'How age, life events, and hormonal factors may influence breast appearance and structure.'],
              ['When to Seek Guidance', 'Situations in which individuals may choose to speak with a licensed medical professional for additional information.'],
            ].map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 14, background: '#fff', border: `1px solid ${CARD_BORDER}`, borderRadius: 12, padding: '22px 24px' }}>
                <Check />
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>{t}</h3>
                  <p style={{ fontSize: 14, color: BODY, margin: 0, lineHeight: 1.6 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Physicians Approach */}
      <section ref={approachReveal.ref} className={approachReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, margin: '0 0 16px', lineHeight: 1.25 }}>
              How Physicians Approach Patient Questions
            </h2>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 20px', lineHeight: 1.75 }}>
              When individuals request information during an office visit, physicians focus on understanding the
              person as a whole. Educational discussions are guided by medical training, clinical knowledge, and
              open communication.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Review of medical history and relevant background',
                'Discussion of personal concerns and questions',
                'Explanation of general medical concepts',
                'Opportunity for individuals to ask questions and gain clarity',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Check />
                  <span style={{ fontSize: 15, color: BODY }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/img/m/breast-computer.webp" alt="Reviewing educational information" style={{ width: '100%', borderRadius: 16, display: 'block' }} />
        </div>
      </section>

      {/* Focus on Education */}
      <section ref={focusReveal.ref} className={focusReveal.className} style={{ background: NAVY, padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: '#fff', margin: '0 0 18px' }}>
            A Focus on Education and Understanding
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', margin: '0 0 14px', lineHeight: 1.75 }}>
            Our practice emphasizes patient education, transparency, and respectful communication. Information
            shared during office visits is intended to support understanding and informed decision-making.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.75 }}>
            No two individuals are the same, and medical discussions are tailored to personal questions and needs.
            Outcomes are not guaranteed, and no single approach is appropriate for everyone.
          </p>
        </div>
      </section>

      {/* Educational Visit */}
      <section ref={visitReveal.ref} className={visitReveal.className} style={{ background: '#faf8f3', padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, margin: '0 0 8px' }}>initial steps</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, margin: '0 0 16px' }}>
            What Is Discussed During an Educational Visit
          </h2>
          <p style={{ fontSize: 15, color: BODY, margin: '0 0 18px', lineHeight: 1.75 }}>
            This educational visit is intended to provide general information and answer questions in a
            professional medical setting.
          </p>
          <p style={{ fontSize: 15, fontWeight: 700, color: HEADING, margin: '0 0 12px' }}>During your visit, Dr. Colgrove will discuss:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {[
              'General breast anatomy and physiology',
              'Common aesthetic and health-related concerns',
              'Review of individual goals and questions',
              'Overview of how physicians evaluate patient concerns',
              'Explanation of general considerations discussed during medical visits',
            ].map(t => (
              <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Check />
                <span style={{ fontSize: 15, color: BODY }}>{t}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: BODY, margin: '0 0 24px', lineHeight: 1.75 }}>
            Individuals are encouraged to ask questions and take time to understand the information provided.
          </p>
          <a href="#bottom-form" style={{ display: 'inline-block', background: NAVY, color: '#fff', padding: '14px 30px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Learn More
          </a>
        </div>
      </section>

      {/* Meet Dr. Colgrove */}
      <section ref={doctorReveal.ref} className={doctorReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, margin: '0 0 8px' }}>MEET Dr. Colgrove</p>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 16px', lineHeight: 1.75 }}>
              Dr. Robert A. Colgrove, Jr. is a board-certified physician with more than three decades of clinical
              experience. He earned his medical degree from Loma Linda University School of Medicine and completed
              advanced postgraduate medical training. Dr. Colgrove has practiced medicine in the Atlanta, Georgia
              area since 1986.
            </p>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 16px', lineHeight: 1.75 }}>
              In his current practice, Dr. Colgrove focuses on the medical evaluation and management of hair loss
              conditions, including alopecia. His approach emphasizes patient assessment, education, informed
              decision-making, and medically appropriate planning related to hair loss concerns.
            </p>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 24px', lineHeight: 1.75 }}>
              Dr. Colgrove maintains active medical licensure and board certification and remains directly involved
              in patient care. His work follows recognized medical standards, applicable regulations, and ethical
              guidelines related to hair loss evaluation and non-surgical management.
            </p>
            <a href="#bottom-form" style={{ display: 'inline-block', border: `2px solid ${NAVY}`, color: NAVY, padding: '12px 28px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
              Learn About the Practice
            </a>
          </div>
          <div id="bottom-form" style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: '24px' }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: HEADING, margin: '0 0 12px' }}>Request Information</p>
            <GhlForm formId={formId} height={440} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqReveal.ref} className={faqReveal.className} style={{ background: '#faf8f3', padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 36px' }}>
            Common Topics Discussed During Office Visits
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map(([q, a]) => (
              <div key={q} style={{ background: '#fff', border: `1px solid ${CARD_BORDER}`, borderRadius: 12, padding: '22px 24px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: HEADING, margin: '0 0 10px' }}>{q}</h3>
                <p style={{ fontSize: 14, color: BODY, margin: 0, lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: NAV_BG, color: 'rgba(255,255,255,0.7)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>Vinings Surgery</p>
          <p style={{ fontSize: 13, margin: '0 0 4px' }}>1900 The Exchange SE Bldg 300 Suite 300 Atlanta, GA 30339</p>
          <p style={{ fontSize: 13, margin: '0 0 4px' }}>Monday-Friday 8:00am to 5pm &nbsp;&bull;&nbsp; Saturday &amp; Sunday Closed</p>
          <p style={{ fontSize: 13, margin: '0 0 20px' }}>
            <a href={PHONE_SURGERY_HREF} style={{ color: GOLD, textDecoration: 'none' }}>{PHONE_SURGERY}</a>
          </p>
          <p style={{ fontSize: 12, lineHeight: 1.7, margin: '0 0 16px', color: 'rgba(255,255,255,0.6)' }}>
            This page provides general educational information only and does not advertise, promote, or offer
            surgical or invasive medical procedures. Information presented is not a substitute for personalized
            medical advice. Individuals should consult a qualified healthcare professional for questions specific
            to their health.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 12 }}>
            <span>&copy; 2026 Vinings Surgery</span>
            <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>PRIVACY POLICY</a>
          </div>
        </div>
      </footer>
    </>
  )
}

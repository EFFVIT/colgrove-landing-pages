'use client'
import { Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import { useReveal } from '@/lib/useReveal'
import {
  GOLD, NAVY, NAV_BG, HEADING, BODY, CARD_BG, CARD_BORDER,
  PHONE_SURGERY, PHONE_SURGERY_HREF, ADDRESS, LOGO_FULL, WORDMARK,
} from '@/lib/brand'

// Recreation of start.colgrove.com/facelift-meta/ (Vinings Surgery — plastic
// surgery / invasive). Layer 1 consult-first framing preserved; copy reproduced
// verbatim from source (Joe waived Meta ad-policy softening). COMPLIANCE: the
// source "BEFORE-AND-AFTER PHOTOS" gallery (actual patient facelift photos) is
// intentionally OMITTED per the plastic-surgery no-before/after-imagery rule —
// replaced with neutral aesthetic portraits. HIPAA carve-out: no browser Meta
// pixel (GTM route-gated off /m/; attribution rides GhlForm + server-side CAPI).

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

export default function ViningsFaceliftLP({ formId }: { formId: string }) {
  const heroReveal = useReveal<HTMLElement>()
  const introReveal = useReveal<HTMLElement>()
  const treatsReveal = useReveal<HTMLElement>()
  const benefitsReveal = useReveal<HTMLElement>()
  const experienceReveal = useReveal<HTMLElement>()
  const faqReveal = useReveal<HTMLElement>()
  const testimonialsReveal = useReveal<HTMLElement>()

  const treats = [
    'Deep creases and wrinkles, especially those around the mouth and nose',
    'Loose or sagging skin',
    'Jowls or a weakened jawline',
    'Decreased facial volume and muscle tone',
    'Facial signs of tiredness or aging',
    'Double chins or unnecessary fat under the chin',
    'Folds or lines from the nose to the mouth (nasolabial folds)',
    'Lines from the mouth to chin (marionette lines)',
  ]

  const benefits = [
    'Smooths Deep Wrinkles and Creases', 'Restores Facial Contours', 'Tightens Sagging Skin',
    'Boosts Self-Confidence', 'Improved Neck Appearance', 'Reduces Jowls', 'Redefines the Jawline',
    'Eliminates Double Chins', 'Better Facial Symmetry', 'Natural-Looking Results',
    'Improved Cheekbones & Eyebrows', 'Better Facial Elasticity',
  ]

  const experience = [
    ['Consultation', 'Everything starts with a consultation with Dr. Colgrove. During this meeting, they will listen carefully to your aesthetic goals and concerns. They will then evaluate your natural facial structure and discuss your options, answering all of your questions, and creating a custom treatment plan to achieve the natural-looking results you want.'],
    ['Surgery', 'During your surgery, you’ll be in the skilled, experienced hands of Dr. Colgrove. Thanks to Dr. Colgrove’s precision methods, you will typically have discreet incisions around the ears and hairline while tightening skin and the underlying muscles, removing any unwanted fat, adding facial volume if needed, and improving facial contours. Surface skin can be treated at the same time for a shortened recovery period.'],
    ['Recovery', 'Dr. Colgrove will provide you with detailed post-operative care instructions to ensure you experience a smooth recovery. Some swelling, discomfort, and bruising are common afterward and usually eases within a few weeks. Normal activities can usually be resumed in 2-3 weeks, but full recovery from facial swelling may take up to a few months.'],
    ['Results', 'Your renewed appearance will gradually appear as the swelling fades, with the full results noticeable within 3-6 months, giving you a natural-looking, long-lasting, rejuvenated, refreshed appearance that will boost your confidence and overall sense of self.'],
  ]

  const faqs = [
    ['How Long Does a Facelift Last?', 'The appearance created by a facelift typically lasts about 7-10 years, depending upon various factors include age, lifestyle, skin type, and the surgical techniques used during your procedure. Most patients enjoy their rejuvenated appearance so while the aging process does continue, they may decide to undergo touch-ups or other treatments to maintain their results.'],
    ['Is a Facelift Only for Older Patients?', 'While facelifts are most commonly associated with those in their 40s to 60s, the procedure can also be beneficial for younger people. A mini facelift could address signs of aging like sagging skin and deep wrinkles at any age, extending your youthful appearance.'],
    ['Will There Be Visible Scarring?', 'Dr. Colgrove uses advanced techniques and years of experience to minimize scarring. They will strategically place incisions behind the ears and in natural creases to make them difficult to detect after healing. With proper after-care, scars usually fade with time and become virtually undetectable.'],
  ]

  const testimonials = [
    ['Tamara', 'I have been a long standing patient of Dr Colgrove since 2001! He is truly to ONLY surgeon I trust! Dr Colgrove is the most knowledgeable in the industry and knows how to transform your body and make you feel comfortable and beautiful! Great staff and the experience is always warm and welcoming!'],
    ['Tay J.', 'Dr. Colgrove is simply the BEST! He listens and communicates effectively! The staff is also Amazing. 10/10'],
    ['Madison M.', 'Dr. Colgrove did an amazing job with my surgery! He was so helpful throughout the entire process. I will definitely return for any future cosmetic surgery I consider. The nurse staff was also so caring and helpful during all of my appointments and check ups.'],
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
            Schedule a Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroReveal.ref} className={heroReveal.className} style={{ background: '#faf8f3', padding: '56px 24px 48px' }}>
        <div className="two-col" style={{ maxWidth: 1150, margin: '0 auto', alignItems: 'start', gap: 48 }}>
          <div>
            <h1 style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 800, color: HEADING, lineHeight: 1.15, margin: '0 0 18px', textTransform: 'uppercase' }}>
              Facelift
            </h1>
            <p style={{ fontSize: 16, color: BODY, margin: '0 0 24px', lineHeight: 1.7 }}>
              You can look and feel younger with facial rejuvenation, and Vinings Surgery, in Atlanta, GA is the
              perfect place for your facelift. Dr. Colgrove has decades of experience providing expert results and
              care. Facelifts are effective treatments for sagging skin, loss of facial volume, deep wrinkles, and
              jowls, recreating the more youthful appearance you&rsquo;ve been missing.
            </p>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: GOLD, margin: '0 0 4px' }}>Real Patients, Real Results</p>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 20px', lineHeight: 1.7 }}>
              Don&rsquo;t you deserve to love yourself when you look in the mirror? Schedule a consultation with
              Dr. Colgrove today to enhance your natural beauty.
            </p>
            <img src="/img/m/facelift-1.webp" alt="Facial rejuvenation at Vinings Surgery" style={{ width: '100%', borderRadius: 16, display: 'block' }} />
          </div>
          <div id="hero-form" style={{ background: '#fff', border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: '24px', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>Schedule Your Consultation</p>
            <p style={{ fontSize: 13, color: BODY, margin: '0 0 12px' }}>Request a private consultation with Dr. Colgrove.</p>
            <GhlForm formId={formId} height={440} />
          </div>
        </div>
      </section>

      {/* Intro para */}
      <section ref={introReveal.ref} className={introReveal.className} style={{ background: '#fff', padding: '56px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.8 }}>
            Dr. Colgrove is a board-certified plastic surgeon who has been practicing for over 30 years,
            specializing in full and partial facelifts, as well as other facial cosmetic surgery procedures. Their
            expertise ensures personalized care and exceptional results customized to your unique needs. At
            Vinings Surgery Center, Dr. Colgrove uses the best, state-of-the-art techniques to help you achieve a
            refreshed, more youthful looking appearance. To learn more, schedule your facelift consultation with
            Dr. Colgrove today and you&rsquo;ll have renewed confidence and a revitalized look in no time.
          </p>
        </div>
      </section>

      {/* Reverse the signs / treats */}
      <section ref={treatsReveal.ref} className={treatsReveal.className} style={{ background: '#faf8f3', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1080, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <img src="/img/m/facelift-2.webp" alt="Refreshed, youthful facial appearance" style={{ width: '100%', borderRadius: 16, display: 'block' }} />
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, margin: '0 0 8px' }}>Aesthetic Excellence</p>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, margin: '0 0 16px', lineHeight: 1.25 }}>
              Reverse the Visible Signs of Aging on Your Face and Neck
            </h2>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 20px', lineHeight: 1.7 }}>
              A facelift, or rhytidectomy, is a cosmetic surgery procedure that creates a smoother, more youthful
              appearance in the face and neck by tightening underlying muscles and removing excess sagging skin. A
              facelift is an ideal surgery for those who want to address deep wrinkles, jowls, and loss of facial
              muscle tone to achieve a natural, refreshed look.
            </p>
            <p style={{ fontSize: 14, fontWeight: 700, color: HEADING, margin: '0 0 12px' }}>A Facelift Treats:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {treats.map(t => (
                <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Check />
                  <span style={{ fontSize: 14, color: BODY, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsReveal.ref} className={benefitsReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1050, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, margin: '0 0 8px' }}>Facial Rejuvenation</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, margin: '0 0 36px' }}>
            Benefits of a Facelift
          </h2>
          <div className="three-col" style={{ gap: 16, textAlign: 'left' }}>
            {benefits.map(b => (
              <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'center', background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 10, padding: '16px 18px' }}>
                <Check />
                <span style={{ fontSize: 14, color: HEADING, fontWeight: 600 }}>{b}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <a href="#hero-form" style={{ display: 'inline-block', background: NAVY, color: '#fff', padding: '15px 32px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Your facelift experience */}
      <section ref={experienceReveal.ref} className={experienceReveal.className} style={{ background: NAVY, padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, textAlign: 'center', margin: '0 0 8px' }}>Aesthetic Excellence</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: '#fff', textAlign: 'center', margin: '0 0 40px' }}>
            Your Facelift Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {experience.map(([t, d], i) => (
              <div key={t} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', background: GOLD, color: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800 }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{t}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', margin: 0, lineHeight: 1.7 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqReveal.ref} className={faqReveal.className} style={{ background: '#faf8f3', padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, textAlign: 'center', margin: '0 0 8px' }}>Facelift FAQs</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 36px' }}>
            Common Facelift Questions
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

      {/* Testimonials */}
      <section ref={testimonialsReveal.ref} className={testimonialsReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, textAlign: 'center', margin: '0 0 8px' }}>Testimonials</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            What Our Clients Are Saying About Us
          </h2>
          <div className="three-col" style={{ alignItems: 'stretch' }}>
            {testimonials.map(([name, text]) => (
              <div key={name} style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: '28px 26px', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: 14, color: BODY, margin: '0 0 20px', lineHeight: 1.7, flex: 1 }}>{text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid #eef0f3', paddingTop: 16 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: HEADING }}>{name}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: GOLD }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: NAV_BG, color: 'rgba(255,255,255,0.7)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>Vinings Surgery</p>
          <p style={{ fontSize: 13, margin: '0 0 4px' }}>
            <a href={PHONE_SURGERY_HREF} style={{ color: GOLD, textDecoration: 'none' }}>{PHONE_SURGERY}</a>
          </p>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', margin: '16px 0 4px' }}>Location</p>
          <p style={{ fontSize: 13, margin: '0 0 20px' }}>{ADDRESS}</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 12 }}>
            <span>&copy; 2026 Vinings Surgery</span>
            <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}

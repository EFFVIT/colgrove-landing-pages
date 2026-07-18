'use client'
import { useEffect } from 'react'

interface Props {
  formId: string
  title: string
  sub: string
  submitLabel: string
  lpVariant: string
}

export default function RhrliForm({ formId, title, sub, submitLabel, lpVariant }: Props) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const keys = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    keys.forEach(k => {
      const v = params.get(k)
      if (v) localStorage.setItem('rhrli_' + k, v)
    })
    keys.forEach(k => {
      const el = document.getElementById('f_' + k) as HTMLInputElement | null
      const stored = localStorage.getItem('rhrli_' + k)
      if (el && stored) el.value = stored
    })
  }, [])

  return (
    <div className="form-card" id={formId}>
      <p className="form-card-title">{title}</p>
      <p className="form-card-sub">{sub}</p>
      <form action="/api/submit" method="POST">
        <div className="form-row form-row-2">
          <div className="form-row">
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" placeholder="John" required />
          </div>
          <div className="form-row">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" placeholder="Smith" required />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="(516) 555-0100" required />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="you@email.com" required />
        </div>
        <div className="form-row">
          <label htmlFor="message">
            Anything you&apos;d like us to know?{' '}
            <span style={{ fontWeight: 400, textTransform: 'none' }}>(optional)</span>
          </label>
          <textarea id="message" name="message" placeholder="Questions, timeline, or anything else..." />
        </div>
        <input type="hidden" name="gclid" id="f_gclid" />
        <input type="hidden" name="utm_source" id="f_utm_source" />
        <input type="hidden" name="utm_medium" id="f_utm_medium" />
        <input type="hidden" name="utm_campaign" id="f_utm_campaign" />
        <input type="hidden" name="utm_term" id="f_utm_term" />
        <input type="hidden" name="utm_content" id="f_utm_content" />
        <input type="hidden" name="lp_variant" value={lpVariant} />
        <button type="submit" className="btn-submit">{submitLabel} →</button>
      </form>
      <p className="form-privacy">Your information is private and never shared. HIPAA-compliant practice.</p>
    </div>
  )
}

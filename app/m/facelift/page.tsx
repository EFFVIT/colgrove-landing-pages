import type { Metadata } from 'next'
import ViningsFaceliftLP from '@/components/ViningsFaceliftLP'

// Plastic surgery (invasive). Layer 1 consult-first framing preserved; copy
// verbatim from source. The source before/after patient-photo gallery is
// intentionally OMITTED per the plastic-surgery no-before/after-imagery rule.
export const metadata: Metadata = {
  title: 'Facelift | Facial Rejuvenation in Atlanta, GA | Vinings Surgery',
  description: 'Reverse the visible signs of aging with a facelift at Vinings Surgery in Atlanta, GA. Schedule a consultation with board-certified surgeon Dr. Colgrove.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.colgrove.com/og/m-facelift.webp', width: 1200, height: 630, alt: 'Facelift consultation at Vinings Surgery in Atlanta' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.colgrove.com/og/m-facelift.webp'] },
}

export default function MFacelift() {
  return <ViningsFaceliftLP formId="qpsDVgAhAr0brB4kP2WQ" />
}

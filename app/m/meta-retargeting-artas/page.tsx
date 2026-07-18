import type { Metadata } from 'next'
import ViningsMetaRetargetingLP from '@/components/ViningsMetaRetargetingLP'

// ARTAS is a device trademark (compliance FM5). Manufacturer attribution kept
// (ARTAS® is a registered trademark of Venus Concept); no added device claims.
// Consult-first (Layer 1) framing preserved. Copy reproduced verbatim from
// start.colgrove.com/meta-retargeting-artas/ per Joe's Meta-softening waiver.
export const metadata: Metadata = {
  title: 'ARTAS® Robotic Hair Restoration | Minimally Invasive | Vinings Surgery',
  description: 'Worried about surgery or shaving? Get clarity in 60 seconds. Request a private evaluation with Vinings Surgery & Hair Restoration Center in Atlanta to confirm if ARTAS® or another method is right for you.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.colgrove.com/og/m-meta-retargeting-artas.webp', width: 1200, height: 630, alt: 'ARTAS robotic hair restoration consultation at Vinings Surgery' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.colgrove.com/og/m-meta-retargeting-artas.webp'] },
}

export default function MMetaRetargetingArtas() {
  return (
    <ViningsMetaRetargetingLP
      heroFormId="8ZztQajDv4OmHaMtv6mP"
      bottomFormId="5fuQvxolhL3ZzKSVYCnn"
      variant="artas"
    />
  )
}

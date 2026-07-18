import type { Metadata } from 'next'
import ViningsMetaRetargetingLP from '@/components/ViningsMetaRetargetingLP'

export const metadata: Metadata = {
  title: 'Still Considering Hair Restoration? | Questions Answered | Vinings Surgery',
  description: 'Worried about surgery or shaving? Get answers in 60 seconds. A private evaluation with Vinings Surgery & Hair Restoration Center in Atlanta—no pressure, no obligation.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.colgrove.com/og/m-meta-retargeting.webp', width: 1200, height: 630, alt: 'Vinings hair restoration consultation in Atlanta' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.colgrove.com/og/m-meta-retargeting.webp'] },
}

export default function MMetaRetargeting() {
  return (
    <ViningsMetaRetargetingLP
      heroFormId="UeVcM38whtesm02oF4CR"
      bottomFormId="voi20qQZjPfxViSZZzom"
      variant="standard"
    />
  )
}

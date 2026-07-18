import type { Metadata } from 'next'
import ViningsMetaLP from '@/components/ViningsMetaLP'

export const metadata: Metadata = {
  title: 'Hair Restoration Consultation | See If You’re a Candidate | Vinings Surgery',
  description: 'A private, personalized consultation to evaluate your hair loss, treatment options, and expected results with Vinings Surgery & Hair Restoration Center in Atlanta. Not a sales appointment.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.colgrove.com/og/m-meta.webp', width: 1200, height: 630, alt: 'Hair restoration consultation at Vinings Surgery in Atlanta' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.colgrove.com/og/m-meta.webp'] },
}

export default function MMeta() {
  return (
    <ViningsMetaLP
      heroFormId="tHkGT4cjskn24IAON5fJ"
      bottomFormId="MnH9PckFo8dGUnHDiR5X"
    />
  )
}

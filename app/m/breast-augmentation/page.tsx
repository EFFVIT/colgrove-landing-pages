import type { Metadata } from 'next'
import ViningsBreastAugLP from '@/components/ViningsBreastAugLP'

// Educational page (source neither advertises nor offers a surgical/invasive
// procedure). Consult-first (Layer 1) by design. Copy verbatim from source.
export const metadata: Metadata = {
  title: 'Understanding Breast Health & Common Concerns | Vinings Surgery',
  description: 'General educational information reviewed during medical office visits at Vinings Surgery & Hair Restoration Center in Atlanta. Not a substitute for personalized medical advice.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.colgrove.com/og/m-breast-augmentation.webp', width: 1200, height: 630, alt: 'Educational office visit at Vinings Surgery in Atlanta' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.colgrove.com/og/m-breast-augmentation.webp'] },
}

export default function MBreastAugmentation() {
  return <ViningsBreastAugLP formId="le1CnI2cty1siTDoCA4m" />
}

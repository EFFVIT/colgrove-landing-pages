import type { Metadata } from 'next'
import ViningsMetaLP from '@/components/ViningsMetaLP'
import GhlChatWidget, { VININGS_HAIR_CHAT_WIDGET_ID } from '@/components/GhlChatWidget'

export const metadata: Metadata = {
  title: 'Hair Restoration Consultation | See If You’re a Candidate | Vinings Surgery',
  description: 'A private, personalized consultation to evaluate your hair loss, treatment options, and expected results with Vinings Surgery & Hair Restoration Center in Atlanta. Not a sales appointment.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.colgrove.com/og/m-meta.webp', width: 1200, height: 630, alt: 'Hair restoration consultation at Vinings Surgery in Atlanta' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.colgrove.com/og/m-meta.webp'] },
}

export default function MMeta() {
  return (
    <>
      <ViningsMetaLP
        heroFormId="wKpEZK16ehrLRfIp9I9X"
        bottomFormId="tho3N1dWh1rDdrhsa8kt"
      />
      <GhlChatWidget widgetId={VININGS_HAIR_CHAT_WIDGET_ID} />
    </>
  )
}

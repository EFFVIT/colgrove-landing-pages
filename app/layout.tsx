import DniSwap from '@/components/DniSwap'
import Fab from '@/components/fab/Fab'
import GtmTags from '@/components/GtmTags'
import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: 'Vinings Surgery & Hair Restoration Center',
  description: 'Vinings Surgery & Hair Restoration Center — Atlanta, GA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Lato — the source funnel's brand typeface. Loaded at runtime (no
            build-time font fetch) so the production build stays hermetic. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* GTM is route-gated OFF on every /m/ page (HIPAA carve-out — no browser
            Meta pixel / GA4 on health-intent form pages). See GtmTags.tsx. The
            RootLogic Call/Chat FAB replaces the source funnel's GHL chat widget. */}
        <GtmTags />
      </head>
      <body>
        <DniSwap />
        <Fab client="colgrove" />
        {children}
      </body>
    </html>
  )
}

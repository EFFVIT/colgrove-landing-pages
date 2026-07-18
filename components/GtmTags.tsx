'use client'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

// Google Tag Manager, route-gated. Colgrove / Vinings container GTM-K4CLG26H
// fires a Meta Pixel (and other client-side tags) on every page of the source
// funnel. Every /m/ route on this app is a medical consult/form page with
// health intent, so per H-26 / §6 failure mode 7 they must carry NO client-side
// tracking — no Meta pixel, no GA4. Attribution rides the GhlForm params
// (fbclid + gclid + UTM) + server-side CAPI instead. Returning null on /m/ means
// GTM never loads there, so window.fbq stays undefined. Since every page this
// app ships today lives under /m/, GTM effectively never loads — the gate is
// kept generic so any future top-of-funnel (non-health) route keeps GTM intact.
const GTM_ID = 'GTM-K4CLG26H'

export default function GtmTags() {
  const pathname = usePathname() || ''
  if (pathname.startsWith('/m/') || pathname === '/m') return null

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

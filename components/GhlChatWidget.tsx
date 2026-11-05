import Script from 'next/script'

// RootLogic chat widget loader. The FAB hides the native bubble while idle
// (enforceGhlIdleHidden), so chat opens through the FAB's ghl_chat chip; the
// chip does nothing unless this loader is on the page.
//
// Rendered per page, not in the root layout: the /m/ hair pages use the
// Vinings Hair widget and the surgery pages the Vinings Surgery widget, one
// per RootLogic location.
export const VININGS_HAIR_CHAT_WIDGET_ID = '68dd37c03756c981ae342c9a'
export const VININGS_SURGERY_CHAT_WIDGET_ID = '684992bd6de4770f58e6f871'

export default function GhlChatWidget({ widgetId }: { widgetId: string }) {
  return (
    <Script
      id={`ghl-chat-${widgetId}`}
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={widgetId}
      strategy="afterInteractive"
    />
  )
}

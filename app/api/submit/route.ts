import { NextRequest, NextResponse } from 'next/server'

// TODO: wire to GHL webhook or Supabase leads table
export async function POST(req: NextRequest) {
  const data = await req.formData()
  const payload = Object.fromEntries(data.entries())
  console.log('[submit]', payload)
  return NextResponse.redirect(new URL('/thank-you', req.url))
}

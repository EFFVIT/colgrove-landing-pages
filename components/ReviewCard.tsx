'use client'
import { useState } from 'react'

const NAVY = '#0D1B35'
const GOLD = '#F0B429'
const BLUE = '#1B3498'
const PREVIEW = 165

export default function ReviewCard({ name, text }: { name: string; text: string }) {
  const [open, setOpen] = useState(false)
  const short = text.length > PREVIEW
    ? text.slice(0, PREVIEW).replace(/\s+\S*$/, '') + '…'
    : text

  return (
    <div style={{
      background: '#F4F4F4',
      borderRadius: 8,
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <div style={{ color: NAVY, fontSize: '2rem', marginBottom: 8, lineHeight: 1 }}>&ldquo;</div>
      <div style={{ color: GOLD, fontSize: '1rem', letterSpacing: 3, marginBottom: 16 }}>★★★★★</div>
      <p style={{ color: '#444', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
        {open ? text : short}
      </p>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: BLUE,
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.78rem',
          letterSpacing: '0.06em',
          padding: '10px 24px',
          borderRadius: 24,
          border: 'none',
          cursor: 'pointer',
          marginBottom: 16,
          fontFamily: 'inherit',
        }}
      >
        {open ? 'READ LESS' : 'READ MORE'}
      </button>
      <p style={{ color: BLUE, fontWeight: 700, fontSize: '0.9rem' }}>{name}</p>
    </div>
  )
}

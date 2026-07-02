import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Protocol | Nexphoria',
  description: 'Complete your personalized peptide protocol intake — reviewed by a board-certified physician.',
  robots: { index: false, follow: false },
}

export default function IntakeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="intake-shell" style={{ isolation: 'isolate' }}>
      {children}
    </div>
  )
}


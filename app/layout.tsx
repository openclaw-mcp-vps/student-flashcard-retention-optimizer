import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flashcard Retention Optimizer — Spaced Repetition Science',
  description: 'Optimize flashcard review timing using SM-2 and FSRS spaced repetition algorithms for maximum retention. Built for medical students, language learners, and exam candidates.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a3c1f212-7ab3-4c46-978f-7fa4484a2d50"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

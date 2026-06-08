export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Spaced Repetition Science
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Flashcard Review Timing for{' '}
          <span className="text-[#58a6ff]">Maximum Retention</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyzes your flashcard performance and adjusts review intervals using SM-2 and FSRS algorithms. Built for medical students, language learners, and professional exam candidates.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $9/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          {[
            ['SM-2 & FSRS', 'Algorithms'],
            ['2× Faster', 'Retention'],
            ['Any Deck', 'Import/Create']
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{val}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited flashcard decks',
              'SM-2 & FSRS algorithm support',
              'Performance analytics dashboard',
              'CSV / Anki import',
              'Daily review reminders',
              'Priority support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              'What is spaced repetition and how does it work?',
              'Spaced repetition schedules reviews at increasing intervals based on how well you recall each card. The SM-2 and FSRS algorithms calculate the optimal next review date so you study just before you forget, maximizing long-term retention with minimal effort.'
            ],
            [
              'Can I import my existing Anki decks?',
              'Yes. You can import decks via CSV or Anki-compatible formats. Your cards and any existing scheduling data are preserved so you can continue right where you left off.'
            ],
            [
              'Is my data safe and can I cancel anytime?',
              'Your data is encrypted and stored securely. You can export all your decks at any time. Subscriptions are billed monthly and you can cancel with one click — no questions asked.'
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        © {new Date().getFullYear()} Flashcard Retention Optimizer. All rights reserved.
      </footer>
    </main>
  )
}

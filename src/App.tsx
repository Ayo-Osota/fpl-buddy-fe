import Formation from './components/Formation'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <main className="even-columns pg-container mt-[4.5rem] h-full p-4 pb-32 text-white">
      <section>
        <h1 className="text-[2rem] leading-10 font-medium text-white/90">Your FPL Buddy</h1>
        <p className="mt-2 max-w-[56ch] text-sm font-light text-white/60">
          Tired of last-minute FPL regrets? Our Fantasy Premier League Data Analysis Tool helps you
          make smarter picks, maximize points, and climb the ranks with confidence. We crunch the
          numbers so you don’t have to—analyzing xG, xA, fixture difficulty, player availability,
          set-piece duties, and even the sneaky impact of international breaks.
        </p>
        <p className="mt-2 max-w-[56ch] text-sm font-light text-white/60">
          But wait, it gets even better! We’re currently training an AI-powered FPL expert that will
          chat with you in real-time using LLM and voice recognition—so soon, you can debate
          captaincy choices, wildcard strategies, and differential picks just like you would with
          your football-obsessed mate.
        </p>
        <p className="mt-2 max-w-[56ch] text-sm font-light text-white/60">
          Get ready to outthink, outplay, and outscore your mini-league rivals. The future of FPL is
          here!
        </p>
        <p className="mt-10 max-w-[47ch] text-base text-white/90">
          For more analysis or if you want to know how this team was gotten, or if wish to edit this
          page.{' '}
          <a href="https://github.com/Ayo-Osota/fpl-buddy" className="text-primary font-semibold">
            Click here
          </a>
        </p>

        <div className="max-lg:hidden">
          <Newsletter />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-light text-white/90">Suggested team for the week</h2>

        <Formation />

        <div className="lg:hidden">
          <Newsletter />
        </div>
      </section>
    </main>
  )
}

export default App

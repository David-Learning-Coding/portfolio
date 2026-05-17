export default function Projects() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl text-center">
        <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-[0.3em] text-[color:var(--muted)] mb-6">
          ── STAGE SELECT ──
        </p>

        <h1 className="font-[family-name:var(--font-pixel)] text-2xl sm:text-4xl leading-tight neon-cyan mb-10">
          PROJECTS
        </h1>

        <div className="border-2 border-[color:var(--border-neon)] p-8 sm:p-12 bg-[color:var(--surface)]/50">
          <p className="font-[family-name:var(--font-pixel)] text-xs sm:text-sm tracking-widest neon-pink mb-6">
            ! NEW AREA UNLOCKING !
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[color:var(--foreground)] max-w-xl mx-auto">
            The projects vault is still being assembled. Check back soon for prototypes,
            jam entries, and design write-ups.
          </p>
          <p className="mt-8 font-[family-name:var(--font-pixel)] text-[10px] tracking-widest text-[color:var(--muted)]">
            LOADING<span className="blink">...</span>
          </p>
        </div>
      </section>
    </div>
  );
}

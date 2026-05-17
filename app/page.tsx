import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl text-center">
        <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-[0.3em] text-[color:var(--muted)] mb-6">
          ── PLAYER 1 ──
        </p>

        <h1 className="font-[family-name:var(--font-pixel)] text-3xl sm:text-5xl leading-tight neon-pink mb-6">
          DAVID
        </h1>

        <h2 className="font-[family-name:var(--font-pixel)] text-xs sm:text-sm tracking-widest neon-cyan mb-10">
          GAME DESIGNER
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-[color:var(--foreground)] max-w-xl mx-auto mb-12">
          Designing prototypes, mechanics, and small worlds. This is the workshop —
          a place to log experiments, post-mortems, and the occasional shipped thing.
        </p>

        <Link
          href="/projects"
          className="inline-block font-[family-name:var(--font-pixel)] text-xs sm:text-sm tracking-widest text-[color:var(--accent-yellow)] border-2 border-[color:var(--accent-yellow)] px-6 py-4 hover:bg-[color:var(--accent-yellow)] hover:text-[color:var(--background)] transition-colors"
        >
          PRESS START<span className="blink ml-1">_</span>
        </Link>

        <div className="mt-20 font-[family-name:var(--font-pixel)] text-[10px] tracking-widest text-[color:var(--muted)] flex justify-center gap-6">
          <span>HP ████████</span>
          <span>MP ██████░░</span>
          <span>LVL 99</span>
        </div>
      </section>
    </div>
  );
}

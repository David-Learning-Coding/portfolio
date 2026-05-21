import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  // Drop a file in /public (e.g. /projects/platformer.png) and set the path here.
  image: string | null;
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    slug: "unity-platformer",
    title: "[UNTITLED PLATFORMER]",
    tagline: "3D side-scroller — custom movement, progression, level design",
    description:
      "Personal Unity prototype exploring 3D side-scrolling movement, a small progression loop, and hand-built levels. Solo project in C#. Replace this paragraph with what you set out to design, what you learned, and what you'd do differently.",
    tech: ["Unity", "C#"],
    image: null,
    links: [],
  },
  {
    slug: "minecraft-hero-shooter",
    title: "[UNTITLED HERO SHOOTER]",
    tagline: "Team hero shooter — built entirely in Minecraft commands",
    description:
      "Team-based hero shooter prototypes built with Minecraft's native command system — no mods, no external code. Pure systems design inside the constraints of the engine. Replace this paragraph with the heroes you designed, the mechanics that worked, and the ones that broke.",
    tech: ["Minecraft", "Commands"],
    image: null,
    links: [],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-16">
      <section className="w-full max-w-5xl">
        <header className="text-center mb-14">
          <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-[0.3em] text-[color:var(--muted)] mb-6">
            ── STAGE SELECT ──
          </p>
          <h1 className="font-[family-name:var(--font-pixel)] text-2xl sm:text-4xl leading-tight neon-cyan">
            PROJECTS
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="border-2 border-[color:var(--border-neon)] bg-[color:var(--surface)]/50 p-6 flex flex-col"
            >
              {project.image ? (
                <div className="relative aspect-video w-full border border-[color:var(--border-neon)] mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full border-2 border-dashed border-[color:var(--accent-cyan)]/40 mb-6 flex items-center justify-center bg-[color:var(--background)]/60">
                  <span className="font-[family-name:var(--font-pixel)] text-[10px] tracking-widest text-[color:var(--muted)]">
                    [ NO SIGNAL ]
                  </span>
                </div>
              )}

              <h2 className="font-[family-name:var(--font-pixel)] text-base sm:text-lg neon-pink mb-3 leading-snug">
                {project.title}
              </h2>

              <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-widest text-[color:var(--accent-cyan)] mb-4">
                {project.tagline}
              </p>

              <ul className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="font-[family-name:var(--font-pixel)] text-[9px] tracking-widest text-[color:var(--accent-yellow)] border border-[color:var(--accent-yellow)]/50 px-2 py-1"
                  >
                    {t.toUpperCase()}
                  </li>
                ))}
              </ul>

              <p className="text-sm leading-relaxed text-[color:var(--foreground)] mb-6 flex-1">
                {project.description}
              </p>

              {project.links.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-[family-name:var(--font-pixel)] text-[10px] tracking-widest text-[color:var(--accent-cyan)] border-2 border-[color:var(--accent-cyan)] px-4 py-2 hover:bg-[color:var(--accent-cyan)] hover:text-[color:var(--background)] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-widest text-[color:var(--muted)]">
                  COMING SOON<span className="blink">_</span>
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="mt-12 text-center font-[family-name:var(--font-pixel)] text-[10px] tracking-widest text-[color:var(--muted)]">
          MORE STAGES LOADING<span className="blink">...</span>
        </p>
      </section>
    </div>
  );
}

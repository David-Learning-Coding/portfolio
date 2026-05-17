import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "David — Game Design Portfolio",
  description: "Indie game design portfolio. Projects, prototypes, and process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--surface)]/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="font-[family-name:var(--font-pixel)] text-sm tracking-wider neon-pink hover:opacity-80"
            >
              DAVID.SYS
            </Link>
            <ul className="flex items-center gap-6 font-[family-name:var(--font-pixel)] text-[10px] tracking-widest">
              <li>
                <Link
                  href="/"
                  className="text-[color:var(--foreground)] hover:text-[color:var(--accent-cyan)] transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[color:var(--foreground)] hover:text-[color:var(--accent-cyan)] transition-colors"
                >
                  PROJECTS
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import { ComponentProps, MouseEvent } from "react";

let audioCtx: AudioContext | null = null;

function getAudioCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctor) return null;
    audioCtx = new Ctor();
  }
  if (audioCtx.state === "suspended") {
    void audioCtx.resume();
  }
  return audioCtx;
}

function tone(
  freq: number,
  duration: number,
  startOffset = 0,
  volume = 0.04,
) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const start = ctx.currentTime + startOffset;
  const osc = ctx.createOscillator();
  osc.type = "square";
  osc.frequency.value = freq;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration);
}

function playHover() {
  tone(880, 0.04);
}

function playConfirm() {
  tone(523, 0.06, 0, 0.05);
  tone(784, 0.1, 0.06, 0.05);
}

type SoundLinkProps = ComponentProps<typeof Link>;

export default function SoundLink({
  onMouseEnter,
  onClick,
  ...rest
}: SoundLinkProps) {
  return (
    <Link
      {...rest}
      onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
        playHover();
        onMouseEnter?.(e);
      }}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        playConfirm();
        onClick?.(e);
      }}
    />
  );
}

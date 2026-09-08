"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

export function IllocaHud() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setCoords({
        x: Math.round(e.clientX),
        y: Math.round(e.clientY)
      });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Illoca Top-Left Coordinates HUD */}
      <div className="fixed top-5 left-6 z-40 hidden xl:flex flex-col font-mono text-[11px] leading-tight text-illoca-muted tabular-nums pointer-events-none select-none">
        <div className="flex items-center gap-2">
          <span className="text-illoca-ink font-bold">X</span>
          <span>{String(coords.x).padStart(4, "0")}.00</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-illoca-ink font-bold">Y</span>
          <span>{String(coords.y).padStart(4, "0")}.00</span>
        </div>
      </div>

      {/* Illoca Top-Right Direct Email HUD */}
      <div className="fixed top-5 right-6 z-40 hidden xl:block font-mono text-xs text-illoca-muted tracking-tight">
        <Link
          href={`mailto:${siteConfig.email}`}
          className="hover:text-illoca-blue transition-colors hover-underline-dotted"
        >
          {siteConfig.email}
        </Link>
      </div>
    </>
  );
}


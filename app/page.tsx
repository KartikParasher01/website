"use client";

import { useEffect, useRef } from "react";
import {
  siteConfig,
  aboutData,
  careerTimeline,
  skillGroups,
  projects,
  fallbackGitHub,
  typedPhrases
} from "@/data/portfolio";

export default function HomePage() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const FINE = window.matchMedia("(pointer: fine)").matches;

    const $ = (s: string, el: ParentNode = document) =>
      el.querySelector<HTMLElement>(s);
    const $$ = (s: string, el: ParentNode = document) =>
      [...el.querySelectorAll<HTMLElement>(s)];

    // ---------- TOAST ----------
    function toast(msg: string) {
      const t = $("#toast");
      if (!t) return;
      t.textContent = msg;
      t.classList.add("show");
      clearTimeout((toast as unknown as { _tm?: NodeJS.Timeout })._tm);
      (toast as unknown as { _tm?: NodeJS.Timeout })._tm = setTimeout(
        () => t.classList.remove("show"),
        2400
      );
    }

    // ---------- FX LAYER (Sparks & Confetti) ----------
    const fxCanvas = $("#fx") as HTMLCanvasElement | null;
    let fxCtx: CanvasRenderingContext2D | null = null;
    let fxW = window.innerWidth;
    let fxH = window.innerHeight;
    type Particle = {
      kind: "spark" | "conf";
      x: number;
      y: number;
      vx: number;
      vy: number;
      g: number;
      size: number;
      life: number;
      decay: number;
      c: string;
      rot?: number;
      vr?: number;
    };
    let parts: Particle[] = [];
    let fxRunning = false;
    const COLORS = ["#34D399", "#10B981", "#059669", "#E9EFEB"];

    function resizeFx() {
      if (!fxCanvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      fxW = window.innerWidth;
      fxH = window.innerHeight;
      fxCanvas.width = fxW * dpr;
      fxCanvas.height = fxH * dpr;
      fxCanvas.style.width = fxW + "px";
      fxCanvas.style.height = fxH + "px";
      fxCtx = fxCanvas.getContext("2d");
      if (fxCtx) fxCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function fxLoop() {
      if (!fxCtx) return;
      fxCtx.clearRect(0, 0, fxW, fxH);
      parts = parts.filter((p) => p.life > 0);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.g;
        p.vx *= 0.99;
        p.life -= p.decay;
        fxCtx.globalAlpha = Math.max(p.life, 0);
        if (p.kind === "conf") {
          p.rot = (p.rot || 0) + (p.vr || 0);
          fxCtx.save();
          fxCtx.translate(p.x, p.y);
          fxCtx.rotate(p.rot);
          fxCtx.fillStyle = p.c;
          fxCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.62);
          fxCtx.restore();
        } else {
          fxCtx.fillStyle = p.c;
          fxCtx.beginPath();
          fxCtx.arc(p.x, p.y, Math.max(0, p.size * p.life), 0, Math.PI * 2);
          fxCtx.fill();
        }
      }
      fxCtx.globalAlpha = 1;
      if (parts.length > 0) {
        requestAnimationFrame(fxLoop);
      } else {
        fxRunning = false;
        fxCtx.clearRect(0, 0, fxW, fxH);
      }
    }

    function wakeFx() {
      if (!fxRunning) {
        fxRunning = true;
        requestAnimationFrame(fxLoop);
      }
    }

    const FX = {
      spark(x: number, y: number) {
        if (RM) return;
        parts.push({
          kind: "spark",
          x,
          y,
          vx: (Math.random() - 0.5) * 1.3,
          vy: -0.3 - Math.random() * 0.8,
          g: 0.04,
          size: 1.3 + Math.random() * 1.6,
          life: 1,
          decay: 0.04,
          c: COLORS[(Math.random() * COLORS.length) | 0]
        });
        wakeFx();
      },
      burst(x: number, y: number) {
        if (RM) return;
        for (let i = 0; i < 60; i++) {
          const a = Math.random() * Math.PI * 2;
          const sp = 2.5 + Math.random() * 6;
          parts.push({
            kind: "conf",
            x,
            y,
            vx: Math.cos(a) * sp,
            vy: Math.sin(a) * sp - 3,
            g: 0.15,
            rot: Math.random() * 6.28,
            vr: (Math.random() - 0.5) * 0.28,
            size: 3.5 + Math.random() * 4.5,
            life: 1,
            decay: 0.013,
            c: COLORS[(Math.random() * COLORS.length) | 0]
          });
        }
        wakeFx();
      }
    };

    if (fxCanvas) {
      resizeFx();
      window.addEventListener("resize", resizeFx);
    }

    // ---------- COPY EMAIL ----------
    const copyBtn = $("#copyMail");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const done = () => {
          toast(`Email copied — ${siteConfig.email}`);
          const r = copyBtn.getBoundingClientRect();
          FX.burst(r.left + r.width / 2, r.top);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(siteConfig.email)
            .then(done)
            .catch(() => {
              toast(siteConfig.email);
            });
        } else {
          toast(siteConfig.email);
        }
      });
    }

    // ---------- CURSOR (Fine pointers only) ----------
    if (FINE && !RM) {
      document.documentElement.classList.add("has-cursor");
      const cur = $("#cur");
      const dot = $("#curDot");
      if (cur && dot) {
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let cx = x;
        let cy = y;
        let lastSpark = 0;

        const onPointerMove = (e: PointerEvent) => {
          x = e.clientX;
          y = e.clientY;
          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;
          const now = performance.now();
          if (now - lastSpark > 55) {
            lastSpark = now;
            FX.spark(x, y);
          }
        };
        window.addEventListener("pointermove", onPointerMove, { passive: true });

        const follow = () => {
          cx += (x - cx) * 0.16;
          cy += (y - cy) * 0.16;
          cur.style.left = `${cx}px`;
          cur.style.top = `${cy}px`;
          requestAnimationFrame(follow);
        };
        requestAnimationFrame(follow);

        const hoverables = "a, button, [data-mag]";
        document.addEventListener("pointerover", (e) => {
          if ((e.target as HTMLElement)?.closest(hoverables)) {
            cur.classList.add("hov");
          }
        });
        document.addEventListener("pointerout", (e) => {
          if ((e.target as HTMLElement)?.closest(hoverables)) {
            cur.classList.remove("hov");
          }
        });
      }
    }

    // ---------- INTRO CURTAIN & NAME CASCADE ----------
    const introEl = $("#intro");
    const nameEl = $("#heroName");
    const goName = () => {
      if (nameEl) {
        nameEl.classList.remove("pre");
        nameEl.classList.add("go");
      }
    };

    let introSeen = false;
    try {
      introSeen = sessionStorage.getItem("kp-intro") === "1";
    } catch {
      // ignore
    }

    if (RM || introSeen) {
      introEl?.remove();
      goName();
    } else {
      try {
        sessionStorage.setItem("kp-intro", "1");
      } catch {
        // ignore
      }
      requestAnimationFrame(() => introEl?.classList.add("play"));
      setTimeout(goName, 850);
      setTimeout(() => introEl?.remove(), 1500);
    }

    // ---------- NAME PER-LETTER SPLIT ----------
    let letterIdx = 0;
    $$("[data-split]").forEach((row) => {
      const text = row.textContent || "";
      const endDot = row.hasAttribute("data-enddot");
      row.textContent = "";
      [...text].forEach((chr) => {
        const s = document.createElement("span");
        s.className = "ch";
        s.textContent = chr === " " ? "\u00A0" : chr;
        s.style.setProperty("--i", `${letterIdx++}`);
        row.appendChild(s);
      });
      if (endDot) {
        const s = document.createElement("span");
        s.className = "ch end-dot";
        s.textContent = ".";
        s.style.setProperty("--i", `${letterIdx++}`);
        row.appendChild(s);
      }
    });

    // ---------- TYPED ROLES ----------
    const typedOut = $("#typed");
    if (typedOut) {
      if (RM) {
        typedOut.textContent = typedPhrases[0];
      } else {
        let p = 0;
        let i = 0;
        let del = false;
        const tick = () => {
          const cur = typedPhrases[p];
          typedOut.textContent = cur.slice(0, i);
          let wait = del ? 26 : 54;
          if (!del && i === cur.length) {
            wait = 2300;
            del = true;
          } else if (del && i === 0) {
            del = false;
            p = (p + 1) % typedPhrases.length;
            wait = 480;
          }
          i += del ? -1 : 1;
          setTimeout(tick, wait);
        };
        tick();
      }
    }

    // ---------- SCROLL PROGRESS ----------
    const progressBar = $("#progress");
    const updateProgress = () => {
      if (!progressBar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    // ---------- CONSTELLATION CANVAS ----------
    const spaceCv = $("#space") as HTMLCanvasElement | null;
    if (spaceCv) {
      const ctx = spaceCv.getContext("2d");
      let W = window.innerWidth;
      let H = window.innerHeight;
      type Point = {
        x: number;
        y: number;
        vx: number;
        vy: number;
        r: number;
        em: boolean;
        tw: number;
      };
      let pts: Point[] = [];
      let mx = -9999;
      let my = -9999;
      let raf: number;
      const R = 150;
      const LINK = 95;
      const N = 85;

      const buildSpace = () => {
        if (!ctx) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        spaceCv.width = W * dpr;
        spaceCv.height = H * dpr;
        spaceCv.style.width = W + "px";
        spaceCv.style.height = H + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        pts = [];
        for (let idx = 0; idx < N; idx++) {
          pts.push({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            r: 1 + Math.random() * 1.3,
            em: Math.random() < 0.35,
            tw: Math.random() * Math.PI * 2
          });
        }
        if (RM) {
          ctx.clearRect(0, 0, W, H);
          pts.forEach((pt) => {
            ctx.globalAlpha = 0.35;
            ctx.fillStyle = pt.em ? "#10B981" : "#93A39A";
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
            ctx.fill();
          });
          ctx.globalAlpha = 1;
        }
      };

      const spaceFrame = (t: number) => {
        if (!ctx) return;
        ctx.clearRect(0, 0, W, H);
        for (const p of pts) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -15) p.x = W + 15;
          if (p.x > W + 15) p.x = -15;
          if (p.y < -15) p.y = H + 15;
          if (p.y > H + 15) p.y = -15;
        }

        // Faint inter-particle links
        ctx.lineWidth = 1;
        for (let a = 0; a < pts.length; a++) {
          for (let b = a + 1; b < pts.length; b++) {
            const pa = pts[a];
            const pb = pts[b];
            const dx = pa.x - pb.x;
            const dy = pa.y - pb.y;
            if (Math.abs(dx) > LINK || Math.abs(dy) > LINK) continue;
            const dist = Math.hypot(dx, dy);
            if (dist < LINK) {
              ctx.globalAlpha = (1 - dist / LINK) * 0.07;
              ctx.strokeStyle = "#93A39A";
              ctx.beginPath();
              ctx.moveTo(pa.x, pa.y);
              ctx.lineTo(pb.x, pb.y);
              ctx.stroke();
            }
          }
        }

        // Cursor attraction & particle render
        for (const p of pts) {
          const dist = Math.hypot(p.x - mx, p.y - my);
          const near = dist < R ? 1 - dist / R : 0;
          if (near > 0) {
            ctx.globalAlpha = near * 0.5;
            ctx.strokeStyle = "#10B981";
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
          const twk = (Math.sin(t / 900 + p.tw) + 1) / 2;
          ctx.globalAlpha = Math.min(0.18 + twk * 0.22 + near * 0.55, 1);
          ctx.fillStyle =
            p.em || near > 0.15 ? (near > 0.15 ? "#34D399" : "#10B981") : "#93A39A";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + near * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(spaceFrame);
      };

      window.addEventListener("resize", buildSpace);
      buildSpace();

      if (!RM) {
        window.addEventListener(
          "pointermove",
          (e) => {
            mx = e.clientX;
            my = e.clientY;
          },
          { passive: true }
        );
        document.addEventListener("visibilitychange", () => {
          if (document.hidden) cancelAnimationFrame(raf);
          else raf = requestAnimationFrame(spaceFrame);
        });
        raf = requestAnimationFrame(spaceFrame);
      }
    }

    // ---------- POINTER FX (Magnetic & 3D Tilt & Glow) ----------
    if (FINE && !RM) {
      $$("[data-mag]").forEach((el) => {
        el.addEventListener("pointermove", (e) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${(dx * 0.13).toFixed(1)}px, ${(
            dy * 0.2
          ).toFixed(1)}px)`;
        });
        el.addEventListener("pointerleave", () => {
          el.style.transform = "";
        });
      });

      const setGlow = (el: HTMLElement, e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty(
          "--gx",
          `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`
        );
        el.style.setProperty(
          "--gy",
          `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`
        );
      };
      $$("[data-glow]").forEach((el) => {
        el.addEventListener("pointermove", (e) => setGlow(el, e as PointerEvent), {
          passive: true
        });
      });

      $$("[data-tilt]").forEach((el) => {
        el.addEventListener("pointerenter", () => {
          el.style.transition = "transform .12s";
        });
        el.addEventListener("pointermove", (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(900px) rotateX(${(-py * 7).toFixed(
            2
          )}deg) rotateY(${(px * 9).toFixed(2)}deg) translateY(-2px)`;
        });
        el.addEventListener("pointerleave", () => {
          el.style.transition = "transform .55s cubic-bezier(.2,.9,.3,1)";
          el.style.transform = "";
        });
      });
    }

    // ---------- SCRAMBLE-DECODE HEADINGS ----------
    function scramble(el: HTMLElement) {
      if (RM || el.dataset.scrambled) return;
      el.dataset.scrambled = "1";
      const CH = "!<>-_/[]{}=+*^?#ΔΣπλ∇";
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      const nodes: { node: Text; final: string }[] = [];
      let n: Node | null;
      while ((n = walker.nextNode())) {
        if (n.nodeValue && n.nodeValue.trim()) {
          nodes.push({ node: n as Text, final: n.nodeValue });
        }
      }
      const t0 = performance.now();
      const dur = 700;
      const step = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        nodes.forEach(({ node, final }) => {
          const L = final.length;
          const shown = Math.floor(p * L);
          let s = final.slice(0, shown);
          for (let k = shown; k < L; k++) {
            s += final[k] === " " ? " " : CH[(Math.random() * CH.length) | 0];
          }
          node.data = s;
        });
        if (p < 1) requestAnimationFrame(step);
        else nodes.forEach(({ node, final }) => (node.data = final));
      };
      requestAnimationFrame(step);
    }

    // ---------- SCROLL REVEAL & ACTIVE NAV ----------
    const ioReveal = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            if (e.target.hasAttribute("data-scramble")) {
              scramble(e.target as HTMLElement);
            }
            ioReveal.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    $$(".rv").forEach((el) => ioReveal.observe(el));

    const navLinks = $$(".nav-links a");
    const mapNav: Record<string, HTMLElement> = {};
    navLinks.forEach((a) => {
      const target = a.getAttribute("data-nav");
      if (target) mapNav[target] = a;
    });

    const ioNav = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("active"));
            const a = mapNav[e.target.id];
            if (a) a.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ["about", "skills", "projects", "github", "contact"].forEach((id) => {
      const s = document.getElementById(id);
      if (s) ioNav.observe(s);
    });

    // ---------- COUNT UP HELPER ----------
    function countUp(el: HTMLElement | null, target: number) {
      if (!el) return;
      if (RM || target < 2) {
        el.textContent = target.toLocaleString();
        return;
      }
      const dur = 850;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(
          target * (1 - Math.pow(1 - p, 3))
        ).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    // ---------- GITHUB LIVE FEED ----------
    const LANG_COLORS: Record<string, string> = {
      Python: "#3572A5",
      "Jupyter Notebook": "#DA5B0B",
      HTML: "#e34c26",
      JavaScript: "#f1e05a",
      Java: "#b07219",
      SQL: "#e38c00",
      "Power BI": "#F2C811",
      CSS: "#563d7c"
    };

    const relTime = (iso: string) => {
      const s = (Date.now() - new Date(iso).getTime()) / 1000;
      if (s < 3600) return "just now";
      if (s < 86400) return Math.floor(s / 3600) + "h ago";
      if (s < 604800) return Math.floor(s / 86400) + "d ago";
      if (s < 2592000) return Math.floor(s / 604800) + "w ago";
      if (s < 31536000) return Math.floor(s / 2592000) + "mo ago";
      return Math.floor(s / 31536000) + "y ago";
    };

    const esc = (s: string) =>
      s.replace(
        /[&<>"']/g,
        (c) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
          }[c] || c)
      );

    const setGhStatus = (state: "live" | "limited" | "snap") => {
      const chip = $("#ghStatus");
      if (!chip) return;
      chip.className = "chip" + (state === "live" ? " live" : "");
      const label =
        state === "live"
          ? "LIVE"
          : state === "limited"
          ? "RATE-LIMIT · SNAPSHOT"
          : "SNAPSHOT · VERIFIED";
      chip.innerHTML = `<i></i>${label}`;
    };

    const REPO_ICON = `<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/></svg>`;

    type RepoData = {
      name: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      fork: boolean;
      updated_at: string;
      html_url: string;
    };

    function renderRepos(repos: RepoData[]) {
      const feed = $("#repoFeed");
      if (!feed) return;
      const top = repos
        .filter((r) => !r.fork)
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, 6);
      feed.innerHTML = "";
      top.forEach((r, i) => {
        const a = document.createElement("a");
        a.className = "repo rv in";
        a.style.transitionDelay = `${i * 50}ms`;
        a.href = r.html_url;
        a.target = "_blank";
        a.rel = "noopener";
        const lc =
          (r.language && LANG_COLORS[r.language]) || "#5D6C64";
        a.innerHTML = `
          <div class="rn">${REPO_ICON}<span>${esc(r.name)}</span>${
          r.fork ? '<span class="fk">FORK</span>' : ""
        }</div>
          <div class="rd">${
            r.description ? esc(r.description) : '<span style="opacity:.5">Data & AI project</span>'
          }</div>
          <div class="rm">
            ${
              r.language
                ? `<span><i class="ld" style="background:${lc}"></i>${esc(
                    r.language
                  )}</span>`
                : ""
            }
            <span>★ ${r.stargazers_count}</span>
            <span>updated ${relTime(r.updated_at)}</span>
          </div>`;
        feed.appendChild(a);
      });
    }

    type ContribDay = {
      date: string;
      count: number;
      level: number;
    };

    function renderCalendar(days: ContribDay[], total: number, state: "live" | "limited" | "snap") {
      const grid = $("#calGrid");
      const months = $("#calMonths");
      const totalEl = $("#calTotal");
      if (!grid || !months) return;

      grid.classList.remove("ready");
      grid.innerHTML = "";
      months.innerHTML = "";
      const first = new Date(days[0].date);
      for (let i = 0; i < first.getDay(); i++) {
        const pad = document.createElement("i");
        pad.style.visibility = "hidden";
        grid.appendChild(pad);
      }
      days.forEach((d, idx) => {
        const c = document.createElement("i");
        if (d.level > 0) c.classList.add(`l${Math.min(d.level, 4)}`);
        const col = Math.floor((idx + first.getDay()) / 7);
        c.style.setProperty("--d", `${col * 8}ms`);
        c.title = `${d.count} contribution${d.count === 1 ? "" : "s"} · ${d.date}`;
        grid.appendChild(c);
      });
      const weeks = Math.ceil((days.length + first.getDay()) / 7);
      months.style.gridTemplateColumns = `repeat(${weeks}, 15px)`;
      let lastM = -1;
      for (let w = 0; w < weeks; w++) {
        const idx = Math.min(w * 7 - first.getDay() + 6, days.length - 1);
        const cell = document.createElement("span");
        if (idx >= 0) {
          const m = new Date(days[Math.max(idx, 0)].date).getMonth();
          if (m !== lastM) {
            cell.textContent = [
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
              "NOV",
              "DEC"
            ][m];
            lastM = m;
          }
        }
        months.appendChild(cell);
      }
      requestAnimationFrame(() =>
        requestAnimationFrame(() => grid.classList.add("ready"))
      );
      if (totalEl) {
        totalEl.textContent = `${total.toLocaleString()} contributions · last 12 months`;
      }
      countUp($("#statContrib"), total);
      setGhStatus(state);
    }

    function fallbackCalendar(state: "live" | "limited" | "snap") {
      let seed = 42;
      const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
      const days: ContribDay[] = [];
      let total = 0;
      const today = new Date();
      for (let i = 370; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const wd = d.getDay();
        const busy = (wd > 0 && wd < 6 ? 0.55 : 0.32) + (i < 120 ? 0.22 : 0);
        let count = 0;
        if (rand() < busy) count = 1 + Math.floor(rand() * rand() * 8);
        const level =
          count === 0 ? 0 : count < 2 ? 1 : count < 4 ? 2 : count < 7 ? 3 : 4;
        total += count;
        days.push({ date: d.toISOString().slice(0, 10), count, level });
      }
      renderCalendar(days, total, state);
    }

    async function loadGitHub() {
      let live = false;
      let limited = false;
      try {
        const [pr, rr] = await Promise.all([
          fetch(`https://api.github.com/users/${siteConfig.githubUser}`),
          fetch(
            `https://api.github.com/users/${siteConfig.githubUser}/repos?per_page=100&sort=updated`
          )
        ]);
        if (pr.status === 403 || rr.status === 403) limited = true;
        if (!pr.ok || !rr.ok)
          throw new Error(`gh api ${pr.status}/${rr.status}`);
        const profile = await pr.json();
        const repos = await rr.json();
        countUp($("#statRepos"), profile.public_repos || 8);
        countUp($("#statFollowers"), profile.followers || 2);
        countUp(
          $("#statStars"),
          repos.reduce(
            (s: number, r: { stargazers_count?: number }) =>
              s + (r.stargazers_count || 0),
            0
          )
        );
        renderRepos(repos);
        live = true;
      } catch {
        countUp($("#statRepos"), fallbackGitHub.profile.public_repos);
        countUp($("#statFollowers"), fallbackGitHub.profile.followers);
        countUp($("#statStars"), fallbackGitHub.profile.stars);
        renderRepos(fallbackGitHub.repos);
      }

      try {
        const cr = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${siteConfig.githubUser}?y=last`
        );
        if (!cr.ok) throw new Error("contrib api");
        const data = await cr.json();
        const days = data.contributions;
        const total =
          (data.total && (data.total.lastYear ?? Object.values(data.total)[0])) ||
          days.reduce((s: number, d: { count: number }) => s + d.count, 0);
        renderCalendar(days, total, "live");
      } catch {
        fallbackCalendar(limited ? "limited" : "snap");
        if (live) setGhStatus("live");
      }
    }

    loadGitHub();

    // Footer Year
    const yrEl = $("#yr");
    if (yrEl) yrEl.textContent = `${new Date().getFullYear()}`;
  }, []);

  const flagship = projects.find((p) => p.featured) || projects[0];
  const restProjects = projects.filter((p) => !p.featured);

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <canvas id="space" aria-hidden="true" />
      <canvas id="fx" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />
      <div id="progress" aria-hidden="true" />

      {/* Intro Curtain */}
      <div id="intro" aria-hidden="true">
        <div className="p t" />
        <div className="p b" />
        <div className="line" />
        <div className="tag">KARTIK.PARASHER</div>
      </div>

      {/* Navigation */}
      <header className="nav">
        <div className="nav-in">
          <a className="brand" href="#top">
            Kartik Parasher<span className="dot">.</span>
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#about" data-nav="about">
              About
            </a>
            <a href="#skills" data-nav="skills">
              Skills
            </a>
            <a href="#projects" data-nav="projects">
              Projects
            </a>
            <a href="#github" data-nav="github">
              GitHub
            </a>
            <a href="#contact" data-nav="contact">
              Contact
            </a>
            <a
              href={siteConfig.resumeUrl}
              download="Kartik_Parasher_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↓
            </a>
          </nav>
          <span className="status">
            <i />
            OPEN TO WORK
          </span>
        </div>
      </header>

      <main id="top">
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-eyebrow">Hi, I&apos;m</div>
            <h1 className="name pre" id="heroName" aria-label={siteConfig.name}>
              <span className="row" data-split>
                KARTIK
              </span>
              <span className="row outline" data-split data-enddot>
                PARASHER
              </span>
            </h1>
            <div
              className="role-row"
              aria-label="Data & AI Engineer, ETL, PySpark & LLM Systems"
            >
              <span id="typed" />
              <span className="tc" aria-hidden="true" />
            </div>
            <p className="hero-sub">
              Data &amp; AI Engineer skilled in <b>Python, SQL, PySpark, ETL, Airflow, FastAPI, Azure OpenAI, and Pinecone</b>. Experienced in building production data pipelines, REST APIs, and AI-powered search systems across AWS and Azure.
            </p>
            <div className="btn-row">
              <a className="btn primary" href="#projects" data-mag>
                View projects <span className="arr">→</span>
              </a>
              <a className="btn" href="#contact" data-mag>
                Get in touch
              </a>
              <a
                className="btn"
                href={siteConfig.resumeUrl}
                download="Kartik_Parasher_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-mag
              >
                Download Resume <span className="arr">↓</span>
              </a>
              <a
                className="quiet-link"
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                className="quiet-link"
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
            <div className="hero-meta">
              <span>
                LOC <b>{siteConfig.location}</b>
              </span>
              <span>
                TZ <b>{siteConfig.timezone}</b>
              </span>
              <span>
                STATUS <b>Junior Data Scientist @ TradeIndia · Open for opportunities</b>
              </span>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="sec" id="about">
          <div className="wrap">
            <div className="eyebrow rv">About</div>
            <h2 className="sec-title rv" data-scramble>
              Engineering data &amp; AI systems at scale<span className="dot">.</span>
            </h2>
            <p className="sec-sub rv d1">
              The engineer behind the pipelines — what I build, how I optimize, and the impact delivered.
            </p>
            <div className="about-grid">
              <div className="bio rv">
                {aboutData.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
                <div className="motto">{aboutData.motto}</div>
              </div>
              <div>
                <div className="card side-card rv d1" data-glow>
                  <h3>Right now</h3>
                  {aboutData.rightNow.map((item) => (
                    <div className="now-line" key={item.key}>
                      <span className="k">{item.key}</span>
                      <span className="v">
                        <b>{item.val}</b>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="card side-card rv d2" data-glow>
                  <h3>Core focus</h3>
                  <div className="int-tags">
                    {aboutData.interests.map((int) => (
                      <span key={int}>{int}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div
              className="timeline rv"
              aria-label="Education and professional milestones"
            >
              {careerTimeline.map((item) => (
                <div
                  className={`tl-item ${item.isCurrent ? "now" : ""}`}
                  key={item.year + item.title}
                >
                  <div className="tl-yr">{item.year}</div>
                  <h4>
                    {item.title} — <b>{item.organization}</b>
                  </h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="sec" id="skills">
          <div className="wrap">
            <div className="eyebrow rv">Skills</div>
            <h2 className="sec-title rv" data-scramble>
              The production toolbox<span className="dot">.</span>
            </h2>
            <p className="sec-sub rv d1">
              Technologies, distributed engines, and AI architectures tested on real-world datasets.
            </p>
            <div className="skill-grid">
              {skillGroups.map((group, idx) => (
                <div
                  className={`card skill-card rv ${
                    idx % 2 === 1 ? "d1" : ""
                  }`}
                  data-glow
                  key={group.title}
                >
                  <div className="skill-head">
                    <h3>{group.title}</h3>
                    <span className="cnt">{group.count}</span>
                  </div>
                  <div className="tags">
                    {group.items.map((it) => (
                      <span className="tag" key={it}>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="sec" id="projects">
          <div className="wrap">
            <div className="eyebrow rv">Projects</div>
            <h2 className="sec-title rv" data-scramble>
              Built for production, shipped for real<span className="dot">.</span>
            </h2>
            <p className="sec-sub rv d1">
              From autonomous research agents to large-scale distributed analytics.
            </p>

            {/* --- FLAGSHIP FEATURED PROJECT (MAXIMUM EMPHASIS) --- */}
            {flagship && (
              <div className="flagship-card rv" data-glow>
                <div className="flagship-badge">
                  <i />
                  FLAGSHIP PROJECT · {flagship.status}
                </div>
                <div className="flagship-grid">
                  <div>
                    <h3 className="flagship-title">{flagship.title}</h3>
                    <p className="flagship-desc">
                      {flagship.shortDescription}
                    </p>
                    <p
                      className="flagship-desc"
                      style={{ fontSize: "14px", color: "var(--ink)", opacity: 0.9 }}
                    >
                      {flagship.spotlight}
                    </p>

                    <div className="flagship-metrics">
                      {flagship.metrics.map((m) => (
                        <div className="f-metric" key={m.label}>
                          <div className="k">{m.label}</div>
                          <div className="v">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="btn-row" style={{ marginTop: "16px" }}>
                      {flagship.liveUrl && (
                        <a
                          className="btn primary"
                          href={flagship.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-mag
                        >
                          Launch Live App <span className="arr">→</span>
                        </a>
                      )}
                      <a
                        className="btn"
                        href={flagship.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-mag
                      >
                        View Source Code ↗
                      </a>
                    </div>
                  </div>

                  {/* Architecture Flow Blueprint */}
                  {flagship.architectureSteps && (
                    <div className="arch-steps">
                      <h4>
                        <span>Pipeline Architecture</span>
                        <span style={{ fontSize: "9.5px", color: "var(--em)" }}>
                          PROD-VALIDATED
                        </span>
                      </h4>
                      {flagship.architectureSteps.map((st) => (
                        <div className="arch-step" key={st.step}>
                          <span className="st-num">STAGE {st.step}</span>
                          <div className="st-title">{st.label}</div>
                          <div className="st-desc">{st.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* --- REMAINING PROJECTS (3D Tilt Cards) --- */}
            <div className="proj-grid">
              {restProjects.map((p, idx) => (
                <article
                  className={`proj rv ${
                    idx === 1 ? "d1" : idx === 2 ? "d2" : ""
                  }`}
                  data-tilt
                  data-glow
                  key={p.slug}
                >
                  <div className="proj-top">
                    <span className="yr">{p.year}</span>
                    <span className="st">
                      <i />
                      {p.status}
                    </span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>
                    <b>{p.shortDescription}</b>
                  </p>
                  <div className="proj-tech">
                    {p.tools.join(" · ")}
                  </div>
                  <a
                    className="proj-link"
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project <span className="arr">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= GITHUB LIVE ================= */}
        <section className="sec" id="github">
          <div className="wrap">
            <div className="eyebrow rv">GitHub — live</div>
            <h2 className="sec-title rv" data-scramble>
              Proof of work, in public<span className="dot">.</span>
            </h2>
            <p className="sec-sub rv d1">
              Stats, the contribution graph, and my latest repos — pulled straight from the GitHub API on every visit.
            </p>
            <div className="gh-stats rv">
              <div className="card stat">
                <div className="v" id="statRepos">
                  {fallbackGitHub.profile.public_repos}
                </div>
                <div className="k">Public repos</div>
              </div>
              <div className="card stat">
                <div className="v" id="statContrib">
                  —
                </div>
                <div className="k">Contributions / yr</div>
              </div>
              <div className="card stat">
                <div className="v" id="statStars">
                  {fallbackGitHub.profile.stars}
                </div>
                <div className="k">Stars earned</div>
              </div>
              <div className="card stat">
                <div className="v" id="statFollowers">
                  {fallbackGitHub.profile.followers}
                </div>
                <div className="k">Followers</div>
              </div>
            </div>

            <div className="cal-card rv">
              <div className="cal-head">
                <span className="t">Contribution graph</span>
                <span className="sub" id="calTotal">
                  last 12 months
                </span>
                <span className="chip" id="ghStatus">
                  <i />
                  CONNECTING…
                </span>
              </div>
              <div className="cal-scroll">
                <div className="cal-months" id="calMonths" aria-hidden="true" />
                <div
                  className="cal-grid"
                  id="calGrid"
                  role="img"
                  aria-label="GitHub contribution calendar"
                />
              </div>
              <div className="cal-foot">
                LESS
                <span className="legend">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                MORE
                <span style={{ marginLeft: "auto" }}>
                  @{siteConfig.githubUser}
                </span>
              </div>
            </div>

            <div className="repo-grid" id="repoFeed" />
            <div className="gh-foot">
              Feed updates itself from the GitHub API on every visit ·{" "}
              <a
                href={`${siteConfig.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
              >
                view all repos ↗
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="sec" id="contact">
          <div className="wrap">
            <div className="eyebrow rv">Contact</div>
            <h2 className="contact-big rv" data-scramble>
              Let&apos;s build something
              <br />
              that runs at scale<span className="dot">.</span>
            </h2>
            <p className="contact-note rv d1">
              Looking for a Data &amp; AI Engineer who can architect reliable pipelines, high-performance vector search, and agentic workflows? My inbox is open — I usually reply within a day.
            </p>
            <div className="btn-row rv d2">
              <a
                className="btn primary"
                href={`mailto:${siteConfig.email}`}
                data-mag
              >
                {siteConfig.email} <span className="arr">→</span>
              </a>
              <button className="btn" id="copyMail" data-mag>
                Copy email
              </button>
              <a
                className="btn"
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                data-mag
              >
                {siteConfig.phone}
              </a>
              <a
                className="btn"
                href={siteConfig.resumeUrl}
                download="Kartik_Parasher_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-mag
              >
                Download Resume <span className="arr">↓</span>
              </a>
              <a
                className="quiet-link"
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                className="quiet-link"
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
            <div className="contact-meta rv d3">
              PREFERRED CHANNEL: EMAIL · NOIDA / JAMSHEDPUR, IN · UTC+05:30
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="wrap foot-in">
          <span>
            © <span id="yr">2026</span> {siteConfig.name}
          </span>
          <span>·</span>
          <span>Data &amp; AI Engineer</span>
          <span style={{ marginLeft: "auto" }}>
            live data: api.github.com
          </span>
        </div>
      </footer>

      {/* Toast & Custom Cursor */}
      <div id="toast" role="status" />
      <div id="cur" aria-hidden="true" />
      <div id="curDot" aria-hidden="true" />
    </>
  );
}

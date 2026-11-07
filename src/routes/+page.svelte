<script lang="ts">
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
</script>

<AnimatedBackground />

<div class="home">
  <header>
    <span class="eyebrow" aria-label="2MSA">
  <span class="n">2</span><span class="m">M</span><span class="s">S</span><span class="a">A</span>
</span>
    <h1>What are you tracking?</h1>
    <p class="lead">Pick a section to get started</p>
  </header>

  <div class="choices">
    <!-- Anime & Manga -->
    <a href="/anime-manga" class="choice anime">
      <div class="badge">
        <svg class="art" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="gAnime" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" style="stop-color: var(--soft)" />
              <stop offset="1" style="stop-color: var(--accent)" />
            </linearGradient>
          </defs>

          <g class="manga">
            <rect class="tint" x="10" y="6" width="44" height="52" rx="4"
                  stroke="url(#gAnime)" stroke-width="2.5" />

            <rect class="tint" x="15" y="11" width="34" height="14" rx="2"
                  stroke="url(#gAnime)" stroke-width="1.8" />
            <ellipse class="cream" cx="32" cy="16.5" rx="11" ry="4.6" />
            <path class="cream" d="M27 20.5 L24.5 24 L31 21.5 Z" />
            <circle class="ink" cx="28" cy="16.5" r="1.1" />
            <circle class="ink" cx="32" cy="16.5" r="1.1" />
            <circle class="ink" cx="36" cy="16.5" r="1.1" />

            <path class="tint" d="M15 29 H32 L28 53 H15 Z"
                  stroke="url(#gAnime)" stroke-width="1.8" stroke-linejoin="round" />
            <path class="sparkle soft-fill"
                  d="M22 34 L23.7 39.3 L28.5 41 L23.7 42.7 L22 48 L20.3 42.7 L15.5 41 L20.3 39.3 Z" />

            <path class="tint" d="M36 29 H49 V53 H32 Z"
                  stroke="url(#gAnime)" stroke-width="1.8" stroke-linejoin="round" />
            <path class="soft-stroke"
                  d="M45 41 H48 M44.1 43.1 L46.2 45.2 M42 44 V47 M39.9 43.1 L37.8 45.2
                     M39 41 H36 M39.9 38.9 L37.8 36.8 M42 38 V35 M44.1 38.9 L46.2 36.8"
                  stroke-width="1.6" stroke-linecap="round" />
          </g>
        </svg>
      </div>

      <div class="text">
        <h2>Anime & Manga</h2>
        <p>Track what you watch and read</p>
        <ul class="tags">
          <li>Anime</li><li>Manga</li><li>Manhwa</li><li>Manhua</li>
        </ul>
      </div>

      <span class="go" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>

    <!-- Movies & Series -->
    <a href="/movies-series" class="choice movies">
      <div class="badge">
        <svg class="art" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="gMovie" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" style="stop-color: var(--soft)" />
              <stop offset="1" style="stop-color: var(--accent)" />
            </linearGradient>
          </defs>
          <rect class="tint" x="8" y="28" width="48" height="28" rx="4"
                stroke="url(#gMovie)" stroke-width="2.5" />
          <g class="clap">
            <path d="M8 26 V21 a2 2 0 0 1 2-2 H54 a2 2 0 0 1 2 2 V26 Z" fill="url(#gMovie)" />
            <path class="ink-stroke"
                  d="M19 19 L14 26 M31 19 L26 26 M43 19 L38 26 M55 19 L50 26"
                  stroke-width="3" stroke-linecap="round" />
          </g>
          <path class="play" d="M28 36 V49 L40 42.5 Z"
                fill="url(#gMovie)" stroke="url(#gMovie)"
                stroke-width="2" stroke-linejoin="round" />
        </svg>
      </div>

      <div class="text">
        <h2>Movies & Series</h2>
        <p>Keep your films and shows in one place</p>
        <ul class="tags">
          <li>Movies</li><li>Series</li>
        </ul>
      </div>

      <span class="go" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  </div>
</div>

<style>
  .home {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding: 40px;
    color: var(--text);
  }

  header { text-align: center; }
  .eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  margin-bottom: 14px;
}
.eyebrow .n { color: var(--text-dim); }
 .eyebrow .m {
  letter-spacing: 0;
  margin-right: 0.3em;
  background: linear-gradient(90deg, var(--blue) 20%, var(--orange) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter:
    drop-shadow(-4px 0 8px rgba(79, 140, 255, 0.55))
    drop-shadow(4px 0 8px rgba(255, 138, 61, 0.55));
}

.eyebrow .s {
  color: var(--orange);
  text-shadow:
    0 0 10px rgba(255, 138, 61, 0.6),
    0 0 26px rgba(255, 138, 61, 0.3);
}

.eyebrow .a {
  color: var(--blue);
  text-shadow:
    0 0 10px rgba(79, 140, 255, 0.65),
    0 0 26px rgba(79, 140, 255, 0.3);
}

  .choices { display: flex; gap: 28px; flex-wrap: wrap; justify-content: center; }

  /* Per-card palette, from the shared tokens in app.css */
  .anime {
    --accent: var(--blue);
    --soft: var(--blue-soft);
    --tint: var(--blue-tint);
    --line: var(--blue-line);
  }
  .movies {
    --accent: var(--orange);
    --soft: var(--orange-soft);
    --tint: var(--orange-tint);
    --line: var(--orange-line);
  }

  .choice {
    position: relative;
    width: min(420px, 90vw);
    min-height: 440px;
    padding: 36px;
    border-radius: 24px;
    border: 1px solid var(--border);
    background: linear-gradient(160deg, var(--tint), transparent 55%), var(--surface);
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
    animation: rise 0.6s ease both;
  }
  .movies { animation-delay: 0.1s; }

  .choice:hover {
    transform: translateY(-5px);
    border-color: var(--line);
    box-shadow: 0 22px 44px -24px rgba(0, 0, 0, 0.9);
  }

  .badge {
    width: 148px;
    height: 148px;
    border-radius: 28px;
    background: var(--tint);
    border: 1px solid var(--line);
    display: grid;
    place-items: center;
  }
  .art { width: 100px; height: 100px; }

  .text h2 { font-size: 1.7rem; font-weight: 700; letter-spacing: -0.025em; }
  .text p { color: var(--text-dim); margin-top: 6px; font-size: 0.95rem; }

  .tags { list-style: none; padding: 0; margin: 18px 0 0; display: flex; flex-wrap: wrap; gap: 8px; }
  .tags li {
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-dim);
    font-size: 0.78rem;
    transition: color 0.25s, border-color 0.25s;
  }
  .choice:hover .tags li { color: var(--soft); border-color: var(--line); }

  .go {
    position: absolute;
    right: 32px;
    bottom: 32px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.14);
    display: grid;
    place-items: center;
    color: var(--accent);
    transition: background 0.25s, color 0.25s, transform 0.25s, border-color 0.25s;
  }
  .go svg { width: 20px; height: 20px; }
  .choice:hover .go {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--bg);
    transform: translateX(4px);
  }

  /* SVG colour classes */
  .tint { fill: var(--accent); fill-opacity: 0.1; }
  .cream { fill: var(--text); }
  .ink { fill: var(--bg); }
  .ink-stroke { stroke: var(--bg); }
  .soft-fill { fill: var(--soft); }
  .soft-stroke { stroke: var(--soft); }

  /* Manga icon motion */
  .manga {
    transform-box: view-box;
    transform-origin: 32px 32px;
    transform: rotate(-6deg);
    transition: transform 0.25s ease;
  }
  .anime:hover .manga { transform: rotate(0deg) scale(1.06); }

  .sparkle {
    transform-box: fill-box;
    transform-origin: center;
    animation: twinkle 2.4s ease-in-out infinite;
  }
  @keyframes twinkle {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(0.55); opacity: 0.5; }
  }

  /* Clapperboard icon motion */
  .clap {
    transform-box: view-box;
    transform-origin: 8px 26px;
    transform: rotate(-12deg);
    transition: transform 0.25s ease;
  }
  .movies:hover .clap { transform: rotate(0deg); }

  .play {
    transform-box: fill-box;
    transform-origin: center;
    animation: pulse 2.2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.12); }
  }

  @keyframes rise {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .sparkle, .play, .choice { animation: none; }
  }
</style>
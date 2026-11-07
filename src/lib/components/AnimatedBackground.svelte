<div class="bg" aria-hidden="true">
  <div class="glow g1"></div>
  <div class="glow g2"></div>
  <div class="dots"></div>
</div>

<style>
  .bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
    background: var(--bg);
  }

  .glow {
    position: absolute;
    width: 65vmax;
    height: 65vmax;
    border-radius: 50%;
    will-change: transform;
  }
  .g1 {
    top: -30vmax; left: -22vmax;
    background: radial-gradient(circle, rgba(79, 140, 255, 0.24), transparent 65%);
    animation: float1 30s ease-in-out infinite alternate;
  }
  .g2 {
    bottom: -32vmax; right: -22vmax;
    background: radial-gradient(circle, rgba(255, 138, 61, 0.2), transparent 65%);
    animation: float2 36s ease-in-out infinite alternate;
  }

  .dots {
    position: absolute;
    inset: -30px;
    background-image: radial-gradient(rgba(243, 245, 250, 0.08) 1.3px, transparent 1.7px);
    background-size: 30px 30px;
    mask-image: radial-gradient(ellipse at center, black 25%, transparent 80%);
    animation: drift 8s linear infinite;
    will-change: transform;
  }

  @keyframes float1 { to { transform: translate3d(22vmax, 16vmax, 0) scale(1.12); } }
  @keyframes float2 { to { transform: translate3d(-20vmax, -14vmax, 0) scale(1.1); } }
  @keyframes drift  { to { transform: translate3d(30px, 30px, 0); } }

  @media (prefers-reduced-motion: reduce) {
    .glow, .dots { animation: none; }
  }
</style>
<script lang="ts">
  let { title, cover, subtitle }: {
    title: string;
    cover?: string;
    subtitle?: string;
  } = $props();
</script>

<article class="card">
  <div class="poster">
    {#if cover}
      <img src={cover} alt={title} loading="lazy" />
    {:else}
      <div class="placeholder">{title.charAt(0)}</div>
    {/if}
  </div>
  <h3>{title}</h3>
  {#if subtitle}<p>{subtitle}</p>{/if}
</article>

<style>
  .card { cursor: pointer; animation: rise 0.45s ease both; }

  .poster {
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border);
    background: linear-gradient(160deg, var(--tint), transparent 60%), var(--surface);
    transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
  }
  .card:hover .poster {
    transform: translateY(-5px);
    border-color: var(--line);
    box-shadow: 0 22px 40px -24px rgba(0, 0, 0, 0.9);
  }

  img, .placeholder { width: 100%; aspect-ratio: 2 / 3; display: block; }
  img { object-fit: cover; }
  .placeholder {
    display: grid;
    place-items: center;
    font-size: 3rem;
    font-weight: 800;
    color: var(--accent);
    opacity: 0.6;
  }

  h3 {
    margin-top: 12px;
    font-size: 0.92rem;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  p { font-size: 0.78rem; color: var(--text-dim); margin-top: 3px; }

  @keyframes rise {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) { .card { animation: none; } }
</style>
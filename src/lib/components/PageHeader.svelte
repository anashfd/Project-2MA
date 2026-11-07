<script lang="ts">
  let { eyebrow, title, count }: { eyebrow: string; title: string; count?: number } = $props();
</script>

<header>
  <span class="eyebrow">{eyebrow}</span>
  <h1>{title}</h1>
  {#if count !== undefined}<p>{count} {count === 1 ? 'title' : 'titles'}</p>{/if}
</header>

<style>
  header { margin-bottom: 28px; }
  .eyebrow {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
  }
  h1 { font-size: 2.3rem; font-weight: 800; letter-spacing: -0.04em; }
  p { color: var(--text-dim); margin-top: 6px; font-size: 0.92rem; }
</style>
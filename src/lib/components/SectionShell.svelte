<script lang="ts">
  import { page } from '$app/state';
  import type { Snippet } from 'svelte';

  type Item = { href: string; label: string; icon: 'discover' | 'library' };

  let { title, base, theme, items, children }: {
    title: string;
    base: string;
    theme: 'blue' | 'orange';
    items: Item[];
    children: Snippet;
  } = $props();

  const isActive = (href: string) =>
    href === base ? page.url.pathname === base : page.url.pathname.startsWith(href);
</script>

<div
  class="shell"
  style="--accent: var(--{theme}); --soft: var(--{theme}-soft); --tint: var(--{theme}-tint); --line: var(--{theme}-line);"
>
  <aside>
    <a href="/" class="switch">
      <span class="swap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7" />
        </svg>
      </span>
      <span class="meta">
        <small>Section</small>
        <strong>{title}</strong>
      </span>
    </a>

    <nav>
      {#each items as item}
        <a href={item.href} class:active={isActive(item.href)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            {#if item.icon === 'discover'}
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            {:else}
              <path d="m16 6 4 14M12 6v14M8 8v12M4 4v16" />
            {/if}
          </svg>
          {item.label}
        </a>
      {/each}
    </nav>
  </aside>

  <main>{@render children()}</main>
</div>

<style>
  .shell {
    display: flex;
    min-height: 100vh;
    background: radial-gradient(900px 420px at 90% -5%, var(--tint), transparent 65%);
  }

  aside {
    width: 240px;
    flex-shrink: 0;
    background: var(--surface);
    border-right: 1px solid var(--border);
    padding: 20px 14px;
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .switch {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 14px;
    border: 1px solid var(--line);
    background: var(--tint);
    color: var(--text);
    text-decoration: none;
    transition: transform 0.2s;
  }
  .switch:hover { transform: translateY(-2px); }
  .swap { width: 20px; height: 20px; color: var(--accent); display: grid; }
  .swap svg { width: 20px; height: 20px; }
  .meta { display: flex; flex-direction: column; line-height: 1.25; }
  .meta small {
    color: var(--text-dim);
    font-size: 0.66rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }
  .meta strong { font-size: 0.92rem; }

  nav { display: flex; flex-direction: column; gap: 4px; }
  nav a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 14px;
    border-radius: 12px;
    color: var(--text-dim);
    text-decoration: none;
    font-size: 0.92rem;
    transition: background 0.2s, color 0.2s;
  }
  nav a svg { width: 18px; height: 18px; flex-shrink: 0; }
  nav a:hover { color: var(--text); background: rgba(255, 255, 255, 0.04); }
  nav a.active { color: var(--soft); background: var(--tint); }
  nav a.active svg { color: var(--accent); }
  nav a.active::before {
    content: '';
    position: absolute;
    left: -14px;
    width: 3px;
    height: 20px;
    border-radius: 0 3px 3px 0;
    background: var(--accent);
  }

  main { flex: 1; padding: 40px 48px; min-width: 0; }
</style>
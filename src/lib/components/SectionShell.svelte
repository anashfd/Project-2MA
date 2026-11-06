<script lang="ts">
  import { page } from '$app/state';
  import type { Snippet } from 'svelte';

  type Item = { href: string; label: string; icon: string };

  let { title, base, items, children }: {
    title: string;
    base: string;
    items: Item[];
    children: Snippet;
  } = $props();

  const isActive = (href: string) =>
    href === base ? page.url.pathname === base : page.url.pathname.startsWith(href);
</script>

<div class="shell">
  <aside>
    <a href="/" class="switch">
      <span class="swap">⇄</span>
      <span class="meta">
        <small>Section</small>
        <strong>{title}</strong>
      </span>
    </a>

    <nav>
      {#each items as item}
        <a href={item.href} class:active={isActive(item.href)}>
          <span class="icon">{item.icon}</span>
          {item.label}
        </a>
      {/each}
    </nav>
  </aside>

  <main>{@render children()}</main>
</div>


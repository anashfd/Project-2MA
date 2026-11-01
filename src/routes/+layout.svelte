<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="app">
  {#if $page.url.pathname !== '/'}
    <button class="back" aria-label="Back" on:click={() => history.back()}>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
           stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  {/if}

  <main>
    <slot />
  </main>
</div>

<style>
  :global(:root) {
    --bg: #fef7ff;
    --surface: #f3edf7;
    --text: #1d1b20;
    --muted: #49454f;
  }
  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --bg: #141218;
      --surface: #211f26;
      --text: #e6e0e9;
      --muted: #cac4d0;
    }
  }
  :global(body) {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: system-ui, sans-serif;
  }

  .app {
    height: 100vh;
  }
  main {
    height: 100%;
    overflow-y: auto;
  }
  .back {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 10;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: var(--surface);
    color: inherit;
    cursor: pointer;
  }
</style>
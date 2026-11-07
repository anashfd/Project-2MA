<script lang="ts">
  let { options, value = $bindable() }: { options: string[]; value: string } = $props();
</script>

<div class="pills" role="tablist">
  {#each options as o}
    <button
      role="tab"
      aria-selected={value === o}
      class:on={value === o}
      onclick={() => (value = o)}
    >
      {o}
    </button>
  {/each}
</div>

<style>
  .pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
  button {
    padding: 7px 16px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-dim);
    font-size: 0.85rem;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }
  button:hover { color: var(--text); border-color: rgba(255, 255, 255, 0.22); }
  button.on { background: var(--tint); border-color: var(--line); color: var(--soft); }
</style>
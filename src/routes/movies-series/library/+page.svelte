<script lang="ts">
  import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<PageHeader eyebrow="Anime & Manga" title="My Library" />

<div class="empty">
  <h2>Nothing here yet</h2>
  <p>Titles you add will show up here.</p>
</div>

<style>
  .empty {
    border: 1px dashed var(--line);
    background: var(--tint);
    border-radius: 20px;
    padding: 56px 32px;
    text-align: center;
    max-width: 520px;
  }
  .empty h2 { font-size: 1.2rem; }
  .empty p { color: var(--text-dim); margin-top: 6px; font-size: 0.92rem; }
</style>
<script lang="ts">
  import MediaCard from '$lib/components/MediaCard.svelte';

  const filters = ['All', 'Anime', 'Manga', 'Manhwa', 'Manhua'];
  let active = $state('All');

  // Replace with your mock repository data
  const items = [
    { id: 1, title: 'Sample Title', cover: '', kind: 'Anime', subtitle: '12 episodes' }
  ];

  let visible = $derived(
    active === 'All' ? items : items.filter((i) => i.kind === active)
  );
</script>

<header>
  <h1>Anime & Manga</h1>
  <p>{visible.length} titles</p>
</header>

<div class="tabs">
  {#each filters as f}
    <button class:on={active === f} onclick={() => (active = f)}>{f}</button>
  {/each}
</div>

<div class="grid">
  {#each visible as item (item.id)}
    <MediaCard title={item.title} cover={item.cover} subtitle={item.subtitle} />
  {/each}
</div>


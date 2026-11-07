<script lang="ts">
  import MediaCard from '$lib/components/MediaCard.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import FilterPills from '$lib/components/FilterPills.svelte';

  const filters = ['All', 'Anime', 'Manga', 'Manhwa', 'Manhua'];
  let active = $state('All');

  const items = [
    { id: 1, title: 'Sample Anime', cover: '', kind: 'Anime', subtitle: '12 episodes' },
    { id: 2, title: 'Sample Manga', cover: '', kind: 'Manga', subtitle: '48 chapters' },
    { id: 3, title: 'Sample Manhwa', cover: '', kind: 'Manhwa', subtitle: '120 chapters' },
    { id: 4, title: 'Sample Manhua', cover: '', kind: 'Manhua', subtitle: '80 chapters' }
  ];

  let visible = $derived(active === 'All' ? items : items.filter((i) => i.kind === active));
</script>

<PageHeader eyebrow="Anime & Manga" title="Discover" count={visible.length} />
<FilterPills options={filters} bind:value={active} />

<div class="grid">
  {#each visible as item (item.id)}
    <MediaCard title={item.title} cover={item.cover} subtitle={item.subtitle} />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 28px 22px;
  }
</style>
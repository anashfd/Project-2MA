<script lang="ts">
  import MediaCard from '$lib/components/MediaCard.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import FilterPills from '$lib/components/FilterPills.svelte';

  const filters = ['All', 'Movies', 'Series'];
  let active = $state('All');

  const items = [
    { id: 1, title: 'Sample Movie', cover: '', kind: 'Movies', subtitle: '2h 10m' },
    { id: 2, title: 'Sample Series', cover: '', kind: 'Series', subtitle: '3 seasons' },
    { id: 3, title: 'Another Movie', cover: '', kind: 'Movies', subtitle: '1h 48m' }
  ];

  let visible = $derived(active === 'All' ? items : items.filter((i) => i.kind === active));
</script>

<PageHeader eyebrow="Movies & Series" title="Discover" count={visible.length} />
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
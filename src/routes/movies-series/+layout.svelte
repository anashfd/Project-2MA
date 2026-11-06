<script lang="ts">
  import SectionShell from '$lib/components/SectionShell.svelte';
  let { children } = $props();

  const items = [
    { href: '/movies-series', label: 'Discover', icon: '✦' },
    { href: '/movies-series/library', label: 'My Library', icon: '▤' }
  ];
</script>

<SectionShell title="Movies & Series" base="/movies-series" {items}>
  {@render children()}
</SectionShell>
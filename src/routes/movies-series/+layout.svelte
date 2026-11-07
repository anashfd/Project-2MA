<script lang="ts">
  import SectionShell from '$lib/components/SectionShell.svelte';
  let { children } = $props();

  const items = [
    { href: '/movies-series', label: 'Discover', icon: 'discover' as const },
    { href: '/movies-series/library', label: 'My Library', icon: 'library' as const }
  ];
</script>

<SectionShell title="Movies & Series" base="/movies-series" theme="orange" {items}>
  {@render children()}
</SectionShell>
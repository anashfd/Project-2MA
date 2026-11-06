<script lang="ts">
  import SectionShell from '$lib/components/SectionShell.svelte';
  let { children } = $props();

  const items = [
    { href: '/anime-manga', label: 'Discover', icon: '✦' },
    { href: '/anime-manga/library', label: 'My Library', icon: '▤' }
  ];
</script>

<SectionShell title="Anime & Manga" base="/anime-manga" {items}>
  {@render children()}
</SectionShell>
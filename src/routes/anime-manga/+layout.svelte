<script lang="ts">
  import SectionShell from '$lib/components/SectionShell.svelte';
  let { children } = $props();

  const items = [
    { href: '/anime-manga', label: 'Discover', icon: 'discover' as const },
    { href: '/anime-manga/library', label: 'My Library', icon: 'library' as const }
  ];
</script>

<SectionShell title="Anime & Manga" base="/anime-manga" theme="blue" {items}>
  {@render children()}
</SectionShell>
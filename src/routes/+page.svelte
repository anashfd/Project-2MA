<script lang="ts">
  const halves: { href: string; title: string; image: string | null }[] = [
    { href: '/anime-manga', title: 'Anime & Manga', image: null },
    { href: '/movies-series', title: 'Movies & Series', image: null }
  ];
</script>

<div class="split">
  {#each halves as half}
    <a
      class="half"
      href={half.href}
      style:background-image={half.image ? `url(${half.image})` : 'none'}
    >
      <span>{half.title}</span>
    </a>
  {/each}
</div>

<style>
  .split {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .half {
    flex: 1;
    display: grid;
    place-items: center;
    background-color: var(--surface);
    background-size: cover;
    background-position: center;
    color: inherit;
    text-decoration: none;
    font-size: 28px;
    font-weight: 500;
  }
  @media (min-width: 700px) {
    .split {
      flex-direction: row;
    }
  }
</style>
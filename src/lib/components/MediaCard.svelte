<script lang="ts">
  let { title, cover, subtitle }: {
    title: string;
    cover: string;
    subtitle?: string;
  } = $props();
</script>

<article class="card">
  <div class="poster">
    <img src={cover} alt={title} loading="lazy" />
    <div class="fade"></div>
  </div>
  <h3>{title}</h3>
  {#if subtitle}<p>{subtitle}</p>{/if}
</article>


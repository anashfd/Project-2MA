<script lang="ts">
  import { repository } from '$lib/core/repository';

  const request = repository.browse(['movie', 'series']);
</script>

{#await request}
  <p>Loading...</p>
{:then titles}
  <div class="grid">
    {#each titles as media}
      <a class="card" href={`/media/${encodeURIComponent(media.id)}`}>
        <div class="poster"></div>
        <strong class="title">{media.title}</strong>
        <small class="meta">{media.format} · {media.year ?? '?'}</small>
      </a>
    {/each}
  </div>
{:catch}
  <p>Could not load titles.</p>
{/await}
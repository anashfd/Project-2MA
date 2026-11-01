import type { Media, Episode } from './types';

export interface EpisodeSource {
  getEpisodes(media: Media): Promise<Episode[]>;
  // returns a URL or file path to play / null if nothing is available
  getPlayback(media: Media, episode: Episode): Promise<string | null>;
}

// Placeholder until real source 
export const nullEpisodeSource: EpisodeSource = {
  async getEpisodes(media) {
    const count = media.episodeCount ?? 0;
    return Array.from({ length: count }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`
    }));
  },
  async getPlayback() {
    return null; 
  }
};

export const episodeSource: EpisodeSource = nullEpisodeSource;
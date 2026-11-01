import type { MediaRepository } from '../core/repository';
import type { Media } from '../core/types';

const items: Media[] = [
  { id: 'mock:1', kind: 'anime', format: 'tv', origin: 'jp', title: 'Sample Anime', description: 'Placeholder description.', coverUrl: null, year: 2020, episodeCount: 24, genres: ['Action'] },
  { id: 'mock:2', kind: 'anime', format: 'ova', origin: 'jp', title: 'Sample OVA', description: 'Placeholder description.', coverUrl: null, year: 2019, episodeCount: 3, genres: ['Comedy'] },
  { id: 'mock:3', kind: 'anime', format: 'movie', origin: 'jp', title: 'Sample Anime Movie', description: 'Placeholder description.', coverUrl: null, year: 2021, episodeCount: 1, genres: ['Fantasy'] },
  { id: 'mock:4', kind: 'manga', format: 'manga', origin: 'jp', title: 'Sample Manga', description: 'Placeholder description.', coverUrl: null, year: 2018, episodeCount: 120, genres: ['Drama'] },
  { id: 'mock:5', kind: 'manga', format: 'manga', origin: 'kr', title: 'Sample Manhwa', description: 'Placeholder description.', coverUrl: null, year: 2022, episodeCount: 80, genres: ['Romance'] },
  { id: 'mock:6', kind: 'movie', format: 'feature', origin: 'other', title: 'Sample Movie', description: 'Placeholder description.', coverUrl: null, year: 2022, episodeCount: null, genres: ['Sci-Fi'] },
  { id: 'mock:7', kind: 'series', format: 'scripted', origin: 'other', title: 'Sample Series', description: 'Placeholder description.', coverUrl: null, year: 2021, episodeCount: 10, genres: ['Thriller'] }
];

export const mockRepository: MediaRepository = {
  async browse(kinds, query = '') {
    return items.filter(
      (m) => kinds.includes(m.kind) && m.title.toLowerCase().includes(query.toLowerCase())
    );
  },
  async getById(id) {
    return items.find((m) => m.id === id) ?? null;
  },
  async getEpisodes(mediaId) {
    const m = items.find((x) => x.id === mediaId);
    return Array.from({ length: m?.episodeCount ?? 0 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`
    }));
  }
};
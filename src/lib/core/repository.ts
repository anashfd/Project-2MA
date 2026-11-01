import type { Media, MediaKind, Episode } from './types';
import { mockRepository } from '../data/mockRepository';

export interface MediaRepository {
  browse(kinds: MediaKind[], query?: string): Promise<Media[]>;
  getById(id: string): Promise<Media | null>;
  getEpisodes(mediaId: string): Promise<Episode[]>;
}

//change later to switch to AniList / TMDB.
export const repository: MediaRepository = mockRepository;
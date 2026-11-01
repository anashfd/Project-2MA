export type MediaKind = 'anime' | 'manga' | 'movie' | 'series';
// later: add 'novel'

export type MediaFormat =
  // Anime (AniList)
  | 'tv'        
  | 'tv_short'
  | 'movie'     
  | 'special'
  | 'ova'
  | 'ona'
  | 'music'
  | 'manga'
  | 'one_shot'
  | 'feature'
  | 'scripted'
  | 'miniseries'
  | 'documentary'
  | 'reality'
  | 'talk_show'
  | 'news'
  | 'video'
  | 'other';

export type MediaOrigin = 'jp' | 'kr' | 'cn' | 'tw' | 'other';

export interface Media {
  id: string;                  // e.g. "anilist:1535" or "tmdb:603"
  kind: MediaKind;
  format: MediaFormat;
  origin: MediaOrigin;
  title: string;
  description: string;
  coverUrl: string | null;
  year: number | null;
  episodeCount: number | null; // chapters for manga
  genres: string[];
}

export interface Episode {
  number: number;
  title: string;
}
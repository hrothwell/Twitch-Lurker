import type { DeepMutable } from './types';

export const BADGE_TEXT_COLOR = '#FFFFFF';
export const BADGE_DEFAULT_BACKGROUND_COLOR = '#777777';
export const BADGE_PURPLE_BACKGROUND_COLOR = '#8561c5';
export const THEME_COLOR = '#9147FF';
export const TITLE = 'Twitch Lurker';
export const CLIENT_ID = 'xms2vxkmtn3rsrv1id2glcnu74fevs';
export const TWITCH_API_BASE = 'https://api.twitch.tv/helix';
export const PAGINATION_LIMIT = 100;
export const UNMUTE_INTERVAL_LENGTH = 3 * 1000;

const DEFAULT_STORAGE_VALUES = {
  // Preferences
  enabled: true,
  autoOpenTabs: true,
  openTabsInBackground: true,
  pollDelay: '5', // in minutes
  maxStreams: '2',
  favorites: [] as string[],
  hiddenChannels: {
    twitch: [] as string[],
  },
  addedChannels: {
    twitch: [] as string[],
  },
  autoMuteTabs: true,
  sortLow: true,
  showPreviewOnHover: true,

  // Auth credentials
  accessToken: null as (null | string),
  userId: null as (null | string),
};

export const DEFAULT_STORAGE = Object.freeze(DEFAULT_STORAGE_VALUES);

export const MESSAGE_TYPES = Object.freeze({
  LOGIN: 0,
  LOGOUT: 1,
  FETCH_CHANNELS: 2,
  SEND_CHANNELS: 3,
  MUTE_PLAYER: 4,
} as const);

export type Storage = typeof DEFAULT_STORAGE;
export type MutableStorage = DeepMutable<Storage>;
export type StorageKey = keyof Storage;
export type StorageKeys = StorageKey[];

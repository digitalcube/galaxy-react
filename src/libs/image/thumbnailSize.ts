export const DEFAULT_THUMBNAIL_WIDTH = 167;
export const DEFAULT_THUMBNAIL_HEIGHT = 111;
export const THUMBNAIL_RATIO =
  DEFAULT_THUMBNAIL_HEIGHT / DEFAULT_THUMBNAIL_WIDTH;

export const getThumbnailHeight = (width: number): number => {
  return Math.ceil(width * THUMBNAIL_RATIO);
};

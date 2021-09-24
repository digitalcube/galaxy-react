/**
 * via: https://qiita.com/nahokomatsui/items/856c0cb07a380305521a
 */
export type KeyExtract<T, U extends keyof T> = {
  [K in Extract<keyof T, U>]: T[K];
};
export type KeyExclude<T, U extends keyof T> = {
  [K in Exclude<keyof T, U>]: T[K];
};

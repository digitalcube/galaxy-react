import { toUnicode } from 'punycode';

/**
 * Convert punydomain string, if faild, return default domain name
 * @param {string} domain domain name
 */
export const handlePunyDomain = (domain?: string): string => {
  if (!domain) return '';
  try {
    return toUnicode(domain);
  } catch (e) {
    return domain;
  }
};

export function getUrlWithHttpPrefix(url?: string): string {
  if (!url) return '';
  if (/^http/.test(url)) return url;
  return `https://${url}`;
}

export const DEFAULT_SCREENSHOT_SIZE = 300;
export const createScreenshotURL = (
  url: string,
  size: number = DEFAULT_SCREENSHOT_SIZE
): string => {
  return [
    '//s.wordpress.com/mshots/v1',
    getUrlWithHttpPrefix(handlePunyDomain(url)),
    `?w=${size}`,
  ].join('/');
};

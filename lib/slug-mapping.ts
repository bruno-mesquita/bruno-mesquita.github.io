import slugData from './slug-data.json';

export type SlugMapping = Record<string, Record<string, string>>;

export const slugMapping: SlugMapping = slugData as SlugMapping;

export function getSlugForLocale(
  slug: string,
  fromLocale: string,
  toLocale: string
): string | null {
  for (const date of Object.keys(slugMapping)) {
    const entry = slugMapping[date];
    if (entry[fromLocale] === slug) {
      const targetSlug = entry[toLocale];
      return targetSlug || null;
    }
  }
  return null;
}

export function getAllTranslatedSlugs(
  slug: string
): Record<string, string> | null {
  for (const date of Object.keys(slugMapping)) {
    const entry = slugMapping[date];
    if (entry.en === slug || entry['pt-BR'] === slug) {
      return entry;
    }
  }
  return null;
}

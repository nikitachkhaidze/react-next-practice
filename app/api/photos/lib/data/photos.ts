import type { Photo } from '@/model/photo';

const TITLE_WORDS = [
  'accusamus', 'beatae', 'ad', 'facilis', 'cum', 'similique', 'qui', 'sunt',
  'reprehenderit', 'quos', 'placeat', 'facere', 'possimus', 'omnis', 'esse',
  'voluptatem', 'nostrum', 'et', 'nemo', 'labore',
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function titleFromSeed(seed: number): string {
  const wordCount = 6 + Math.floor(seededRandom(seed) * 4);
  return Array.from({ length: wordCount }, (_, i) =>
    TITLE_WORDS[Math.floor(seededRandom(seed + i + 1) * TITLE_WORDS.length)]
  ).join(' ');
}

function colorFromSeed(seed: number): string {
  return Math.floor(seededRandom(seed) * 0xffffff)
    .toString(16)
    .padStart(6, '0');
}

export const photos: Photo[] = Array.from(
  { length: 500 },
  (_, index) => {
    const id = index + 1;
    const color = colorFromSeed(id);

    return {
      id,
      title: titleFromSeed(id),
      url: `https://placehold.co/500/${color}/ddd.webp`,
      color,
    };
  }
);

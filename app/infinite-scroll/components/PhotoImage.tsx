'use client';

import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  color?: string;
};

export default function PhotoImage({ width, height, src, alt, color }: Readonly<Props>) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-loaded="false"
      onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
      className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-400"
      objectFit='cover'
      sizes="(max-width: 768px) 150px, (max-width: 1200px) 600px"
      loader={() => `https://placehold.co/${width}/${color}/ddd.webp`}
    />
  );
}

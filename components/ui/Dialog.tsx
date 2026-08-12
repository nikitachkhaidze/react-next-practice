'use client';

type Props = { title: string; children: React.ReactNode };

export default function Dialog({ title, children }: Props) {
  return (
    <div className="p-2 min-w-2xs border-2 rounded-md bg-white">
      <h3 className="mb-2 font-bold">{title}</h3>

      <div>{children}</div>
    </div>
  );
}

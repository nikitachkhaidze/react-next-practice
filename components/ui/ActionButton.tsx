import clsx from 'clsx';
import { ComponentProps } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function ActionButton({ children, className, ...props }: Readonly<Props>) {
  return (
    <button
      type="button"
      className={clsx(
        'border-2 p-2 cursor-pointer rounded-lg bg-background text-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

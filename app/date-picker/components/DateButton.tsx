import { clsx } from 'clsx';
import { ComponentProps } from 'react';

type Props = {
  children: React.ReactNode;
  isOtherMonth?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
} & ComponentProps<"button">;

export default function DateButton({
  children,
  isOtherMonth = false,
  isSelected = false,
  isToday = false,
  ...props
}: Readonly<Props>) {
  return (
    <button
      type="button"
      className={
        clsx(
          'flex h-full w-full cursor-pointer items-center justify-center rounded border-0 hover:bg-[hsl(200,100%,80%)] hover:text-black', {
          'text-[#aaa]': isOtherMonth,
          'bg-[hsl(200,100%,50%)] text-white': isSelected,
          'bg-[hsl(200,100%,50%)] border border-[hsl(200,100%,50%)] text-white': isToday,
        })
      }
      {...props}
    >
      {children}
    </button>
  );
}

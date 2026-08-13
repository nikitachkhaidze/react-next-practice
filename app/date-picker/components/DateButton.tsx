import { clsx } from 'clsx';

type Props = {
  children: React.ReactNode;
  onClick: () => void,
  isOtherMonth?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
};

export default function DateButton({
  children,
  onClick,
  isOtherMonth = false,
  isSelected = false,
  isToday = false,
}: Readonly<Props>) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={
        clsx(
          'flex h-full w-full cursor-pointer items-center justify-center rounded border-0 hover:bg-[hsl(200,100%,80%)] hover:text-black', {
          'text-[#aaa]': isOtherMonth,
          'bg-[hsl(200,100%,50%)] text-white': isSelected,
          'bg-[hsl(200,100%,50%)] border border-[hsl(200,100%,50%)] text-white': isToday,
        })
      }
    >
      {children}
    </button>
  );
}

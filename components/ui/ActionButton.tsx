import clsx from 'clsx';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function ActionButton({ onClick, children, className }: Readonly<Props>) {
  return (
    <button
      type="button"
      className={clsx(
        'border-2 p-2 cursor-pointer rounded-lg bg-background text-foreground',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

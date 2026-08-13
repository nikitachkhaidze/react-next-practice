type Props = { onClick: () => void, children: React.ReactNode };

export default function ActionButton({ onClick, children }: Readonly<Props>) {
  return (
    <button
      type="button"
      className={`border-2 p-2 cursor-pointer rounded-lg bg-background text-foreground`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

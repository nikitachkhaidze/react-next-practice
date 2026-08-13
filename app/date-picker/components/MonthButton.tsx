type Props = {
  children: React.ReactNode;
  onClick: () => void,
};

export default function MonthButton({ children, onClick }: Readonly<Props>) {
  return (
    <button onClick={onClick} type="button" className={'cursor-pointer border-0 bg-transparent p-1 hover:rounded-lg hover:shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]'}>
      {children}
    </button>
  );
}

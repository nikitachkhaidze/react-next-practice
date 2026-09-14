import { ComponentProps } from "react";

type Props = {
  children: React.ReactNode;
} & ComponentProps<"button">;

export default function MonthButton({ children, ...props }: Readonly<Props>) {
  return (
    <button type="button" className={'cursor-pointer border-0 bg-transparent p-1 hover:rounded-lg hover:shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]'} {...props}>
      {children}
    </button>
  );
}

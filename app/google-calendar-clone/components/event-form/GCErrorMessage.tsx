import clsx from "clsx";
import { ReactNode } from "react"

type Props = {
  className?: string;
  children: ReactNode;
}

export default function GCErrorMessage({children, className}: Readonly<Props>) {
  return <div className={clsx("text-sm text-(--gc-text-red) min-h-5", className)}>{children}</div>
}
import clsx from "clsx";
import { ErrorMessage, ErrorMessageProps, FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = {
  className?: string;
} & ErrorMessageProps<T>;

export default function GCErrorMessage<T extends FieldValues>({className, ...props}: Readonly<Props<T>>) {
  return <ErrorMessage {...props} render={({message}) => <div className={clsx("text-sm text-(--gc-text-red) min-h-5", className)}>{message}</div>}></ErrorMessage>
}
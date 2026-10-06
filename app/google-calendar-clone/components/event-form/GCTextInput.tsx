import { ComponentProps } from "react";
import GCInputLabel from "./GCInputLabel";
import { FieldError } from "react-hook-form";

export type Props = {
    label: string,
    error?: FieldError;
} & ComponentProps<'input'>

export default function GCTextInput({error, className, name, label, ...props }: Readonly<Props>) {
    return  <div className={`flex flex-col ${className}`}>
        <GCInputLabel label={label} htmlFor={name} />
        <input autoComplete="none" className="border-2 border-solid rounded-sm focus-visible:outline-none" type='text' name={name} {...props} />
        <div className="text-red">{error?.message}</div>
    </div>
}
import { ComponentProps, useId } from "react";
import GCInputLabel from "./GCInputLabel";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import GCErrorMessage from "./GCErrorMessage";

export type Props<T extends FieldValues> = {
    control: Control<T>;
    label: string;
    name: FieldPath<T>;
} & ComponentProps<'input'>

export default function GCTextInput({control, className, id, name, label, ...props }: Readonly<Props>) {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return  <div className={`flex flex-col ${className}`}>
        <GCInputLabel label={label} htmlFor={inputId} />
        <input autoComplete="none" className="border-2 border-solid rounded-sm focus-visible:outline-none" type='text' id={inputId} name={name} {...props} />
        <GCErrorMessage className="mt-1" name={name} control={control}></GCErrorMessage>
    </div>
}
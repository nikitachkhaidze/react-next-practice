import { ComponentProps, useId } from "react";
import GCInputLabel from "./GCInputLabel";
import GCErrorMessage from "./GCErrorMessage";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export type Props<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label: string,
} & ComponentProps<'input'>

export default function GCTimeInput<T extends FieldValues>({control, className, id, name, label, ...props }: Readonly<Props<T>>) {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return <div className={`mb-4 flex min-w-0 grow basis-0 flex-col ${className}`}>
        <GCInputLabel label={label} htmlFor={inputId} />

        <input className='px-2 py-1 focus-visible:outline-none cursor-pointer' type="time" id={inputId} name={name} {...props} />
        <GCErrorMessage control={control} name={name}></GCErrorMessage>
    </div>
}
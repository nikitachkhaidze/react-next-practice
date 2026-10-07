import { ComponentProps, useId } from "react";
import GCInputLabel from "./GCInputLabel";

export type Props = {
    name: string;
    label: string,
} & ComponentProps<'input'>

export default function GCTimeInput({className, id, name, label, ...props }: Readonly<Props>) {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return <div className={`mb-4 flex min-w-0 grow basis-0 flex-col ${className}`}>
        <GCInputLabel label={label} htmlFor={inputId} />

        <input className='px-2 py-1 focus-visible:outline-none cursor-pointer' type="time" id={inputId} name={name} {...props} />
    </div>
}
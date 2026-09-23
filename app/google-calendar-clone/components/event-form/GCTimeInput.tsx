import { ComponentProps } from "react";
import GCInputLabel from "./GCInputLabel";

export type Props = {
    name: string;
    label: string,
} & ComponentProps<'input'>

export default function GCTimeInput({name, label, ...props }: Readonly<Props>) {
    return <div className="mb-4 flex min-w-0 grow basis-0 flex-col">
        <GCInputLabel label={label} htmlFor={name} />

        <input className='px-2 py-1' type="time" name={name} {...props} />
    </div>
}
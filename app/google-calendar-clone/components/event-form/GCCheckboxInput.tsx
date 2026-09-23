import { ComponentProps } from "react";
import GCInputLabel from "./GCInputLabel";

export type Props = {
    label: string,
} & ComponentProps<'input'>

export default function GCCheckboxInput({name, label, ...props }: Readonly<Props>) {
    return  <div className='flex flex-row gap-2 items-center'>
        <GCInputLabel label={label} htmlFor={name} />
        <input autoComplete="none" className="focus-visible:outline-none" type='checkbox' name={name} {...props} />
    </div>
}
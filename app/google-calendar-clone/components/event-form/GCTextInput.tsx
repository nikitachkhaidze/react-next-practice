import { ComponentProps } from "react";
import GCInputLabel from "./GCInputLabel";

export type Props = {
    label: string,
} & ComponentProps<'input'>

export default function GCTextInput({name, label, ...props }: Readonly<Props>) {
    return  <div className="flex flex-col">
        <GCInputLabel label={label} htmlFor={name} />
        <input autoComplete="none" className="border-2 border-solid rounded-b-sm focus-visible:outline-none" type='text' name={name} {...props} />
    </div>
}
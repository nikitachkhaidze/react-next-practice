import { ComponentProps, useId } from "react";
import GCInputLabel from "./GCInputLabel";

export type Props = {
    label: string,
} & ComponentProps<'input'>

export default function GCCheckboxInput({className, id, name, label, ...props }: Readonly<Props>) {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return  <div className={`flex flex-row gap-2 items-center ${className}`}>
        <GCInputLabel label={label} htmlFor={inputId} />
        <input autoComplete="none" className="focus-visible:outline-none" type='checkbox' id={inputId} name={name} {...props} />
    </div>
}
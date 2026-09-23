import { ComponentProps } from "react";

export type Props = {
    label: string,
} & ComponentProps<'label'>

export default function GCInputLabel({label, ...props}: Readonly<Props>) {
    return <label className='text-[0.8rem] font-bold text-[#777]' {...props}>
        {label}
    </label>
}

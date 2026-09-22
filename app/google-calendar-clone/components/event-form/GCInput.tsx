import { ComponentProps, HTMLInputTypeAttribute } from "react"

export type Props = {
    label: string,
    type: HTMLInputTypeAttribute,
} & ComponentProps<'input'>

export default function GCInput({id, name, label, type, className}: Readonly<Props>) {
    return <div className={className}>
            <label className='text-[0.8rem] font-bold text-[#777]' htmlFor={name}>
                {label}
            </label>
            <input className='px-2 py-1' type={type} name={name} id={id} />
        </div>
}
import { ComponentProps } from "react";
import GCColorRadioButton from "./GCColorRadioButton";

type Props = ComponentProps<'input'>;

export default function GCEventColorRadioGroup(props: Props) {
    return <div className="flex gap-2">
        <GCColorRadioButton color='blue' {...props}></GCColorRadioButton>
        <GCColorRadioButton color='red' {...props}></GCColorRadioButton>
        <GCColorRadioButton color='green' {...props}></GCColorRadioButton>
    </div>
}
import GCColorRadioButton from "./GCColorRadioButton";

export default function GCEventColorRadioGroup() {
    return <div className="flex gap-2">
        <GCColorRadioButton color='blue'></GCColorRadioButton>
        <GCColorRadioButton color='red'></GCColorRadioButton>
        <GCColorRadioButton color='green'></GCColorRadioButton>
    </div>
}
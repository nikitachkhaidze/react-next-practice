type Props = {text: string, onClick: () => void};

export default function ActionButton({text, onClick}: Readonly<Props>) {
    return <button type="button" className={`border-2 p-2 cursor-pointer rounded-lg bg-background text-foreground`} onClick={onClick}>{text}</button>;
}
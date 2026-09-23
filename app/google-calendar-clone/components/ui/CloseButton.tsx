type Props = {
    onClick: () => void;
}

export default function CloseButton({onClick}: Readonly<Props>) {
    return <button
        className="size-8 cursor-pointer rounded-full border-0 bg-transparent p-0 text-center text-[1.75rem] leading-8 text-[#333] transition-colors duration-250 hover:bg-[#eaeaea]"
        type="button"
        aria-label="Close"
        onClick={onClick}
        >
        &times;
    </button>
}
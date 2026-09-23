import clsx from "clsx";
import { ActionButtonColor } from "../../model/actionButton";

type Props = {
    label: string;
    onClick: () => void;
    color: ActionButtonColor;
}

export default function ActionButton({label, onClick, color}: Readonly<Props>) {
    return  <button
        className={clsx(
            'cursor-pointer rounded border px-4 py-2 text-base text-[#333] transition-colors duration-250 grow basis-0 text-[hsl(0,75%,10%)]',
            {
                'border-[hsl(0,75%,60%)] bg-[hsl(0,75%,95%)] hover:bg-[hsl(0,75%,90%)]': color === 'red',
                'border-[hsl(150,80%,30%)] bg-[hsl(150,80%,95%)] hover:bg-[hsl(150,80%,90%)]': color === 'green',
            },
        )}
        type="button"
        onClick={onClick}
    >
        {label}
    </button>
}
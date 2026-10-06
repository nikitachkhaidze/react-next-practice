import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type Props = {
    onClick: () => void;
    children: ReactNode;
    size?: 's' | 'm';
} & ComponentProps<'button'>

export default function IconButton({onClick, children, size = 'm', className, ...props}: Readonly<Props>) {
    return <button
        className={clsx(
            'cursor-pointer rounded-full border-0 bg-transparent p-0 text-center text-[#333] transition-colors duration-250 hover:bg-[#eaeaea]',
            {
                'size-6 leading-6 text-xl': size === 's',
                'size-8 leading-8 text-[1.75rem]': size === 'm',
            },
            className,
        )}
        type="button"
        aria-label="Close"
        onClick={onClick}
        {...props}
        >
        {children}
    </button>
}
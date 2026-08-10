'use client';

import { ModalContextValue } from "@/model/providers";
import { createContext, useContext, useMemo, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal() {
    const modalContext = useContext(ModalContext);

    if (!modalContext) {
        throw new Error('No provider for modal context');
    }

    return modalContext;
}

export function ModalProvider({children}: Readonly<{children: React.ReactNode}>) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<React.ReactNode | null>(null);

    const value = useMemo(
        () => ({
            isOpen,
            open: (content: React.ReactNode | null) => {
                setIsOpen(true);
                setContent(content);
            },
            close: () => setIsOpen(false)
        }),
        [isOpen]
    );

    function onBackdropClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();

        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    }

    return <ModalContext.Provider value={value}>
        {children}
        {
            isOpen &&
            createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onBackdropClick}>
                    {content}
                </div>,
                document.querySelector('#modal-container') as Element,
            )
        }
    </ModalContext.Provider>
}
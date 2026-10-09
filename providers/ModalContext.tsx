'use client';

import { ModalContextValue } from '@/model/providers';
import { FocusTrap, FocusTrapProps } from 'focus-trap-react';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal() {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error('No provider for modal context');
  }

  return modalContext;
}

export function ModalProvider({ children }: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [focusTrapProps, setFocusTrapProps] = useState<FocusTrapProps | undefined>();

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      open: (content: ReactNode | null, focusTrapProps?: FocusTrapProps) => {
        setIsOpen(true);
        setContent(content);
        setFocusTrapProps(focusTrapProps);
      },
      close: () => setIsOpen(false),
    }),
    [isOpen],
  );

  function onBackdropClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();

    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen &&
        createPortal(
          <FocusTrap {...focusTrapProps}>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
              onKeyDown={onKeyDown}
              onClick={onBackdropClick}
            >
              {content}
            </div>
          </FocusTrap>,
          document.querySelector('#modal-container') as Element,
        )}
    </ModalContext.Provider>
  );
}

import { FocusTrapProps } from "focus-trap-react";

export interface ModalContextValue {
  isOpen: boolean;
  open: (content: React.ReactNode | null, focusTrapProps?: FocusTrapProps) => void;
  close: () => void;
}

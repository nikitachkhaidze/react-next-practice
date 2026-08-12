export interface ModalContextValue {
  isOpen: boolean;
  open: (content: React.ReactNode | null) => void;
  close: () => void;
}

'use client';

import ActionButton from '@/components/ui/ActionButton';
import Dialog from '@/components/ui/Dialog';
import { useModal } from '@/providers/ModalContext';

export default function Modal() {
  const modal = useModal();

  function openModal() {
    modal.open(
      <Dialog title="Custom Dialog">
        <div className="mb-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, deserunt.
        </div>

        <ActionButton text={'Close'} onClick={modal.close}></ActionButton>
      </Dialog>,
    );
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <ActionButton text="Open Modal" onClick={openModal} />
    </div>
  );
}

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const Modal = ({ open, onOpenChange, title, children }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
      <Dialog.Content asChild>
        <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-2xl rounded-t-3xl bg-white p-6 shadow-2xl md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:rounded-2xl">
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="text-xl font-bold text-primary">{title}</Dialog.Title>
            <Dialog.Close aria-label="Fermer" className="rounded-full p-2 hover:bg-neutral-100">
              <X size={18} />
            </Dialog.Close>
          </div>
          {children}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;

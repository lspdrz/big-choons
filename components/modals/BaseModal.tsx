import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import useModal from "../../hooks/useModal";

type Props = {
  children?: ReactNode;
};

const BaseModal = ({ children }: Props) => {
  const { closeModal } = useModal();
  const modalRoot = document.getElementById("modal");
  const onEscKeyDown = (e: any) => {
    if (e.key !== "Escape") return;
    closeModal();
  };

  useEffect(() => {
    window.addEventListener("keydown", onEscKeyDown, false);
    return () => window.removeEventListener("keydown", onEscKeyDown, false);
  }, []);

  return modalRoot
    ? ReactDOM.createPortal(
        <div className="flex flex-col fixed z-10 inset-0 overflow-y-auto">
          {/* Roby, please add the x button here and attach closeModal to it */}
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:flex sm:p-0 h-full">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={() => closeModal()}
              ></div>
            </div>
            <div
              className="inline-block align-bottom bg-white overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {children}
            </div>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

export default BaseModal;

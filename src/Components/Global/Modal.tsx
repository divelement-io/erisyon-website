import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

type ModalProps = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  isShowBtnClose?: boolean;
};

const Modal = ({ open, children, onClose, isShowBtnClose = false }: ModalProps) => {
  const portalRef = useRef<Element | null>(null);
  const wrapperContRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [opened, setOpened] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    portalRef.current = document?.querySelector<HTMLElement>("#main-modals-portal");

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    setOpened(true);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      if (wrapperContRef?.current?.firstChild && !wrapperContRef.current.firstChild?.contains?.(ev?.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperContRef]);

  if (!(mounted && portalRef?.current && opened && children)) {
    return null;
  }

  const handleAnimationEnd = () => {
    if (open) return;
    setOpened(false);
  }

  const modalClasses = `modal-${open ? 'show' : 'hide'}`;
  const wrapperModal = () => (
    <div
      data-type="modal-wrapper"
      className={`h-screen w-screen bg-[#000000cc] fixed top-0 left-0 max-w-full overflow-hidden z-50 ${modalClasses}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {isShowBtnClose && (
        <div data-type="modal-button-close-wrapper" className="absolute top-4 right-4 cursor-pointer">
          <FontAwesomeIcon icon={faClose} onClick={onClose} className="w-8 h-8 text-white"/>
        </div>
      )}
      <section ref={wrapperContRef} data-type="modal-wrapper-container" className="h-full w-full flex justify-center items-center max-lg:px-4">
        {children}
      </section>
    </div>
  );

  return createPortal(wrapperModal(), portalRef.current);
};

export default Modal;

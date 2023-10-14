import React, { useState, useEffect, useCallback, FormEventHandler, AnimationEventHandler, MouseEventHandler } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import Modal from './Global/Modal';

type ModalDownloadProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  downloadLink: string;
};

const ModalDownload = ({ 
  open, onClose, title, description, downloadLink,
}: ModalDownloadProps) => {
  const [keepData, setKeepData] = useState({ title: '', description: '', downloadLink: '' });
  const [animationStep, setAnimationStep] = useState<number>(0);

  useEffect(() => {
    if (!open) return;

    setKeepData({ title, downloadLink, description: description?.replace(/"|'|“|”/g, '') || '' });
    setAnimationStep(0);
  }, [open, title, description, downloadLink]);

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    const data = {
      email: (ev?.target as any)?.[3]?.value,
      phone: '',
      company: '',
      website: '',
      lastname: (ev?.target as any)?.[2]?.value,
      firstname: (ev?.target as any)?.[1]?.value,
    };

    try {
      await fetch("/api/createContact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });
      setAnimationStep(1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = useCallback((ev) => {
    if (!((ev.target as any).dataset.type === 'modal-body' && animationStep > 0)) return;

    setAnimationStep(2);
  }, [animationStep]);

  const handleDownload: MouseEventHandler<HTMLButtonElement> = () => {
    window.open(keepData.downloadLink, '_blank', 'noopener noreferrer');
  };

  const animationStyles = ['', 'modal-move-left', 'modal-move-return'];
  const colorStyles = `drop-shadow-3xl placeholder:text-e-dark-grey border-2 border-transparent focus:outline-none focus:border-e-dark-grey`;
  const inputClass = `w-full py-2 pl-6 rounded-full mb-4 tracking-widest transition-colors duration-200 ${colorStyles}`;
  return (
    <Modal open={open} onClose={onClose}>
      <div
        data-type="modal-body"
        onAnimationEnd={handleAnimationEnd}
        className={`${animationStyles[animationStep]} bg-white lg:w-[44rem] rounded-3xl p-6 py-10 md:p-6 md:py-10 lg:p-[50px] lg:pt-[55px] lg:pb-[44px] relative overflow-hidden`}
      >
        <FontAwesomeIcon
          data-type="modal-button-close-body"
          icon={faClose}
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 lg:w-5 xl:h-5 bg-black text-white rounded-full p-2 cursor-pointer"
        />
        <div className="font-poppins" data-type="modal-content">
          {animationStep < 2 ? (
            <>
              <h5 className="font-pt-mono tracking-widest font-bold mb-5">DOWNLOAD {keepData.title}</h5>
              <h6 className="text-xl pb-5 border-b-2 border-black">{keepData.description}</h6>
              <div className="mt-12 lg:mt-[120px] mx-auto max-w-[28rem] pb-5">
                <p className="mb-4">Please provide the information below.</p>
                <form name="download" method="post" className="font-pt-mono font-bold text-center" data-netlify="true" onSubmit={handleSubmitForm}>
                  <input type="hidden" name="form-name" value="download" />
                  <input type="text" className={inputClass} name="firstName" placeholder="ENTER FIRST NAME" required />
                  <input type="text" className={inputClass} name="lastName" placeholder="ENTER LAST NAME" required />
                  <input type="email" className={inputClass} name="email" placeholder="ENTER YOUR EMAIL" required />
                  <button type="submit" className="rounded-full border border-black py-1 px-5 mt-6 mr-4 tracking-widest">
                    SUBMIT
                  </button>
                </form>
              </div>
            </>
          ) : (
            <>
              <h5 className="font-pt-mono tracking-widest font-bold mb-5">THANK YOU</h5>
              <h6 className="text-xl pb-5 border-b-2 border-black">{keepData.description}</h6>
              <button
                type="button"
                onClick={handleDownload}
                className="font-pt-mono font-bold text-center rounded-full border border-black py-1 px-5 mt-10 tracking-widest flex mx-auto"
              >
                DOWNLOAD
              </button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalDownload;

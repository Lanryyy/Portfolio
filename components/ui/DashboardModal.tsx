"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef } from "react";

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  iframeSrc: string;
  title: string;
}

export const DashboardModal = ({
  isOpen,
  onClose,
  iframeSrc,
  title,
}: DashboardModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dashboard-modal-title"
            className="relative w-full max-w-[90vw] h-[80vh] bg-black-200 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black-100/50">
              <h3 id="dashboard-modal-title" className="text-xl font-bold text-white">{title}</h3>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Fechar dashboard"
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
              >
                <IoClose size={24} />
              </button>
            </div>

            <div className="flex-1 w-full h-full bg-black relative">
              <iframe
                title={title}
                src={iframeSrc}
                className="w-full h-full absolute inset-0"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

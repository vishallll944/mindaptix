"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

export type FAQItemProps = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  id?: string;
};

export function FAQItem({ question, answer, open, onToggle, id }: FAQItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const panelId = id ? `${id}-panel` : undefined;
  const buttonId = id ? `${id}-button` : undefined;

  return (
    <div className={`faq-item${open ? " is-open" : ""}`}>
      <h3>
        <button
          id={buttonId}
          type="button"
          className="faq-item__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{question}</span>
          <span className="faq-item__icon" aria-hidden>
            <Plus size={16} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className="faq-item__content"
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="faq-item__content-inner">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

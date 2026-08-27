"use client";

import { useId, useState } from "react";
import { FAQItem } from "@/components/FAQItem";

export type FAQAccordionItem = {
  q: string;
  a: string;
};

export type FAQAccordionProps = {
  items: FAQAccordionItem[];
  defaultOpen?: number | null;
  className?: string;
};

export function FAQAccordion({
  items,
  defaultOpen = 0,
  className = "",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={`faq-list${className ? ` ${className}` : ""}`}>
      {items.map((item, index) => (
        <FAQItem
          key={item.q}
          id={`${baseId}-${index}`}
          question={item.q}
          answer={item.a}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

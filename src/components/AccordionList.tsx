import { useState } from "react";
import { accordionList } from "../data";
import AccordionItem from "./AccordionItem";
import type { AccordionProps } from "../types";

function AccordionList({ mode = "single" }: AccordionProps) {
  // For single mode: track the open accordion ID (null if none open)
  // For multi mode: track array of open accordion IDs
  const [openAccordion, setOpenAccordion] = useState<null | number>(null);
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);

  const handleOpenAccordion = (id: number) => {
    if (mode === "single") {
      // Single mode: toggle the clicked accordion, close others
      setOpenAccordion(openAccordion === id ? null : id);
    } else {
      // Multi mode: add/remove from array of open accordions
      setOpenAccordions(prev => {
        if (prev.includes(id)) {
          return prev.filter(openId => openId !== id);
        } else {
          return [...prev, id];
        }
      });
    }
  };

  // Determine if an accordion item is open based on mode
  const isAccordionOpen = (id: number) => {
    if (mode === "single") {
      return openAccordion === id;
    } else {
      return openAccordions.includes(id);
    }
  };

  return (
    <div className=" flex justify-center items-center flex-col gap-4 h-full">
      {accordionList.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          open={isAccordionOpen(item.id)}
          handleOpen={handleOpenAccordion}
        />
      ))}
    </div>
  );
}

export default AccordionList;

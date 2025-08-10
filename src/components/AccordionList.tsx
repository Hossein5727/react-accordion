import { useState, useEffect, useRef } from "react";
import type { AccordionProps } from "../types";
import AccordionItem from "./AccordionItem";

function AccordionList({
  mode = "single",
  items,
  defaultOpenId,
  animated = true,
  openIcon,
  closeIcon
}: AccordionProps) {
  // For single mode: track the open accordion ID (null if none open)
  // For multi mode: track array of open accordion IDs
  const [openAccordion, setOpenAccordion] = useState<null | number>(
    defaultOpenId || null
  );
  const [openAccordions, setOpenAccordions] = useState<number[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  // Focus management for keyboard navigation
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOpenAccordion = (id: number) => {
    if (mode === "single") {
      // Single mode: toggle the clicked accordion, close others
      setOpenAccordion(openAccordion === id ? null : id);
    } else {
      // Multi mode: add/remove from array of open accordions
      setOpenAccordions((prev) => {
        if (prev.includes(id)) {
          return prev.filter((openId) => openId !== id);
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

  // Focus management helper
  const focusAccordion = (index: number) => {
    if (accordionRefs.current[index]) {
      accordionRefs.current[index]?.focus();
      setFocusedIndex(index);
    }
  };

  // Keyboard navigation handler
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        const nextIndex = (index + 1) % items.length;
        focusAccordion(nextIndex);
        break;
      }
      
      case "ArrowUp": {
        event.preventDefault();
        const prevIndex = (index - 1 + items.length) % items.length;
        focusAccordion(prevIndex);
        break;
      }
      
      case "Enter":
      case " ": // Space key
        event.preventDefault();
        handleOpenAccordion(items[index].id);
        break;
      
      case "Home":
        event.preventDefault();
        focusAccordion(0);
        break;
      
      case "End":
        event.preventDefault();
        focusAccordion(items.length - 1);
        break;
    }
  };

  // Initialize refs array when items change
  useEffect(() => {
    accordionRefs.current = accordionRefs.current.slice(0, items.length);
  }, [items.length]);

  return (
    <div className=" flex justify-center items-center flex-col gap-4 h-full">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          open={isAccordionOpen(item.id)}
          handleOpen={handleOpenAccordion}
          animated={animated}
          openIcon={openIcon}
          closeIcon={closeIcon}
          ref={(el) => {
            accordionRefs.current[index] = el;
          }}
          onKeyDown={(event) => handleKeyDown(event, index)}
          tabIndex={0}
          isFocused={focusedIndex === index}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export default AccordionList;

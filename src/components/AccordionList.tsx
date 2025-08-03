import { useState } from "react";
import { accordionList } from "../data";
import AccordionItem from "./AccordionItem";

function AccordionList() {
  const [openAccordion, setOpenAccordion] = useState<null | number>(null);

  const handleOpenAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className=" flex justify-center items-center flex-col gap-4 h-full">
      {accordionList.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          open={openAccordion}
          handleOpen={handleOpenAccordion}
        />
      ))}
    </div>
  );
}

export default AccordionList;

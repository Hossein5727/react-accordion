import { accordionList } from "../data";
import AccordionItem from "./AccordionItem";

function AccordionList() {
  return (
    <div className=" flex justify-center items-center flex-col gap-4 h-full">
      {accordionList.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default AccordionList;

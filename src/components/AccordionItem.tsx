import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { AccordionItemProps } from "../types";

function AccordionItem({
  title,
  id,
  children,
  open,
  handleOpen,
  animated,
  openIcon,
  closeIcon,
}: AccordionItemProps) {
  const isOpen = open;

  return (
    <div className="bg-white rounded-lg p-4 w-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => {
          handleOpen(id);
        }}
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">{title}</h3>
        <button className="flex-shrink-0">
          {!isOpen && openIcon ? (
            openIcon
          ) : isOpen && closeIcon ? (
            closeIcon
          ) : (
            <ChevronDownIcon
              className={`size-5 text-gray-600 transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden ${
          animated ? "transition-all duration-300" : ""
        }  ease-in-out ${
          isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;

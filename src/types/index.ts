export interface AccordionItemType {
  id: number;
  title: string;
  content: string;
  disabled?: boolean;
}

export interface AccordionItemProps {
  item: AccordionItemType;
  open: boolean;
  handleOpen: (arg: number) => void;
}

export interface AccordionProps {
  mode?: "multiple" | "single";
}

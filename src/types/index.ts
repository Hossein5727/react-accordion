export interface AccordionItemType {
  id: number;
  title: string;
  content: string;
  disabled?: boolean;
}

export interface AccordionItemProps {
  item: AccordionItemType;
}

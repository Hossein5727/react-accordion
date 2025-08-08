import type { ReactNode } from "react";

export interface AccordionItemType {
  id: number;
  title: string;
  children: ReactNode;
  disabled?: boolean;
}

export interface AccordionDataItemType {
  id: number;
  title: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionItemProps extends AccordionItemType {
  open: boolean;
  handleOpen: (arg: number) => void;
  animated: boolean;
  openIcon: ReactNode;
  closeIcon: ReactNode;
}

export interface AccordionProps {
  mode?: "multiple" | "single";
  items: AccordionDataItemType[];
  defaultOpenId?: number;
  animated?: boolean;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
}

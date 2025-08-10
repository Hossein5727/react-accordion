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
  onKeyDown?: (event: React.KeyboardEvent) => void;
  tabIndex?: number;
  isFocused?: boolean;
}

export interface AccordionProps {
  mode?: "multiple" | "single";
  items: AccordionDataItemType[];
  defaultOpenId?: number;
  animated?: boolean;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
}

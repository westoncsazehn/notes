import { ReactNode } from "react";

export interface ItemProps {
  children: ReactNode;
  hasBottomBorder?: boolean;
  hasHover?: boolean;
  hasActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface NewNoteProps {
  handleNewNoteEvent: (e: any) => void;
}

export interface ActiveChange {
  handleActiveChange: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id?: number
  ) => void;
}

export interface NotePropsWithActiveChange extends NoteProps, ActiveChange {}
export interface LeftMenuPropsWithEvents
  extends LeftMenuProps,
    NewNoteProps,
    ActiveChange {}

export interface NoteProps {
  content?: string;
  id?: number;
  date: string;
  title: string;
}

export interface LeftMenuProps {
  notes?: NoteProps[];
  query?: string;
  activeNoteID: number;
  handleSearchInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NoteEvents {
  handleDeleteNote: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => void;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSaveByPromise: (
    note: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleSaveByCallback: (
    note: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleSaveByError: (
    note: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export interface ContentProps extends NoteProps, NoteEvents {}

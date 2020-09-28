import React from "react";

import moment from "moment";

import { NotePropsWithActiveChange } from "../types";
import { NoteWrapper, StyledNoteTitle, StyledNoteDate } from "./styles";

export const Note = ({
  date,
  id,
  title,
  handleActiveChange,
}: NotePropsWithActiveChange) => {
  const formattedDate: string = moment(date).format("L");
  return (
    <NoteWrapper onClick={(e) => handleActiveChange(e, id)}>
      <StyledNoteTitle>{title}</StyledNoteTitle>
      <StyledNoteDate>{formattedDate}</StyledNoteDate>
    </NoteWrapper>
  );
};

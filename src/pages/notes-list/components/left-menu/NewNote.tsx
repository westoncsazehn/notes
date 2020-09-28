import React from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { NewNoteWrapper, StyledNewNoteTitle, StyledPlusIcon } from "./styles";
import { NewNoteProps } from "../types";

export const NewNote = ({ handleNewNoteEvent }: NewNoteProps) => {
  return (
    <NewNoteWrapper onClick={handleNewNoteEvent}>
      <StyledNewNoteTitle>
        NEW NOTE
        <StyledPlusIcon icon={faPlus} size="lg" />
      </StyledNewNoteTitle>
    </NewNoteWrapper>
  );
};

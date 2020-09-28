import React from "react";

import { ContentProps } from "../types";
import { StyledContainer } from "./styles";
import { EditNote } from "./EditNote";
import { NoteToolbar } from "./NoteToolbar";

export const Content = (props: ContentProps) => {
  return (
    <StyledContainer>
      <NoteToolbar {...props} />
      <EditNote {...props} />
    </StyledContainer>
  );
};

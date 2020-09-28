import React from "react";

import { ContentProps } from "../types";
import {
  StyledCard,
  StyledTitleInput,
  StyledContentTextArea,
  StyledSavePromiseButton,
  StyledSaveCallbackButton,
  StyledSaveErrorButton,
} from "./styles";

export const EditNote = (props: ContentProps) => {
  const {
    content = "",
    handleTitleChange,
    handleContentChange,
    handleSaveByPromise,
    handleSaveByCallback,
    handleSaveByError,
    title = "",
  } = props;

  return (
    <StyledCard>
      <StyledTitleInput
        value={title}
        placeholder="Title"
        onChange={handleTitleChange}
      />
      <StyledContentTextArea
        value={content}
        placeholder="Type note here..."
        onChange={handleContentChange}
      />
      <StyledSavePromiseButton onClick={handleSaveByPromise}>
        save 1
      </StyledSavePromiseButton>
      <StyledSaveCallbackButton onClick={handleSaveByCallback}>
        save 2
      </StyledSaveCallbackButton>
      <StyledSaveErrorButton onClick={handleSaveByError}>
        save 3
      </StyledSaveErrorButton>
    </StyledCard>
  );
};

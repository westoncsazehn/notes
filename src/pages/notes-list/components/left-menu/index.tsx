import React from "react";

import { faBook } from "@fortawesome/free-solid-svg-icons";

import { Search } from "./Search";
import { Item } from "./Item";
import { LeftMenuPropsWithEvents, NoteProps } from "../types";
import {
  TitleWrapper,
  StyledMenuTitle,
  StyledSearchIcon,
  StyledMenuContainer,
} from "./styles";
import { Note } from "./Note";
import { NewNote } from "./NewNote";

export const LeftMenu = (props: LeftMenuPropsWithEvents) => {
  const {
    activeNoteID,
    handleActiveChange,
    handleNewNoteEvent,
    notes = [],
  } = props;

  const title = (
    <TitleWrapper>
      <StyledMenuTitle>
        <StyledSearchIcon icon={faBook} size="lg" />
        NOTEBOOK
      </StyledMenuTitle>
    </TitleWrapper>
  );
  const noteList = notes
    ? notes.slice().map((note: NoteProps) => {
        const { id } = note;
        const noteProps = {
          ...note,
          handleActiveChange,
        };
        return (
          <Item
            children={<Note {...noteProps} />}
            hasActive={id === activeNoteID}
            hasHover={Boolean(id)}
            key={id?.toString()}
          />
        );
      })
    : null;

  return (
    <StyledMenuContainer>
      <Item children={title} hasBottomBorder={Boolean(title)} />
      <Item
        children={<NewNote handleNewNoteEvent={handleNewNoteEvent} />}
        hasBottomBorder={Boolean(title)}
        hasHover={Boolean(title)}
        hasActive={activeNoteID === 0}
      />
      <Item children={<Search {...props} />} hasBottomBorder={Boolean(title)} />
      {noteList}
    </StyledMenuContainer>
  );
};

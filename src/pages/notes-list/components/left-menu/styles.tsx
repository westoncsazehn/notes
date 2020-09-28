import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ItemProps } from "../types";

// LeftMenu Component //
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
export const StyledMenuTitle = styled.h1`
  font-weight: 800;
  font-size: 16px;
  color: white;
  text-align: left;
`;
export const StyledSearchIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
`;
export const StyledMenuContainer = styled.div`
  height: 100%;
  background-color: #3b0275;
  position: relative;
  overflow-x: hidden;
  flex-basis: 20%;
`;

// Item Component //
export const StyledItem = styled.div<ItemProps>`
  height: 56px;
  display: flex;
  flex-direction: row;
  padding: 0 15px;
  border: unset;
  border-bottom: ${({ hasBottomBorder }) =>
    hasBottomBorder ? "solid 1px #5326a5" : "unset"};
  padding: 0 15px;
  background-color: ${({ hasActive }) =>
    hasActive ? "#5326A5" : "transparent"};
  &:hover {
    background-color: ${({ hasHover }) =>
      hasHover ? "#5326A5" : "transparent"};
    cursor: pointer;
  }
`;

// NewNote Component //
export const NewNoteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const StyledNewNoteTitle = styled.h2`
  width: 100%;
  font-size: 14px;
  color: white;
  margin: auto 0;
  text-align: left;
`;
export const StyledPlusIcon = styled(FontAwesomeIcon)`
  color: #938bee;
  position: absolute;
  right: 15px;
  font-size: 1em;
`;

// Note Component //
export const NoteWrapper = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  text-align: left;
  background-color: transparent;
`;
export const StyledNoteTitle = styled.h2`
  font-size: 14px;
  font-weight: 800;
  color: white;
`;
export const StyledNoteDate = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #938bee;
`;

// Search Component //
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const StyledSearch = styled.input`
  background-color: transparent;
  color: white;
  height: 100%;
  width: 100%;
  border: unset;
  font-size: 16px;
  line-height: 100%;
  &:active,
  &:focus {
    outline: unset;
  }
  &::placeholder {
    color: #938bee;
  }
`;
export const StyledSearchIconWrapper = styled.div`
  display: flex;
  right: 15px;
  flex-direction: column;
  align-self: center;
  position: absolute;
`;
export const StyledSearchInputIcon = styled(FontAwesomeIcon)`
  color: #938bee;
`;

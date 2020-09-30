import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  primary,
  secondary,
  alt,
  contentBackground,
  white,
  fontMedium,
  fontLarge,
  fontIcon,
} from "../../../theme";

// Content Component //
export const StyledContainer = styled.div`
  width: 100%:
  height: 100%;
  flex-basis: 80%;
  background-color: ${contentBackground};
`;

// EditNote Component //
export const StyledCard = styled.div`
  background-color: ${white};
  height: auto;
  border-radius: 6px;
  box-shadow: 0px 2px 10px rgba(26, 26, 53, 0.1);
  margin: 15px 10px;
  padding: 15px;
`;
export const StyledTitleInput = styled.input<any>`
  width: 100%;
  font-size: 22px;
  font-weight: 800;
  color: ${primary};
  padding: 10px 0;
  border: unset;
  &::placeholder {
    color: ${secondary};
  }
  &:focus {
    outline: unset;
  }
`;
export const StyledContentTextArea = styled.textarea`
  color: ${secondary};
  font-size: ${fontLarge};
  font-family: Arial;
  line-height: 24px;
  width: 100%;
  border: none;
  resize: none;
  &:focus {
    outline: unset;
  }
`;
const StyledButton = styled.button`
  background: ${secondary};
  border-radius: 6px;
  font-size: ${fontMedium};
  font-weight: 800;
  line-height: 16.8px;
  text-align: left;
  margin-right: 15px;
  box-shadow: unset;
  border: unset;
  padding: 15px 28px;
  text-transform: uppercase;
  opacity: 0.9;
  &:focus,
  &:active {
    outline: unset;
  }
  &:hover {
    opacity: 1;
  }
`;
export const StyledSavePromiseButton = styled(StyledButton)`
  background: ${alt};
  color: ${white};
`;
export const StyledSaveCallbackButton = styled(StyledButton)`
  background: ${secondary};
  color: ${white};
`;
export const StyledSaveErrorButton = styled(StyledButton)`
  background: ${white};
  color: ${alt};
  border: solid 1px ${alt};
  &:hover {
    background-color: ${alt};
    color: ${white};
  }
`;

// NoteToolbar Component //
export const StyledBar = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  background-color: ${white};
`;
export const StyledTitle = styled.h2`
  font-size: ${fontLarge};
  font-weight: 600;
  color: ${secondary};
  margin: auto 0;
  padding: 0 15px;
`;
export const StyledPlusIcon = styled(FontAwesomeIcon)`
  color: ${primary};
  position: absolute;
  right: 15px;
  font-size: ${fontIcon};
  border: solid 1px ${secondary};
  border-radius: 50%;
  padding: 10px;
  top: 10px;
  &:hover {
    color: ${white};
    background-color: ${primary};
    cursor: pointer;
  }
`;

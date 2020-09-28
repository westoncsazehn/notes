import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Content Component //
export const StyledContainer = styled.div`
  width: 100%:
  height: 100%;
  flex-basis: 80%;
  background-color: #e5e5e5;
`;

// EditNote Component //
export const StyledCard = styled.div`
  background-color: white;
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
  color: #270050;
  padding: 10px 0;
  border: unset;
  &::placeholder {
    color: #938bee;
  }
  &:focus {
    outline: unset;
  }
`;
export const StyledContentTextArea = styled.textarea`
  color: #938bee;
  font-size: 16px;
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
  background: #938bee;
  border-radius: 6px;
  font-size: 14px;
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
  background: #5326a5;
  color: white;
`;
export const StyledSaveCallbackButton = styled(StyledButton)`
  background: #938bee;
  color: white;
`;
export const StyledSaveErrorButton = styled(StyledButton)`
  background: white;
  color: #5326a5;
  border: solid 1px #5326a5;
  &:hover {
    background-color: #5326a5;
    color: white;
  }
`;

// NoteToolbar Component //
export const StyledBar = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  background-color: white;
`;
export const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #938bee;
  margin: auto 0;
  padding: 0 15px;
`;
export const StyledPlusIcon = styled(FontAwesomeIcon)`
  color: #3b0275;
  position: absolute;
  right: 15px;
  font-size: 1em;
  border: solid 1px #938bee;
  border-radius: 50%;
  padding: 10px;
  top: 10px;
  &:hover {
    color: white;
    background-color: #3b0275;
    cursor: pointer;
  }
`;

import React from "react";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import { ContentProps } from "../types";
import { StyledBar, StyledTitle, StyledPlusIcon } from "./styles";

export const NoteToolbar = ({ date, handleDeleteNote }: ContentProps) => {
  const formattedDate: string = `${moment(date).format("ll")} at ${moment(
    date
  ).format("LT")}`;
  return (
    <StyledBar>
      <StyledTitle>
        {date ? formattedDate : null}
        <StyledPlusIcon
          icon={faTrashAlt}
          size="lg"
          onClick={handleDeleteNote}
        />
      </StyledTitle>
    </StyledBar>
  );
};

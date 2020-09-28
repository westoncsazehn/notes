import React from "react";

import { StyledItem } from "./styles";
import { ItemProps } from "../types";

export const Item = ({
  children,
  hasBottomBorder,
  hasHover,
  hasActive,
}: ItemProps) => {
  return (
    <StyledItem {...{ hasBottomBorder, hasHover, hasActive }}>
      {children}
    </StyledItem>
  );
};

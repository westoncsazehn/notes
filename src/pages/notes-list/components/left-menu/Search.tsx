import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  SearchWrapper,
  StyledSearch,
  StyledSearchIconWrapper,
  StyledSearchInputIcon,
} from "./styles";
import { LeftMenuProps } from "../types";

export const Search = ({ handleSearchInput, query }: LeftMenuProps) => {
  return (
    <SearchWrapper>
      <StyledSearch
        placeholder="Search"
        onChange={handleSearchInput}
        value={query}
      />
      <StyledSearchIconWrapper>
        <StyledSearchInputIcon icon={faSearch} />
      </StyledSearchIconWrapper>
    </SearchWrapper>
  );
};

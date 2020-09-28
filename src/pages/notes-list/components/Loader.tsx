import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoaderOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 2;
`;
const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
  margin-top: 20%;
  font-size: 2rem;
`;
const StyledLoaderIcon = styled(FontAwesomeIcon)`
  color: #3b0275;
  display: block;
  margin: auto;
  padding-bottom: 15px;
`;

export interface LoaderProps {
  isLoading?: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <LoaderOverlay hidden={!isLoading}>
      <LoaderWrapper>
        <StyledLoaderIcon icon={faSpinner} size="lg" />
        Loading...
      </LoaderWrapper>
    </LoaderOverlay>
  );
};

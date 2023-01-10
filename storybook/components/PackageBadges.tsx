import styled from '@emotion/styled';
import React from 'react';

const StyledPackageBadges = styled.div`
  margin: 0 -5px;
  a {
    margin: 0 5px;
  }
`;

export const PackageBadges = () => {
  return (
    <StyledPackageBadges>
      <p>
        <a href="https://www.npmjs.com/package/react-pro-sidebar" rel="nofollow" target="_blank">
          <img
            src="https://img.shields.io/github/license/azouaoui-med/react-pro-sidebar?style=flat-square"
            alt="License"
          />
        </a>
        <a href="https://www.npmjs.com/package/react-pro-sidebar" rel="nofollow" target="_blank">
          <img
            src="https://img.shields.io/npm/dependency-version/react-pro-sidebar/peer/react?style=flat-square"
            alt="Peer"
          />
        </a>
        <a href="https://www.npmjs.com/package/react-pro-sidebar" rel="nofollow" target="_blank">
          <img
            src="https://img.shields.io/npm/dt/react-pro-sidebar?style=flat-square"
            alt="Download"
          />
        </a>
        <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
          <img
            src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
            alt="Stars"
          />
        </a>
        <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
          <img
            src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
            alt="Forks"
          />
        </a>
      </p>
    </StyledPackageBadges>
  );
};

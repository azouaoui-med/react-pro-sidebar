import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export interface FooterProps extends React.HTMLAttributes<HTMLHtmlElement> {
  height?: string;
}

const StyledFooter = styled.footer<FooterProps>`
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
`;

export const Footer: React.FC<FooterProps> = React.memo(
  ({ height = '64px', className, children, ...rest }) => {
    return (
      <StyledFooter
        data-testid="footer-test-id"
        className={classnames('footer', className)}
        height={height}
        {...rest}
      >
        {children}
      </StyledFooter>
    );
  },
);

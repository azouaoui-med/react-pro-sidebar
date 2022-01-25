import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export type ContentProps = React.HTMLAttributes<HTMLHtmlElement>;

const StyledContent = styled.main`
  flex: 1;
`;

export const Content: React.FC<ContentProps> = React.memo(({ children, className, ...rest }) => {
  return (
    <StyledContent
      data-testid="content-test-id"
      className={classnames('content', className)}
      {...rest}
    >
      {children}
    </StyledContent>
  );
});

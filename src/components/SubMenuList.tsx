/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import { StyledUl } from './StyledUl';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

let timer: NodeJS.Timer;

const StyledSubMenuList = styled.div<Props>`
  padding-left: 20px;
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: height, margin, padding, 300ms;
  box-sizing: border-box;
`;

export const SubMenuList: React.FC<Props> = ({ children, open, ...rest }) => {
  const subMenuListRef = React.useRef<HTMLDivElement>(null);
  const duration = 300;

  const slideDown = () => {
    clearTimeout(timer);
    const target = subMenuListRef.current;
    if (target) {
      target.style.display = 'block';
      target.style.height = 'auto';
      const height = target.offsetHeight;
      target.style.height = '0px';
      target.offsetHeight;
      target.style.height = `${height}px`;

      timer = setTimeout(() => {
        target.style.height = 'auto';
      }, duration);
    }
  };

  const slideUp = () => {
    clearTimeout(timer);
    const target = subMenuListRef.current;
    if (target) {
      target.style.height = `${target.offsetHeight}px`;
      target.offsetHeight;
      target.style.height = '0px';

      timer = setTimeout(() => {
        target.style.display = 'none';
      }, duration);
    }
  };

  React.useEffect(() => {
    if (open) slideDown();
    else slideUp();
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <StyledSubMenuList ref={subMenuListRef} className="sub-menu-list" open={open} {...rest}>
      <StyledUl>{children}</StyledUl>
    </StyledSubMenuList>
  );
};

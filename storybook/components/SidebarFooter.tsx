import styled from '@emotion/styled';
import React from 'react';
import { Github } from '../icons/Github';
import { Typography } from './Typography';
import packageJson from '../../package.json';

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
}

const StyledButton = styled.a`
  padding: 5px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  color: #484848;
  text-decoration: none;
`;

const StyledSidebarFooter = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`;

const StyledCollapsedSidebarFooter = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`;

const codeUrl =
  'https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx';

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ children, collapsed, ...rest }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
      }}
    >
      {collapsed ? (
        <StyledCollapsedSidebarFooter href={codeUrl} target="_blank">
          <Github size={28} />
        </StyledCollapsedSidebarFooter>
      ) : (
        <StyledSidebarFooter {...rest}>
          <div style={{ marginBottom: '12px' }}>
            <Github size={30} />
          </div>
          <Typography fontWeight={600}>Pro Sidebar</Typography>
          <Typography variant="caption" style={{ letterSpacing: 1, opacity: 0.7 }}>
            V {packageJson.version}
          </Typography>
          <div style={{ marginTop: '16px' }}>
            <StyledButton href={codeUrl} target="_blank">
              <Typography variant="caption" color="#607489" fontWeight={600}>
                View code
              </Typography>
            </StyledButton>
          </div>
        </StyledSidebarFooter>
      )}
    </div>
  );
};

import styled from '@emotion/styled';
import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  fontWeight?: number | string;
  color?: string;
  fontSize?: number | string;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption';
}

const StyledTypography = styled.p<TypographyProps>`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return `
        font-size: 72px; 
        line-height: 90px;
        `;
      case 'h2':
        return `
        font-size: 60px; 
        line-height: 72px;
        `;
      case 'h3':
        return `
        font-size: 48px; 
        line-height: 60px;
        `;
      case 'h4':
        return `
        font-size: 36px; 
        line-height: 44px;
        `;
      case 'h5':
        return `
        font-size: 30px; 
        line-height: 38px;
        `;
      case 'h6':
        return `
        font-size: 24px; 
        line-height: 32px;
        `;
      case 'subtitle1':
        return `
        font-size: 20px; 
        line-height: 30px;
        `;
      case 'subtitle2':
        return `
        font-size: 18px; 
        line-height: 28px;
        `;
      case 'body1':
        return `
        font-size: 16px; 
        line-height: 24px;
        `;

      case 'body2':
        return `
        font-size: 12px; 
        line-height: 18px;
        `;
      case 'caption':
        return `
        font-size: 10px; 
        line-height: 16px;
        `;

      default:
        return '';
    }
  }}

  ${({ fontWeight }) => (fontWeight ? `font-weight: ${fontWeight};` : '')}
  ${({ color }) => (color ? `color: ${color};` : '')}
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize};` : '')}
`;

export const Typography: React.FC<TypographyProps> = ({ variant = 'body1', children, ...rest }) => {
  return (
    <StyledTypography variant={variant} {...rest}>
      {children}
    </StyledTypography>
  );
};

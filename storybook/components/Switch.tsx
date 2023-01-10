import styled from '@emotion/styled';
import React from 'react';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxLabel = styled.label`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 13px;
  cursor: pointer;
`;

const CheckBox = styled.div<{ checked?: boolean }>`
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 20px;
  border-radius: 30px;

  background-color: ${({ checked }) => (checked ? '#0ed693' : '#dde0e7')};
`;

const CheckBoxCircle = styled.div<{ checked?: boolean }>`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #fff;
  transition: left 0.2s;

  ${({ checked }) => (checked ? `left: 15px;` : '')}
`;

export const Switch = ({ id, label, checked, ...rest }: SwitchProps) => {
  return (
    <CheckBoxWrapper>
      <CheckBox checked={checked}>
        <input
          id={id}
          type="checkbox"
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '32px',
            height: '20px',
            opacity: 0,
            zIndex: 2,
          }}
          checked={checked}
          {...rest}
        />
        <CheckBoxCircle checked={checked} />
      </CheckBox>
      {label && <CheckBoxLabel htmlFor={id}>{label}</CheckBoxLabel>}
    </CheckBoxWrapper>
  );
};

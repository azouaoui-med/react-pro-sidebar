import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ProSidebarProvider } from '../src/components/ProSidebarProvider';

type CustomRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => RenderResult;

interface AllTheProvidersProps {
  children?: React.ReactNode;
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
  return <ProSidebarProvider>{children}</ProSidebarProvider>;
};

const customRender: CustomRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender };

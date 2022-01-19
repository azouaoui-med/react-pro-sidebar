import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('layout test', () => {
  it('should pass', async () => {
    render(<Layout />);
    expect(screen.getByText('layout')).toBeInTheDocument();
  });
});

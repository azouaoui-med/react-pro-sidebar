import React from 'react';
import { customRender, screen } from '../../utils/testUtils';
import { Content } from '../Content';

describe('Content', () => {
  it('basic snapshot ', () => {
    const { container } = customRender(<Content>Content</Content>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should initialize Content correctly', async () => {
    customRender(<Content>Content</Content>);
    const contentElem = screen.getByText('Content');

    expect(contentElem).toBeInTheDocument();
    expect(contentElem).toHaveClass('content');
    expect(contentElem).toHaveStyle({
      flex: '1',
    });
  });
});

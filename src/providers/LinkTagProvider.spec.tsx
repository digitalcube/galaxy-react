import React from 'react';
import { render } from '@testing-library/react';
import { Link} from 'react-router-dom'
import LinkTagProvider, { LinkTagType } from './LinkTagProvider';

describe('LinkTagProvider', () => {
  it.each([
      ['a' as const],
      [Link]
  ])('should render successfully (type %p)', (type: LinkTagType) => {
    const { baseElement } = render(<LinkTagProvider linkType={type} />);
    expect(baseElement).toBeTruthy();
  });
});
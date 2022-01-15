import { render } from '@testing-library/react';
import React from 'react';
import { Accordion } from './Accordion';
import { Default as AccordionStory } from './Accordion.stories';

describe('Accordion', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(
      <AccordionStory {...(AccordionStory.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('if defaultOpen', () => {
    const { container } = render(
      <Accordion
        defaultOpen={true}
        id={'test'}
        title={'ここにタイトルが入ります。'}
      />
    );
    expect(container.firstChild).not.toEqual(null);
  });
});

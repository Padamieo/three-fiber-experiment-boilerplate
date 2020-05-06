import React from 'react';
import { render } from 'testUtils';

import Box from './spinningBox';

describe('spinningBox', () => {
  it('should render', () => {
    const { container } = render(<Box />);

    expect(container).toBeTruthy();
  });
});
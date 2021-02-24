import React from 'react';
import { render } from '@testing-library/react';

import Locales from '../../src/layout/Locales/index';

describe('test Locales component', () => {
  test('does language choice exist', () => {
    const { getByText } = render(<Locales />);

    expect(getByText('简体中文')).toBeTruthy();
    expect(getByText('English')).toBeTruthy();
  });
});

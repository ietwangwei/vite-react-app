import { format } from '../src/utils/format.js';

describe('test format module', () => {
  test('What value is passed and what value is returned', () => {
    expect(format('a')).toBe('a');
  });
});

/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Education from './education';

// Unit tests for the awards file
describe('Education', () => {
  it('renders without crashing', () => {
    render(<Education />);
  });
});

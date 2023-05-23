/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Experience from './experience';

// Unit tests for the awards file
describe('Experience', () => {
  it('renders without crashing', () => {
    render(<Experience />);
  });
});

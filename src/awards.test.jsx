/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Awards from './awards';

// Unit tests for the awards file
describe('Awards', () => {
  it('renders without crashing', () => {
    render(<Awards />);
  });
});

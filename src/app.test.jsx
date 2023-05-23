/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import App from './app';

// Unit tests for the app file
describe('Index', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});

/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';

// mock library colorModeToggle
jest.mock('./colorModeToggle', () => ({
  getStoredTheme: () => 'light',
  getMediaTheme: () => 'light',
  setTheme: () => {},
  setStoredTheme: () => {},
}));

test('ThemeToggle', () => {
  render(<ThemeToggle />);
});

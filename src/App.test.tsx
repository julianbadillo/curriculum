/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import './matchMedia.js';
import React from 'react'
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Unit tests for the app file
describe('Index', () => {
  it('renders without crashing', () => {
    render(<React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    );
  });
});

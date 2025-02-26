// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the App component with RomanConverter', () => {
    render(<App />);
  });
});

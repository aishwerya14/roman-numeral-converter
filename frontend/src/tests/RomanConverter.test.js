import '@testing-library/jest-dom'; 
import React from 'react';
import { render, screen } from '@testing-library/react';
import RomanConverter from '../components/RomanConverter';

describe('RomanConverter component', () => {
  test('renders heading and elements', () => {
    render(<RomanConverter />);
    expect(screen.getByRole('heading', { name: /roman numeral converter/i }))
      .toBeInTheDocument();
  });
});

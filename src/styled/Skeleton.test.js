import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Skeleton from './Skeleton';

// Utility function to convert CSS variables to actual color
const convertToColor = (variable) => getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

describe('Skeleton Component', () => {
  test('renders with default props', () => {
    const { container } = render(<Skeleton />);
    expect(container).toHaveStyleRule('background-color', convertToColor('var(--grey-500)'));
  });

  test('renders with circle variant', () => {
    const { container } = render(<Skeleton variant="circle" />);
    expect(container).toHaveStyleRule('border-radius', '50%');
  });

  test('renders with rect variant', () => {
    const { container } = render(<Skeleton variant="rect" />);
    expect(container).toHaveStyleRule('border-radius', '0');
  });

  test('renders with custom background color', () => {
    const { container } = render(<Skeleton backgroundColor="blue" />);
    expect(container).toHaveStyleRule('background-color', 'blue');
  });

  test('renders with custom border radius', () => {
    const { container } = render(<Skeleton borderRadius="10px" />);
    expect(container).toHaveStyleRule('border-radius', '10px');
  });
});
